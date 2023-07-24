import React from "react";
import { toast } from 'react-toastify';

const ShareSection = (props) => {

    const { isViewShare } = props;

    const handleClickShare = () => {
        navigator.clipboard.writeText("rawatkulit.id")
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
                                value="rawatkulit.id"
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
                                        Copy Link
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