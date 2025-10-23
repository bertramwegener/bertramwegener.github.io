import '../css/footer.css';

export default function Footer() {
    return (
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
    );
}