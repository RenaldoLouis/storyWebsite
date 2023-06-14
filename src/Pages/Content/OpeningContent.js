import React from "react";


const OpeningContent = (props) => {
    const {data, data2, imageRef} = props


    return (
        <div style={{background: "#F9F9F9"}}>
            <div ref={(el) => imageRef.current[0] = el} class="container col-lg-6 col-8 pt-5 pb-5 mt-5">
                <div className="contentText">
                    <em>
                        "Kamu ni kayak cewek aja pake skincare"
                    </em>
                </div>
                <div className="familyInter" style={{marginBottom: 60, fontSize: 20, fontWeight: 400}}>
                    <em>
                        "Ngapain skincare-an lemah kulitmu"
                    </em>
                </div>
                <div className="familyInter" style={{fontSize: 20, fontWeight: 400}}>
                    <em>
                        "Gak usah aneh-aneh kamu tu cowok"
                    </em>
                </div>
                {Object.keys(data).map((mappedData, index) => {
                    let indexData = index + 11

                    return (
                        <>
                            {mappedData === "paragraph3" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    <em>
                                        {data[mappedData]}
                                    </em>
                                </div>
                            ) : (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    {data[mappedData]}
                                </div>
                            )

                            }


                        </>
                    )
                })}

                <img ref={(el) => imageRef.current[1] = el} src="/twitter.jpeg" alt="icon" className="imageContent" />
                <div className="captionImage">
                    Salah satu cuitan di Twitter terkait penggunaan skincare untuk laki-laki. (Sumber: Twitter)
                </div>

                {Object.keys(data2).map((mappedData, index) => {
                    let indexData = index + 18
                    return (
                        <>
                            {mappedData === "paragraph3" || mappedData === "paragraph5" || mappedData === "paragraph7" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    <em>
                                        {data2[mappedData]}
                                    </em>
                                </div>
                            ) : (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    {data2[mappedData]}
                                </div>
                            )}

                            {mappedData === "paragraph3" && (
                                <>
                                    <div ref={(el) => imageRef.current[7] = el} className="audioContainer">
                                        <img className="audioImage" src="/audioImage2.jpg" alt="rawatKulit" />
                                        <div className="audioImageWhiteSpace" />
                                        <audio controls className="imageContent">
                                            <source src="/audio1.mp3" type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                        <div className="captionImage">
                                            Stereotipe menurut Ahli Psikolog Wiwit Puspitasari Dewi, M.Psi.
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default OpeningContent;