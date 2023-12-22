import { Button, Col, Container, Row } from "react-bootstrap"
import styles from "./Cards.module.css"

const Cards: React.FC = () => {
    return (
        <>
            <Container className={styles.container}>
                <Row>
                    <Col lg={4}>
                        <div className={styles.card}></div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.card}></div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.card}></div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.card}></div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.card}></div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.card}></div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.card}></div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.card}></div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.card}></div>
                    </Col>
                </Row>
                <Button>MORE</Button>
            </Container>
        </>
    )
}

export default Cards
