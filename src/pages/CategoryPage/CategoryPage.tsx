import styles from "./CategoryPage.module.css"
import { Cards, Content } from "./components"

const CategoryPage: React.FC = () => {
    return (
        <div className={styles.category}>
            <Content />
            <Cards />
        </div>
    )
}

export default CategoryPage
