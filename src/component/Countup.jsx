import React from "react";
import CountUp from "react-countup";

function CountupComponent() {
  return (
    <div className="my-[3rem] text-[1.5rem] sm:text-3xl flex gap-[2rem] sm:gap-[5rem]  flex-wrap">
      <div className="  text-[orangered] ">
        <div className="flex gap-1">
          <CountUp
            start={0}
            end={2}
            delay={3}
            duration={5}
            className="text-[3rem] font-[700] mb-[0.2rem] sm:mb-[1rem]"
          />
          +
        </div>
        <p className="text-[1rem]  sm:text-xl text-[white]">
          Years of Experience
        </p>
      </div>

      <div className=" lg:text-3xl text-[orangered]">
        <div className="flex gap-1">
          <CountUp
            start={0}
            end={20}
            delay={1}
            duration={5}
            className="text-[3rem] font-[700] mb-[0.2rem] sm:mb-[1rem]"
          />
          +
        </div>
        <p className="text-[1rem] sm:text-xl text-[white]">Projects</p>
      </div>
    </div>
  );
}

export default CountupComponent;
