import { fontList, FontsTypeSettingsEnum } from "@/model/enum/FontsTypeSettingsEnum";
import React from "react";

type FontTypeButtonProps = {
    kkey: string,
    value: string | FontsTypeSettingsEnum
    index: number,
    handleClick: ()=>void
}
export default function FontTypeButton(props: FontTypeButtonProps) { 
    return <button className="w-full mb-1 text-h5 text-fontMainColor bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px]"
            key={props.value} value={props.value} style={{fontFamily: fontList[props.index].fontFamily}}
            onClick={props.handleClick}>
            {props.kkey.charAt(0).toUpperCase() + props.kkey.slice(1).toLowerCase()}
        </button>
}