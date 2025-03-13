/* eslint-disable @next/next/no-img-element */
//

import React from "react";
type CardType = {
  img: string;
  title: string;
  text: string;
  color: string;
  border?: boolean;
};

function AllCard({ border = true, ...props }: CardType) {
  return (
    <div
      className={`flex flex-col items-center p-10 ${
        border ? " border-b " : ""
      }border-black`}
    >
      <img src={props.img} alt="" />
      <p
        className={`${props.color} text-center font-bold sm:text-4xl text-3xl my-3`}
      >
        {props.title}
      </p>
      <p className="sm:text-2xl text-xl sm:w-[640px] text-center text-[#565656] leading-7">
        {props.text}
      </p>
    </div>
  );
}

export default AllCard;
