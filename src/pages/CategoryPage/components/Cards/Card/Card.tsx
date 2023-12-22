import { Col } from "react-bootstrap"
import styles from "./Card.module.css"




const Card = ({ test }: { test: any }) => {
    return (
        <Col lg={4} sm={12} xs={12}>
            <div className={styles.card}>
                <img alt="" src={test} />
                <div className={styles.hover}>
                    <div className={styles.contentContainer}>
                        <div>
                            <p className={styles.title}>House</p>
                            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                tempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Card
