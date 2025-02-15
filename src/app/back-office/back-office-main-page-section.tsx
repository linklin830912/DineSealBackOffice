import React, { useEffect, useState } from "react";
import BackOfficePopup from "./back-office-pop-up";
import { useBackOfficSettigs } from "@/context/back-office-settings-context";
import { getEnumName } from "@/utils/enumHelper";
import { ColorThemeSettingsEnum } from "@/model/enum/ColorThemeSettingsEnum";
import { FontsTypeSettingsEnum } from "@/model/enum/FontsTypeSettingsEnum";
import { RiText } from "react-icons/ri";
import { FaFont } from "react-icons/fa";
import { SVGTypesSettingsEnum } from "@/model/enum/SVGTypesSettingsEnum";
import { MdImagesearchRoller, MdOutlineSubtitles } from "react-icons/md";
import { GoTypography } from "react-icons/go";
import TextSizeSelector from "@/shared-components/user_components/setting_components/TextSizeSelector";
import { TiStarburstOutline } from "react-icons/ti";
import { MdStarBorder } from "react-icons/md";
import BackOfficeSectionCard from "@/components/card/back-office-section-card";
import { BackOfficeEditStageEnum } from "./back-office-content";
import { IoGrid } from "react-icons/io5";
import { DisplayArrayTypeEnum } from "@/model/enum/DisplayArrayTypeEnum";
import { MdOutlineDateRange } from "react-icons/md";
import HaveInput from "@/components/input/have-input";

export enum BackOfficeThemeEditorEnum { 
    COLOR_THEME,
    FONT_SIZE,
    FONT_TYPE,
    SVG_L,
    SVG_S,
    ARRAY
}
type BackOfficeMainPageSectionProps = {
    onSectionFocus: (stage: BackOfficeEditStageEnum) => void;
}
export default function BackOfficeMainPageSection(props: BackOfficeMainPageSectionProps) { 
    const { restaurantThemeSettings, setRestaurantThemeSettings } =  useBackOfficSettigs();
    const [stage, setStage] = useState<BackOfficeThemeEditorEnum>();
    
    return (
        <div>
        <BackOfficeSectionCard onSectionFocus={() => { props.onSectionFocus(BackOfficeEditStageEnum.MAIN)}}>            
            <>
                <div className="w-full flex flex-row justify-start items-center mb-3">
                    <div className='mr-5'>
                        <MdImagesearchRoller size={20}/>
                    </div>                
                    <button className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px] p-1"
                        onClick={() => setStage(BackOfficeThemeEditorEnum.COLOR_THEME)}
                        >{getEnumName(ColorThemeSettingsEnum, restaurantThemeSettings.main.colorThemeEnum || 1)}</button>                
                </div>
                
                <div className="w-full flex flex-row justify-start items-center mb-3">
                    <div className='mr-5'>
                        <GoTypography size={20} />
                    </div>                
                    <div className="flex flex-row min-w-[150px] justify-center items-center bg-mainButton1Color rounded-[50px] p-1">
                        <TextSizeSelector fontSize={restaurantThemeSettings.main.fontSize} setFontSize={(fontSize) => {
                            setRestaurantThemeSettings({...restaurantThemeSettings, main: {...restaurantThemeSettings.main, fontSize: fontSize}})
                        }}/>
                    </div>
                    
                </div>

                <div className="w-full flex flex-row justify-start items-center mb-3">
                    <div className='mr-5'>
                        <FaFont size={20} />
                    </div>
                    <button className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px] p-1"
                        onClick={() => setStage(BackOfficeThemeEditorEnum.FONT_TYPE)}
                        >{getEnumName(FontsTypeSettingsEnum, restaurantThemeSettings.main.fontType || 1)}</button>    
                    
                </div>
                
                {/* <div className="w-full flex flex-row justify-between items-center mb-1">
                    <div className='text-h6 py-1 mr-3'>Font Size</div>
                    <button className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px]"
                        onClick={() => setStage(BackOfficeThemeEditorEnum.FONT_SIZE)}
                        >{getEnumName(FontsSizeSettingsEnum, restaurantThemeSettings.theme.fontSize || 1)}</button>    
                </div> */}

                <div className="w-full flex flex-row justify-start items-center mb-3">
                    <div className='mr-5 flex flex-row items-center'>
                        <MdStarBorder size={20} />  <span className="ml-1 text-h6">(L)  </span>                
                    </div> 
                    <button className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px] p-1"
                        onClick={
                            () => setStage(BackOfficeThemeEditorEnum.SVG_L)               
                        }
                        >{getEnumName(SVGTypesSettingsEnum, restaurantThemeSettings.main.svgL || 1)}</button>    
                </div>
                
                <div className="w-full flex flex-row justify-start items-center mb-3">
                    <div className='mr-5 flex flex-row items-center'>
                        <TiStarburstOutline size={20} />  <span className="ml-1 text-h6">(S)  </span>  
                    </div> 
                    <button className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px] p-1"
                        onClick={() => setStage(BackOfficeThemeEditorEnum.SVG_S)}
                        >{getEnumName(SVGTypesSettingsEnum, restaurantThemeSettings.main.svgS || 1)}</button>    
                </div>
                <div className="w-full flex flex-row justify-start items-center mb-3">
                    <div className='mr-5'>
                        <RiText size={20} />
                    </div>                
                    <input className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px] px-3 py-1"
                        type="text" placeholder="START!" value={restaurantThemeSettings.main.startText} onChange={(e) => {
                            setRestaurantThemeSettings({...restaurantThemeSettings, main: {...restaurantThemeSettings.main, startText: e.target.value}})
                        }} />
                </div>
                {stage !== undefined && <BackOfficePopup stage={stage} handleClose={()=>setStage(undefined)}/>}
            </>
            </BackOfficeSectionCard>
            
            <BackOfficeSectionCard onSectionFocus={() => props.onSectionFocus(BackOfficeEditStageEnum.HISTORY)}>
                <>
                    <div className="flex flex-row mb-3"> 
                        <div className='mr-5'>
                            <IoGrid size={20} />
                        </div>                    
                        <button className="min-w-[150px] bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px] p-1"
                            onClick={() => setStage(BackOfficeThemeEditorEnum.ARRAY)}
                            >{getEnumName(DisplayArrayTypeEnum, restaurantThemeSettings.history.displayArrayType || 1)}</button> 
                        {stage !== undefined && <BackOfficePopup stage={stage} handleClose={() => setStage(undefined)} />}
                    </div>
                    <HaveInput isChecked={restaurantThemeSettings.history.haveTitle}
                        onCheckedChange={() => { setRestaurantThemeSettings({...restaurantThemeSettings, history:{...restaurantThemeSettings.history, haveTitle: !restaurantThemeSettings.history.haveTitle}})}}>
                        <RiText size={20} />
                    </HaveInput>
                    <HaveInput isChecked={restaurantThemeSettings.history.haveCaption}
                        onCheckedChange={() => { setRestaurantThemeSettings({...restaurantThemeSettings, history:{...restaurantThemeSettings.history, haveCaption: !restaurantThemeSettings.history.haveCaption}})}}>
                        <MdOutlineSubtitles size={20} />
                    </HaveInput>
                    <HaveInput isChecked={restaurantThemeSettings.history.haveDate}
                        onCheckedChange={() => { setRestaurantThemeSettings({...restaurantThemeSettings, history:{...restaurantThemeSettings.history, haveDate: !restaurantThemeSettings.history.haveDate}})}}>
                        <MdOutlineDateRange size={20} />
                    </HaveInput>
                </>
            </BackOfficeSectionCard>
      </div>  
    );
}