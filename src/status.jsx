import React from "react";

const Header = () => {
    return (
      <div className=" flex justify-end bg-gray-800 pt-3">
        <p className=" font-sand absolute left-0 p-4 text-2xl text-slate-400">Whatsapp</p>
        <div className=" flex gap-2 p-5 text-slate-400">
          <CameraAltOutlinedIcon className=" cursor-pointer" onClick={alertCamera}/>
          <SearchOutlinedIcon className=" cursor-pointer" onClick={expandSearch}/>
          <MoreVertOutlinedIcon className=" cursor-pointer"/>
        </div>
      </div>
    )
  }

const Header2 = () => {
    return (
      <div className=" flex justify-around bg-gray-800 m-0 text-slate-400 font-sand">
        <GroupsIcon className=" hover:bg-slate-600 translate-y-1 translate-x-2 w-full"/>
        <p className=" hover:text-green-600 hover:bg-slate-600 w-full text-center p-1 ml-3">Chat</p>
        <p className=" hover:text-green-600 hover:bg-slate-600 w-full text-center p-1">Status</p>
        <p className=" hover:text-green-600 hover:bg-slate-600 w-full text-center p-1">Panggilan</p>
      </div>
    )
  }

const Status = () => {
    return (
        <div className=" md:hidden">
          <div className=" sticky top-0 z-20">
            <Header />
            <Header2 />
          <div id="ExpandSearch" className=" fixed top-0 w-full hidden">
            <ExpandSearch/>
          </div>
          </div>
          <Main />
        </div>
      )
}

const App = () => {
    return(
        <Status />
    )
}

export default App;