import { useEffect } from "react";
import {BsX} from 'react-icons/bs';

export default function Modal({isOpen, isClosed, children}) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.background = 'hidden';
        } else {

            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        };
    }, [isOpen]);

    if (!isOpen) return null;

  return (
    <div className={` w-full h-screen bg-black/50 flex items-center justify-center fixed left-0 top-0 z-20 ${isOpen ? 'block' : 'hidden' }`} >

        <div className="w-[90%] h-[90%] bg-white overflow-y-scroll rounded-md pb-8 sm:w-[30rem] md:w-[45rem] md:pt-6">
            {children}
        </div>

        <BsX onClick={isClosed} className="absolute text-4xl text-zinc-900 top-2 right-2"/>
    </div>
  )
}
