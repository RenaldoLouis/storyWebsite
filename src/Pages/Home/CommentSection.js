import React from "react";
import moment from 'moment'

const CommentSection = (props) => {
    const {name, setName, comment, setComment, viewdatas, handleAddComment, handleClickReply, isViewComment} = props;

    console.log("viewdatas", viewdatas)

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
                        data.map((data2, i) => (
                            <div style={{display: "flex", marginLeft: 25 * data2.isComment, marginBottom: 8}}>
                                {data2.isComment > 0 && (
                                    <div className="straightLine" />
                                )}
                                <div>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <span key={i}>
                                            {data2.name}
                                        </span>
                                        <span className="dot"></span>
                                        <span key={i}>
                                            {moment(data2.date).format('DD MMM YYYY')}
                                        </span>
                                    </div>
                                    <p key={i}>
                                        {data2.comment}
                                    </p>
                                    <button
                                        className="btn"
                                        type="button"
                                        class="btn btn-primary"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        onClick={() => handleClickReply(data2.name, data2.id, data2.isComment)}
                                    >
                                        Reply
                                    </button>
                                </div>
                            </div>
                        ))
                    ))
                }
            </div>
        </div>
    )
}

export default CommentSection;