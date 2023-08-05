import style from './style.module.css'

import { AiFillPhone } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { FaFacebookSquare } from 'react-icons/fa'

export function Contact() {

    return (
        <>
            <div className={style.cover}>
                <h1>Contato</h1>
            </div>
 
            <div className={style.container}>
                <div className={style.contact}>
                    <div className={style.cards}>
                        <div className={style.card}>
                            <AiFillPhone />
                            <span>(18) 9999-9999</span>
                        </div>

                        <div className={style.card}>
                            <ImLocation />
                            <span>Rua Monteiro Lobato,<br />136<br />
                                Paraguaçu Paulista <br />- SP</span>
                        </div>

                        <div className={style.cardRS}>
                            <BiLogoInstagramAlt size={40} />
                            <FaFacebookSquare size={35} />
                        </div>
                    </div>

                    <div className={style.form}>
                        <form>
                            <input type="text" name='name' placeholder='Nome completo' required />
                            <input type="email" name="email" placeholder='Email' required />
                            <input type="phone" name="phone" placeholder='Telefone' required />
                            <textarea name="message" rows={7} placeholder='Mensagem'required></textarea>
                            <button>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}