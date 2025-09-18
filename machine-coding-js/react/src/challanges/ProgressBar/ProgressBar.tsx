import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  }, []);
  return (
    <div>
      <h1>Progress Bar</h1>
      <div className="relative border-2 bg-amber-50 rounded-2xl overflow-hidden">
        <div className=" z-10">
          <span
            className="relative z-10"
            style={{ color: percentage > 50 ? "white" : "black" }}
          >
            {percentage}%
          </span>
        </div>
        <span
          className={`absolute bg-green-400 top-0 left-0 h-full`}
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
    </div>
  );
};

export default ProgressBar;
