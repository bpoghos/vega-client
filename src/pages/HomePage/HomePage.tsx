import styles from "./HomePage.module.css"
import { LastProjects, OurClients, Testimonials } from "./components"


const HomePage: React.FC = () => {
    return (
        <div>
            <img className={styles.background} alt="background" src="https://www.planetizen.com/files/images/Architecture%2001%20-%20D.%20Laird_0.jpg" />
            <LastProjects />
            <OurClients />
            <Testimonials />
        </div>
    )
}

export default HomePage
