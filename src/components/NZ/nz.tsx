import { CardNZ } from './card/card'
import style from './style.module.css'

import { BsBagFill } from 'react-icons/bs'
import { BsBookHalf } from 'react-icons/bs'
import { FaMapMarked } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function NovaZelandia() {
    const CardsNZ = [
        {
            icon: <FaMapMarked />,
            name: 'Turista',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            icon: <BsBookHalf />,
            name: 'Estudante',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            icon: <BsBagFill />,
            name: 'Trabalho',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
    ]
    return (
        <>
            <div className={style.cover}>
                <h1>Nova Zelândia</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.cards}>
                        {
                            CardsNZ.map((component, index) => (
                                <CardNZ
                                    key={index}
                                    icon={component.icon}
                                    name={component.name}
                                    content={component.content}
                                />
                            ))
                        }
                    </div>

                    <h2>Contate-nos</h2>
                    <Link to='/contato'><button className={style.btn}>Contato</button></Link>
                </div>
            </div>
        </>
    )
}