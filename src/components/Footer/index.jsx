import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div
        className={`Footer border-t-2 md:p-[60px] pt-4 pb-10 border-b-2 flex gap-20 bg-zinc-900`}
      >
        <div>
          <div className="flex flex-row pl-1px">
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/ad89f39fe62c8b500e6f9a25fa4427d8.svg" />
          </div>
          <div className="flex flex-col text-xl font-semibold pt-20 text-white">
            Partnership
            <div className="flex flex-row gap-5 pt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
                className="w-[51px] h-[19px] mt-2"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png"
                className="w-[51px] h-[19px] mt-2"
              />
              <img
                src="https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Bank-BRI.png"
                className="w-[51px] h-[25px] mt-1"
              />
              <img
                src="https://logos-download.com/wp-content/uploads/2016/06/Mandiri_logo.png"
                className="w-[70px] h-[27px]"
              />
            </div>
            <div className="flex flex-row gap-5 pt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                className="w-[51px] h-[19px] mt-2"
              />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png" className="w-[51px] h-[20px] mt-2" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/2560px-JCB_logo.svg.png" className="w-[51px] h-[20px] mt-2" />
              <img src="https://upload.wikimedia.org/wikipedia/id/e/e8/ATM_Bersama_2016.png" className="w-[51px] h-[19px] mt-2" />
            </div>
            <div className="flex flex-row gap-5 pt-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/ALFAMART_LOGO_BARU.png/1200px-ALFAMART_LOGO_BARU.png" className="w-[51px] h-[19px] mt-2" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Logo_Indomaret.png" className="w-[51px] h-[19px] mt-2" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lawson_logo.svg/1280px-Lawson_logo.svg.png" className="w-[51px] h-[19px] mt-2" />
              <img src="https://alfamidiku.com/assets/images/logo.png" className="w-[60px] h-[20px] mt-2" />
            </div>
            <div className="flex flex-row gap-5 pt-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png" className="w-[51px] h-[19px] mt-2" />
            <img src="https://gopay.co.id/_nuxt/img/site-logo-white.216fd9ev143.png" className="w-[51px] h-[19px] mt-2" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/2560px-Logo_dana_blue.svg.png" className="w-[51px] h-[19px] mt-2" />
            <img src="https://1.bp.blogspot.com/-n_jPjNl97nw/YIJ78WnloPI/AAAAAAAACks/xPjLQ2YpcXwyPf64C708UExQOrJitxHSgCNcBGAsYHQ/w1200-h630-p-k-no-nu/ShopeePay.png" className="w-[51px] h-[22px] mt-2" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col w-[300px] h-[175px] gap-1 pl-3">
            <span className="text-xl font-semibold text-white">
              About LokaLoka
            </span>
            <span className="text-sm text-neutral-400 font-semibold hover:text-white hover:underline">
              How to Order
            </span>
            <span className="text-sm text-neutral-400 font-semibold hover:text-white hover:underline">
              Contact Us
            </span>
            <span className="text-sm text-neutral-400 font-semibold hover:text-white hover:underline">
              Help Center
            </span>
            <span className="text-sm text-neutral-400 font-semibold hover:text-white hover:underline">
              Carrers
            </span>
            <span className="text-sm text-neutral-400 font-semibold hover:text-white hover:underline">
              Instalment
            </span>
            <span className="text-sm text-neutral-400 font-semibold hover:text-white hover:underline">
              About Us
            </span>
          </div>
          <div className="flex w-[300px] pb-3 flex-col gap-4 pl-3">
            <span className="text-xl font-semibold text-white">
              Follow Us On
            </span>
            <div className="flex gap-5">
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a0658527086382220f22bc9af2bcd921.svg"
                className="h-[25px] rounded-full"
              />
              <span className="text-sm text-neutral-400 font-semibold pt-0.5 hover:text-white hover:underline">
                Twitter
              </span>
            </div>
            <div className="flex gap-5">
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6904cd2e74ef73120833cff12185a320.svg"
                className="h-[25px] rounded-full"
              />
              <span className="text-sm text-neutral-400 font-semibold pt-0.5 hover:text-white hover:underline">
                Facebook
              </span>
            </div>
            <div className="flex gap-5">
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/62a2fc240d7e00b05d0d6f6b4e785110.svg"
                className="h-[25px] rounded-full"
              />
              <span className="text-sm text-neutral-400 font-semibold pt-0.5 hover:text-white hover:underline">
                Instagram
              </span>
            </div>
            <div className="flex gap-5">
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b593add66303beb2a0cae9e96963e68b.svg"
                className="h-[25px] rounded-full"
              />
              <span className="text-sm text-neutral-400 font-semibold pt-0.5 hover:text-white hover:underline">
                Youtube
              </span>
            </div>
            <div className="flex gap-5">
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/471f17c1510d49a98bec08a48b84c607.svg"
                className="h-[25px] rounded-full"
              />
              <span className="text-sm text-neutral-400 font-semibold pt-0.5 hover:text-white hover:underline">
                TikTok
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[300px] pb-3 flex-col pl-3 gap-5">
          <div className="w-[300px] h-[200px]">
            <span className="text-xl font-semibold text-white">
              Our Products
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Hotels
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Flights
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Busses
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Trains
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Xperiences
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Apartments
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Taxi
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Car Rent
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              PayLater
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Internet
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Villa
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Insurance
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-col  w-[300px] h-[100px]">
            <span className="text-xl font-semibold text-white">Else</span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Lokaloka for Corporates
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Lokaloka Affiliates
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Privacy Policy
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Terms & Conditions
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Register your Business
            </span>
            <span className="flex text-sm text-neutral-400 font-semibold hover:text-white hover:underline pt-1">
              Lokaloka Ads
            </span>
          </div>

          <div className="flex flex-col w-[300px] h-[100px] mt-28">
            <span className="text-xl font-semibold text-white">
              Download Lokaloka App
            </span>
            <img
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f519939e72eccefffb6998f1397901b7.svg"
              className="w-[150px] h-[150px] pt-3 hover:opacity-75"
            />
            <img
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/18339f1ae28fb0c49075916d11b98829.svg"
              className="w-[150px] h-[150px] pt-3 hover:opacity-75"
            />
          </div>
        </div>
      </div>
      <div>Partnership</div>
    </>
  );
}
