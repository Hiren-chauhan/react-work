import React from "react";
import { assets } from "../../assets/assets";
function SideBar() {
  return (
    // sidebar creation
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex ">
      {/* First box for Home and Search area */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex item-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="Home" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex item-center gap-3 pl-8 cursor-pointer">
          <img
            className="w-6"
            src={assets.search_icon}
            alt="Search"
          />
          <p className="font-bold">Search</p>
        </div>
      </div>
      {/* Secound area for user list creation */}
      <div className="bg-[#121212] h-[85%] rounded">
        {/* Library options */}
        <div className="flex item-center justify-between p-4">
          <div className="flex item-center gap-3">
            <img className="w-6" src={assets.stack_icon} alt="stack icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex item-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="arrow iocn" />
            <img className="w-5" src={assets.plus_icon} alt="plus icon" />
          </div>
        </div>
        {/* Create new List help */}
        <div className="bg-[#242424] p-4 rounded flex flex-col item-start justify-start gap-1 m-2">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy we will help you </p>
          <button className="bg-white text-black text-[15px] px-4 py-1.5 mt-4 rounded-full ">Create Playlist</button>
        </div>
        {/* Prodcast List help */}
        <div className="bg-[#242424] p-4 rounded flex flex-col item-start justify-start gap-1 m-2">
          <h1>Let's find some prodcat to follow</h1>
          <p className="font-light">we'll keep you update on new episodes</p>
          <button className="bg-white text-black text-[15px] px-4 py-1.5 mt-4 rounded-full ">Browes Prodcast</button>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
