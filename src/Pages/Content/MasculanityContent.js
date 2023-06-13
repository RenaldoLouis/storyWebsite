import React from "react";

const MasculanityContent = (props) => {
    const {data4} = props
    return (
        <div style={{background: "#C2AEA6"}}>
            <div class="container col-lg-6 col-8 pt-5 pb-5">
                <div className="headerSection">
                    Pengaruh Toxic Masculinity
                </div>

                <img src="/picture2.jpg" alt="icon" className="imageContent" />
                <div className="captionImage">
                    Potret seorang laki-laki yang menggunakan kapas untuk membersihkan wajah. (Dok. Pribadi)
                </div>

                {Object.keys(data4).map((mappedData) => {
                    return (
                        <div className="contentText">
                            {data4[mappedData]}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MasculanityContent;