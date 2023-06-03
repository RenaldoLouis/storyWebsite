import React, {useEffect, useState, useContext, useRef} from "react";
import {collection, addDoc, getDocs} from "firebase/firestore";
import {db} from '../../firebase';
import data from "../../data/content.json"
import {toast} from 'react-toastify';
import Modal from "../../components/molecules/modal";
import {DataContext} from "../../context/DataContext";
import moment from 'moment'
import ContentCover from "./ContentCover";
import CommentSection from "./CommentSection";
import {BsShareFill} from "react-icons/bs";
import {MdOutlineComment} from "react-icons/md";


const Content = () => {
    const contentRef = useRef(null)

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [datas, setDatas] = useState([]);
    const [viewdatas, setViewDatas] = useState([]);
    const [isViewComment, setIsViewComment] = useState(false);

    const {setIsComment, setReplyToId, setReplyToName} = useContext(DataContext)


    const fetchPost = async () => {
        await getDocs(collection(db, "comments"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setDatas(newData);
            })
    }

    useEffect(() => {
        fetchPost();
    }, [])

    const handleAddComment = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "comments"), {
                name,
                comment,
                isComment: 0,
                date: moment().format()
            });
            toast.success("Wow so easy!")
            fetchPost();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    const handleClickReply = (userName, userId, isCommentNumber) => {
        setReplyToId(userId)
        setReplyToName(userName)
        setIsComment(isCommentNumber)
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

    return (
        <div style={{position: "relative"}}>
            {isViewComment && (
                <div className="backdrop" onClick={handleCloseComment} />
            )}
            <Modal fetchPost={fetchPost} />
            <ContentCover executeScroll={executeScroll} />
            <div ref={contentRef} class="container col-lg-8 col-10 pt-5 mb-5">
                <div>
                    {data.paragraph1}
                </div>

                <video style={{width: "50vw"}} controls width="100%">
                    <source src="/video1.mp4" type="video/mp4"
                    />
                    Sorry, your browser doesn't support videos.
                </video>

                <audio controls>
                    <source src="/audio1.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <div style={{borderTopStyle: "dashed", marginTop: 77, marginBottom: 64}} />

                <div style={{display: "flex"}}>
                    <button className="commentButtonContainer" onClick={handleShowComment}>
                        <MdOutlineComment style={{width: 16, height: 16, marginRight: 8}} />
                        Comments
                        <div style={{borderRadius: 100, background: "rgba(217, 217, 217, 0.5)", paddingTop: 3, marginLeft: 8, width: 35, height: 35}}>
                            {viewdatas.length}
                        </div>
                    </button>

                    <button className="commentButtonContainer" onClick={executeScroll} style={{marginLeft: 25}}>
                        <BsShareFill style={{width: 16, height: 16, marginRight: 8}} />
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
            />
        </div>
    )
}

export default Content;