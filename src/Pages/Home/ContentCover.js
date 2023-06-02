import React from "react";
import { FaChevronDown } from "react-icons/fa";


const ContentCover = ({ executeScroll }) => {

    return (
        <div style={{ position: "relative" }}>
            <div className="headerContainer" >
                <div className="headerContent">
                    3 minutes read
                </div>
                Dongeng, Anak-Anak, Masa Depan (Mitigasi Bencana)
                <div className="headerContent">
                    oleh Angela
                </div>

                <button className="headerButtonContainer" onClick={executeScroll}>
                    Read Full Article
                    <FaChevronDown style={{ color: "#ffffff", marginLeft: 8 }} />
                </button>
            </div>
            <div className="home-coverImage" />
        </div>
    )
}

export default ContentCover;