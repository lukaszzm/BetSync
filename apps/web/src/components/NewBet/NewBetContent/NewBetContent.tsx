import type { Bookmaker } from "@/interfaces/bookmaker";
import { NewBetForm } from "../NewBetForm";

const mockedBookmakers = [
  {
    id: "27402fd2-c69a-40e7-9fa4-7248cfcf58f3",
    name: "Bet365",
    domain: "bet365.com",
  },
  {
    id: "aa0f2561-9e17-4003-9bba-f9aa8fd32d38",
    name: "Fortuna",
    domain: "fortuna.com",
  },
] as const satisfies Bookmaker[];

interface NewBetContentProps {
  onAdd: () => void;
}

export const NewBetContent = ({ onAdd }: NewBetContentProps) => {
  return <NewBetForm bookmakers={mockedBookmakers} onAdd={onAdd} />;
};
