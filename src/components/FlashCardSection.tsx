import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneBulb } from "react-icons/ai";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import { GoScreenFull } from "react-icons/go";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import BOTTOM_LOGO from "../assets/logo2_bottom.png";

interface IQuestions {
  question: string;
  answer: string;
}

const Tabs: React.FC = () => {
  return (
    <div className="w-full">
      <ul className="list-none flex justify-center gap-16 text-lg w-full text-gray-500 font-bold">
        <li
          className={`${
            true && "text-blue-800 border-b-[3px] border-blue-800 pb-[1.5px]"
          }`}
        >
          <Link to={"#"}>Study</Link>
        </li>

        <li>
          <Link to={"#"}>Quiz</Link>
        </li>

        <li>
          <Link to={"#"}>Text</Link>
        </li>

        <li>
          <Link to={"#"}>Game</Link>
        </li>

        <li>
          <Link to={"#"}>Others</Link>
        </li>
      </ul>
    </div>
  );
};

const FlashCard = () => {
  let questions: IQuestions[] = [
    {
      question: "5x^3 + 10x + 2",
      answer: "xyz",
    },

    {
      question: "5x + 2",
      answer: "xyz",
    },

    {
      question: "6x^2 + 5x + 6",
      answer: "xyz",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState<{
    question: string;
    index: number;
  }>({ question: questions[0].question, index: 0 });
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  const handleCardChange = (): void => {
    setShowAnimation(true);

    let index = currentQuestion.index + 1;
    if (index <= questions.length - 1) {
      setCurrentQuestion({
        question: questions[index].question,
        index: index,
      });
    } else {
      index = 0;
      setCurrentQuestion({
        question: questions[index].question,
        index: index,
      });
    }
  };

  return (
    <div className="w-[40%]">
      <div
        className={`flashCard w-[600px] h-[300px] flex flex-col justify-center items-center bg-gradient-to-b from-[#051b92] to-[#207cea] rounded-2xl cursor-pointer ${
          showAnimation && "animate-rotate-anim"
        }`}
        onClick={handleCardChange}
        onAnimationEnd={() => {
          setShowAnimation(false);
        }}
      >
        <div className="options flex justify-between  w-[90%] h-[40%] p-5">
          <AiTwotoneBulb size={30} color="#fff" />
          <IoMdVolumeHigh size={30} color="#fff" />
        </div>
        <div className="mainCard h-[60%] content-center">
          <p className="equation text-white font-bold text-3xl">
            {currentQuestion.question}
          </p>
        </div>
      </div>

      <div className="botton-options flex justify-between my-5 w-full">
        <IoMdRefresh size={30} className="w-[10%]" color="#051b92" />
        <div className="flex justify-evenly w-[50%]">
          <FaChevronCircleLeft size={30} color="#051b92" />
          <p className="text-lg">1/10</p>
          <FaChevronCircleRight size={30} color="#051b92" />
        </div>
        <GoScreenFull size={30} className="w-[10%]" color="#051b92" />
      </div>
    </div>
  );
};

export const FlashCardSection: React.FC = () => {
  return (
    <div className="flex flex-col p-5 justify-center items-center gap-8 self-center w-[75%]">
      <h1 className="bg-clip-text bg-gradient-to-b from-[#051b92] to-[#207cea]  text-transparent text-2xl font-bold w-full">
        Relations and Functions (Mathematics)
      </h1>
      <Tabs />
      <FlashCard />

      <div className="w-full flex justify-between items-center">
        <img src={BOTTOM_LOGO} alt="logo" className="w-[15%]" />
        <div className="bg-clip-text bg-gradient-to-b from-[#051b92] to-[#207cea]  text-transparent text-2xl font-bold flex gap-4 items-center">
          <div className="plus-icon w-[30px] h-[30px] rounded-[50%] bg-gradient-to-b from-[#051b92] to-[#207cea] text-white text-3xl flex items-center justify-center">
            +
          </div>
          <p>Create Flashcard</p>
        </div>
      </div>
    </div>
  );
};
