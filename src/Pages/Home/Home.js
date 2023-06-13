import React from "react";
import Navbar from "../../components/atom/navbar";
import Footer from "../Footer";
import {motion} from "framer-motion";
import Content from "../Content/Content";

const Home = () => {
    return (
        <motion.div
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1, ease: [0.6, -0.05, 0.01, 0.99]}}

        >
            <div>
                <Navbar />
                <Content />
                <Footer />
            </div>
        </motion.div>
    )
}

export default Home;