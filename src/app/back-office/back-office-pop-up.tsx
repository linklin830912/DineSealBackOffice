import PopupSection from "@/components/pop-up/pop-up-section";
import React, { useEffect, useState } from "react";
import { BackOfficeThemeEditorEnum } from "./back-office-main-page-section";
import { useBackOfficSettigs } from "@/context/back-office-settings-context";
import { ColorThemeSettingsEnum } from "@/model/enum/ColorThemeSettingsEnum";
import { fontList, FontsTypeSettingsEnum } from "@/model/enum/FontsTypeSettingsEnum";
import { FontsSizeSettingsEnum } from "@/model/enum/FontsSizeSettingsEnum";
import { SVGTypesSettingsEnum } from "@/model/enum/SVGTypesSettingsEnum";
import SwapSVGIcon from "@/components/svg/swap-svg-icon";
import ColorThemeButton from "@/components/button/color-theme-button";
import FontTypeButton from "@/components/button/font-type-button";
import FontSizeButton from "@/components/button/font-size-button";
import SVGTypeButton from "@/components/button/svg-type-button";
import { DisplayArrayTypeEnum } from "@/model/enum/DisplayArrayTypeEnum";
import DisplayArrayButton from "@/components/button/display-array-button";

type BackOfficeOfficeProps = {
    stage: BackOfficeThemeEditorEnum
    handleClose: ()=>void
};
export default function BackOfficePopup(props: BackOfficeOfficeProps) { 
    const { restaurantSettings, setRestaurantSettings } =  useBackOfficSettigs();
    const [title, setTitle] = useState<string>();
    useEffect(() => {
        switch (props.stage) {
            case BackOfficeThemeEditorEnum.COLOR_THEME:
                setTitle("Color Theme");
                break;
            case BackOfficeThemeEditorEnum.FONT_TYPE:
                setTitle("Fonts");
                break;
            case BackOfficeThemeEditorEnum.FONT_SIZE:
                setTitle("Font Size");
                break;
            case BackOfficeThemeEditorEnum.SVG_L:
                setTitle("SVG L");
                break;
            case BackOfficeThemeEditorEnum.SVG_S:
                setTitle("SVG L");
                break;
            case BackOfficeThemeEditorEnum.ARRAY:
                setTitle("Paginate");
                break;
            default:
                break;
        }
    }, []);
    return <PopupSection title={title || ""}
        handleClose={props.handleClose}>
        {props.stage===BackOfficeThemeEditorEnum.COLOR_THEME && <div className="w-full flex flex-col min-w-[250px]">{
            Object.entries(ColorThemeSettingsEnum)
            .filter(([key, value]) => typeof value === "number")
                .map(([key, value]) => (
                <ColorThemeButton kkey={key} value={value} handleClick={() => {
                        setRestaurantSettings({
                            ...restaurantSettings,
                            main: { ...restaurantSettings.main, colorThemeEnum: Number(value) }
                        })
                        props.handleClose();
                    }}/>
            ))}</div>}
        {props.stage===BackOfficeThemeEditorEnum.FONT_TYPE && <div className="w-full flex flex-col min-w-[250px]">{
            Object.entries(FontsTypeSettingsEnum)
            .filter(([key, value]) => typeof value === "number")
                .map(([key, value], index) => (
                    <FontTypeButton kkey={key} key={ index} value={value} index={index} handleClick={() => {
                        setRestaurantSettings({
                            ...restaurantSettings,
                            main: { ...restaurantSettings.main, fontType: Number(value) }
                        })
                        props.handleClose();
                    }}/>
            ))}</div>}
        {props.stage===BackOfficeThemeEditorEnum.FONT_SIZE && <div className="w-full flex flex-col min-w-[250px]">{
            Object.entries(FontsSizeSettingsEnum)
            .filter(([key, value]) => typeof value === "number")
                .map(([key, value]) => (
                <FontSizeButton kkey={key} value={value} handleClick={() => {
                        setRestaurantSettings({
                            ...restaurantSettings,
                            main: { ...restaurantSettings.main, fontSize: Number(value) }
                        })
                        props.handleClose();
                    }}/>
            ))}</div>}
        {props.stage===BackOfficeThemeEditorEnum.SVG_L && <div className="w-full flex flex-row flex-wrap justify-around items-center">{
           Object.entries(SVGTypesSettingsEnum)
            .filter(([key, value]) => typeof value === "number")
                .map(([key, value]) => (
                <SVGTypeButton kkey={key} value={value} handleClick={() => {
                        setRestaurantSettings({
                            ...restaurantSettings,
                            main: { ...restaurantSettings.main, svgL: Number(value) }
                        })
                        props.handleClose();
                    }} />
            ))}</div>}
        {props.stage===BackOfficeThemeEditorEnum.SVG_S && <div className="w-full flex flex-row flex-wrap justify-around items-center">{
            Object.entries(SVGTypesSettingsEnum)
            .filter(([key, value]) => typeof value === "number")
            .map(([key, value], index) => (
                <button className="w-[50px] mb-1 text-h5 text-fontMainColor bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-xl mr-1 p-1"
                    key={index} value={value}
                    onClick={() => {
                        setRestaurantSettings({
                            ...restaurantSettings,
                            main: { ...restaurantSettings.main, svgS: Number(value) }
                        })
                        props.handleClose();
                    }}>
                    <SwapSVGIcon type={Number(value)}/>
                </button>
            ))}</div>}
        {props.stage===BackOfficeThemeEditorEnum.ARRAY && <div className="w-full flex flex-col min-w-[250px]">{
            Object.entries(DisplayArrayTypeEnum)
            .filter(([key, value]) => typeof value === "number")
                .map(([key, value], index) => (
                    <DisplayArrayButton kkey={key} key={ index} value={value} handleClick={() => {
                        setRestaurantSettings({
                            ...restaurantSettings,
                            history: { ...restaurantSettings.history, displayArrayType: Number(value) }
                        })
                        props.handleClose();
                    }}/>
            ))}</div>}
        </PopupSection>
}