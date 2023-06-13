import React from "react";
import quotesImage from "../../assets/images/wiwitQuote.png"

const MasculanityContent = (props) => {
    const {data4, imageRef} = props
    return (
        <div style={{background: "#C2AEA6"}}>
            <div ref={(el) => imageRef.current[3] = el} class="container col-lg-6 col-8 pt-5 pb-5">
                <div className="headerSection">
                    Pengaruh Toxic Masculinity
                </div>

                <img src="/picture2.jpg" alt="icon" className="imageContent" />
                <div className="captionImage">
                    Potret seorang laki-laki yang menggunakan kapas untuk membersihkan wajah. (Dok. Pribadi)
                </div>

                {Object.keys(data4).map((mappedData) => {
                    return (
                        <>
                            {mappedData === "paragraph2" || mappedData === "paragraph4" || mappedData === "paragraph8" ? (
                                <div className="contentText">
                                    <em>
                                        {data4[mappedData]}
                                    </em>
                                </div>
                            ) : (
                                <div className="contentText">
                                    {data4[mappedData]}
                                </div>
                            )}

                            {mappedData === "paragraph5" && (
                                <img ref={(el) => imageRef.current[4] = el} src={quotesImage} alt="icon" className="imageContent" />

                            )}
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default MasculanityContent;