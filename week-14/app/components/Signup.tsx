"use client";

import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col justify-center h-screen ">
      <div className="flex justify-center">
        <div className="border rounded-lg p-4">
          <input
            className="p-4 m-2 bg-slate-200"
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <input
            className="p-4 m-2 bg-slate-200"
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <div className="flex justify-center bg-slate-500 p-4 m-2 hover:cursor-pointer hover:bg-slate-50">
            <button
              onClick={() => {
                axios.post("http://localhost:3000/api/user", {
                  username,
                  password,
                });
              }}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
