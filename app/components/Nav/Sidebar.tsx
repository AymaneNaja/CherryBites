import React from "react";
import { IoIosMenu } from "react-icons/io";


export function Sidebar({
    pathname, abril
}: any) {

    return <div className="drawer z-[100] grid sm:grid md:hidden lg:hidden xl:hidden w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            {
                /* Page content here */
            }
            <label htmlFor="my-drawer" className="btn  drawer-button "><IoIosMenu size={20} />
            </label>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 ">
                <li className=' btn-disabled  '><div className={`flex p-2 font-semibold  text-center ${abril.className}`}>
                    <h1 className=' first-letter:text-red-600 text-black text-2xl first-letter:font-bold'>Cherry</h1>
                    <h1 className=' first-letter:text-red-600 text-black text-2xl first-letter:font-bold'>Bites</h1>

                </div></li>
                <li className={`hover:bg-red-500 hover:text-white  rounded-lg ${pathname == '/' ? "text-red-600  " : "text-black hover:text-slate-900"}`}><a href={'/'}>Home</a></li>
                <li className={`hover:bg-red-500 hover:text-white  rounded-lg ${pathname == '/Recipes' ? "text-red-600" : "text-black hover:text-slate-700"}`}><a href={'/Recipes'}>Recipes</a></li>
                <li className={`hover:bg-red-500 hover:text-white  rounded-lg ${pathname == '/About' ? "text-red-600" : "text-black hover:text-slate-700"}`}><a href='/About'>About Us</a></li>
                <li className={`hover:bg-red-500 hover:text-white  rounded-lg ${pathname == '/Contacts' ? "text-red-500" : "text-black hover:text-slate-700"}`}><a href={'/Contacts'}>Contacts</a></li>
            </ul>
        </div>
    </div>;
}
