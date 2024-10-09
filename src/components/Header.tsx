import Image from "next/image";
import logo from "../../public/logo.png";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-5">
            <div>
                <Image width={80} src={logo} alt="Logo" />
            </div>
            <nav>
                <ul className="flex items-center gap-5">
                    <li><a href="">Home</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Comunidade</a></li>
                </ul>
            </nav>
            <div>
                <button className="bg-blue-600 text-white p-3 rounded-sm">Saiba Mais</button>
            </div>
        </header>
    );
};

export default Header;