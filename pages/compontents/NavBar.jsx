import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import navbarList from '../../constants/index'
import styles from "@/styles/navbar.module.css"
import gsap from 'gsap'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hoveredSubItem, setHoveredSubItem] = useState(0);
    const animateRef = useRef(null);
    const handleSubItemMouseEnter = (index) => {
        setHoveredSubItem(index);
        gsap.from(animateRef.current, { delay: 0.5, y: 20, opacity: 0, duration: 0.5, display: "block" });
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const handelAnimation = () => {
        gsap.from(animateRef.current, { y: 20, opacity: 0, duration: 0.5 });
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link href="/" className={styles.brand}>
                    <img src="/assets/brandIcon.png" alt="Brand Image" className={styles.brandIcon} />
                    <span className={styles.brandName}>Ramu</span>
                </Link>
                <ul className={`${styles.navLinks} ${isMenuOpen ? 'open' : ''}`}>
                    {navbarList.map((_, index) => (
                        <li key={index} className={styles.navItem} >
                            <span>{_.name}</span>
                            {_.children && (
                                <div className={`${styles.megaMenu}`} ref={animateRef} onMouseEnter={handelAnimation}>
                                    {_.subTitle && (
                                        <div className={styles.subMenu}>
                                            <h3 className={styles.subTitle}>{_.subTitle}</h3>
                                            {_.children.map((item, index) => (
                                                <p
                                                    key={index}
                                                    onMouseEnter={() => handleSubItemMouseEnter(index)}
                                                    className={styles.subItem}
                                                // ref={animateRef}
                                                >
                                                    {item.name}
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    <div className={`${styles.grid} ${_.subTitle ? styles.gridWithSub : styles.gridFull}`}>
                                        {hoveredSubItem !== null && _.children[hoveredSubItem]?.subChildren ? (
                                            _.children[hoveredSubItem].subChildren.map((item, index) => (
                                                <Link href={item.href} key={index} className={`${index === 0 ? styles.firstItem : styles.item}`}>
                                                    {item.name}
                                                </Link>
                                            ))
                                        ) : (
                                            _.children.map((item, index) => (
                                                <Link href={item.href} key={index} className={styles.item}>
                                                    {item.name}
                                                </Link>
                                            ))
                                        )}
                                        {_.btn &&
                                            <div className={styles.hiddenDivider}></div>
                                        }
                                    </div>
                                    {_.banner && (
                                        <div className={styles.navItemBanner}>
                                            <img src={_.banner} alt="Banner" />
                                        </div>
                                    )}

                                </div>)}
                        </li>
                    ))}
                </ul>
                <div className={styles.navRight}>
                    <Link href="#" className={styles.navButton}>Request call</Link>
                    <Link href="#" className={styles.navButton}>My account</Link>
                    <div className={styles.menuToggle} onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <svg className={styles.menuIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L17.94 6M18 18L6.06 6" />
                            </svg>
                        ) : (
                            <svg className={styles.menuIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
