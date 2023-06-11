import React, { useContext, useState } from "react";
import moment from 'moment'
import { DataContext } from "../../context/DataContext";
import { toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';

const ShareSection = (props) => {

    const { isViewShare, handleCloseShare } = props;

    const handleClickShare = () => {
        navigator.clipboard.writeText("RawatKulit.id")
        toast.success("Copied to clipboard!")
    }

    return (
        <div className={isViewShare ? "shareContainer" : "shareContainerHide"}>
            <section>
                <div>
                    <h1 className="commentHeader">
                        Share
                    </h1>

                    <div style={{ padding: "0px 42px 0px 42px" }}>

                        <div>
                            <input
                                className={`${"form-control"} ${"InputContainer"}`}
                                type="text"
                                value="RawatKulit.id"
                                disabled={true}
                                placeholder="Enter Your Name"
                                style={{ width: 339 }}
                            />
                        </div>

                        <div style={{ display: "flex" }}>
                            <div className="submitButton">
                                <button
                                    type="submit"
                                    className="btn"
                                    onClick={handleClickShare}
                                >
                                    <div style={{ color: "white" }}>
                                        Share
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </div>
    )
}

export default ShareSection;