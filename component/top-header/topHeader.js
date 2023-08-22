import Link from "next/link";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function TopHeader(){
    return(
    <div className="w-full bg-topHeader text-white h-12 flex flex-col items-center justify-center">
        <div className="w-full sm:container mx-auto flex flex-row justify-center md:justify-between items-center">
            <div className="hidden md:flex flex-row items-center">
                <div className="flex flex-row items-center">
                    <Link href="mail:support@Rikada.com">support@Rikada.com</Link>
                    <AiOutlineMail className="font-icons px-2 items-center"/>
                </div>
                <div className="flex flex-row items-center mr-4">
                    <Link href="tel:09187116041">09187116041</Link>
                    <AiOutlinePhone className="font-icons px-2 items-center"/>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <FiInstagram className="social-icons py-2"/>
                <FiLinkedin className="social-icons py-2"/>
                <FiTwitter className="social-icons py-2"/>
                <FiFacebook className="social-icons py-2"/>
            </div>
        </div>
    </div>
    );
}