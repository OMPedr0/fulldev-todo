import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Full Dev was founded in order to help the user have a better experience in their store preferably
        with better accessibility, better designer and easier to find what you are looking for.
        </p>

        <br />

        <p className="text-xl">
        <p className="p-4">We build your product from scratch.From internal a mobile applications.</p>          
        
        <p className="p-4">We create your application from your idea to delivery and satisfied users.</p>

        <p className="p-4">We develop prototypes test on the target group before we start developing.</p>

        <p className="p-4">We always put the application into production as soon as we can for real users to test.</p>
        </p>
      </div>
    </div>
  );
};

export default About;
