import { useState, useEffect } from "react";

const Testimonial = () => {
  const testimonys = [
    {
      name: "ahmed ishaua",
      career: "happy client",
      word: "i am very impressed with the services i recieve from nobleDataHub, my life has been made much easier. i most especially love the data plans available here and the are cheap and affordable",
    },
    {
      name: "ifeanyi chimeze",
      career: "happy client",
      word: "i never knew it was this easy to pay for light bill, when i remember the hussle iuse to pass through just to get these payment done, i cannot help but thank you for the great job",
    },

    {
      name: "adien etim",
      career: "happy client",
      word: "special thanks for the effictive service, a friend of mine recommended this platform to me and since then i have not been disapionted. keep the good work going",
    },
    {
      name: "palmer adebayo",
      career: "enterpreneur",
      word: "i appreciate good work, my expirences has been great, you have me as a life time customers",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonys.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change item set every 3 seconds

    return () => clearInterval(interval);
  }, [testimonys.length]);
  return (
    <div className="bg-[url(./assets/testimonials-bg.jpg)]  bg-cover bg-center border-2 border-yellow-500 h-fit w-full lg:h-[450px]  mb-10">
      <div className="inset-0 bg-black opacity-50 py-20">
        <h2 className="w-fit py-2 px-4 mx-auto bg-blue-200 rounded-full text-blue-500 font-bold text-center capitalize">
          testimonial
        </h2>
        <h1 className="py-2 text-center font-bold text-2xl text-blue-400 capitalize">
          Join 1000+ happy customers today!
        </h1>
        <div className="mt-3 px-3">
          {testimonys.map((testimony, index) => (
            <div
              key={index}
              className={`testimony ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <div className="text-center">
                <h2 className="text-center text-xl font-bold capitalize text-white">
                  {testimony.name}{" "}
                </h2>
                <span className="text-center capitalize text-gray-300">
                  {testimony.career}{" "}
                </span>
              </div>
              <div className="text-center py-5">
                <p className="text-center font-light text-xl text-slate-300">
                  <q>{testimony.word}</q>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
