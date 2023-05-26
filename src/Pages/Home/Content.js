import React, {useEffect, useState} from "react";
import homeCard from "../../assets/images/spiderman.jpg"
import {collection, addDoc, getDocs} from "firebase/firestore";
import {db} from '../../firebase';
import data from "../../data/content.json"
import {toast} from 'react-toastify';


const Content = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [datas, setDatas] = useState([]);

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
            });
            toast.success("Wow so easy!")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const handleReply = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "comments"), {
                name,
                comment,
            });
            toast.success("Wow so easy!")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    return (
        <>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <img className="home-coverImage" src={homeCard} alt="Italian Trulli" />
            <div class="container">
                <div>
                    {data.paragraph1}
                </div>
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

            <section className="todo-container">
                <div className="todo">
                    <h1 className="header">
                        Todo-App
                    </h1>

                    <div>

                        <div>
                            <form>
                                <label style={{display: "grid"}}>
                                    Enter your name:
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        style={{width: "200px"}}
                                    />
                                </label>
                                <label style={{display: "grid"}}>
                                    Enter your Comment:
                                    <textarea
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        style={{width: "50vw"}}
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
                    datas?.map((data, i) => (
                        <div>
                            <p key={i}>
                                {data.name}
                            </p>
                            <p key={i}>
                                {data.comment}
                            </p>
                            <button
                                type="submit"
                                className="btn"
                                onClick={handleReply}
                            >
                                Reply
                            </button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Content;