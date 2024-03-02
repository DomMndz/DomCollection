import React from "react";
import { BackupTable as BackupTableIcon } from "@mui/icons-material";

function Card_Percentage() {
  const data = {
    title: "Eggs",
    value: 100,
    percent: "86%",
    icon: <BackupTableIcon style={{ fontSize: "2rem" }} />,
    description: "Since last week",
  };

  return (
    <div className="w-full h-full grid place-items-center">
      {/* Dark */}
      <div className="w-72 h-52 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex flex-col justify-between items-center p-5 font-[Poppins] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <div className="w-full flex justify-between items-center">
          <p className="text-2xl font-semibold">{data.title}</p>
          {data.icon}
        </div>
        <div>
          <p className="text-5xl font-semibold">{data.value}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-lg font-bold italic">{data.percent}</p>
          <p className="italic">{data.description}</p>
        </div>
      </div>

      {/* Light */}
      {/* <div className="w-72 h-52 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex flex-col justify-between items-center p-5 font-[Poppins] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-white">
        <div className="w-full flex justify-between items-center">
          <p className="text-2xl font-semibold">{data.title}</p>
          {data.icon}
        </div>
        <div>
          <p className="text-5xl font-semibold">{data.value}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-lg font-bold italic">{data.percent}</p>
          <p className="italic">{data.description}</p>
        </div>
      </div> */}
    </div>
  );
}

export default Card_Percentage;
