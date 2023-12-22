import { Button, Container, Row } from "react-bootstrap"
import styles from "./Cards.module.css"
import Card from "./Card/Card"
import photo1 from "./Card/test/photo_1.jpg"
import photo2 from "./Card/test/photo_2.jpeg"
import photo3 from "./Card/test/photo_3.jpeg"

const Cards: React.FC = () => {
    return (
        <>
            <Container className={styles.container}>
                <Row>
                    <Card test={photo1} />
                    <Card test={photo2} />
                    <Card test={photo3} />
                    <Card test={photo3} />
                    <Card test={photo2} />
                    <Card test={photo1} />
                </Row>
                <Button variant="secondary">MORE</Button>
            </Container>
        </>
    )
}

export default Cards
