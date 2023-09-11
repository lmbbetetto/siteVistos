import { Card } from './card/card'
import style from './style.module.css'

import Australia from '../../assets/bandeiraAustralia.png'
import NZ from '../../assets/bandeiraNZ.png'
import { useEffect } from 'react'

const Cards = [
    {
        img: Australia,
        name: 'Australia',
        link: '/australia',
    },
    {
        img: NZ,
        name: 'Nova Zelândia',
        link: '/novazelandia',
    },
]

export function Home() {
    useEffect(() => {
        document.title = 'Home - N&D Vistos'
    })

    return (
        <>
            <div className={style.cover}></div>

            <div className={style.container}>
                {
                    Cards.map((component, index) => (
                        <Card
                            key={index}
                            img={component.img}
                            name={component.name}
                            link={component.link}
                        />
                    ))
                }
            </div>
        </>
    )
}