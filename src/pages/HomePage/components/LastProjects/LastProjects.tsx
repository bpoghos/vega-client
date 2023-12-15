import { Col, Container, Row } from "react-bootstrap"
import styles from "./LastProjects.module.css"
import { LastProjectsContent } from "../../../../constants/constants"


const LastProjects: React.FC = () => {
    return (
        <div className={styles.lastProjects}>
            <h2>{LastProjectsContent.TITLE}</h2>
            <p>{LastProjectsContent.DESCRIPTION}</p>
            <Container className={styles.container}>
                <Row>
                    <Col lg={4} md={6} sm={12} >
                        <div className={styles.card}>
                            <img alt='' src="https://images.adsttc.com/media/images/5efe/1f7f/b357/6540/5400/01d7/newsletter/archdaily-houses-104.jpg?1593712501" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt
                                ut laboret dolore magna aliqua enim minim veniam exercitation
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.card}>
                            <img alt='' src="https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-contemporary-house-plans-1.webp" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt
                                ut laboret dolore magna aliqua enim minim veniam exercitation
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.card}>
                            <img alt='' src="https://www.home-designing.com/wp-content/uploads/2023/04/modern-houses.jpg" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt
                                ut laboret dolore magna aliqua enim minim veniam exercitation
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LastProjects
