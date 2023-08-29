export default function Navbar() {
  return (
    <>
    <div className="h-[100px] border-t-[5px] border-sky-500">
    <div className="flex text-sm  h-[50px] px-20 justify-between">
      <div className="flex justify-item-center">
        <div className="flex justify-center">
          <div className="flex align-middle"></div>
          <div className="p-3">
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5391d86e5f4c5e92de04ef4461a09259.svg" />
          </div>
        </div>
        <div>
          <div className="justify-center p-1">
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex h-full">
          <div className="pt-4 pr-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-id="IcMobilePhoneDownload"
            >
              <path
                d="M6 15H18M9 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H15M10 18H14"
                stroke="#687176"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 2V11M12 11L10 9M12 11L14 9"
                stroke="#0194F3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div className="py-3 pr-1">Download App</div>
          <div className="flex py-4">
            <img
              className="h-[12px]"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/abdf7b00a3ad782bbad1f00c298a3c30.svg"
            />
          </div>
        </div>
        <div className="flex p-3">
          <div className="pt-1 pr-2">
            <img
              className="h-[16px]"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a5b77c2fab5e454e3271588503cd94d9.svg"
            />
          </div>
          <div className="pr-3">Partner with Us</div>
          <div className="pt-1 pr-2">
            <img
              className="h-[16px]"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/687f7095ed36a75c21cc52726d55b2c5.svg"
            />
          </div>
          <div className="pr-3">Saved</div>
          <div className="pt-1 pr-2">
            <img
              className="h-[16px]"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8c9954122d8006592fbcbd4a82ac994c.svg"
            />
          </div>
          <div>My Booking</div>
        </div>

        <div className="flex pt-3">
          <div className="pt-1 pr-2 ">
            <img
              className="h-[18px] align-middle border-2 rounded-full border-sky-500 m-0"
              src=" https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/2/225a4c290e89ee22a80b21c45e12dd1e.svg"
            />
          </div>
          <div className=" justify-center pr-1">IDR</div>
          <div className="flex py-1">
            <img
              className="h-[12px]"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/abdf7b00a3ad782bbad1f00c298a3c30.svg"
            />
          </div>
        </div>
        <div className="flex px-3">
          <div className="py-4 px-1">
            <img
              className="h-[16px] rounded-full bg-slate-500 "
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8cec58721410d02b594f877b8abe9503.svg"
            />
          </div>
          <div className="py-3">Login</div>
        </div>
        <div>
          <div className="bg-sky-500 h-[30px] rounded-lg flex justify-center items-center my-2">
            <a className="m-3 text-white">Register</a>
          </div>
        </div>
      </div>
    </div>

    <div className="flex h-[35px] bg-slate-100  items-center">
      <div className="flex px-20">
        <div className="flex px-3">
          <div className="pr-1">Transports</div>
          <div className="pt-2">
            <img
              className="h-[13px]"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0a089d3ed08b60033abce187ed38e0e5.svg"
            />
          </div>
        </div>
        <div className="flex px-3">
          <div className="pr-1">Accommodation</div>
          <div className="pt-2">
            <img
              className="h-[13px]"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0a089d3ed08b60033abce187ed38e0e5.svg"
            />
          </div>
          <div className="flex px-3">
            <div className="pr-1">Things to Do</div>
            <div className="pt-2">
              <img
                className="h-[13px]"
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0a089d3ed08b60033abce187ed38e0e5.svg"
              />
            </div>
          </div>
          <div className="flex px-3">
            <div className="pr-1">Travel Add-ons</div>
            <div className="pt-2">
              <img
                className="h-[13px]"
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0a089d3ed08b60033abce187ed38e0e5.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
