import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socials = [
        {
            name: 'GitHub',
            link: '/',
        },
        {
            name: 'LinkedIn',
            link: '/',
        },
        {
            name: 'Resume',
            link: '/',
        },
        {
            name: 'X',
            link: '/',
        },
    ]

    return (
        <footer className="w-full p-8 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-4xl mx-auto">
            <p className="text-sm order-2 sm:order-1">&#169; {currentYear} Bora Balos. All Rights Reserved.</p>
            <div className="flex flex-row gap-4 items-center order-1 sm:order-2">
                {socials.map((social, index) => (
                    <Link 
                        href={social.link} 
                        key={index} 
                        className="text-sm"
                        target="_blank"
                    >
                        {social.name}
                    </Link>
                ))}
            </div>
        </footer>
    );
}
 
export default Footer;