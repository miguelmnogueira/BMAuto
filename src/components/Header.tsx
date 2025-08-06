import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="w-full h-20 bg-background flex justify-between items-center px-[10%] border-b-1 border-border/40">
            <div>
                <h3 className="text-2xl font-semibold font-primary select-none">
                    BM Automações
                </h3>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
