import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface IFAQ {
  question: string;
  answer: string;
}

const Faq: React.FC<{ faq: IFAQ }> = ({ faq }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleAccordion = (): void => {
    setShow((prev) => {
      return !prev;
    });
  };

  return (
    <div className="rounded-lg  min-w-[50%]  mx-auto mt-3 bg-gradient-to-r p-[2.5px] from-[#501b92]  to-[#207cea]">
      <div className="flex flex-col justify-between h-full bg-white text-black rounded-md p-2 cursor-pointer">
        <div
          className="faq-header flex justify-between items-center"
          onClick={handleAccordion}
        >
          <p className="faq-title">{faq.question}</p>
          {!show ? <FaChevronDown /> : <FaChevronUp />}
        </div>
        {show && <div className="faq-body pt-3">{faq.answer}</div>}
      </div>
    </div>
  );
};

export const FaqSection: React.FC = () => {
  const faqArray: IFAQ[] = [
    {
      question: "Title 1",
      answer: "answer 1",
    },
    {
      question: "Title 2",
      answer: "answer 2",
    },
    {
      question: "Title 3",
      answer: "answer 3",
    },
  ];

  return (
    <div className="flex flex-col p-5 gap-5 w-[75%] items-center self-center">
      <h1 className="bg-clip-text bg-gradient-to-b from-[#051b92] to-[#207cea]  text-transparent text-4xl font-bold w-full">
        Faq's
      </h1>

      <div className="faq-list w-full">
        {faqArray.map((item: IFAQ, i: number) => {
          return <Faq key={`faq-${i}`} faq={item} />;
        })}
      </div>
    </div>
  );
};
