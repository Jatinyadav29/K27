import React from "react";

const FullScreenNav = () => {
  return (
    <div
      id="fullScreenNav"
      className="h-screen w-full absolute bg-black py-40 text-white"
    >
      <div id="all-links" className="">
        <div className="relative border-t border-white">
          <h1 className="font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-7">
            Projects
          </h1>
          <div className="absolute top-0 bg-[#D3fd50] space-x-10 flex text-black">
            <div className="flex items-center flex-nowrap space-x-10 moveX">
              <h2 className="font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-7 whitespace-nowrap">
                See Everything
              </h2>
              <img
                className="lg:h-28 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className="font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-7 whitespace-nowrap">
                See Everything
              </h2>
              <img
                className="lg:h-28 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center flex-nowrap space-x-10 moveX">
              <h2 className="font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-7 whitespace-nowrap">
                See Everything
              </h2>
              <img
                className="lg:h-28 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className="font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-7 whitespace-nowrap">
                See Everything
              </h2>
              <img
                className="lg:h-28 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
