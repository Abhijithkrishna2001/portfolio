import React from "react";
import weatherApp from "../assets/portfolio/weather-app.png";
import todoList from "../assets/portfolio/todo-app.png";
import login from "../assets/portfolio/loginpage.png";
import studio from "../assets/portfolio/studio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weatherApp,
      url: "https://abhijithkrishna2001.github.io/weather-app/",
      githubUrl: "https://github.com/Abhijithkrishna2001/weather-app",
    },
    {
      id: 2,
      src: todoList,
      url: "https://abhijithkrishna2001.github.io/Todo-App/",
      githubUrl: "https://github.com/Abhijithkrishna2001/Todo-App",
    },
    {
      id: 1,
      src: login,
      url: "https://abhijithkrishna2001.github.io/HTML-AND-CSS-PROJECT/",
      githubUrl: "https://github.com/Abhijithkrishna2001/HTML-AND-CSS-PROJECT",
    },
    {
      id: 1,
      src: studio,
      url: "https://abhijithkrishna2001.github.io/Bhavana-Studio/",
      githubUrl: "https://github.com/Abhijithkrishna2001/Bhavana-Studio",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0">
          {portfolios.map(({ id, src,url,githubUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
