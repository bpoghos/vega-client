import styles from "./Header.module.css"
import logo from './logo.png'
import { HeaderContent } from '../../constants/constants'
import englishLng from './english.language.jpeg'
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { useState } from "react"



const Header: React.FC = () => {
    const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);

    const handleLanguageClick = () => {
        setIsLanguageOpen((prevState) => !prevState);
    };

    return (
        <Navbar variant="light" bg="white" expand="lg" className={styles.navBar}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className={styles.logo} src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className={styles.links} href="#home">{HeaderContent.HOME}</Nav.Link>
                        <NavDropdown className={styles.projects} title={HeaderContent.PROJECTS} id="basic-nav-dropdown">
                            <NavDropdown.Item>homeghvcf</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className={styles.links} href="#link">{HeaderContent.CONTACTS}</Nav.Link>
                        <div className={styles.languageBtn} onClick={handleLanguageClick}>
                            <img alt="" src={englishLng} />
                            {isLanguageOpen && <div className={styles.languageDropdown}></div>}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header




