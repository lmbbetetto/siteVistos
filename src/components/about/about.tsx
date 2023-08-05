import style from './style.module.css'

export function About() {
    return (
        <>
            <div className={style.cover}>
                <h1>Sobre</h1>
            </div>
            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.top}>
                        <div className={style.first}>
                            <h1>História</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className={style.second}>
                            <h1>Objetivos</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                        </div>
                    </div>
                    <div className={style.botton}>
                        <h1>Missão e Valores</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    </div>
                </div>
            </div>
        </>
    )
}