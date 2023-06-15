import React from "react";
import quotesImage from "../../assets/images/wiwitQuote.png"

const MasculanityContent = (props) => {
    const {data4, imageRef} = props

    return (
        <div style={{background: "#C2AEA6"}}>
            <div ref={(el) => imageRef.current[3] = el} class="container col-lg-6 col-12 pt-5 pb-5">
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
                            {mappedData === "paragraph1" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    <em className="italicSpacing">
                                        Toxic masculinity
                                    </em>
                                    adalah salah satu stigma yang sering melekat ketika seorang laki-laki menggunakan produk perawatan kulit. Menurut Wiwit Puspitasari Dewi, M.Psi. selaku ahli psikologi menjelaskan bahwa
                                    <em className="italicSpacing">
                                        toxic masculinity
                                    </em>
                                    merupakan nilai-nilai yang diberikan kepada laki-laki untuk mengatur tentang bagaimana seharusnya laki-laki bertindak, sehingga jika seseorang menganut stigma ini akan sulit menerima hal atau aturan baru diluar yang dipahami sebelumnya.
                                </div>
                            ) : mappedData === "paragraph2" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    <em className="italicSpacing">
                                        “Toxic masculinity saat kita punya aturan yang sangat kaku nih, kaku banget tentang seharusnya laki-laki itu seperti apa gitu. Nah, orang yang sangat kaku maka dia akan sulit pastinya untuk menerima hal-hal yang diluar dari yang seharusnya.”
                                    </em>
                                    jelas Wiwit.
                                </div>

                            ) : mappedData === "paragraph3" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    Pengaruh ini juga seringkali membuat laki-laki harus percaya diri akan kondisi kulit, sehingga tidak perlu melakukan perawatan kulit meski sebenarnya kulit juga membutuhkan perawatan agar tetap sehat. Melekatnya pengaruh
                                    <em className="italicSpacing">
                                        toxic masculinity
                                    </em>
                                    menjadi salah satu penyebab munculnya stereotipe terhadap laki-laki yang menggunakan produk perawatan kulit.
                                </div>

                            ) : mappedData === "paragraph4" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    <em className="italicSpacing">
                                        “Kita bilang istilah sekarang agak rules and trick toxic masculinity sehingga akan lebih sulit buat dia untuk menerima bahwa seorang laki-laki itu ternyata tetap perlu juga loh merawat kulit kayak perempuan,”
                                    </em>
                                    tambahnya.
                                </div>
                            ) : mappedData === "paragraph5" ? (
                                <div ref={(el) => imageRef.current[indexData] = el} className="contentText">
                                    Beberapa waktu lalu BMKG mengimbau masyarakat untuk menggunakan sunscreen dengan SPF 30+ untuk menghindari kanker kulit karena cuaca panas yang ekstreem. Biasanya orang yang memiliki pemahaman
                                    <em className="italicSpacing">
                                        toxic masculinity
                                    </em>
                                    sangat kaku dalam menerima imbauan tersebut karena menggunakan sunscreen dapat dianggap sebagai perawatan kulit yang membuat mereka terlihat seperti perempuan. Nyatanya penggunaan produk perawatan kulit tidak berhubungan dengan gender, baik laki-laki maupun perempuan perlu menggunakan produk perawatan kulit untuk merawat kulit.
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