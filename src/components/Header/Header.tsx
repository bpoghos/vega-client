import styles from "./Header.module.css"
import logo from './images/logo.png'
import { CategoryName, HeaderContent } from '../../constants/constants'
import englishLng from './images/english.language.jpeg'
import armenianLng from './images/armenian.language.png'
import russianLng from './images/russian.language.webp'
import { Container, Dropdown, DropdownMenu, DropdownToggle, Nav, Navbar } from "react-bootstrap"
import { useEffect, useState } from "react"



const Header: React.FC = () => {
    const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const handleLanguageClick = () => {
        setIsLanguageOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar variant="light" bg={isScrolled ? "white" : "transparent"} expand="lg" className={styles.navBar} fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img className={styles.logo} src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className={styles.navLink}>{HeaderContent.HOME}</Nav.Link>
                        <Dropdown className={styles.dropdown}>
                            <DropdownToggle variant="link" className={styles.dropdownToggle}>
                                {HeaderContent.PROJECTS}
                            </DropdownToggle>
                            <DropdownMenu className={styles.dropdownMenu} style={isScrolled ? { backgroundColor: "#fff" } : { backgroundColor: "transparent" }}>
                                <Dropdown.Item href="/category" className={styles.dropdownItem}>{CategoryName.RESIDENTAL}</Dropdown.Item>
                                <Dropdown.Item href="/category" className={styles.dropdownItem}>{CategoryName.PUBLIC}</Dropdown.Item>
                                <Dropdown.Item href="/category" className={styles.dropdownItem}>{CategoryName.URBAN}</Dropdown.Item>
                                <Dropdown.Item href="/category" className={styles.dropdownItem}>{CategoryName.PRODACTION}</Dropdown.Item>
                                <Dropdown.Item href="/category" className={styles.dropdownItem}>{CategoryName.RECONSTRACTION}</Dropdown.Item>
                                <Dropdown.Item href="/category" className={styles.dropdownItem}>{CategoryName.SMALL}</Dropdown.Item>
                            </DropdownMenu>
                        </Dropdown>
                        <Nav.Link href="#" className={styles.navLink}>{HeaderContent.CONTACTS}</Nav.Link>
                        <div className={styles.languageBtn} onClick={handleLanguageClick}>
                            <img alt="" src={englishLng} />
                            {isLanguageOpen && <div className={styles.languageDropdown} style={isScrolled ? { backgroundColor: "#fff" } : { backgroundColor: "transparent" }}>
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




