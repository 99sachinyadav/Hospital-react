import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

function MyProfile() {
  const [userData, setUserData] = useState({
    name: "ratnesh",
    img: assets.profile_pic,
    email: "ratnesh.dev@google.com",
    phone: "000 111 111 11",
    address: {
      line1: "sec 5 Rajnagar",
      line2: "Ghaziabad UP",
    },
    dob: "23-11-2004",
    gender: "male",
  });
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className=" mt-4 max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={assets.profile_pic} alt="" />
      {isEdit ? (
        <input className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-800 underline mt-3 uppercase">Contact Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 ">
          <p className="font-medium">Email id:</p> 
          <p className="text-blue-400">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input className="max-w-52 bg-gray-100"
              type="number"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input className="bg-gray-50 "
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
              />
              <br />
              <input className="bg-gray-50"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div >
        <p className="text-neutral-800 underline mt-3 uppercase mb-3">Basic Information</p>
        <div className="grid grid-cols-[1fr_3fr]">
          <p className="font-medium">Gender:</p>

          {isEdit ? (
            <select className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">
            BirthDay:
          </p>
          {
            isEdit? <input className="max-w-32  bg-gray-100" type="date"  onChange={(e) =>
              setUserData((prev) => ({ ...prev, dob: e.target.value }))
            } value={userData.dob}/>:
            <p className="text-gray-400">{userData.dob}</p>
          }
        </div>
      </div>
      <div className="mt-6 "> 
        {
          isEdit? <button className="rounded-full py-2 border border-primary  px-6 font-medium hover:bg-primary hover:text-white" onClick={()=>setIsEdit(false)}>Save Information</button>:
          <button
          className="rounded-full py-2 border border-primary  px-6 font-medium hover:bg-primary hover:text-white"  onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  );
}

export default MyProfile;
