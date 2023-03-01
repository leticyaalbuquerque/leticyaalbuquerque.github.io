import { Link } from "react-router-dom";

export default function Button(props) {
    return (
        <button className="bg-cinza-escuro rounded py-3 px-5 lg:mt-6 font-montserrat font-semibold text-white text-center text-sm lg:text-base border-cinza-escuro border-2 hover:bg-white hover:text-cinza-escuro transition-all duration-300"><Link to={props.endereco} target="_blank">{props.nome}</Link></button>
    )
}