import React, {useContext, useState} from "react";
import {collection, addDoc, getDocs} from "firebase/firestore";
import {db} from '../../firebase';
import {toast} from 'react-toastify';
import {DataContext} from "../../context/DataContext";
import moment from 'moment'


const Modal = () => {

    const {isComment, replyToId} = useContext(DataContext)


    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleReply = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "comments"), {
                name,
                comment,
                isComment: isComment + 1,
                replyToId,
                date: moment().format()
            });
            toast.success("Wow so easy!")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
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
                                Enter your Reply:
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </label>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={handleReply}>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
