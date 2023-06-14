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

                {Object.keys(data4).map((mappedData, index) => {
                    let indexData = index + 30

                    return (
                        <>
                            {mappedData === "paragraph2" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    <em className="italicSpacing">
                                        “Toxic masculinity saat kita punya aturan yang sangat kaku nih, kaku banget tentang seharusnya laki-laki itu seperti apa gitu. Nah, orang yang sangat kaku maka dia akan sulit pastinya untuk menerima hal-hal yang diluar dari yang seharusnya.”
                                    </em>
                                    jelas Wiwit.
                                </div>
                            ) : mappedData === "paragraph4" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    <em className="italicSpacing">
                                        “Kita bilang istilah sekarang agak rules and trick toxic masculinity sehingga akan lebih sulit buat dia untuk menerima bahwa seorang laki-laki itu ternyata tetap perlu juga loh merawat kulit kayak perempuan,”
                                    </em>
                                    tambahnya.
                                </div>
                            ) : mappedData === "paragraph8" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    <em className="italicSpacing">
                                        “Penggunaan produk perawatan kulit pada laki-laki ini akan terkait juga dengan lingkungan di sekitarnya seperti apa, maka nantinya menurut saya gitu jika semakin banyak informasi atau semakin banyak edukasi gitu bahwa perawatan kulit gapapa dilakukan oleh laki-laki mungkin juga akan menggeser pemahaman seseorang bahwa perawatan kulit itu tidak hanya untuk perempuan gitu,”
                                    </em>
                                    tutup Wiwit.
                                </div>
                            ) : (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
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