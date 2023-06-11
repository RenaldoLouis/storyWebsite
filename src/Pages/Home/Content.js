import React, { useEffect, useState, useContext, useRef } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import Modal from "../../components/molecules/modal";
import { DataContext } from "../../context/DataContext";
import moment from 'moment'
import CommentSection from "./CommentSection";
import { BsShareFill } from "react-icons/bs";
import { MdOutlineComment } from "react-icons/md";


import data from "../../data/content.json"
import data2 from "../../data/content2.json"
import data3 from "../../data/content3.json"
import data4 from "../../data/content4.json"
import data5 from "../../data/content5.json"
import ContentCover from "./ContentCover";
import ShareSection from "./ShareSection";


const Content = () => {
    const contentRef = useRef(null)

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [datas, setDatas] = useState([]);
    const [viewdatas, setViewDatas] = useState([]);
    const [isViewComment, setIsViewComment] = useState(false);

    const [isReplying, setIsReplying] = useState(false);

    const [isViewShare, setIsViewShare] = useState(false);

    const { setIsComment, setReplyToId, setReplyToName } = useContext(DataContext)


    const fetchPost = async () => {
        await getDocs(collection(db, "comments"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setDatas(newData);
            })
    }

    useEffect(() => {
        fetchPost();
    }, [])

    const handleAddComment = async (e) => {
        e.preventDefault();

        if (name === "" || comment === "") {
            toast.error("Please fill the field!")
            return;
        }

        try {
            await addDoc(collection(db, "comments"), {
                name,
                comment,
                isComment: 0,
                date: moment().format()
            });
            toast.success("Thank you for your input!")
            fetchPost();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    const handleClickReply = (userName, userId, isCommentNumber) => {
        setReplyToId(userId)
        setReplyToName(userName)
        setIsComment(isCommentNumber)
        setIsReplying(true)
    }

    const executeScroll = () => contentRef.current.scrollIntoView()


    useEffect(() => {
        if (datas.length > 0) {

            const sortedArray = datas.sort((a, b) => new Date(a.date) - new Date(b.date));

            const groupedArray = sortedArray.reduce((acc, obj) => {
                const replyToId = obj.replyToId;
                const parentArray = acc.find(arr => arr.some(item => item.id === replyToId));
                if (parentArray) {
                    parentArray.push(obj);
                } else {
                    acc.push([obj]);
                }
                return acc;
            }, []);

            setViewDatas(groupedArray)
        }
    }, [datas])

    const handleShowComment = () => {
        setIsViewComment(true);
    }

    const handleCloseComment = () => {
        setIsViewComment(false);
    }

    const handleShowShare = () => {
        setIsViewShare(true)
    }

    const handleCloseShare = () => {

        setIsViewShare(false)
    }

    return (
        <div style={{ position: "relative" }}>
            {isViewComment && (
                <div className="backdrop" onClick={handleCloseComment} />
            )}
            {isViewShare && (
                <div className="backdrop" onClick={handleCloseShare} />
            )}
            <Modal fetchPost={fetchPost} />
            <ContentCover executeScroll={executeScroll} />
            <div ref={contentRef} class="container col-lg-8 col-10 pt-5 mb-5">
                <div className="contentText">
                    "Kamu ni kayak cewek aja pake skincare"
                </div>
                <div className="familyInter" style={{ marginBottom: 16, fontSize: 24, fontWeight: 400 }}>
                    "Ngapain skincare-an lemah kulitmu"
                </div>
                <div className="familyInter" style={{ fontSize: 24, fontWeight: 400 }}>
                    "Gak usah aneh-aneh kamu tu cowok"
                </div>
                {Object.keys(data).map((mappedData) => {
                    return (
                        <div className="contentText">
                            {data[mappedData]}
                        </div>
                    )
                })}

                <img src="/twitter.jpeg" alt="icon" className="imageContent" />

                {Object.keys(data2).map((mappedData) => {
                    return (
                        <div className="contentText">
                            {data2[mappedData]}
                        </div>
                    )
                })}

                <audio controls className="imageContent">
                    <source src="/audio1.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <div className="headerSection">
                    Tren Merawat Kulit
                </div>

                <img src="/picture1.jpg" alt="icon" className="imageContent" />

                {Object.keys(data3).map((mappedData) => {
                    return (
                        <div className="contentText">
                            {data3[mappedData]}
                        </div>
                    )
                })}

                <div className="headerSection">
                    Pengaruh Toxic Masculinity
                </div>

                <img src="/picture2.jpg" alt="icon" className="imageContent" />

                {Object.keys(data4).map((mappedData) => {
                    return (
                        <div className="contentText">
                            {data4[mappedData]}
                        </div>
                    )
                })}

                <div className="headerSection">
                    Pentingnya Merawat Kulit
                </div>

                <img src="/picture3.jpg" alt="icon" className="imageContent" />

                {Object.keys(data5).map((mappedData) => {
                    return (
                        <div className="contentText">
                            {data5[mappedData]}
                        </div>
                    )
                })}

                <video style={{ width: "100%" }} controls className="imageContent">
                    <source src="/video1.mp4" type="video/mp4"
                    />
                    Sorry, your browser doesn't support videos.
                </video>

                <img src="/picture4.png" alt="icon" className="infographicContent" style={{ marginTop: 16 }} />

                <div style={{ borderTopStyle: "dashed", marginTop: 77, marginBottom: 64 }} />

                <div style={{ display: "flex" }}>
                    <button className="commentButtonContainer" onClick={handleShowComment}>
                        <MdOutlineComment style={{ width: 16, height: 16, marginRight: 8 }} />
                        Comments
                        <div style={{ borderRadius: 100, background: "rgba(217, 217, 217, 0.5)", paddingTop: 3, marginLeft: 8, width: 35, height: 35 }}>
                            {viewdatas.length}
                        </div>
                    </button>

                    <button className="commentButtonContainer" onClick={handleShowShare} style={{ marginLeft: 25 }}>
                        <BsShareFill style={{ width: 16, height: 16, marginRight: 8 }} />
                        Share
                    </button>
                </div>
            </div >

            <CommentSection
                name={name}
                setName={setName}
                comment={comment}
                setComment={setComment}
                viewdatas={viewdatas}
                handleAddComment={handleAddComment}
                handleClickReply={handleClickReply}
                isViewComment={isViewComment}
                setIsReplying={setIsReplying}
                isReplying={isReplying}
                fetchPost={fetchPost}
                handleCloseComment={handleCloseComment}
            />

            <ShareSection
                isViewShare={isViewShare}
                handleCloseShare={handleCloseShare}
            />
        </div>
    )
}

export default Content;