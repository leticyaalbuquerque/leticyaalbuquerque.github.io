import { Link } from "react-router-dom";

export default function CardPortfolio(props) {
    return (
        <div className="h-48 md:h-52 lg:h-48 xl:h-64 relative overflow-hidden rounded bg-cinza-escuro conteudo">
            <img src={props.img} alt={props.descricao} className="w-full h-full object-cover transition-all duration-300 relative align-top imagem" />
            <div className="z-40 absolute top-0 right-0 w-full h-full opacity-0 transition-all duration-500 mt-16 xl:mt-20 detalhes">
                <h2 class="font-montserrat font-semibold text-white text-base lg:text-xl text-center">{props.name}</h2>
                <div class="flex justify-center gap-10 pt-6">
                    <Link to={props.linkView} target="_blank"
                        aria-label="Github-Projeto">
                        {props.iconEye}
                    </Link>
                    <Link to={props.linkGithub} target="_blank"
                        aria-label="Github-Projeto"
                        className={props.hidden}>
                        {props.iconGithub}
                    </Link>
                </div>
            </div>
        </div>
    )
}