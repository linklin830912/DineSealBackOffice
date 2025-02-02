import EmptyIcon from "@/components/svg/empty-icon";
import MapIcon from "@/components/svg/map-icon";
import { useBackOfficSettigs } from "@/context/back-office-settings-context";
import { switchToFontSize } from "@/model/enum/FontsSizeSettingsEnum";
import { switchToFontFamily } from "@/model/enum/FontsTypeSettingsEnum";
import { themeSwitch } from "@/utils/themeHelper";
import React from "react";
import { HiPhotograph } from "react-icons/hi";
export default function BackOfficeUIEditor1Section() { 
    const { restaurantSettings} = useBackOfficSettigs();
    return <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-row justify-center items-center mb-2">
            <div className="mr-1" style={{width: switchToFontSize(restaurantSettings.main.fontSize).fontSize1}}><MapIcon/></div>                
            <div style={{
                color: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.fontColor0,
                fontSize: switchToFontSize(restaurantSettings.main.fontSize).fontSize1,
                fontFamily: switchToFontFamily(restaurantSettings.main.fontType)
            }}>{ restaurantSettings.editor.locationText }</div>
        </div>

        <div className="w-[80%] rounded-xl flex flex-col justify-start items-start"
            style={{
                backgroundColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.backgroundColor2,
                borderColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.backgroundColor2,
                borderWidth: 5
        }}>
            <div className="w-full rounded-xl flex justify-center items-center py-8" style={{
                backgroundColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.buttonColor0
            }}>
                <HiPhotograph size={"60"}/>
            </div>
            <div className="w-full flex flex-col">
                {restaurantSettings.editor.haveTitle && <div className="w-full mt-2 px-2 py-1 rounded-[10px]"
                    style={{
                        backgroundColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.buttonColor2,
                        color: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.fontColor1,
                        fontSize: switchToFontSize(restaurantSettings.main.fontSize).fontSize1,
                        fontFamily: switchToFontFamily(restaurantSettings.main.fontType)
                }}>{restaurantSettings.editor.titleText}</div>}
                {restaurantSettings.editor.haveCaptions && <div className="w-full min-h-[50px] mt-1 px-2 py-1 rounded-[10px]" 
                    style={{
                        backgroundColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.buttonColor2,
                        color: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.fontColor1,
                        fontSize: switchToFontSize(restaurantSettings.main.fontSize).fontSize0,
                        fontFamily: switchToFontFamily(restaurantSettings.main.fontType)
                }}>{restaurantSettings.editor.captionsText}</div>}
            </div>
            
        </div>
    </div>;
}