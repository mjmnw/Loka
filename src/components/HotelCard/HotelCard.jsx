import {HiStar, HiOutlineLocationMarker} from 'react-icons/hi'

export default function HotelCard() {
  return (
    <>
      {/* Hotel List */}
      <div className="col-span-2 w-full">
        <div className="grid grid-cols-4 bg-white rounded-md drop-shadow-xl mb-3">
          <div>
            <img
              src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10008469-28c79365b1478b078b3789388cc060c5.png?_src=imagekit&tr=h-176,q-40,w-300"
              className="rounded-tl-md rounded-bl-md"
              style={{ minHeight: "190px", objectFit: "cover" }}
            />
          </div>
          <div className="col-span-2 flex flex-col justify-between px-5 py-3">
            <div>
              <div>
                <h1 className="text-lg text-gray-900 font-semibold">
                  Trans Studio Hotel
                </h1>
              </div>
              <div className="py-2">
                <span className="bg-sky-500 text-white px-2 py-1 rounded-full">
                  Hotel
                </span>
              </div>
              <div>
                <span className="flex items-center text-yellow-300">
                  <HiStar className="mr-1" />
                  <HiStar className="mr-1" />
                  <HiStar className="mr-1" />
                  <HiStar className="mr-1" />
                  <HiStar className="mr-1" />
                </span>
              </div>
              <div>
                <span className="flex items-center text-gray-500">
                  <HiOutlineLocationMarker className="mr-1" /> Jakarta
                </span>
              </div>
            </div>
            <div>
              <span className="flex items-center text-gray-500">
                10 Rooms Available
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between px-3 py-3 border-l">
            <div className="flex justify-end">
              <h1 className="text-sm text-sky-500 font-semibold">8,5 (250)</h1>
            </div>
            <div>
              <div className="text-gray-400 line-through">Rp. 1.500.000</div>
              <div className="text-xl text-orange-500 font-semibold">
                Rp. 1.300.000
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
