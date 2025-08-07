import Image from "next/image";

import Logo from "../../../public/logo/logo.svg"
import { RiInstagramFill } from "react-icons/ri";

import uz from "../../../public/icons/uz.svg"
import ru from "../../../public/icons/rus.svg"
import en from "../../../public/icons/eng.svg"


export default function NavbarLayout() {
  return (
    <div className="container">
        <header className="mb-5 flex items-center justify-between">
            <RiInstagramFill className="text-[25px]" />
            <ul className="flex">
                <li><Image width={20} src={uz} alt="uz logo" /> UZ</li>
                <li><Image width={20} src={en} alt="uz logo" /> EN</li>
                <li><Image width={20} src={ru} alt="uz logo" /> RU</li>
            </ul>
        </header>
        <nav className="flex items-center justify-between">
            <Image width={150} src={Logo} alt="Logo"/>
            <ul className="flex items-center gap-16">
                <li>Biz Haqimizda</li>
                <li>Xizmatlar</li>
                <li>Yangiliklar </li>
                <li>FAQ</li>
                <li>Bog'lanish</li>
            </ul>
        </nav>
    </div>
  )
}
