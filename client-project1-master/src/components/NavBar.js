import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons"
import "../components/views/index.css";

export default function NavBar() {
    return (
        <header className="bg-gradient-to-r md:from-red-600 via pink-400 to-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/" exact
                        activeClassName="bg-gradient-to-r from-yellow-400 to-blue-500 focus:from-purple-900 focus:to-blue-300"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-white text-5xl font-bold cursive tracking-widest">
                        Canadian Crescendo
                    </NavLink>
                    <NavLink
                        to="/service"
                        className="inflex-flex items-center py-3 px-3 my-6 text-white hover:text-white text-2xl"
                        activeClassName="bg-gradient-to-r from-yellow-400 to-blue-500 focus:from-purple-900 focus:to-blue-300"
                    >
                        Service
                    </NavLink>
                    <NavLink
                        to="/portfolio"
                        className="inflex-flex items-center py-3 px-3 my-6 text-white hover:text-white text-2xl"
                        activeClassName="bg-gradient-to-r from-yellow-400 to-blue-500 focus:from-purple-900 focus:to-blue-300"
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to="/About"
                        className="inflex-flex items-center py-3 px-3 my-6 text-white hover:text-white text-2xl"
                        activeClassName="bg-gradient-to-r from-yellow-400 to-blue-500 focus:from-purple-900 focus:to-blue-300"
                    >
                        About me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://www.facebook.com/catherine.sutherland.25"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://www.youtube.com/user/HumiliationProject"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/catherine-sutherland-27967b165/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }} />

                </div>
            </div>
        </header>



    )
}