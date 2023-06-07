import React from "react";
import {FaChevronDown} from "react-icons/fa";
import {useNavigate} from "react-router-dom";


const ContentCover = ({executeScroll}) => {
    const navigate = useNavigate();

    return (
        <div style={{position: "relative"}}>
            <div className="headerContainer" >
                <img src="/logoRawat1.png" alt="icon" className="iconCover" />

                <div className="headerContent">
                    3 minutes read
                </div>
                Dongeng, Anak-Anak, Masa Depan (Mitigasi Bencana)
                {/* <div className="headerContent">
                    oleh Angela
                </div> */}

                <button className="headerButtonContainer" onClick={() => navigate('/article')}>
                    Read Full Article
                    <FaChevronDown style={{color: "#ffffff", marginLeft: 8}} />
                </button>
            </div>
            <div className="home-coverImage" />
        </div>
    )
}

export default ContentCover;