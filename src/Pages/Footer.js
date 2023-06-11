import React from "react";

const Footer = () => {

    return (
        <div className="footer">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div className="headerText-footer" >
                            Rawat Kulit
                        </div>
                        <div className="normalText" style={{ marginBottom: 24 }}>
                            Article Title merupakan tugas akhir penulis sebagai mahasiswa Jurnalistik di Universitas Multimedia Nusantara.
                        </div>

                        <div className="normalText">
                            Copyright © 2022 All Rights Reserved
                        </div>
                    </div>
                    <div class="col" >
                        <div className="headerText-footer">
                            Tentang
                        </div>
                        <div className="normalText" style={{ marginBottom: 24 }}>
                            Ditulis dan diproduksi oleh Angela
                            dengan supervisi Yearry Panji Setianto.
                        </div>
                        <div className="normalText">
                            Copyright © 2022 All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;