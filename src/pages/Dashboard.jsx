import logo2 from '../assets/logo2.png';
import { AnimatePresence, motion } from "framer-motion";
import './Dashboard.css';
import { useState } from 'react';

const Dashboard = () => {

  const [isOpen] = useState(true);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.9,
      },
    },
    show: {
      width: "100%",
      padding: "10px 100px",
      transition: {
        duration: 0.9,
      },
    },
  };


  return (

    <AnimatePresence>
      {isOpen && (
        <motion.h1
          variants={inputAnimation}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="logo"
        >
          <div className="container">
            <img className='imgLogo' src={logo2} alt="Logo de entrada" />
          </div>

        </motion.h1>
      )}
    </AnimatePresence>

  );
};

export default Dashboard;
