
export default function Home() {
    return (
        <>
            <header>
                <figure className="headerImage">
                    <img src="./billeder/big-picture.png" alt="" />
                
                    <div className="intro">
                        <p>Hi, I'm a</p>
                        <h1>Multimediadesigner</h1>
                    </div>
                </figure>
            </header>

            <section className="info">
                <article className="digital">
                    <h2>Digital</h2>
                    <p>
                        Jeg kan udvikle visuelle og interaktive brugergrænseflader til alt fra mobil og TV/PC skærm til billboards. 
                        Jeg har fokus på website opsætning og udvikling, med afspejling i kundeønsker.
                    </p>
                </article>

                <article className="fysisk">
                    <h2>Fysisk</h2>
                    <p>
                        Jeg udvikler fysiske løsninger til alt fra etiketter og emballage til plakater og bannere.
                        Jeg har særligt fokus på valg af kompositioner og farver, samt whitespace, med henblik på skabelse af optimal brugeroplevelse.
                    </p>
                </article>
            </section>

            <footer>
                <figure className="footerImage">
                    <img src='./billeder/me-one.png' alt="" />
                </figure>
            </footer>
        </>
    );
}

