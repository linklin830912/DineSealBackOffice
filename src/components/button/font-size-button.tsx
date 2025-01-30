import { FontsSizeSettingsEnum } from "@/model/enum/FontsSizeSettingsEnum";
import React from "react";

type FontSizeButtonProps = {
    kkey: string,
    value: string | FontsSizeSettingsEnum
    handleClick: ()=>void
}
export default function FontSizeButton(props: FontSizeButtonProps) { 
    return <button className="w-full mb-1 text-h5 text-fontMainColor bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px]"
            key={props.value} value={props.value}
            onClick={props.handleClick}>
            {props.kkey.charAt(0).toUpperCase() + props.kkey.slice(1).toLowerCase()}
        </button>
}