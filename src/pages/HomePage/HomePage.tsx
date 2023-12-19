import { LastProjects, Main, OurClients, Testimonials } from "./components"
import styles from "./HomePage.module.css"


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
