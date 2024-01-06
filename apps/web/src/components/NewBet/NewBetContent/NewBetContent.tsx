import { NewBetDialog } from "../NewBetDialog";
import { getBookmakers } from "@/actions/bookmaker/get-bookmakers";

export const NewBetContent = async () => {
  const bookmakers = await getBookmakers();

  return <NewBetDialog bookmakers={bookmakers} />;
};
