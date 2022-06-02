import React, { useState } from "react";

const HookInput = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const firstNameHandler = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };

  const lastNameHandler = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };

  return (
    <form className="mt-12 flex flex-col items-center justify-center gap-y-5">
      <div>
        <h1 className="mb-1 text-2xl">
          My name is - <span className="text-blue-500">{user.firstName}</span>
        </h1>
        <input
          className="rounded border-2 border-green-400 p-2 text-2xl focus:border-green-600 focus:outline-none"
          type="text"
          onChange={firstNameHandler}
        />
      </div>
      <div>
        <h1 className="mb-1 text-2xl">
          My last name is -
          <span className="text-blue-500">{user.lastName}</span>
        </h1>
        <input
          className="rounded border-2 border-green-400 p-2 text-2xl focus:border-green-600 focus:outline-none"
          type="text"
          onChange={lastNameHandler}
        />
      </div>
      {/* <div>{JSON.stringfy}</div> */}
    </form>
  );
};

export default HookInput;
