import { ColorThemeSettingsEnum } from "@/model/enum/ColorThemeSettingsEnum";
import { DisplayArrayTypeEnum } from "@/model/enum/DisplayArrayTypeEnum";
import React from "react";

type DisplayArrayButtonProps = {
    kkey: string,
    value: string | DisplayArrayTypeEnum
    handleClick: ()=>void
}
export default function DisplayArrayButton(props: DisplayArrayButtonProps) { 
    return <button className="w-full mb-1 text-h5 text-fontMainColor bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px]"
        key={props.value} value={props.value}
        onClick={props.handleClick}>
        {props.kkey.charAt(0).toUpperCase() + props.kkey.slice(1).toLowerCase()}
    </button>
}