import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="fixed w-screen md:px-8 lg:px-20 py-6 md:py-8 flex bg-white z-50">
            <ul className="container mx-auto flex justify-center md:justify-end items-end gap-6 md:gap-10 font-montserrat font-normal text-base text-cinza">
                <li className="hover:text-cinza-escuro transition-all duration-300"><NavLink activeClassname to="/">Home</NavLink></li>
                <li className="hover:text-cinza-escuro transition-all duration-300"><NavLink activeClassname to="/sobre">Sobre</NavLink></li>
                <li className="hover:text-cinza-escuro transition-all duration-300"><NavLink activeClassname to="/portfolio">Portfólio</NavLink></li>
            </ul>
        </nav>
    )
}