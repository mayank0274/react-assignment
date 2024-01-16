import React from "react";
import { BiHome } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// currently no route is imlplemented , so it static later can be make dynamic accoring to route
export const NavigationBreadcrumb: React.FC = () => {
  return (
    <div className="w-[55%] p-5 flex gap-2 items-center justify-center">
      <BiHome size={25} />
      <BsChevronRight />
      <Link to={"#"}>
        <p>Flashcard</p>
      </Link>
      <BsChevronRight />
      <Link to={"#"}>
        <p>Mathematics</p>
      </Link>

      <BsChevronRight />
      <Link to={"#"}>
        <p className="text-blue-800">Relations and functions</p>
      </Link>
    </div>
  );
};
