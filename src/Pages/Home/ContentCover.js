import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ContentCover = ({ executeScroll }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigateToArticle = () => {
        navigate('/article')
    }

    console.log("location.pathname", location.pathname)

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}

        >
            <div style={{ position: "relative" }}>
                <div className="headerContainer" >
                    <img src="/logoRawat1.png" alt="icon" className="iconCover" />

                    {/* <div className="headerContent">
                        3 minutes read
                    </div> */}
                    <div className="TitleCover" >
                        Genderless Beauty: Kesehatan Kulit Tidak Memandang Gender
                    </div>
                    {/* <div className="headerContent">
                    oleh Angela
                </div> */}

                    <button className="headerButtonContainer" onClick={location.pathname === "/article" ? executeScroll : handleNavigateToArticle}>
                        {location.pathname === "/article" ? "Start Reading" : "Read Article"}
                        <FaChevronDown style={{ color: "#ffffff", marginLeft: 8, display: location.pathname === "/article" ? "" : "none" }} />
                    </button>
                </div>
                <div className="home-coverImage" />
            </div>
        </motion.div>
    )
}

export default ContentCover;