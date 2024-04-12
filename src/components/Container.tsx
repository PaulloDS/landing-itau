import { ReactNode } from "react";

type Props = {
    children: ReactNode
}
const Container = ({children}: Props) => {
    return ( 
        <div className="flex items-center gap-2 justify-between w-full max-w-[1246px] px-3 mx-auto">
            {children}
        </div>
     );
}
 
export default Container;