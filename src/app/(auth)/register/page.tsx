import RegisterForm from "@/components/organisms/RegisterForm";
import Image from "next/image"
export default function Dangky() {
    return (
        <div className="h-screen w-screen bg-[#FFFACB;] text-black ">
            <div className=" h-1/6 sm:w-full flex justify-start  items-center ms-[13px] gap-[20px]">
                <div className="h-full w-1/6  ">
                    <Image src={"/image.svg"} className="w-full h-full" alt="logo" width={200} height={200} />
                </div>
                <div className=" h-full w-4/6 text-center flex items-center justify-center text-3xl text-[#001AFF] font-[500]  ">
                    <p>
                        BỘ CÔNG THƯƠNG <br />
                        TRƯỜNG ĐẠI HỌC KINH TẾ - KỸ THUẬT CÔNG NGHIỆP <br />
                        KHOA CÔNG NGHỆ THÔNG TIN <br />
                    </p>

                </div>
            </div>

            <div className=" h-5/6 w-full flex justify-center items-center gap-[65px]">
                <div className=" h-5/6 w-5/6 bg-white text-black flex justify-center items-center">
                    <RegisterForm />
                </div >
            </div>
        </div>
    )

}