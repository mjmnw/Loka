import HotelCard from "../../components/HotelCard/HotelCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/index"

export default function Hotel() {
  return (
    <>
    <Navbar />
      {/* Banner Section */}
      <div className="bg-sky-500" style={{ height: "250px" }}></div>

      {/* Hotel Card */}
      <div className="px-60">
        <div className="grid grid-cols-2 py-5">
          <div>
            <div>
              <div>
                <h1 className="text-2xl text-gray-900 font-semibold">
                  Your search results in BSD
                </h1>
              </div>
              <div className="flex">
                <div>
                  <span className="text-md text-gray-500 font-semibold flex items-center">
                    01 Januari 2023 - 05 Januari 2023
                  </span>
                  <span className="text-md text-gray-500 font-semibold flex items-center">
                    1 Rooms
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-end items-center">
              <button className="bg-sky-500 text-slate-50 font-semibold rounded-md px-4 py-1.5">
                Change
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar*/}
        <div>
          <div className="flex flex-col ml-60 justify-center w-80 gap-3">
            {/* Sidebar Sort*/}
            <div className="flex flex-col">
              <div className="bg-white rounded-md drop-shadow-xl px-10 py-5 mb-3">
                <h1 className="text-md text-gray-900 font-semibold">
                  Sort Results
                </h1>
                <h1 className="pb-3 text-sm text-gray-500 font-semibold border-b">
                  Sort your search results by:
                </h1>
                <div className="mt-3">
                  <input
                    id="radio"
                    type="radio"
                    className="w-4 h-4 bg-white border-gray-300 text-sky-500 focus:ring-sky-500 dark:focus:ring-sky-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-gray-600"
                  ></input>
                  <label
                    for="radio"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Highest Price
                  </label>
                </div>
              </div>
            </div>
            {/* Sidebar Price Range*/}

            <div className="bg-white rounded-md drop-shadow-xl px-10 py-5 mb-3">
              <h1 className="text-md text-gray-900 font-semibold">
                Price Range
              </h1>
              <h1 className="pb-3 text-sm text-gray-500 font-semibold border-b">
                Price range per room, per night
              </h1>
              <div className="mt-3">
                <input
                  id="radio"
                  type="radio"
                  className="w-4 h-4 bg-white border-gray-300 text-sky-500 focus:ring-sky-500 dark:focus:ring-sky-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-gray-600"
                />
                <label
                  for="radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Highest Price
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full ml-10 mr-56 flex-col">
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </div>
      </div>
      <Footer />
    </>
  );
}
