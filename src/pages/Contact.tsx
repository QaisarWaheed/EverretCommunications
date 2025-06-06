import React from "react";

const Contact = () => {
  return (
    <div
      className=" flex justify-center items-center "
      style={{
        height: "100vh",
        justifyContent: "center",
        justifyItems: "center",
        background: "#e1eef2",
        position: "fixed",
        width: "100vw",
      }}
    >
      <div
        className="mt-10 ml-10 mr-10   p-6 border  rounded-lg shadow-sm dark:bg-gray-800"
        style={{
          width: "30vw",
          height: "50vh",
          background: "#c3e0ea",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="flex justify-center ">
          <text className="text-2xl">Contact Us</text>
        </div>

        <div className="flex flex-col   gap-10">
          <div className="flex flex-col ml-0">
            <label>Name</label>
            <input type="text" placeholder="UserName" className="p-1"></input>
          </div>
          <div className="flex flex-col ml-0">
            <label>Email</label>
            <input type="text" placeholder="Email" className="p-1"></input>
          </div>
          <div className="flex flex-col ml-0">
            <label>Email</label>
            <textarea
              placeholder="Type your message here..."
              className="p-1"
              style={{
                width: "100%",
              }}
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button className="border border-black bg-black text-white w-32 p-1">
              Submit
            </button>
            <button className="border border-black bg-black text-white w-32 p-1">
              Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
