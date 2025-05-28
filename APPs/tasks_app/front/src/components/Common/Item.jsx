import React from "react";
import { MdEditDocument } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const Item = ({ task }) => {
  const { _id, title, description, date, iscompleted, isimportant, userid } =
    task;
  console.log(task);

  const textLengthOverCut = (text, length, lastTxt) => {
    if (length === "" || length === null) {
      length = 20;
    }
    if (lastTxt === "" || lastTxt === null) {
      lastTxt = "...";
    }
    if (text.length > length) {
      text = text.substr(0, length) + lastTxt;
    }
    return text;
  };
  return (
    <div className="item w-1/3 h-[25vh] p-[0.25rem]">
      <div className="w-full h-full border border-gray-500 rounded-md flex py-3 px-4 flex-col justify-between bg-gray-950">
        <div className="upper">
          <h2 className="text-xl font-normal mb-3 relative pb-2 flex justify-between border-b">
            <span className=" bottom-0">{title}</span>
            <span className="text-sm py-1 px-3 border border-gray-500 rounded-sm hover:bg-gray-700 cursor-pointer">
              자세히
            </span>
          </h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {textLengthOverCut(description, 25, "...")}
          </p>
        </div>
        <div className="lower">
          <p className="text-sm mb-1">{date}</p>
          <div className="item-footer flex justify-between">
            <div className="item-footer-left flex gap-2">
              {iscompleted ? (
                <button className="block py-1 px-4 bg-green-400 text-sm text-white rounded-md">
                  Completed
                </button>
              ) : (
                <button className="block py-1 px-4 bg-cyan-500 text-sm text-white rounded-md">
                  InCompleted
                </button>
              )}
              {isimportant && (
                <button className="block py-1 px-4 bg-red-500 text-sm text-white rounded-md">
                  Important
                </button>
              )}
            </div>
            <div className="item-footer-right flex gap-2">
              <button>
                <MdEditDocument className="w-5 h-5" />
              </button>
              <button>
                <FaTrash className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
