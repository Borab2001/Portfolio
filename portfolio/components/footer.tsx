import Link from "next/link";
import TextHoverEnter from "./ui/text-hover-enter";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socials = [
        {
            name: 'GitHub',
            link: 'https://github.com/Borab2001',
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/bora-balos/',
        },
        {
            name: 'Resume',
            link: 'https://drive.google.com/file/d/1aVIMv1yQJ8Bn_2jzpvFVLKz0fXKZ3Lfn/view?usp=sharing',
        },
        {
            name: 'X',
            link: 'https://x.com/borab2001',
        },
    ]

    return (
        <footer className="w-full py-8 px-4 sm:px-8 md:px-20  flex flex-col sm:flex-row justify-between items-center gap-4 max-w-6xl mx-auto text-foreground">
            <p className="text-sm order-2 sm:order-1">&#169; {currentYear} Bora Balos. All Rights Reserved.</p>
            <div className="flex flex-row gap-x-6 sm:gap-x-4 items-center order-1 sm:order-2">
                {socials.map((social, index) => (
                    <Link 
                        href={social.link} 
                        key={index} 
                        className="text-sm"
                        target="_blank"
                    >
                        <TextHoverEnter>
                            {social.name}
                        </TextHoverEnter>
                    </Link>
                    
                ))}
            </div>
        </footer>
    );
}
 
export default Footer;