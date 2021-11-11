import Payment from "./Payment";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Pay = ({history}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });
  return (
    <div className="bg-gray-200 p-6 mt-5">
      <button
        type="button"
        className="bg-gray-500 border border-gray-500 p-2 mb-4"
        onClick={handlePrint}
      >
        {" "}
        Print Reciept{" "}
      </button>
      <Payment ref={componentRef}/>
    </div>
  );
};

export default Pay;