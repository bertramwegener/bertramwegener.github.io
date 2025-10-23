import '../css/projects.css';

export default function Cases() {
    return (
        <section className='case-section'>
            <figure className='lanterns'>
                <img src="./billeder/lanterns.svg" alt="" />
            </figure>
            
            <figure className='cases'>
                <img src="./billeder/caption-box.svg" alt="" />
                <h2>Cases</h2>
            </figure>

            <section className='line1'>
                <figure>
                    <div className='border'>
                        <img src="./billeder/case-border.svg" alt="" />
                    </div>

                    <a href="https://bertramwegener.github.io/ZeroBuzz-Brew/" target='_blank'><img className='link' src="./billeder/zerobuzz.png" alt="" /></a>
                </figure>

                <figure>
                    <div className='border'>
                        <img src="./billeder/case-border.svg" alt="" />
                    </div>

                    <a href="https://bertramwegener.github.io/webunivers-optimised/" target='_blank'><img className='link2' src="./billeder/arkitonisk.png" alt="" /></a>
                </figure>
            </section>

            <section className='line2'>
                <figure>
                    <div className='border'>
                        <img src="./billeder/case-border.svg" alt="" />
                    </div>

                    <a href="https://bertramwegener.github.io/Endometriose/" target='_blank'><img className='link3' src="./billeder/endometriose.png" alt="" /></a>
                </figure>

                <figure>
                    <div className='border'>
                        <img src="./billeder/case-border.svg" alt="" />
                    </div>

                    <a href="https://bertramwegener.github.io/Radar/" target='_blank'><img className='link4' src="./billeder/radar.png" alt="" /></a>
                </figure>
            </section>
        </section>
    );
}