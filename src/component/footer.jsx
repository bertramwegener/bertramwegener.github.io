import '../css/footer.css';

export default function Footer() {
    return (
        <footer id='footer'>
            <figure className='sun'>
                <img src="./billeder/red-sun.svg" alt="" />
            </figure>

            <figure className="bambooFooter">
                <img src="./billeder/bottom-bamboo.svg" alt="" />
            </figure>

            <div className='contact text1'>
                <h3>Tlf:</h3>
                <p>52 30 37 52</p>
            </div>
            
            <div className='contact text2'>
                <h3>Email:</h3>
                <p>bertramkrygerwegener@gmail.com</p>
            </div>

            <figure className="footerImage">
                <img src='./billeder/footer.png' alt="" />
            </figure>
        </footer>
    );
}