export default function SearchCard() {
  return (
    <>
    <div className="justify-center flex w-full ">
    <div className="flex bg-slate-700 h-[350px] w-[1024px] rounded-lg	">
      <div className="w-1/4 bg-slate-100 rounded-s-lg border-r-[5px]">
        <div className="px-7 pt-3 text">
          <div>Hotels</div>
        </div>
        <div className="px-7 pt-1 text">
          <div>Things to Do</div>
        </div>
        <div className="px-7 pt-1 text">
          <div>Flights</div>
        </div>
        <div className="px-7 pt-1 text">
          <div>Flights + Hotels</div>
        </div>
        <div className="px-7 pt-1 text">
          <div>Car Rental</div>
        </div>
        <div className="px-7 pt-1 text">
          <div>Airport Transfer</div>
        </div>
        <div className="px-7 pt-1 text">
          <div>Flignt Status</div>
        </div>
        <div className="px-7 pt-1 text">
          <div>Price alert</div>
        </div>
      </div>
      <div className="w-3/4 h-auto bg-slate-100">
        <div className="h-[50px] w-auto">
          <div className="h-[50px] text-sky-500 text-justify pt-3 pl-3 ">
            <strong>Recently Viewed Hotels</strong>
          </div>
        </div>
        <form className="p-3 bg-white m-2">
          <div>City, destination, or hotel names</div>
          <input className="w-full mt-1 mb-3 px-1 py-1 border-2 border-slate-300 rounded-md	"></input>
          <div className="flex justify-between">
            <div>
              <div>Check-in</div>
              <input className=" mt-1 mb-3 px-1 py-1 border-2 border-slate-300 rounded-md	"></input>
            </div>
            <div>
              <div>Duration</div>
              <input className=" mt-1 mb-3 px-1 py-1 border-2 border-slate-300 rounded-md	"></input>
            </div>
            <div>
              <div>Check-out</div>
              <input className=" mt-1 mb-3 px-1 py-1 border-2 border-slate-300 rounded-md	"></input>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div>Guest and Rooms</div>
              <input className="w-[460px] mt-1 mb-3 px-1 py-1 border-2 border-slate-300 rounded-md	"></input>
            </div>
            <div>
              <button className="w-[190px] h-[35px] mt-7 mb-3 px-1 py-1 0 rounded-md bg-orange-400 text-white">
                <strong>Search Hotels</strong>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    </>
  );
}