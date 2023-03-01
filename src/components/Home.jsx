import Button from "./Button";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20 h-screen px-8 lg:px-20">
            <div className="h-[400px] md:h-screen md:w-2/5 pt-20 md:pt-24 md:pb-14">
                <img src="profile.jpg" alt="Imagem Letícia" className="h-full w-full rounded overflow-hidden object-cover object-top" />
            </div>
            <div className="flex flex-col items-center md:items-start justify-start md:justify-center h-screen md:pt-24 pb-14 gap-3 md:gap-6">
                <h1 className="font-montserrat font-bold text-2xl lg:text-5xl text-center lg:text-start text-cinza-escuro">Letícia Rodrigues</h1>
                <hr className="bg-cinza-escuro h-[3px] lg:h-1 w-10 lg:w-16" />
                <p className="font-montserrat font-normal text-center lg:text-start text-base lg:text-2xl text-cinza-escuro">Desenvolvedora <span className="font-bold">Front End</span></p>

                <div className="flex gap-6 mb-6 md:mb-0">
                    <Button endereco="https://drive.google.com/file/d/1MhrGsS9aZCL2tGXjWG69yzOp7OmEDRSf/view?usp=sharing" nome="Download CV"/>
                    <Button endereco="https://wa.link/5t0ne7" nome="Whatsapp"/>
                </div>
            </div>
        </div>
    )
}