import React from "react";

const Hero = () => {

  return (
    <section className="relative w-full h-screen mx-auto bg-lufy">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className="heroHeadText">
            Hello, I'm <span className="text-[#16c734]">P. DIDDY</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100">
            you don't get another chance <br/>,life's no nintendo game <br/>
            You can do anything you put your mind to,man 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;