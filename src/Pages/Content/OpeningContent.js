import React, { useEffect, useRef } from "react";


const OpeningContent = (props) => {
    const { data, data2, contentRef, imageRef } = props


    return (
        <div style={{ background: "#F9F9F9" }}>
            <div ref={contentRef} class="container col-lg-6 col-8 pt-5 pb-5">
                <div className="contentText">
                    "Kamu ni kayak cewek aja pake skincare"
                </div>
                <div className="familyInter" style={{ marginBottom: 16, fontSize: 16, fontWeight: 400 }}>
                    "Ngapain skincare-an lemah kulitmu"
                </div>
                <div className="familyInter" style={{ fontSize: 16, fontWeight: 400 }}>
                    "Gak usah aneh-aneh kamu tu cowok"
                </div>
                {Object.keys(data).map((mappedData) => {
                    return (
                        <div className="contentText">
                            {data[mappedData]}
                        </div>
                    )
                })}

                <img ref={(el) => imageRef.current[0] = el} src="/twitter.jpeg" alt="icon" className="imageContent" />
                <div className="captionImage">
                    Salah satu cuitan di Twitter terkait penggunaan skincare untuk laki-laki. (Sumber: Twitter)
                </div>

                {Object.keys(data2).map((mappedData) => {
                    return (
                        <div className="contentText">
                            {data2[mappedData]}
                        </div>
                    )
                })}

                <div className="audioContainer">
                    <img className="audioImage" src="/audioImage.png" alt="rawatKulit" />
                    <div className="audioImageWhiteSpace" />
                    <audio controls className="imageContent">
                        <source src="/audio1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <div className="captionImage">
                        Stereotipe menurut Ahli Psikolog Wiwit Puspitasari Dewi, M.Psi.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpeningContent;