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
                            Rawat Kulit merupakan sebuah karya jurnalistik berbasis website yang dibuat untuk memenuhi tugas akhir di Universitas Multimedia Nusantara. Karya ini dibuat dan diproduksi oleh Angela Marici dengan bimbingan dari Anton Wisnu Nugroho, S.S., M.Si.
                        </div>
                        <div className="normalText">
                            Copyright © 2023 All Rights Reserved
                        </div>
                    </div>
                    <div class="col emptyFooter" >
                        {/* <div className="headerText-footer">
                            Tentang
                        </div>
                        <div className="normalText" style={{ marginBottom: 24 }}>
                            Ditulis dan diproduksi oleh Angela
                            dengan supervisi Yearry Panji Setianto.
                        </div>
                        <div className="normalText">
                            Copyright © 2023 All Rights Reserved
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;