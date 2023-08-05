import style from './style.module.css'

import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import LOGO from '../../assets/logo.png'

import { BiLogoInstagramAlt } from 'react-icons/bi'
import { FaFacebookSquare } from 'react-icons/fa'

export function Footer() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <footer className={style.container}>
                <div className={style.about}>
                    <img src={LOGO} alt="logo" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                </div>

                <div className={style.nav}>
                    <h1>Institucional</h1>
                    <div className={style.list}>
                        <Link to="/"><a>Início</a></Link>
                        <Link to="/novazelandia"><a>Nova Zelândia</a></Link>
                        <Link to="/australia"><a>Austrália</a></Link>
                        <Link to="/sobre"><a>Sobre</a></Link>
                        <Link to="/contato"><a>Contato</a></Link>
                    </div>
                </div>

                <div className={style.contact}>
                    <h1>Contato</h1>
                    <p>Rua nome da rua, 999</p>
                    <p>(18) 99999-9999</p>
                    <div className={style.icons}>
                        <BiLogoInstagramAlt />
                        <FaFacebookSquare size={40} />
                    </div>
                </div>
            </footer>
        </>
    )
}