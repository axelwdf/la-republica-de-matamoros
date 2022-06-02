import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import '../styles/header.css';
import SlideBar from './SlideBar';
import useBurger from "../hooks/useBurguer";
const Header = () => {
    const {isOpen, setIsOpen} = useBurger();
    return (
        <div className='Header' >
            <div className="Header-ch">
                <h1 className='Header-title' >
                    Bienvenido a la República de Matamoros
                </h1>
                <p>
                    <i>
                        <b>
                            Podrás ordenar tu pedido y encontrar nuestros productos si tocas la hamburguesa
                        </b>
                    </i>
                </p>
                <button onClick={() => setIsOpen(!isOpen)} >
                    <FontAwesomeIcon icon={faBurger} className='burger-icon' />
                </button>
                <SlideBar isOpen={isOpen} />
            </div>
        </div>
    );
};

export default Header;