import React from "react";

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p  className="text-xl mt-10">
          I'm a self-taught front-end developer with a good foundation in HTML,
          CSS, JavaScript, React.js, and Tailwind CSS. I'm organized, pay
          attention to details, and enjoy building clean, functional websites.
          I'm excited to be part of a team where I can keep learning and
          improving my front-end skills.
        </p>
      </div>
    </div>
  );
};

export default About;
