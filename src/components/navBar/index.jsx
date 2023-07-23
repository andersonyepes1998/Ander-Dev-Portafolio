import { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'SOBRE MÍ',
        to: '/About'
    },
    {
        label: 'HABILIDADES',
        to: '/Skills'
    },
    {
        label: 'RESUMEN',
        to: '/Resume'
    },
    {
        label: 'PORTAFOLIO',
        to: '/Portfolio'
    },
    {
        label: 'CONTACTO',
        to: '/Contact'
    }
]

export const NavBar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to={'/'} className='navbar_container_logo'>
                        <FaReact
                            size={55}
                        />
                    </Link>
                    <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
                        {
                            data.map((item, index) => (
                                <li key={index} className='navbar_container_menu_item'>
                                    <Link className='navbar_container_menu_item_links' to={item.to}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='Nav_icon' onClick={handleToggleIcon}>
                        {
                            toggleIcon ? <HiX size={40} /> : <FaBars size={30} />
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}