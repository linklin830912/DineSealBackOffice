import { SVGTypesSettingsEnum } from "@/model/enum/SVGTypesSettingsEnum";
import React from "react";
import SwapSVGIcon from "../svg/swap-svg-icon";

type SVGTypeButtonProps = {
    kkey: string,
    value: string | SVGTypesSettingsEnum
    handleClick: ()=>void
}
export default function SVGTypeButton(props: SVGTypeButtonProps) { 
    return <button className="w-[50px] mb-1 text-h5 text-fontMainColor bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-xl mr-1 p-1"
        key={props.value} value={props.value}
        onClick={props.handleClick}>
        <SwapSVGIcon type={Number(props.value)} />
    </button>;
}