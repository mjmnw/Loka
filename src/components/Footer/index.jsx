import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className={`Footer border-t-2 md:p-[60px] pt-4 pb-10 border-b-2 flex gap-20`}>
        <div className="flex flex-row pl-2px border w-[400px] h-[100px]">
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg" />
        </div>
        <div className="flex flex-col gap-10">
        <div className="flex flex-col border w-[300px] h-[100px]">About Us</div>
        <div className="flex border w-[300px] h-[100px] flex-col">Social Media</div>
        </div>
        <div className="flex flex-col gap-10">

        <div className="flex border w-[300px] h-[100px]">Our Product</div>
        <div className="flex border w-[300px] h-[100px]">Else</div>
        </div>
        <div className="border">

        <div className="flex border w-[300px] h-[100px] items-center justify-center mt-20">Download Our App</div>
        </div>
      </div>
      <div>
        Partnership
      </div>
    </>
  );
}
