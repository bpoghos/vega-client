import { Container, Row, Col, Navbar, NavLink } from "react-bootstrap";
import logo from "../Header/images/logo.png"
import styles from "./Footer.module.css";
import { ContactContent, FooterContent } from "../../constants/constants";



const Footer: React.FC = () => {

    return (
        <Navbar bg="black" variant="dark" className={styles.footer}>
            <Container className="d-block">
                <Row className={styles.testing}>
                    <Col lg={3} className={styles.logoContainer}>
                        <img src={logo} alt="Company Logo" className={styles.logo} />
                    </Col>
                    <Col lg={3} className={styles.menuContainer}>
                        <NavLink>{FooterContent.HOME}</NavLink>
                        <NavLink>{FooterContent.ABOUT}</NavLink>
                    </Col>
                    <Col lg={3} className={styles.projectsContainer}>
                        <h3>{FooterContent.PROJECTS}</h3>
                        <NavLink>{FooterContent.RESIDENTAL}</NavLink>
                        <NavLink>{FooterContent.PUBLIC}</NavLink>
                        <NavLink>{FooterContent.URBAN}</NavLink>
                        <NavLink>{FooterContent.PRODACTION}</NavLink>
                        <NavLink>{FooterContent.RECONSTRACTION}</NavLink>
                        <NavLink>{FooterContent.SMALL}</NavLink>
                    </Col>
                    <Col lg={3} className={styles.contactContainer}>
                        <h3>{FooterContent.CONTACTS}</h3>
                        <p>{ContactContent.ADDRESS} Manandyan 22</p>
                        <p>{ContactContent.MOBILE} (010) 422 690</p>
                        <p>{ContactContent.EMAIL} vega-project@mail.ru</p>
                    </Col>
                </Row>
                <div className={styles.copyrightContainer}>
                    <span>{FooterContent.DEVELOPED} &copy; {FooterContent.DATE}</span>
                </div>
            </Container>
        </Navbar>
    );
};

export default Footer;
