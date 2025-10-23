import '../css/iWorkWith.css';

export default function IWorkWith() {
    return (
        <section className='slide-section'>
            <figure className='workWith'>
                <img src="./billeder/caption-box.svg" alt="" />
                <h2>I work with</h2>
            </figure>

            <div className='slide-bar'>
                <div className='programming'>
                    <figure>
                        <img className='app' src="./billeder/html.svg" alt="" />
                        <img className='one' src="./billeder/icon-box.svg" alt="" />
                    </figure>

                    <figure>
                        <img className='app' src="./billeder/css.svg" alt="" />
                        <img className='two' src="./billeder/icon-box.svg" alt="" />
                    </figure>

                    <figure>
                        <img className='app' src="./billeder/javascript.svg" alt="" />
                        <img className='three' src="./billeder/icon-box.svg" alt="" />
                    </figure>
                </div>

                <figure className='b-slide'>
                    <img className='slide' src="./billeder/background-slide.svg" alt="" />
                    <img className='color' src="./billeder/color-splash.jpg" alt="" />

                    <div className='hand'>
                        <img src="./billeder/hand.svg" alt="" />
                    </div>
                </figure>

                <div className='design'>
                    <figure>
                        <img className='crea-app' src="./billeder/illustrator.svg" alt="" />
                        <img className='crea-one' src="./billeder/icon-box.svg" alt="" />
                    </figure>

                    <figure>
                        <img className='crea-app' src="./billeder/photoshop.svg" alt="" />
                        <img className='crea-two' src="./billeder/icon-box.svg" alt="" />
                    </figure>

                    <figure>
                        <img className='crea-app' src="./billeder/figma.svg" alt="" />
                        <img className='crea-three' src="./billeder/icon-box.svg" alt="" />
                    </figure>
                </div>
            </div>

            <figure className='detail'>
                <img src="./billeder/slidepanel-detail.svg" alt="" />
            </figure>

            <figure className='split3'>
                <img src="./billeder/section-split-3.png" alt="" />
            </figure>

        </section>
    );
}