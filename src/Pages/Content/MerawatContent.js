import React from "react";

const MerawatContent = (props) => {
    const {data5, imageRef} = props

    return (
        <div style={{background: "#765B48"}}>
            <div ref={(el) => imageRef.current[5] = el} class="container col-lg-6 col-8 pt-5 pb-5">
                <div className="headerSection" style={{color: "white"}}>
                    Pentingnya Merawat Kulit
                </div>

                <img src="/picture3.jpg" alt="icon" className="imageContent" />
                <div className="captionImage" style={{color: "white"}}>
                    Masker menjadi salah satu produk untuk merawat kulit. (Dok. Pribadi)
                </div>

                {Object.keys(data5).map((mappedData, index) => {
                    let indexData = index + 38
                    return (
                        <>
                            {mappedData === "paragraph4" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText" style={{color: "white"}}>
                                    <em className="italicSpacing">
                                        “Biasa kalau udah munculnya tebel atau parah begitu juga untuk flek atau keluhan lain dia akan semakin susah untuk diobati. Jadi, perlu lebih banyak lagi treatment yang perlu dijalanin lagi selanjutnya,”
                                    </em>
                                    ungkap dr. Indri.
                                </div>
                            ) :
                                mappedData === "paragraph7" ? (
                                    <div ref={(el) => imageRef.current[indexData] = el} className="contentText" style={{color: "white"}}>
                                        Apabila ingin memiliki kulit sehat perlu melakukan berbagai tahapan
                                        <em className="italicSpacing">
                                            skincare,
                                        </em>
                                        seperti:
                                    </div>
                                ) :
                                    mappedData === "paragraph8" ? (
                                        <div ref={(el) => imageRef.current[indexData] = el} className="contentText" style={{color: "white"}}>
                                            Meski penggunaan
                                            <em className="italicSpacing">
                                                skincare
                                            </em>
                                            untuk laki-laki di Indonesia masih tergolong sedikit, namun ada beberapa masyarakat yang sudah mulai rutin menggunakan
                                            <em className="italicSpacing">
                                                skincare.
                                            </em>
                                            Hal ini terjadi karena kesadaran akan pentingnya merawat dan menjaga kesehatan kulit. Kesadaran tersebut harus terus dipertahankan mengingat perawatan kulit bisa menjadi investasi jangka panjang meski hasilnya tidak signifikan, namun manfaatnya akan terasa seiring dengan bertambahnya usia.
                                        </div>
                                    ) :
                                        (
                                            <div ref={(el) => imageRef.current[indexData] = el} className="contentText" style={{color: "white"}}>
                                                {data5[mappedData]}
                                            </div>
                                        )}

                            {mappedData === "paragraph7" && (
                                <div ref={(el) => imageRef.current[9] = el} id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src="carousel1.png" alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="carousel2.png" alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="carousel3.png" alt="Third slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="carousel4.png" alt="Third slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="carousel5.png" alt="Third slide" />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            )}
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default MerawatContent;