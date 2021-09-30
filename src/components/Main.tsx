import { Works } from "./Works";
import { Profile } from "./Profile";
import { PageProps } from "../interface/interface";
import { VFC } from "react";
import { workRecords } from "../assets/workRecords";

export const Main: VFC<PageProps> = ({ page }) => {
  return (
    <main className="flex-grow p-4">
      {page === "works" && <Works {...{ workRecords }} />}
      {page === "profile" && <Profile />}
    </main>
  );
};
