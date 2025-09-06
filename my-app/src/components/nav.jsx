import React from "react";
import { Link } from "react-router-dom";

export default function nav() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>VasuDev</h2>
      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/work">Work</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#333",
    color: "#fff",
   
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "25px" },
  link: { color: "white", textDecoration: "none" }
};
