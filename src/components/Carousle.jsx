const Carousle = () => {
  return (
    <div className="flex flex-col w-screen justify-around lg:flex-row md:flex-row items-center">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5 hover:scale-105 duration-200">
        <img className="rounded-t-lg" src={require("./bids.png")} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Public Auction
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">
            Public Auction site, where you can Register/Login to a secured user,
            place bids, add products to sale and browse different products!
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://remarket-client.netlify.app/"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            To The Site
          </a>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5 hover:scale-105 duration-200">
        <img className="rounded-t-lg" src={require("./fly.png")} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Dimona Welfare Site
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">
            Site made for the Municipality of Dimona. allows easy connection and
            updates between the different employees and department of the
            Municipality of Dimona.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dimona-end-project.netlify.app/"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            To The Site
          </a>
        </div>
      </div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5 hover:scale-105 duration-200">
        <img className="rounded-t-lg" src={require("./messanger.png")} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            BTW, Messanger Site
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">
            A messanger site, Users, Private rooms, Full encrypting, Chat
            history for every room and a Bot that learns your questions and
            Answers itself!
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://btw-messanger.netlify.app/"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            To The Site
          </a>
        </div>
      </div>
    </div>
  );
};
export default Carousle;
