import { NewBetDialog } from "../NewBetDialog";
import { getAllBookmakers } from "@/actions/bookmaker/get-bookmakers";

export const NewBetContent = async () => {
  const bookmakers = await getAllBookmakers();

  return <NewBetDialog bookmakers={bookmakers} />;
};
