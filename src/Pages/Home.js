import React from "react";
import Navbar from "../components/atom/navbar";
import homeCard from "../assets/images/spiderman.jpg"

const Home = () => {
    return (
        <div>
            <Navbar />
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
            <div className="footer">
                <p>Footer</p>
            </div>
        </div>
    )
}

export default Home;