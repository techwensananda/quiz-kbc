import React from "react";
import { Link } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";

const Home = () => {
  const [data] = useFetchApi("https://openapi.programming-hero.com/api/quiz");
  console.log(data);
  return (
    <main>
      <div className="container mx-auto ">
        <div className="flex justify-between my-20 flex-wrap ">
          {data?.data?.map((quiz) => {
            return (
              <div key={quiz.id} className="bg-gray-200 mx-4 text-center my-20">
                <img src={quiz.logo} alt="" className="w-80 inline-block" />
                <h2 className="text-3xl py-2">{quiz.name}</h2>
                <p className="text-2xl py-4">{quiz.total}</p>
                <Link
                  to={`quiz/${quiz.id}`}
                  className="py-4 my-4 rounded text-white hover:rounded-lg bg-blue-800  px-16 mx-4"
                >
                  Play Now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
