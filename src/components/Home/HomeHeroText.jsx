import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9vw] flex items-center justify-center uppercase leading-[8vw]">
        The spark for
      </div>
      <div className="text-[9vw] flex items-center justify-center uppercase leading-[8vw]">
        all
        <div className="h-[7vw] w-[18vw] -mt-8 rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9vw] flex items-center justify-center uppercase leading-[8vw]">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
