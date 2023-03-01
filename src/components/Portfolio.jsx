import CardPortfolio from "./CardPortfolio";
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import Projeto1 from "../assets/images/projeto-4.webp"
import Projeto2 from "../assets/images/projeto-6.webp"
import Projeto3 from "../assets/images/projeto-2.webp"
import Projeto4 from "../assets/images/projeto-1.webp"
import Projeto5 from "../assets/images/projeto-5.webp"
import Projeto6 from "../assets/images/projeto-7.webp"

export default function Portfolio() {
    return (
        <div className="flex h-full px-8 lg:px-20 pb-16">
            <div className="flex flex-col gap-6 lg:gap-10 h-full w-full pt-24 pb-16">
                <div className="flex items-center gap-6">
                    <h1 className="font-montserrat font-bold text-base text-start text-cinza-escuro uppercase tracking-widest lg:mr-12">Portfólio</h1>
                    <hr className="bg-cinza h-[2px] w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CardPortfolio
                        img={Projeto1}
                        descricao="Mockup Projeto Portfólio Danilo Ângelo"
                        name="Portfólio - Danilo Ângelo"
                        linkView="http://devniloblack.softwarecriativo.com.br/"
                        iconEye={<AiFillEye className="fill-white w-7 h-7" />}
                        hidden="hidden"/>

                    <CardPortfolio
                        img={Projeto2}
                        descricao="Mockup do Projeto da Página de Produto"
                        name="Página do Produto"
                        linkView="https://leticyaalbuquerque.github.io/pagina-produto-ecommerce/"
                        iconEye={<AiFillEye className="fill-white w-7 h-7" />}
                        linkGithub="https://github.com/leticyaalbuquerque/pagina-produto-ecommerce"
                        iconGithub={<AiFillGithub className="fill-white w-7 h-7" />} />

                    <CardPortfolio
                        img={Projeto3}
                        descricao="Mockup do Projeto da Calculadora"
                        name="Jogo da Memória"
                        linkView="https://leticyaalbuquerque.github.io/projeto-jogo-da-memoria/"
                        iconEye={<AiFillEye className="fill-white w-7 h-7" />}
                        linkGithub="https://github.com/leticyaalbuquerque/projeto-jogo-da-memoria"
                        iconGithub={<AiFillGithub className="fill-white w-7 h-7" />} />

                    <CardPortfolio
                        img={Projeto4}
                        descricao="Mockup Projeto Calculadora"
                        name="Calculadora"
                        linkView="https://leticyaalbuquerque.github.io/projeto-calculadora/"
                        iconEye={<AiFillEye className="fill-white w-7 h-7" />}
                        linkGithub="https://github.com/leticyaalbuquerque/projeto-calculadora"
                        iconGithub={<AiFillGithub className="fill-white w-7 h-7" />} />

                    <CardPortfolio
                        img={Projeto5}
                        descricao="Mockup do Projeto Slider"
                        name="Slider"
                        linkView="https://leticyaalbuquerque.github.io/projeto-slider/"
                        iconEye={<AiFillEye className="fill-white w-7 h-7" />}
                        linkGithub="https://github.com/leticyaalbuquerque/projeto-slider"
                        iconGithub={<AiFillGithub className="fill-white w-7 h-7" />} />

                    <CardPortfolio
                        img={Projeto6}
                        descricao="Mockup do Projeto Cartão Interativo"
                        name="Cartão Interativo"
                        linkView="https://leticyaalbuquerque.github.io/interactive-card-details-form/"
                        iconEye={<AiFillEye className="fill-white w-7 h-7" />}
                        linkGithub="https://github.com/leticyaalbuquerque/interactive-card-details-form"
                        iconGithub={<AiFillGithub className="fill-white w-7 h-7" />} />
                </div>
            </div>
        </div>
    )
}