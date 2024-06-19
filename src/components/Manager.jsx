import React, { useState } from "react";
import '../App.css';
import { useEffect } from "react";

function Manage() {
  const [Img, setImg] = useState("/src/assets/eye.svg");
const [Type, setType] = useState("password")
const [form, setform] = useState({site :"",nam : "",pass:""})
const [passarr, setpassarr] = useState([])
useEffect(() => {
  let passwords = localStorage.getItem("password")
  if(passwords){
    setpassarr(JSON.parse(passwords))
  }
}, [])
useEffect(() => {
  console.log(passarr);
}, [passarr]);


  const changeimg = () => {
    const newImg = Img === "/src/assets/eye.svg" ? "/src/assets/close.svg" : "/src/assets/eye.svg";
    const newType =  Img === "/src/assets/eye.svg"?"text":"password";
    setType(newType);
    setImg(newImg);
  }
  const savepass=() => {
    setpassarr([...passarr,form])
    localStorage.setItem("password",JSON.stringify([...passarr,form]))
    console.log(passarr);
    setForm({ site: "", nam: "", pass: "" });
  }
  
  const handlechange =(e) => {
    setform({...form,[e.target.name] : e.target.value});
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
            name="site"
            defaultValue={form.site}
            onChange={handlechange}
              placeholder="Enter the website URL"
              type="text"
              className="w-full rounded-full focus:outline-none p-3 py-2 h-6"
            />
          </div>
          <div className="my-4 flex space-x-4">
            <input
            name="nam"
            defaultValue={form.nam}
            onChange={handlechange}
              placeholder="Enter the Username"
              type="text"
              className="rounded-full w-4/6 p-3 py-2 focus:outline-none h-6"
            />
            <div className="flex relative">
              <img
                src={Img}
                onChange={changeimg}
                className="absolute right-2 cursor-pointer"
                alt="eye"
              /><form>
              <input
              name="pass"
                placeholder="Enter Password"
                onChange={handlechange}
                defaultValue={form.pass}
                type={Type}
                className="rounded-full p-3 py-2 focus:outline-none h-6 w-64"
                 autoComplete="new-password"
              /></form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        
          <button onClick={savepass} className="flex justify-center min-w-36 items-center rounded-full bg-slate-50 hover:bg-slate-200">
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
