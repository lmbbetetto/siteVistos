import style from './style.module.css'

interface CardHP {
    img: string,
    name: string,
}

export const Card: React.FC<CardHP> = (props) => {
    return (
        <>
             <div className={style.card}>
                <img src={props.img} alt="bandeira" />
                <h1 className={style.title}>{props.name}</h1>
                <p className={style.paragraph}>Mais informações</p>
                <button className={style.btn}>Acessar</button>
             </div>
        </>
    )
}