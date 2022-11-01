import "./home.css";
import Cv from "./noam-mery-cv.docx";
const Home = () => {
  return (
    <div className="relative text-gray-800 bg-gray-50 overflow-hidden">
      <header className="mb-20">
        <nav className="w-full">
          <div className="flex justify-around w-full px-16 py-8">
            <a
              href="https://github.com/noammery"
              aria-label="Github"
              className="hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-github w-9 h-9"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/noam-mery/"
              aria-label="linkedin"
              className="hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-linkedin w-9 h-9 rounded-full"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </div>
        </nav>
      </header>
      <section className="flex flex-col items-center justify-center h-screen  -my-40 md:-mt-48 px-8">
        <div className="flex flex-col items-center justify-center text-center h-screen-half">
          <img
            className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
            src={require("../myImg.jpeg")}
            alt="Your Name Here"
          />
          <h1 className="text-5xl sm:text-6xl lg:text-9xl">נעם מרי</h1>
          <h2 className="font-light text-4xl sm:text-5xl lg:text-8xl">
            Full-stack מפתח
          </h2>
        </div>
        <a
          href={Cv}
          className="button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400 mt-16
  "
          download={Cv}
        >
          <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
            Download CV
          </span>
        </a>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr className="bg-black/20 mb-20 mt-16"></hr>
      <br></br>
      <section className="flex justify-around items-center px-8 mb-20 tracking-wider ">
        <div className="flex flex-col w-full md:w-3/6 space-y-12 text-center md:text-left">
          <div className="flex flex-col items-center px-10 md:px-20">
            <h3 className="text-xl font-bold  text-center">טכנולוגיות</h3>
            <br></br>
            <div className=" flex flex-col">
              <span className="text-lg ">MERN Stack</span>
              <span className="text-lg  ">Axios, Socket.io</span>
              <span className="text-lg  ">C#, SQL</span>
              <span className="text-lg  ">VS, VS Code</span>
            </div>
          </div>
          <div className="px-10 md:px-20 text-center">
            <h3 className="text-xl font-bold  text-center">סיכום</h3>
            <br></br>
            <p className="para">
              אני נעם מרי, לוחם משוחרר, בוגר קורס Full – Stack. אני מביא איתי
              חריצות, סקרנות, וכושר למידה גבוה. בנוסף, אני בעל יכולת עבודה
              בצוות, עבודה תחת לחץ ונשיאת אחריות מעולה ומוטיבציה גבוהה מאוד
              ללמוד ולהתפתח.
            </p>
          </div>
          <div className="px-10 md:px-20 text-center">
            <br></br>
            <h3 className="text-xl font-bold">יצירת - קשר</h3>
            <a
              className="text-xl hover:text-blue-600"
              href="mailto:noammery55@nomail.com"
            >
              noammery55@email.com
            </a>
            <p>050-264-8712</p>
          </div>
        </div>
        <img
          className="hidden md:block object-cover w-96 h-96 rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
          src={require("../myImg.jpeg")}
          alt="Your Name Here"
        />
      </section>
      <footer className="absolute w-full h-36  bottom-0 p-8 px-16 bg-gray-800 text-gray-50 text-center">
        <p className="text-2xl">Thank you for checking out my portfolio</p>
        <a className="text-lg" href="mailto:noammery55@gmail.com">
          noammery55@gmail.com
        </a>
      </footer>
      <div className="h-36"></div>
    </div>
  );
};
export default Home;
