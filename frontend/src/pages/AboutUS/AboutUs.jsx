import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#FCFCFC] py-24">
      <div className="section flex flex-row ml-10">
        <div className="container px-4 md:px-0 py-20 flex flex-row">
          <div className="content-section w-full md:w-3/5">
            <div className="title">
              <h1 className="text-3xl md:text-4xl text-green-700 font-bold uppercase">
                FreelySlah
              </h1>
            </div>
            <div className="content mt-6">
              <h2 className="text-xl md:text-2xl text-gray-700 font-bold">
                The most trusted cryptocurrency
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia eligendi rerum impedit quidem sequi optio, labore
                recusandae alias quibusdam! Praesentium doloribus, optio
                recusandae libero molestias veritatis aut a velit fugit
                consequatur quod earum, nemo nesciunt? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Similique eius delectus
                consectetur assumenda eaque labore perspiciatis, minus sunt
                dolore, maxime fugiat itaque repellendus at id, deleniti ipsum
                blanditiis dolorum et. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eos exercitationem tempora, expedita eveniet
                accusantium ducimus repellat magnam recusandae consequatur,
                culpa facilis voluptatibus optio! Laboriosam ullam facilis animi
                magni omnis et.
              </p>
            </div>
            <div className="social mt-8">
              <a href="#" className="mr-4">
                <i className="fab fa-facebook-f text-gray-600 hover:text-gray-900"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-instagram text-gray-600 hover:text-gray-900"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube text-gray-600 hover:text-gray-900"></i>
              </a>
            </div>
          </div>
          <div className="image-section w-full md:w-2/5">
            <img
              src="images/about1.png"
              alt=""
              className="w-full h-auto md:mx-auto md:my-0 max-w-[400px]"
            />
          </div>
        </div>
      </div>

      <div className="section flex flex-row ml-10 gap-20">
        <div className="image-section w-full md:w-2/5">
          <img
            src="images/about2.png"
            alt=""
            className="w-full h-auto md:mx-auto md:my-0 max-w-[270px]"
          />
        </div>
        <div className="container px-4 md:px-0 py-10 flex flex-row">
          <div className="content-section w-full md:w-3/5">
            <div className="title">
              <h1 className="text-3xl md:text-4xl text-green-700 font-bold uppercase">
                FreelySlah
              </h1>
            </div>
            <div className="content mt-6">
              <h2 className="text-xl md:text-2xl text-gray-700 font-bold">
                The most trusted cryptocurrency
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia eligendi rerum impedit quidem sequi optio, labore
                recusandae alias quibusdam! Praesentium doloribus, optio
                recusandae libero molestias veritatis aut a velit fugit
                consequatur quod earum, nemo nesciunt? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Similique eius delectus
                consectetur assumenda eaque labore perspiciatis, minus sunt
                dolore, maxime fugiat itaque repellendus at id, deleniti ipsum
                blanditiis dolorum et.
              </p>
            </div>
            <div className="social mt-8">
              <a href="#" className="mr-4">
                <i className="fab fa-facebook-f text-gray-600 hover:text-gray-900"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-instagram text-gray-600 hover:text-gray-900"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube text-gray-600 hover:text-gray-900"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
