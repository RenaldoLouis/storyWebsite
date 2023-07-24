import React, { useEffect, useState, useContext, useRef } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import Modal from "../../components/molecules/modal";
import { DataContext } from "../../context/DataContext";
import moment from 'moment'
import CommentSection from "../Home/CommentSection";
import { BsShareFill } from "react-icons/bs";
import { MdOutlineComment } from "react-icons/md";
import ReactPlayer from "react-player"


import data from "../../data/content.json"
import data2 from "../../data/content2.json"
import data3 from "../../data/content3.json"
import data4 from "../../data/content4.json"
import data5 from "../../data/content5.json"
import ContentCover from "../Home/ContentCover";
import ShareSection from "../Home/ShareSection";
import OpeningContent from "./OpeningContent";
import TrenContent from "./TrenContent";
import MasculanityContent from "./MasculanityContent";
import MerawatContent from "./MerawatContent";


const Content = () => {
    const { setIsComment, setReplyToId, setReplyToName } = useContext(DataContext)

    const contentRef = useRef(null)

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [datas, setDatas] = useState([]);
    const [viewdatas, setViewDatas] = useState([]);
    const [isViewComment, setIsViewComment] = useState(false);

    const [isReplying, setIsReplying] = useState(false);

    const [isViewShare, setIsViewShare] = useState(false);


    const [isLoading, setIsloading] = useState(false)


    const imageRef1 = useRef([]);

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
        setIsloading(true)
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

        setIsloading(false)
    }


    const handleClickReply = (userName, userId, isCommentNumber) => {
        setReplyToId(userId)
        setReplyToName(userName)
        setIsComment(isCommentNumber)
        setIsReplying(true)
    }

    const executeScroll = () => {
        imageRef1.current[0].scrollIntoView()
    }


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


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated');
                        entry.target.classList.add('animate__fadeInUp');

                    } else {
                        // entry.target.classList.remove('animate__animated');
                        // entry.target.classList.remove('animate__bounceInRight');
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0
            }
        );

        imageRef1.current.forEach((ref) => {
            observer.observe(ref);
        });

        return () => {
            observer.disconnect();

        };
    }, []);

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

            <OpeningContent
                data={data}
                data2={data2}
                contentRef={contentRef}
                imageRef={imageRef1}
            />

            <TrenContent
                data3={data3}
                imageRef={imageRef1}

            />

            <MasculanityContent
                data4={data4}
                imageRef={imageRef1}

            />

            <MerawatContent
                data5={data5}
                imageRef={imageRef1}
            />

            <div class="container col-lg-6 col-12 pt-5 mb-5">


                <div className="player-wrapper">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=cJqFtn56b-g&t=3s&ab_channel=JR_AngelaMarici"
                        className="react-player"
                        width="100%"
                        height="100%"
                        controls={false}
                    />
                </div>

                <img ref={(el) => imageRef1.current[6] = el} src="/picture4.png" alt="icon" className="infographicContent" style={{ marginTop: 16 }} />
                <div className="captionImage">
                    Masalah kulit yang dapat dialami bila lalai merawat kulit. (Dok. Pribadi)
                </div>

                <div style={{ borderTopStyle: "dashed", marginTop: 77, marginBottom: 64 }} />

                <div className="commentButtonOuterContainer" >
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
                isLoading={isLoading}
            />

            <ShareSection
                isViewShare={isViewShare}
                handleCloseShare={handleCloseShare}
            />
        </div>
    )
}

export default Content;