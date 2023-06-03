import React, {useContext} from "react";
import moment from 'moment'
import {DataContext} from "../../context/DataContext";


const CommentSection = (props) => {
    const {replyToId, setReplyToId} = useContext(DataContext)

    const {name, setName, comment, setComment, viewdatas, handleAddComment, handleClickReply, isViewComment, isReplying} = props;


    const handleCancelReplying = () => {
        setReplyToId(null)
    }

    return (
        <div className={isViewComment ? "commentContainer" : "commentContainerHide"}>
            <section>
                <div>
                    <h1 className="commentHeader">
                        Comments
                    </h1>

                    <div style={{padding: "0px 42px 0px 42px"}}>

                        <div>
                            <input
                                className={`${"form-control"} ${"InputContainer"}`}
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Your Name"
                                style={{width: 339}}
                            />
                            <textarea
                                className={`${"form-control"} ${"InputContainer"}`}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Enter your Comment"
                                style={{width: "100%"}}
                            />
                        </div>

                        <div className="submitButton">
                            <button
                                type="submit"
                                className="btn"
                                onClick={handleAddComment}
                            >
                                <div style={{color: "white"}}>
                                    Comment
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </section >

            <div className="commentContentContainer">
                {
                    viewdatas?.map((data, i) => (
                        data.map((data2, i) => {
                            return (
                                <div style={{display: "flex", marginLeft: 25 * data2.isComment, marginBottom: 8}}>
                                    {data2.isComment > 0 && (
                                        <div className="straightLine" />
                                    )}
                                    <div>
                                        <div style={{display: "flex", alignItems: "center"}}>
                                            <div key={i} className="commentName">
                                                {data2.name}
                                            </div>
                                            <span className="dot"></span>
                                            <span key={i} className="commentDateCreated">
                                                {moment(data2.date).format('DD MMM YYYY')}
                                            </span>
                                        </div>
                                        <div key={i} className="commentContent">
                                            {data2.comment}
                                        </div>
                                        {isReplying && data2.id === replyToId ? (
                                            <>
                                                <div>
                                                    <input
                                                        className={`${"form-control"} ${"InputContainer"}`}
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        placeholder="Enter Your Name"
                                                        style={{width: 339}}
                                                    />
                                                    <textarea
                                                        className={`${"form-control"} ${"InputContainer"}`}
                                                        value={comment}
                                                        onChange={(e) => setComment(e.target.value)}
                                                        placeholder="Enter your Comment"
                                                        style={{width: "100%"}}
                                                    />
                                                </div>

                                                <div style={{display: "flex"}}>
                                                    <div className="submitButton">
                                                        <button
                                                            type="submit"
                                                            className="btn"
                                                            onClick={handleAddComment}
                                                        >
                                                            <div style={{color: "white"}}>
                                                                Comment
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="cancelButton">
                                                        <button
                                                            type="submit"
                                                            className="btn"
                                                            onClick={handleCancelReplying}
                                                        >
                                                            <div style={{color: "black"}}>
                                                                Cancel
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                            : (
                                                <button
                                                    className="replyButton"
                                                    type="button"
                                                    // data-toggle="modal"
                                                    data-target="#exampleModal"
                                                    onClick={() => handleClickReply(data2.name, data2.id, data2.isComment)}
                                                >
                                                    <div className="replyText">
                                                        Reply
                                                    </div>
                                                </button>
                                            )}

                                    </div>
                                </div>
                            )
                        }
                        )
                    ))
                }
            </div>
        </div>
    )
}

export default CommentSection;