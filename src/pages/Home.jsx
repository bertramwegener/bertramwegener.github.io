
export default function Home() {
    return (
        <>
            <header>
                <figure className="headerImage">
                    <img src="./billeder/me-upside-down.png" alt="" />
                
                    <div className="intro">
                        <p>Hi, I'm a</p>
                        <h1>Multimediadesigner</h1>
                    </div>
                </figure>
            </header>

            <section className="info">
                <article className="digital">
                    <h2>Digital</h2>
                    <p>Jeg laver til alt med en skærm</p>
                </article>

                <article className="fysisk">
                    <h2>Fysisk</h2>
                    <p>Jeg laver også trykte sager</p>
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

