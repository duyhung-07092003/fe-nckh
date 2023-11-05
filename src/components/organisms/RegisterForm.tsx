"use client"
import { useState } from "react";
import { Button } from "../atoms/Button";

export default function RegisterForm() {
    const [email, setEmail] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const sendOTP = async () => {
        setLoading(true);
        const req = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/auth/send-mail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email})
        });
        setLoading(false);
        console.log(req)
    }
    return (
        <div className="w-5/6 h-5/6 ">
            <div className="flex flex-row h-1/6 w-full">
                <div className=" flex flex-col  w-5/6 h-full text-black">
                    <div className="w-full h-1/2 flex items-center ">
                        <span className=" font-bold"> Email </span>
                    </div>
                    <div className=" h-1/2 flex flex-row gap-3">
                        <input type={"email"} className=" w-full border mt-1" placeholder="ABCD@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                        <div className="w-3/12 flex justify-center items-center ">
                            <Button title=" Send OTP" className="w-full h-full rounded-[50px] border bg-[#EFEEBD] font-bold" loading={loading} onClick={sendOTP}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-2/6 h-1/6 text-black mt-1">
                <div className="w-full h-1/2 flex items-center">
                    <span className="font-bold"> Nhập mã OTP </span>
                </div>
                <input type={"password"} className=" w-full h-1/2 border mt-1" placeholder="******" />
            </div>
            <div className="h-1/6 w-full flex flex-col text-black">
                <div className=" font-bold h-1/2 w-full flex items-center">
                    <span> Họ Tên </span>
                </div>
                <div className=" w-full h-1/2">
                    <input type={"text"} className="border w-full h-full" />
                </div>
            </div>

            <div className="h-1/6 w-full flex flex-col text-black">
                <div className=" font-bold h-1/2 w-full flex items-center">
                    <span> Mật khẩu </span>
                </div>
                <div className=" w-full h-1/2">
                    <input type={"password"} className="border w-full h-full" placeholder="********" />
                </div>
            </div>

            <div className="h-1/6 w-full flex flex-col text-black">
                <div className=" font-bold h-1/2 w-full flex items-center">
                    <span> Nhập lại mật khẩu </span>
                </div>
                <div className=" w-full h-1/2">
                    <input type={"password"} className="border w-full h-full" placeholder="********" />
                </div>
            </div>

            <div className="h-1/6 w-full text-black flex justify-center items-center font-serif  ">
                <button className=" w-full h-1/2 rounded-[50px] bg-[#EFEEBD] font-bold"> Đăng Ký  </button>
            </div>
        </div>
    );
}