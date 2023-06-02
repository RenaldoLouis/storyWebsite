import React, { useEffect, useState, useContext, useRef } from "react";
import homeCard from "../../assets/images/spiderman.jpg"
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import data from "../../data/content.json"
import { toast } from 'react-toastify';
import Modal from "../../components/molecules/modal";
import { DataContext } from "../../context/DataContext";
import moment from 'moment'
import ContentCover from "./ContentCover";



const Content = () => {
    const contentRef = useRef(null)

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [datas, setDatas] = useState([]);
    const [viewdatas, setViewDatas] = useState([]);

    const { setIsComment, setReplyToId } = useContext(DataContext)


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

        try {
            await addDoc(collection(db, "comments"), {
                name,
                comment,
                isComment: 0,
                date: moment().format()
            });
            toast.success("Wow so easy!")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    const handleClickReply = (userId, isCommentNumber) => {
        setReplyToId(userId)
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

    return (
        <>
            <Modal />
            <ContentCover executeScroll={executeScroll} />
            <div ref={contentRef} class="container col-lg-8 col-10 pt-5 mb-5">
                <div>
                    {data.paragraph1}
                </div>
            </div>

            <video style={{ width: "50vw" }} controls width="100%">
                <source src="/video1.mp4" type="video/mp4"
                />
                Sorry, your browser doesn't support videos.
            </video>

            <audio controls>
                <source src="/audio1.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <section className="todo-container">
                <div className="todo">
                    <h1 className="header">
                        Todo-App
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
        </>
    )
}

export default Content;