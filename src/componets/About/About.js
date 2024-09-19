import './about.css';
import logo from '../../images/Premier_Foods-Logo.png';

export default function About() {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="hero-content">
                    <h1>Welcome to Deliciously Fresh!</h1>
                    <p>Your trusted source for fresh, organic, and sustainably sourced food.</p>
                </div>
            </section>

            <section className="about-section">
                <div className="about-content">
                    <h2>About Our Company</h2>
                    <p>
                        At Deliciously Fresh, we are committed to delivering the best quality ingredients
                        right to your doorstep. We believe in sustainable farming, organic products, and
                        supporting local farmers. Our journey started in 2010 with a mission to make
                        healthy, fresh food accessible to everyone.
                    </p>
                </div>
                <div className="about-image">
                    <img src={logo} alt="About Our Company" />
                </div>
            </section>

            <section className="mission-section">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is simple: to provide high-quality, organic food options that are
                        both delicious and affordable. We work directly with farms to ensure freshness,
                        sustainability, and fair trade.
                    </p>
                </div>
            </section>
        </div>
    );
}