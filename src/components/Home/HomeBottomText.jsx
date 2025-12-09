import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <div className="text-[6.5vw] hover:border-blue-400 hover:text-blue-400 uppercase border-4 leading-[7vw] border-white rounded-full px-12 pt-4">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="text-[6.5vw] hover:border-blue-400 hover:text-blue-400 uppercase border-4 leading-[7vw] border-white rounded-full px-12 pt-4">
        <Link to="/agence">Agence</Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
