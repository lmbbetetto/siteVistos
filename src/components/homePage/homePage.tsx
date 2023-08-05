import { Card } from './card/card'
import style from './style.module.css'

import Australia from '../../assets/bandeiraAustralia.png'
import NZ from '../../assets/bandeiraNZ.png'

const Cards = [
    {
        img: Australia,
        name: 'Australia',
    },
    {
        img: NZ,
        name: 'Nova Zelândia',
    },
]

export function Home() {
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
                        />
                    ))
                }
            </div>
        </>
    )
}