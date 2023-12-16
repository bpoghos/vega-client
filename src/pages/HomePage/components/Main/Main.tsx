import { Button } from "react-bootstrap";
import styles from "./Main.module.css";

const Main: React.FC = () => {
    return (
        <div className={styles.background}>
            <div className={styles.overlay}>
                <h1>VEGA PROJECT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation</p>
                <Button variant="outline-dark">About us</Button>
            </div>
            <img
                alt="background"
                src="https://www.planetizen.com/files/images/Architecture%2001%20-%20D.%20Laird_0.jpg"
            />
        </div>
    );
};

export default Main;
