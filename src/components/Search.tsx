import IconSearch from "@/assets/icon-search.svg"
import Image from "next/image";

const Search = () => {
    return ( 
        <div className="flex items-center gap-4">
            <Image src={IconSearch} alt="Icon Search"/>
            <input type="text" className="bg-orange-300 outline-none text-black rounded-lg px-1 placeholder:text-gray-600" placeholder="Buscar"/>
        </div>
     );
}
 
export default Search;