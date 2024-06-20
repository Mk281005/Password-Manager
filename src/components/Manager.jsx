import React, { useState } from "react";
import "../App.css";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';
import { Bounce } from "react-toastify";


function Manage() {
  const [Img, setImg] = useState("/src/assets/eye.svg");
  const [Type, setType] = useState("password");
  const [form, setform] = useState({key :"", site: "", nam: "", pass: "" });
  const [passarr, setpassarr] = useState([]);
  const [copy, setcopy] = useState("/src/assets/copy.svg");
  useEffect(() => {
    let passwords = localStorage.getItem("password");
    if (passwords) {
      setpassarr(JSON.parse(passwords));
    }
  }, []);
  useEffect(() => {
    console.log(passarr);
  }, [passarr]);

  const changeimg = () => {
   const newImg = Img === "/src/assets/eye.svg" ? "/src/assets/close.svg" : "/src/assets/eye.svg";
    const newType =  Img === "/src/assets/eye.svg"?"text":"password";
    setType(newType);
    setImg(newImg);
  };
  const savepass = () => {
    console.log(form.key);
    if(form.key===""){
    if (form.site.length !== 0 && form.pass.length !== 0 && form.nam.length !== 0) {
      const newPass = { ...form, key: uuidv4() };
      const updatedPassarr = [...passarr, newPass];
      setpassarr(updatedPassarr);
      localStorage.setItem("password", JSON.stringify(updatedPassarr));
      setform({ key: "", site: "", nam: "", pass: "" });
    }}
    else{
      const idx = passarr.findIndex((item) => item.key === form.key);
      passarr[idx]=form;
      setpassarr(passarr);
      localStorage.setItem("password", JSON.stringify(passarr));
      setform({ key: "", site: "", nam: "", pass: "" });
    }
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copychange = (e) => {
    toast("Copied to Clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce, 
      theme: "dark",
    });
    navigator.clipboard.writeText(e);
  };
  const deletepass = (e) => {
    console.log(e);
    const newPassArr = passarr.filter(item => item.key !== e);
    localStorage.setItem("password",JSON.stringify(newPassArr))
    setpassarr(newPassArr);
  }
  const editpass=(e) => {
    console.log(e);
    const newform = passarr.find((item) => item.key === e);
    console.log(newform);
    setform(newform)
  }
  

  return (
    <div className="m-7">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce"
      />

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
              value={form.site}
              onChange={handlechange}
              placeholder="Enter the website URL"
              type="text"
              className="w-full rounded-full focus:outline-none p-3 py-2 h-6"
            />
          </div>
          <div className="my-4 flex space-x-4">
            <input
              name="nam"
              value={form.nam}
              onChange={handlechange}
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
              />
                <input
                  name="pass"
                  placeholder="Enter Password"
                  onChange={handlechange}
                  value={form.pass}
                  type={Type}
                  className="rounded-full p-3 py-2 focus:outline-none h-6 w-64"
                  autoComplete="new-password"
                />
           
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={savepass}
          className="flex font-semibold justify-center min-w-36 items-center rounded-full bg-slate-50 hover:bg-slate-200"
        >
          <lord-icon
            src="https://cdn.lordicon.com/zrkkrrpl.json"
            trigger="hover"
          ></lord-icon>
          Save Password
        </button>
      </div>
      <h2 className="flex justify-center  font-semibold text-xl my-3 text-green-600">
        Your Passwords
      </h2>
      <table className="table-auto text-white text-center overflow-hidden min-w-full ">
        <thead className="bg-slate-700 my-2">
          <tr className="">
            <th>S.No</th>
            <th>Site</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        {passarr.length !== 0 && (
          <tbody>
            {passarr.map((item, index) => {
              return (
                <tr key={index} className="my-3">
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex justify-center gap-2">
                      {item.site}
                      <img
                        src={copy}
                        className="w-4 cursor-pointer"
                        onClick={() => copychange(item.site)}
                        alt=""
                      />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center gap-2">
                      {item.nam}
                      <img
                        src={copy}
                        className="w-4 cursor-pointer"
                        onClick={() => copychange(item.nam)}
                        alt=""
                      />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center gap-2">
                      {item.pass}
                      <img
                        src={copy}
                        className="w-4 cursor-pointer"
                        onClick={() => copychange(item.pass)}
                        alt=""
                      />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center cursor-pointer gap-2">
                      <script src="https://cdn.lordicon.com/lordicon.js"></script>
                      <span onClick={()=>editpass(item.key)}>
                      <lord-icon
                    
                        src="https://cdn.lordicon.com/wuvorxbv.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#e4e4e4,secondary:#08a88a"
                        style={{"width":"27px","height":"27px"}}
                      ></lord-icon></span>
                      <script src="https://cdn.lordicon.com/lordicon.js"></script>
                      <span onClick={()=>deletepass(item.key)}>
                      <lord-icon
                       
                        src="https://cdn.lordicon.com/drxwpfop.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#e4e4e4,secondary:#08a88a"
                        style={{"width":"27px","height":"27px"}}
                      ></lord-icon></span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default Manage;
