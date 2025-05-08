import React from "react";
import './Home.css';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import dev from '../../assets/dev.png'

function Home() {
    const navigate = useNavigate(); // React Router hook

    const handleClick = () => {
        console.log("Связаться с нами кнопка нажата");
        navigate('/contactus'); // Navigate to contact page
    };

    return (
        <div className="home-wrapper">
            <div className="home-content-wrapper">
                <div className="text-section">
                    <p>
                        <span>DevSphere</span> - это онлайн IT-компания,
                        которая занимается разработкой веб-сайтов.
                        На сегодняшний день мы создали много успешных
                        коммерческих проектов и получили множество
                        довольных отзывов клиентов.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 90px rgb(37, 106, 255)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleClick}
                        className="contact-btn">
                        Связаться с нами
                    </motion.button>
                </div>
                <div className="image-section">
                    <img src={dev} alt="DevSphere" />
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }} 
                className="scroll-to-top" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑
            </motion.div>
        </div>
    );
}

export default Home;
