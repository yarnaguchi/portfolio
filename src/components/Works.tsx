import { VFC } from "react";
import { WorkRecord } from "../interface/interface";

export const Works: VFC<{ workRecords: WorkRecord[] }> = ({ workRecords }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            作品集
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-indigo-500">
            説明
          </p>
        </div>
        <div className="flex flex-wrap">
          {workRecords.map((workRecord, i) => {
            return (
              <div
                key={i}
                className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
              >
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  {workRecord.title}
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  {workRecord.description}
                </p>
                <div>
                  {workRecord.tags?.map((tag, j) => {
                    return (
                      <span
                        key={`${i}-${j}`}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
                {workRecord.wip ? (
                  <p>Work in Progress</p>
                ) : (
                  <a
                    className="text-indigo-500 inline-flex items-center"
                    href={workRecord.url}
                  >
                    Show
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
