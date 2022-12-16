import React from "react";
import CameraAltOutlined from "@mui/icons-material/CameraAltOutlined"
import SearchOutlined from "@mui/icons-material/SearchOutlined"
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined"
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from "react-router-dom";

export default function StatusJsx() {
  return (
    <>
      <div className=" flex justify-end bg-gray-800 pt-3">
        <p className=" font-sand absolute left-0 p-4 text-2xl text-slate-400">Whatsapp</p>
        <div className=" flex gap-2 p-5 text-slate-400">
          <CameraAltOutlined />
          <SearchOutlined />
          <MoreVertOutlined />
        </div>
      </div>

      <div className=" flex justify-around bg-gray-800 m-0 text-slate-400 font-sand">
        <GroupsIcon className=" hover:bg-slate-600 translate-y-1 translate-x-2 w-full"/>
        <Link className=" hover:text-green-600 hover:bg-slate-600 w-full text-center p-1" to={"/"}>Chat</Link>
        <p className=" hover:text-green-600 hover:bg-slate-600 w-full text-center p-1">Status</p>
        <p className=" hover:text-green-600 hover:bg-slate-600 w-full text-center p-1">Panggilan</p>
      </div>
    </>
  )
}