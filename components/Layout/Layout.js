import React from 'react'
import Navbar from "@components/Navbar/Navbar";

// Module CSS: Sucedió antes de CSS in JS 
import styles from "./layout.module.css";

// .. = import hell - dot hell
// Necesitamos usar el path aliases = disponible para Javascript y Typescript

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <Navbar />
        {children}
        <footer>This is the footer</footer>
    </div>
  )
}

export default Layout
