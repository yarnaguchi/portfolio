import { VFC } from "react";
import icon from "../assets/icon.jpg";
import { PageProps } from "../interface/interface";

export const Header: VFC<PageProps> = ({ setPage }) => {
  return (
    <header className="bg-blue-500 text-white body-font sticky top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center mb-4 md:mb-0">
          <a href="https://github.com/YamaguchiRyuta">
            <img
              className="w-10 h-10 rounded-full"
              src={icon}
              alt="icon"
            />
          </a>
          <span className="ml-3 text-xl">山口隆太 Portfolio</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div
            className="mr-5 hover:text-gray-500 cursor-pointer"
            onClick={() => {
              setPage("works");
            }}
          >
            Works
          </div>
          <div
            className="mr-5 hover:text-gray-500 cursor-pointer"
            onClick={() => {
              setPage("profile");
            }}
          >
            Profile
          </div>
        </nav>
      </div>
    </header>
  );
};
