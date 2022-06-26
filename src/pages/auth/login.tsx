import Default from "@/components/layout/Default";
import React, {useState} from "react";
import Link from "next/link";
import Seo from "@/components/Seo";

const LoginPage = () => {
    const [isFailed, setIsFailed] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsFailed(true);
    }

    return <>
        <Seo templateTitle="Đăng nhập"/>
        <Default>
            <form className="bg-white mx-auto pt-4 pb-10 pl-10 pr-10 rounded-md" style={{width: '500px'}} onSubmit={handleSubmit}>
                <h2 className="text-center">Đăng nhập</h2>
                <p className="mt-3 m-0 p-0">Bạn chưa có tài khoản ? <Link href={'/auth/register'}><a className="text-green-500 font-bold">Đăng ký</a></Link></p>
                <div className="mt-2" style={{height: '20px'}}>
                    {isFailed && <p className="text-red-500">Đăng nhập thất bại</p>}
                </div>
                <div className="mt-2">
                    <label htmlFor="email" className="font-bold">Email</label>
                    <input
                        name="email"
                        placeholder="Nhập email"
                        className="form-control"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className="font-bold">Mật khẩu</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Nhập mật khẩu"
                        className="form-control"
                    />
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        className="btn-primary"
                        type="submit"
                    >
                        Đăng nhập
                    </button>
                </div>
            </form>
        </Default>
    </>
}

export default LoginPage;