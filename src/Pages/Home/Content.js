import React, {useEffect, useState} from "react";
import homeCard from "../../assets/images/spiderman.jpg"
import {collection, addDoc, getDocs} from "firebase/firestore";
import {db} from '../../firebase';

const Content = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "comments"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setTodos(newData);
                console.log(todos, newData);
            })

    }

    useEffect(() => {
        fetchPost();
    }, [])

    const addTodo = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "comments"), {
                comment: todo,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (
        <>
            <img className="home-coverImage" src={homeCard} alt="Italian Trulli" />
            <div class="container">
                <div class="row">
                    <div class="col">
                        1 of 2
                    </div>
                    <div class="col">
                        2 of 2
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        1 of 3
                    </div>
                    <div class="col">
                        2 of 3
                    </div>
                    <div class="col">
                        3 of 3
                    </div>
                </div>

                <div class="row">
                    <div class="col align-self-start">
                        One of three columns
                    </div>
                    <div class="col align-self-center">
                        One of three columns
                    </div>
                    <div class="col align-self-end">
                        One of three columns
                    </div>
                </div>
            </div>

            <section className="todo-container">
                <div className="todo">
                    <h1 className="header">
                        Todo-App
                    </h1>

                    <div>

                        <div>
                            <input
                                type="text"
                                placeholder="What do you have to do today?"
                                onChange={(e) => setTodo(e.target.value)}
                            />
                        </div>

                        <div className="btn-container">
                            <button
                                type="submit"
                                className="btn"
                                onClick={addTodo}
                            >
                                Submit
                            </button>
                        </div>

                    </div>

                    <div className="todo-content">
                        ...
                    </div>
                </div>
            </section>

            <div className="todo-content">
                {
                    todos?.map((todo, i) => (
                        <p key={i}>
                            {todo.comment}
                        </p>
                    ))
                }
            </div>
        </>
    )
}

export default Content;