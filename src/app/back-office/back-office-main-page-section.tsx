import React, { useEffect, useState } from "react";
import BackOfficePopup from "./back-office-pop-up";
import { useBackOfficSettigs } from "@/context/back-office-settings-context";
import { getEnumName } from "@/utils/enumHelper";
import { ColorThemeSettingsEnum } from "@/model/enum/ColorThemeSettingsEnum";
import { FontsTypeSettingsEnum } from "@/model/enum/FontsTypeSettingsEnum";
import { RiText } from "react-icons/ri";
import { FaFont } from "react-icons/fa";
import { SVGTypesSettingsEnum } from "@/model/enum/SVGTypesSettingsEnum";
import { MdImagesearchRoller } from "react-icons/md";
import { GoTypography } from "react-icons/go";
import TextSizeSelector from "@/shared-components/user_components/setting_components/TextSizeSelector";
import { TiStarburstOutline } from "react-icons/ti";
import { MdStarBorder } from "react-icons/md";

export enum BackOfficeThemeEditorEnum { 
    COLOR_THEME,
    FONT_SIZE,
    FONT_TYPE,
    SVG_L,
    SVG_S
}
export default function BackOfficeMainPageSection() { 
    const { restaurantSettings, setRestaurantSettings } =  useBackOfficSettigs();
    const [stage, setStage] = useState<BackOfficeThemeEditorEnum>();
    
    return (
        <div className='w-full flex flex-col'>
            <div className="w-full flex flex-row justify-start items-center mb-3">
                <div className='mr-5'>
                    <MdImagesearchRoller size={20}/>
                </div>                
                <button className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px] p-1"
                    onClick={() => setStage(BackOfficeThemeEditorEnum.COLOR_THEME)}
                    >{getEnumName(ColorThemeSettingsEnum, restaurantSettings.theme.colorThemeEnum || 1)}</button>                
            </div>
            
            <div className="w-full flex flex-row justify-start items-center mb-3">
                <div className='mr-5'>
                    <GoTypography size={20} />
                </div>                
                <div className="flex flex-row min-w-[150px] justify-center items-center bg-mainButton1Color rounded-[50px] p-1">
                    <TextSizeSelector fontSize={restaurantSettings.theme.fontSize} setFontSize={(fontSize) => {
                        setRestaurantSettings({...restaurantSettings, theme: {...restaurantSettings.theme, fontSize: fontSize}})
                    }}/>
                </div>
                
            </div>

            <div className="w-full flex flex-row justify-start items-center mb-3">
                <div className='mr-5'>
                    <FaFont size={20} />
                </div>
                <button className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px] p-1"
                    onClick={() => setStage(BackOfficeThemeEditorEnum.FONT_TYPE)}
                    >{getEnumName(FontsTypeSettingsEnum, restaurantSettings.theme.fontType || 1)}</button>    
                
            </div>
            
            {/* <div className="w-full flex flex-row justify-between items-center mb-1">
                <div className='text-h6 py-1 mr-3'>Font Size</div>
                <button className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px]"
                    onClick={() => setStage(BackOfficeThemeEditorEnum.FONT_SIZE)}
                    >{getEnumName(FontsSizeSettingsEnum, restaurantSettings.theme.fontSize || 1)}</button>    
            </div> */}

            <div className="w-full flex flex-row justify-start items-center mb-3">
                <div className='mr-5 flex flex-row items-center'>
                    <MdStarBorder size={20} />  <span className="ml-1 text-h6">(L)  </span>                
                </div> 
                <button className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px] p-1"
                    onClick={
                        () => setStage(BackOfficeThemeEditorEnum.SVG_L)               
                    }
                    >{getEnumName(SVGTypesSettingsEnum, restaurantSettings.theme.svgL || 1)}</button>    
            </div>
            
            <div className="w-full flex flex-row justify-start items-center mb-3">
                <div className='mr-5 flex flex-row items-center'>
                    <TiStarburstOutline size={20} />  <span className="ml-1 text-h6">(S)  </span>  
                </div> 
                <button className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px] p-1"
                    onClick={() => setStage(BackOfficeThemeEditorEnum.SVG_S)}
                    >{getEnumName(SVGTypesSettingsEnum, restaurantSettings.theme.svgS || 1)}</button>    
            </div>
            <div className="w-full flex flex-row justify-start items-center mb-3">
                <RiText size={20} />
                <input className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px] px-3 py-1"
                    type="text" placeholder="START!" value={restaurantSettings.theme.startText} onChange={(e) => {
                        setRestaurantSettings({...restaurantSettings, theme: {...restaurantSettings.theme, startText: e.target.value}})
                     }} />
            </div>
            {stage !== undefined && <BackOfficePopup stage={stage} handleClose={()=>setStage(undefined)}/>}
        </div>
    );
}