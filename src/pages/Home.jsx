
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

            <div className="topSplit">
                <img src="./billeder/top-split.svg" alt="" />
            </div>

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
                <figure>
                    <img src="./billeder/red-sun.svg" alt="" />
                </figure>

                <figure className="bambooFooter">
                    <img src="./billeder/bottom-bamboo.svg" alt="" />
                </figure>

                <h3>Tlf:</h3>
                <h3>52 30 37 52</h3>
                
                <h3>Email:</h3>
                <h3>bertramkrygerwegener@gmail.com</h3>

                <figure className="footerImage">
                    <img src='./billeder/footer.svg' alt="" />
                </figure>
            </footer>
        </>
    );
}

