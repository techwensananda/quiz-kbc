import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";

const Quiz = () => {
  const { id } = useParams();
  const [clickAnsId, setclickAnsId] = useState(null);
  const [clickAnsIdTwo, setclickAnsIdTwo] = useState(null);
  const [blockedQuestion, setblockedQuestion] = useState([]);
  const [index, setindex] = useState(null);
  const [iscorrectAns, setiscorrectAns] = useState(false);
  const [eyeOpen, seteyeOpen] = useState(false);
  const [marks, setMarks] = useState(0);
  const [quizPlayed, setquizPlayed] = useState([]);
  //   console.log(id);
  const [data] = useFetchApi(
    `https://openapi.programming-hero.com/api/quiz/${id}`
  );

  console.log(quizPlayed);
  const selectAnswer = (op, i, crans, ansId) => {
    setiscorrectAns(false);
    setquizPlayed([...quizPlayed, { id: ansId, index: i }]);
    setblockedQuestion((prev) => [...prev, ansId]);
    console.log(ansId);
    setclickAnsId(ansId);
    setindex(i);
    if (op == crans) {
      setiscorrectAns(true);
      setMarks(marks + 1);
    } else {
      setiscorrectAns(false);

      toast(`Your answer is wrong ,carrect answer is ${crans}`);
    }
  };
  const handleEye = (idss) => {
    seteyeOpen(!eyeOpen);
    setclickAnsIdTwo(idss);
    if (!eyeOpen) {
      const ques = data.data?.questions.find((q) => q.id == idss);
      toast(`Your answer  is ${ques.correctAnswer}`);
    }
  };
  return (
    <main>
      <div className="text-center">
        <img src={data?.data?.logo} className="w-40 inline-block" alt="" />
        <h2 className="text-5xl">{data?.data?.name}</h2>
      </div>

      <div className="flex py-40">
        <div className="questions basis-2/3 ">
          {data.data?.questions.map((question) => {
            return (
              <div className="questions">
                <div className="question text-white">
                  <p className="text-2xl mb-4">
                    <div
                      onClick={() => handleEye(question.id)}
                      className="text-right  flex justify-end text-3xl"
                    >
                      {eyeOpen && clickAnsIdTwo == question.id ? (
                        <AiOutlineEye className="text-right w-40 cursor-pointer" />
                      ) : (
                        <AiOutlineEyeInvisible className="text-left   w-40 cursor-pointer" />
                      )}
                    </div>
                    {question.question.slice(3, -4)}
                  </p>
                  <div className="answers">
                    {question?.options.map((op, i) => {
                      return (
                        <button
                          disabled={blockedQuestion.includes(question.id)}
                          className={
                            clickAnsId == question.id && index == i
                              ? iscorrectAns
                                ? "answer  correct"
                                : "answer wrong"
                              : `answer `
                          }
                          onClick={() =>
                            selectAnswer(
                              op,
                              i,
                              question.correctAnswer,
                              question.id
                            )
                          }
                        >
                          {op}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pointBoard bg-red-600 basis-1/3">
          <h3 className="text-3xl">Your total marks:{marks}</h3>
        </div>
      </div>
    </main>
  );
};

export default Quiz;
