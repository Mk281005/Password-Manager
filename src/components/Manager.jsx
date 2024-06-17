import React, { useState } from "react";
import '../App.css';

function Manage() {
  const [Img, setImg] = useState("/src/assets/eye.svg");

  const changeimg = () => {
    const newImg = Img === "/src/assets/eye.svg" ? "/src/assets/close.svg" : "/src/assets/eye.svg";
    setImg(newImg);
  }

  return (
    <div className="m-7">
      <div className="flex justify-center h-full text-white font-bold text-2xl">
        <span className="text-green-600">i</span>PassManage
      </div>
      <div className="flex justify-center h-full text-white font-medium text-xl">
        Your password Manager
      </div>
      <div className="flex justify-center h-full my-5">
        <div className="px-9 max-w-4xl w-full">
          <div className="mb-4">
            <input
              placeholder="Enter the website URL"
              type="text"
              className="w-full rounded-full focus:outline-none p-3 py-2 h-6"
            />
          </div>
          <div className="my-4 flex space-x-4">
            <input
              placeholder="Enter the Username"
              type="text"
              className="rounded-full w-4/6 p-3 py-2 focus:outline-none h-6"
            />
            <div className="flex relative">
              <img
                src={Img}
                onClick={changeimg}
                className="absolute right-2 cursor-pointer"
                alt="eye"
              /><form>
              <input
                placeholder="Enter Password"
                type="password"
                className="rounded-full p-3 py-2 focus:outline-none h-6 w-64"
                 autoComplete="new-password"
              /></form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        
          <button className="flex justify-center min-w-36 items-center rounded-full bg-slate-50 hover:bg-slate-200">
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        
      </div>
    </div>
  );
}

export default Manage;
