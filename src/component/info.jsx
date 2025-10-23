import '../css/info.css';

export default function Info() {
    return (
        <section className="info">
            <div className='info-text'>
                <article className="digital text">
                    <h2>Digital</h2>
                    <p>
                        Jeg kan udvikle visuelle og interaktive brugergrænseflader til alt fra mobil og TV/PC skærm til billboards. 
                    </p> 
                    <p>
                        Jeg har fokus på website opsætning og udvikling, med afspejling i kundeønsker.
                    </p>
                </article>

                <figure className='textSplit'>
                    <img src="./billeder/texts-divide.svg" alt="" />
                </figure>

                <article className="fysisk text">
                    <h2>Physical</h2>
                    <p>
                        Jeg udvikler fysiske løsninger til alt fra etiketter og emballage til plakater og bannere.
                    </p> 
                    <p>
                        Jeg har særligt fokus på valg af kompositioner og farver, samt whitespace, med henblik på skabelse af optimal brugeroplevelse.
                    </p>
                </article>
            </div>
            <figure className='bamboo-back'>
                <img src="./billeder/bamboo-background.svg" alt="" />
            </figure>
        </section>
    );
}