import styles from "./Header.module.css"
import logo from './logo.png'
import { HeaderContent } from '../../constants/constants'
import englishLng from './english.language.jpeg'
import armenianLng from './armenian.language.png'
import russianLng from './russian.language.webp'
import { Container, Dropdown, DropdownMenu, DropdownToggle, Nav, NavDropdown, Navbar } from "react-bootstrap"
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
                        <Nav.Link href="#home">{HeaderContent.HOME}</Nav.Link>
                        <Dropdown className={styles.dropdown}>
                            <DropdownToggle variant="link" className={styles.dropdownToggle}>
                                {HeaderContent.PROJECTS}
                            </DropdownToggle>
                            <DropdownMenu style={{ border: "none", boxShadow: "0px 2px 5px 1px rgba(34, 60, 80, 0.14)", padding: "10px" }}>
                                <Dropdown.Item style={{ fontSize: "18px", background: '#fff' }}>homeghvcf</Dropdown.Item>
                                <Dropdown.Item className={styles.dropdownItem}>homeghvcf</Dropdown.Item>
                                <Dropdown.Item className={styles.dropdownItem}>homeghvcf</Dropdown.Item>
                                <Dropdown.Item className={styles.dropdownItem}>homeghvcf</Dropdown.Item>
                                <Dropdown.Item className={styles.dropdownItem}>homeghvcf</Dropdown.Item>
                                <Dropdown.Item className={styles.dropdownItem}>homeghvcf</Dropdown.Item>
                            </DropdownMenu>
                        </Dropdown>
                        <Nav.Link href="#link">{HeaderContent.CONTACTS}</Nav.Link>
                        <div className={styles.languageBtn} onClick={handleLanguageClick}>
                            <img alt="" src={englishLng} />
                            {isLanguageOpen && <div className={styles.languageDropdown}>
                                <div><img alt="" src={armenianLng} /></div>
                                <div><img alt="" src={russianLng} /></div>
                            </div>}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header




