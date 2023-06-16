import React from "react";


const TrenContent = (props) => {
    const {data3, imageRef} = props

    return (
        <div style={{background: "#FFF3EF"}}>
            <div ref={(el) => imageRef.current[2] = el} class="container col-lg-6 col-12 pt-5 pb-5">
                <div className="headerSection">
                    Tren Merawat Kulit
                </div>

                <img src="/picture1.jpg" alt="icon" className="imageContent" />
                <div className="captionImage">
                    Potret seorang perempuan sedang menggunakan produk perawatan kulit. (Dok. Pribadi)
                </div>

                {Object.keys(data3).map((mappedData, index) => {
                    let indexData = index + 25

                    return (
                        <>
                            {mappedData === "paragraph1" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    Selama masa pandemi Covid-19 merawat kulit menjadi tren yang diminati oleh sebagian besar masyarakat, terutama kaum hawa. Berdasarkan survei dari
                                    <em className="italicSpacing">
                                        Beauty Trends 2021
                                    </em>
                                    yang dilakukan oleh Jakpat menunjukkan bahwa penggunaan
                                    <em className="italicSpacing">
                                        skincare
                                    </em>
                                    di kalangan perempuan sebesar 93 persen, sementara di kalangan laki-laki hanya 46 persen.
                                </div>
                            )
                                :
                                mappedData === "paragraph3" ? (
                                    <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                        <em className="italicSpacingStart">
                                            “Masalah kulit seperti jerawat, flek tidak hanya terjadi kepada perempuan, malah mayoritas jenis kulit laki-laki lebih thick, berminyak daripada perempuan sehingga lebih sering mengalami masalah jerawat atau komedo jadi ada baiknya jika laki-laki juga merawat kulit wajah,”
                                        </em>
                                        kata dr. Jay Mithila.
                                    </div>
                                ) :
                                    mappedData === "paragraph6" ? (
                                        <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                            Dalam pengamatannya selama menjadi dokter estetika, laki-laki cenderung lebih malu mengunjungi klinik kecantikan untuk sekadar melakukan perawatan kulit dan menggunakan
                                            <em className="italicSpacing">
                                                skincare.
                                            </em>
                                            Menurutnya hal ini terjadi karena stigma dan stereotipe yang masih melekat pada masyarakat, sehingga membuat mereka merasa malu untuk mulai menjaga kesehatan kulit.
                                        </div>
                                    )

                                        : (
                                            <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                                {data3[mappedData]}
                                            </div>
                                        )}

                            {mappedData === "paragraph3" && (
                                <>
                                    <div ref={(el) => imageRef.current[8] = el} id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="type1.png" alt="First slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="type2.png" alt="Second slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="type3.png" alt="Third slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="type4.png" alt="Third slide" />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
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

export default TrenContent;