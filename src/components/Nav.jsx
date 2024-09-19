import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="bg-zinc-800">
                <div className="flex flex-row h-20 justify-stretch px-8 items-center text-large">
                    <div className="basis-10/12 flex text-blue-500">
                        <Link to='/' className=" text-2xl py-6 px-4 hover:bg-blue-600 hover:text-white ">Logo</Link>
                    </div>
                    <div className="basis-2/12 flex flex-row ">
                        <Link className="py-7 px-4 text-white hover:bg-blue-600 hover:text-zinc-200" to='/about'>About</Link>
                        <Link className="py-7 px-4 text-white hover:bg-blue-600 hover:text-zinc-200" to='/contact'>Contact</Link>
                    </div>
                </div>
            </nav>
            
            <Outlet />
        </>
    )
};

export default NavBar;