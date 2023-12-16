import styles from "./HomePage.module.css"
import { LastProjects, Main, OurClients, Testimonials } from "./components"


const HomePage: React.FC = () => {
    return (
        <div>
            <Main />
            <LastProjects />
            <OurClients />
            <Testimonials />
        </div>
    )
}

export default HomePage
