export default function Sobre() {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20 h-full md:h-screen px-8 lg:px-20 pb-16 md:pb-0">
            <div className="h-[400px] md:h-screen md:w-2/5 pt-20 md:pt-24 md:pb-14">
                <img src="profile-2.jpg" alt="Imagem Letícia" className="h-full w-full rounded overflow-hidden object-cover object-top" />
            </div>
            <div className="flex flex-col gap-6 lg:gap-10 h-full lg:h-screen w-full md:w-3/5 md:pt-24 pb-20 lg:pb-14">
                <div className="flex items-center justify-start gap-6">
                    <h1 className="w-56 font-montserrat font-bold text-sm lg:text-base text-start text-cinza-escuro uppercase tracking-widest">Sobre mim</h1>
                    <hr className="bg-cinza h-[2px] w-full" />
                </div>
                <div className="flex flex-col gap-4 md:h-screen md:overflow-scroll font-montserrat font-normal text-sm lg:text-base text-cinza-medio">
                    <p>Sou uma desenvolvedora Front End com conhecimentos sólidos em HTML5, CSS3 e Javascript. Além dessas habilidades, também possuo conhecimentos em React, TailwindCSS e Bootstrap. Como uma entusiasta da tecnologia e amante de design, minha paixão pela programação me levou a me especializar em desenvolvimento Front End, onde tenho a oportunidade de unir meu amor pela criatividade e habilidades técnicas para criar experiências web incríveis.</p>
                    <p>Estou constantemente me atualizando em relação às melhores práticas e tendências do mercado para oferecer soluções inovadoras para meus clientes. Adoro trabalhar em equipe e estou sempre em busca de novos desafios para me aprimorar como profissional e pessoa. </p>
                    <p>Se você precisa de uma desenvolvedora Front End altamente qualificada e apaixonada pelo que faz, não hesite em entrar em contato comigo. Estou animada para ajudar a transformar suas ideias em realidade!</p>
                </div>
            </div>
        </div>
    )
}