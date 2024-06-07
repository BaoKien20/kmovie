import { ReactNode } from "react";
import ReactQueryProvider from "@/components/providers/react-query-provider";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import Lincese from "@/components/footer/lincese";
import AuthProvider from "@/providers/auth-provider";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ReactQueryProvider>
                <AuthProvider>
                    <Header />
                    <div className=" max-w-screen-laptop mx-auto w-full h-full">{children}</div>
                </AuthProvider>
            </ReactQueryProvider>
            <Toaster containerClassName="text-xs sm:text-sm " />
            <Lincese />
        </>
    );
};

export default LayoutProvider;