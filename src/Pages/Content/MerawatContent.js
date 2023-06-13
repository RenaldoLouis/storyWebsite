import React, { useEffect, useRef } from "react";

const MerawatContent = (props) => {
    const { data5, imageRef } = props


    return (
        <div style={{ background: "#765B48" }}>
            <div class="container col-lg-6 col-8 pt-5 pb-5">
                <div className="headerSection">
                    Pentingnya Merawat Kulit
                </div>

                <img ref={(el) => imageRef.current[3] = el} src="/picture3.jpg" alt="icon" className="imageContent" />
                <div className="captionImage">
                    Masker menjadi salah satu produk untuk merawat kulit. (Dok. Pribadi)
                </div>

                {Object.keys(data5).map((mappedData) => {
                    return (
                        <>
                            <div className="contentText">
                                {data5[mappedData]}
                            </div>
                            {mappedData === "paragraph7" && (
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
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
                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
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