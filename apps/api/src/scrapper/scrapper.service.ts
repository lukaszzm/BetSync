import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { BetStatus } from "@prisma/client";
import puppeteer, { Page } from "puppeteer";

@Injectable()
export class ScrapperService {
  constructor(private configService: ConfigService) {}

  private async acceptCookies(page: Page): Promise<void> {
    const cookiesButton = await page.$("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll");
    await cookiesButton?.click();
  }

  private async isBetLost(page: Page): Promise<boolean> {
    const lost = await page.$(".lost-label");
    return !!lost;
  }

  private async isBetWon(page: Page): Promise<boolean> {
    const win = await page.$(".win-info");

    if (!win) {
      return false;
    }

    const winText = await (await win.getProperty("textContent")).jsonValue();
    return winText.startsWith("Wygrana");
  }

  private async getBetStatus(page: Page): Promise<BetStatus> {
    if (await this.isBetLost(page)) {
      return BetStatus.lose;
    }

    if (await this.isBetWon(page)) {
      return BetStatus.win;
    }

    return BetStatus.pending;
  }

  private async getAdditionalBetInfo(page: Page): Promise<{
    stake: number;
    win: number;
  }> {
    const info = await page.$(".coupon-card-footer");

    if (!info) {
      throw new Error("Could not find additional bet info");
    }

    const text = await (await info.getProperty("textContent")).jsonValue();
    const winRegex = /Wygrana([\d,\.]+)\szł/;
    const possibleWinRegex = /Do wygrania([\d,\.]+)\szł/;

    const winMatch = winRegex.exec(text);
    const possibleWinMatch = possibleWinRegex.exec(text);

    if (!winMatch && !possibleWinMatch) {
      throw new Error("Could not find win or possible win");
    }

    const win = winMatch ? winMatch[1] : possibleWinMatch ? possibleWinMatch[1] : null;

    const stakeRegex = /Stawka:([\d,\.]+)\szł/;
    const stakeMatch = stakeRegex.exec(text);
    const stake = stakeMatch ? stakeMatch[1] : null;

    if (!win || !stake) {
      throw new Error("Could not find win or stake");
    }

    return {
      stake: Number(stake.replace(",", "")),
      win: Number(win.replace(",", "")),
    };
  }

  async scrapeBet(link: string): Promise<{ status: BetStatus; stake: number; win: number } | null> {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      executablePath: this.configService.get<string>("PUPEETEER_EXECUTABLE_PATH"),
    });

    try {
      const page = await browser.newPage();
      await page.goto(link);

      await this.acceptCookies(page);

      const status = await this.getBetStatus(page);
      const additionalInfo = await this.getAdditionalBetInfo(page);

      return {
        status,
        ...additionalInfo,
      };
    } catch (error) {
      return null;
    } finally {
      await browser.close();
    }
  }
}
