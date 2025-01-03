import React from "react";

export default function BackOfficeHeader() { 
    return <div className="w-full flex flex-row justify-between bg-[#56D4E1] px-3 py-2 text-h5">
        <button className="px-2 rounded-[50px] border-2 border-current">Cancel</button>
        <button className="px-2 rounded-[50px] border-2 border-current">Save</button>
    </div>
}