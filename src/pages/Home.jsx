import Info from '../component/info.jsx';
import Cases from '../component/projects.jsx';
import '../css/home.css';

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

            <figure className="topSplit">
                <img src="./billeder/top-split.svg" alt="" />
            </figure>

            <Info />

            <figure>
                <img src="./billeder/section-split-2.svg" alt="" />
            </figure>

            <Cases />
        </>
    );
}

