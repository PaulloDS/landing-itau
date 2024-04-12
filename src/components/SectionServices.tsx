import Container from "./Container";
import Image from "next/image"
import PhoneIcon from "@/assets/icon-phone.svg"
import SolutionsIcon from "@/assets/icon-solutions.svg"
import OptionsIcon from "@/assets/icon-options.svg"
import CardIcon from "@/assets/icon-card.svg"
import ImagePhone from "@/assets/phone.png"

const SectionServices = () => {
    return ( 
        <section className="w-full h-[965px] relative">
            <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">serviços exclusivos</span>
                    <h1 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h1>
                    <p className="text-lg max-w-[554px] mb-[68px] text-secondary-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto da sua casa.</p>
                    <ul className="flex flex-col gap-12">
                        <li className="flex items-center gap-8">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image src={PhoneIcon} alt="Phone Icon"/>
                            </div>
                            <p className="flex-1 text-txt-gray">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
                        </li>
                        <hr/>
                        <li className="flex items-center gap-8">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image src={SolutionsIcon} alt="Solutions Icon"/>
                            </div>
                            <p className="flex-1 text-txt-gray">Soluções de empréstimos e renegociações para organizar suas funções</p>
                        </li>
                        <hr />
                        <li className="flex items-center gap-8">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image src={OptionsIcon} alt="Options Icon"/>
                            </div>
                            <p className="flex-1 text-txt-gray">Diversas opções de investimentos, de acordo com o seu perfil de investidor</p>
                        </li>
                        <hr />
                        <li className="flex items-center gap-8">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image src={CardIcon} alt="Card Icon"/>
                            </div>
                            <p className="flex-1 text-txt-gray">Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual</p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className="absolute top-0 right-0 flex items-center h-full w-[32%] bg-gray-phone">
                <Image src={ImagePhone} alt="Image Phone" className="translate-x-[-50%]" />
            </div>
        </section>
     );
}
 
export default SectionServices;