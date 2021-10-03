import profile from "../assets/profile.jpg";

export const Profile = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            山口隆太
            <p className="hidden lg:inline-block">　Node.js Python開発</p>
          </h1>
          <p className="mb-8 leading-relaxed">
            主にNode.jsを使用したWebアプリやPythonを使用したソフトウェアを開発しています。
          </p>
          <p className="mb-8 leading-relaxed">
            現在の業務では旧Webアプリ(PHP, jQuery, Bootstrap,
            Python)からのリプレースのため、
            <br />
            NestJS, Typescript, Postgres, React,
            TypeORMを使用してスクラッチから製品を開発中です。
          </p>
          <p className="mb-8 leading-relaxed">
            <p>
              ▼可能な業務/スキル
              <p>
                ・Node.js(React, javascript, Typescript, Express, NestJS,
                Electron)
              </p>
              <p>・Python(Django, cherryPy, tkinter, wxPython)</p>
            </p>
            ・Dart(Flutter) C#, Next.jsなど
          </p>
          <p className="mb-8 leading-relaxed">
            ▼資格 ・基本情報技術者 ・応用情報技術者 ・FP３級(結婚を機に取得)
          </p>

          <div className="flex justify-center"></div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="profile"
            src={profile}
          />
        </div>
      </div>
    </section>
  );
};
