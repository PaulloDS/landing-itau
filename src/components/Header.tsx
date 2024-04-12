import Image from "next/image";

import Logo from '@/assets/logo.svg'
import ItemMenu from "./ItemMenu";
import Search from "./Search";
import IconUser from "@/assets/icon-user.svg"
import Container from "./Container";


const Header = () => {
    return ( 
        <header className="relative w-full h-20 bg-primary-orange flex items-center">
            <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full"></div>
            <Container>
                <div className="flex items-center justify-between flex-1">
                    <nav className="flex items-center gap-14">
                        <Image src={Logo} alt="Logo"/>
                        <ul className="flex gap-12">
                            <li>
                                <ItemMenu name='Para você'/>
                            </li>
                            <li>
                                <ItemMenu name='Para empresas'/>
                            </li>
                            <li>
                                <ItemMenu name='Serviços'/>
                            </li>
                            <li>
                                <ItemMenu name='Ajuda'/>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <Search/>
                    </div>
                </div>
                <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 z-10">
                    <Image src={IconUser} alt="Icon User"/>
                    <span className="text-white font-bold">Acessar conta</span>
                </button>
            </Container>
        </header>
     );
}
 
export default Header;