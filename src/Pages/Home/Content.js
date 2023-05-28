import React, {useEffect, useState, useContext} from "react";
import homeCard from "../../assets/images/spiderman.jpg"
import {collection, addDoc, getDocs} from "firebase/firestore";
import {db} from '../../firebase';
import data from "../../data/content.json"
import {toast} from 'react-toastify';
import Modal from "../../components/molecules/modal";
import {DataContext} from "../../context/DataContext";
import moment from 'moment'



const Content = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [datas, setDatas] = useState([]);
    const [viewdatas, setViewDatas] = useState([]);

    const {setIsComment, setReplyToId} = useContext(DataContext)


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
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    const handleClickReply = (userId, isCommentNumber) => {
        console.log("isCommentNumber", isCommentNumber)
        setReplyToId(userId)
        setIsComment(isCommentNumber)
    }

    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
            const key = obj[property];
            const curGroup = acc[key] ?? [];

            return {...acc, [key]: [...curGroup, obj]};
        }, {});
    }





    useEffect(() => {
        if (datas.length > 0) {
            console.log('datas', datas)

            // const groupedArray = datas.reduce((acc, obj) => {
            //     const replyToId = obj.replyToId;
            //     if (replyToId) {
            //         const existingGroup = acc.find(group => group.replyToId === replyToId);
            //         if (existingGroup) {
            //             existingGroup.objects.push(obj);
            //         } else {
            //             acc.push({replyToId, objects: [obj]});
            //         }
            //     }
            //     return acc;
            // }, []);



            // Create a map of objects by their id
            const idMap = datas.reduce((map, obj) => {
                map[obj.id] = obj;
                return map;
            }, {});

            console.log("idMap", idMap)
            // Group objects based on their replyToId
            const groupedArray = datas.reduce((acc, obj) => {
                const replyToId = obj.replyToId;
                if (replyToId) {
                    console.log("masuk replyToId")
                    const parentObj = idMap[replyToId];
                    console.log("parentObj", parentObj)
                    if (parentObj) {
                        console.log("parentObj.objects", parentObj.objects)
                        parentObj.objects = parentObj.objects || [];
                        console.log("parentObj.objects 2", parentObj.objects)
                        parentObj.objects.push(obj);
                    } else {
                        console.log("obj no matching parent", obj)
                        acc.push(obj); // Objects with replyToId but no matching parent are added to the groupedArray
                    }
                } else {
                    console.log("masuk else", obj)
                    acc.push(obj);
                }
                return acc;
            }, []);

            setViewDatas(groupedArray)
        }
    }, [datas])

    console.log("viewdatas", viewdatas)

    return (
        <>
            <Modal />
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
                    viewdatas?.map((data, i) => (
                        <div
                            style={{marginLeft: 25 * data.isComment}}>
                            <p key={i}>
                                {data.name}
                            </p>
                            <p key={i}>
                                {data.comment}
                            </p>
                            <button
                                className="btn"
                                type="button"
                                class="btn btn-primary"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                onClick={() => handleClickReply(data.id, data.isComment)}
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