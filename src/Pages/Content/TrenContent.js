import React from "react";


const TrenContent = (props) => {
    const {data3, imageRef} = props
    return (
        <div style={{background: "#FFF3EF"}}>
            <div ref={(el) => imageRef.current[2] = el} class="container col-lg-6 col-8 pt-5 pb-5">
                <div className="headerSection">
                    Tren Merawat Kulit
                </div>

                <img src="/picture1.jpg" alt="icon" className="imageContent" />
                <div className="captionImage">
                    Potret seorang perempuan sedang menggunakan produk perawatan kulit. (Dok. Pribadi)
                </div>

                {Object.keys(data3).map((mappedData) => {
                    return (
                        <>
                            <div className="contentText">
                                {data3[mappedData]}
                            </div>
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