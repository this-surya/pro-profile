import { ReactNode } from  "react";
import Image from "next/image";

interface Props {
    children?: ReactNode;
    title?: string;
    size?: string;
    description?: string;
    hidden?: boolean;
    path?: string;
    picture?: boolean;
}

function Header({ title, size } : Props){
    return <h1 className={`text-${size} font-extrabold text-[#1D1D1F] `}>{title}</h1>;
}

function FirstSection({ children, hidden } : Props){
    return(
    <div className=" w-full min-h-screen">
      {children}
      {!hidden && (
        <hr className="pb-5 border-zinc-200"/>
      )}
    </div>
    );
}

function SeconSection({ children } : Props){
    return(
    <div className="bg-[#B6CEB4] h-screen  py-4">
      {children}
    </div>
    );
}

function Card({ children, title, description, path, picture } : Props){
    return  <div className="flex flex-col justify-around min-h-50 bg-gray-200 border border-zinc-200 p-5 rounded-lg">
                {children}
                {picture && ( <img src={path} className="w-full h-50 mb-3" width={600} height={200} alt="img"/>)}
                <h1 className="text-xl font-extrabold">{title}</h1>
                
               
                <p>{description}</p>
              </div>;
    
}

export default function Container({children} : Props){
    return(
        <div className="w-full container px-4">
        { children }
        </div>
    )
}

export{
    FirstSection,
    SeconSection,
    Header,
    Card
}