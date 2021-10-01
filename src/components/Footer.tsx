import { VFC } from "react";

export const Footer: VFC<{}> = () => {
  return (
    <footer className="bg-blue-500 text-white body-font">
      <div className="container px-5 py-2 text-center">
        <p className="text-sm">©{new Date().getFullYear()} YamaguchiRyuta</p>
      </div>
    </footer>
  );
};
