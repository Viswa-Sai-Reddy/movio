import Logo from "../assets/Logo.png"
import {Link, NavLink} from "react-router-dom"
export const Footer = () => {

const date = new Date();
  return (     
        <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="Movio Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Movio</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="/"  rel="noreference" className="mr-4 hover:underline md:mr-6 ">Instagram</Link>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/viswa-sai-reddy" target="_blank" rel="noopener noreferrer"  className="mr-4 hover:underline md:mr-6">LinkedIn</a>
                    </li>
                    <li>
                        <Link to="/" target="_blank" rel="noreference" className="mr-4 hover:underline md:mr-6">Youtube</Link>
                    </li>
                    <li>
                        <Link to="/" target="_blank" rel="noreference"  className="hover:underline">Github</Link>
                    </li>
                </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {date.getFullYear()} <NavLink to="/" className="hover:underline">Movio™</NavLink>. All Rights Reserved.</span>
            </div>
        </footer>
  )
}
