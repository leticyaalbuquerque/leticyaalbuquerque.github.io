import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { RiWhatsappFill } from "react-icons/ri"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="fixed flex flex-col md:flex-row justify-center items-center gap-2 md:justify-between bottom-0 bg-white px-20 w-full py-4">
            <span className="font-montserrat font-normal text-sm text-cinza-escuro">Copyright © 2023</span>
            <div className="flex gap-4">
                <Link to="https://www.linkedin.com/in/leticiaroddrigues/" target="_blank"><FaLinkedinIn className="fill-cinza-medio w-4" aria-label="Linkedin" /></Link>
                <Link to="https://github.com/leticyaalbuquerque" target="_blank"><FaGithub className="fill-cinza-medio w-4" aria-label="Github" /></Link>
                <Link to="https://wa.link/5t0ne7" target="_blank"><RiWhatsappFill className="fill-cinza-medio w-4" aria-label="Whatsapp" /></Link>
            </div>
        </div>
    )
}