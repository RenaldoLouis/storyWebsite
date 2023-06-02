import React from "react";


const CommentSection = (props) => {
    const { name, setName, comment, setComment, viewdatas, handleAddComment, handleClickReply, isViewComment } = props;
    return (
        <div className={isViewComment ? "commentContainer" : "commentContainerHide"}>
            <section className="todo-container">
                <div>
                    <h1 className="header">
                        Comments
                    </h1>

                    <div>

                        <div>
                            <form>
                                <label style={{ display: "grid" }}>
                                    Enter your name:
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        style={{ width: "200px" }}
                                    />
                                </label>
                                <label style={{ display: "grid" }}>
                                    Enter your Comment:
                                    <textarea
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        style={{ width: "50vw" }}
                                    />
                                </label>
                            </form>
                        </div>

                        <div className="btn-container">
                            <button
                                type="submit"
                                className="btn"
                                onClick={handleAddComment}
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </section >

            <div className="todo-content">
                {
                    viewdatas?.map((data, i) => (
                        data.map((data2, i) => (
                            <div
                                style={{ marginLeft: 25 * data2.isComment }}>
                                <p key={i}>
                                    {data2.name}
                                </p>
                                <p key={i}>
                                    {data2.comment}
                                </p>
                                <button
                                    className="btn"
                                    type="button"
                                    class="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    onClick={() => handleClickReply(data2.id, data2.isComment)}
                                >
                                    Reply
                                </button>
                            </div>
                        ))
                    ))
                }
            </div>
        </div>
    )
}

export default CommentSection;