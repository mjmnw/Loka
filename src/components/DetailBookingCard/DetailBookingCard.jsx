export default function DetailBookingCard() {
    return (
        <div className=" w-[300px] h-auto bg-slate-300 rounded-xl drop-shadow-lg bg-white">
            <div className=" p-3 h-max flex gap-2 ">
                <img
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6aa2fd01a9460e1a71bb0efb713f0212.svg"
                    className="m-2"
                />
                <span>hotel name form database in here okai</span>
            </div>
            <div className="border-y-2 py-2 bg-slate-100">
                <div className=" px-3 h-full flex gap-2 text-xs text-slate-500">
                    <div className="pr-2 w-[180px]">
                        <span>Check-in</span>
                    </div>
                    <span>
                        tanggal check-in seperti Wed, 6 sep 2023, dari 14:00
                    </span>
                </div>
                <div className=" px-3 h-full flex gap-2 text-xs text-slate-500">
                    <div className="pr-2 w-[180px]">
                        <span>Check-out</span>
                    </div>
                    <span>
                        tanggal check-in seperti Wed, 6 sep 2023, dari 14:00
                    </span>
                </div>
            </div>
            <div className=" p-3 h-max gap-2 ">
                <span>(1x) Deluxe King - Best Flexible Rate (contoh)</span>
                <div>
                    <div className="py-1 h-full flex gap-2 text-xs text-slate-500">
                        <div className="pr-2 w-[180px]">
                            <span>Tamu perkamar</span>
                        </div>
                        <div className="w-auto">
                            <span>2 Tamu (contoh)</span>
                        </div>
                    </div>
                    <div className="py-1 h-full flex gap-2 text-xs text-slate-500">
                        <div className="pr-2 w-[180px]">
                            <span>Tipe Tempat Tidur</span>
                        </div>
                        <div className="w-auto">
                            <span>1 king bed </span>
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className=" h-full flex``">
                            <div className="bg-red-100 h-[80px] w-[80px] rounded-lg">
                                <img src="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
