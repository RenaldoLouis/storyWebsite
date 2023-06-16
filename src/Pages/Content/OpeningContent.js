import React from "react";


const OpeningContent = (props) => {
    const {data, data2, imageRef} = props


    return (
        <div style={{background: "#F9F9F9"}}>
            <div ref={(el) => imageRef.current[0] = el} class="container col-lg-6 col-12 pt-5 pb-5 mt-5">
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
                                    <em className="italicSpacingStart">
                                        “Dulu sering dibilang hitam kayak orang Timur, terus dibilang gak mirip sama orangtua karna mereka putih,“
                                    </em>
                                    ujar Delon.
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
                    Salah satu cuitan di Twitter terkait penggunaan
                    <em>
                        skincare
                    </em>
                    untuk laki-laki. (Sumber: Twitter)
                </div>

                {Object.keys(data2).map((mappedData, index) => {
                    let indexData = index + 18
                    return (
                        <>
                            {mappedData === "paragraph3" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    <em className="italicSpacingStart">
                                        “Tindakan merawat kulit itu dianggap sebagai sesuatu yang tidak maskulin, bisa aja mungkin ga cuman merawat kulit. Contohnya mungkin ada sifat melekat pada laki-laki itu misalnya seperti laki-laki harus kuat tahan banting.”
                                    </em>
                                    ujarnya.
                                </div>
                            ) :
                                mappedData === "paragraph5" ? (
                                    <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                        <em className="italicSpacingStart">
                                            “Biasa pake basic skincare karena udah cocok dan hasilnya kulit jadi lebih sehat dibandingkan sebelum pake skincare,”
                                        </em>
                                        ungkap laki-laki berumur 20 tahun ini.
                                    </div>
                                ) :
                                    mappedData === "paragraph7" ? (
                                        <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                            <em className="italicSpacingStart">
                                                “Saya selalu memberikan edukasi kepada pasien-pasien tentang pentingnya merawat kulit seperti facial rutin, memakai skincare seperti sunscreen dan moisturizer, dan tidak lupa pentingnya minum air yang cukup dan makan makanan sehat.”
                                            </em>
                                            katanya.
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