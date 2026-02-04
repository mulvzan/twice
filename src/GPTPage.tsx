import { Button } from "antd";
import { useState } from "react";

const GPTPage: React.FC = () => {
  const [isRound, setIsRound] = useState<boolean>(false);

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className={`shadow-2xl w-70  mx-auto mt-20 p-4 flex items-center flex-col justify-center  bg-red-400 text-xl text-blue-600`}
      >
        <img
          className={`transition-all ${isRound ? "rounded-full" : ""}`}
          src=""
        />

        <div className=" ">555</div>
        <div className="w-fit justify-center">
          <Button type="primary" onClick={() => setIsRound((v) => !v)}>
            set{isRound ? "Square" : "Round"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GPTPage;
