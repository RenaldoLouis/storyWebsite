import React from "react";


const TrenContent = (props) => {
    const { data3, imageRef } = props
    return (
        <div style={{ background: "#FFF3EF" }}>
            <div class="container col-lg-6 col-8 pt-5 pb-5">
                <div className="headerSection">
                    Tren Merawat Kulit
                </div>

                <img ref={(el) => imageRef.current[1] = el} src="/picture1.jpg" alt="icon" className="imageContent" />
                <div className="captionImage">
                    Potret seorang perempuan sedang menggunakan produk perawatan kulit. (Dok. Pribadi)
                </div>

                {Object.keys(data3).map((mappedData) => {
                    return (
                        <div className="contentText">
                            {data3[mappedData]}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TrenContent;