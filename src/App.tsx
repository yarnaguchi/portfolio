import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { useState, VFC } from "react";
import { Page } from "./interface/interface";

export const App: VFC<{}> = () => {
  const [page, setPage] = useState<Page>("works");
  return (
    <div className="flex flex-col h-screen"> 
      <Header {...{ page, setPage }} />
      <Main {...{ page, setPage }} />
      <Footer />
    </div>
  );
};
