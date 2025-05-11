import React from "react";

const AuthRight = ({ label ,placeholder}) => {
  return (
    <div className="bg-white h-[30vh] md:h-[95vh] w-[45vw] rounded-xl">
      <form>
        {label.map((items, index) => {
          return (
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="">{items}</label>
              <input
                className="border w-90 border-gray-300 rounded px-2 capitalize"
                type="text"
                placeholder={items}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default AuthRight;
