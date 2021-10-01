import { Dispatch, SetStateAction } from "react";

export type Page = "works" | "profile";

export type PageProps = {
  page: Page;
  setPage: Dispatch<SetStateAction<Page>>;
};

export type WorkRecord = {
  title: string;
  description: string;
  url: string;
  tags?: string[];
  wip?: boolean;
};
