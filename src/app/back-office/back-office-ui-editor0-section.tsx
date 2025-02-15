import EmptyIcon from "@/components/svg/empty-icon";
import MapIcon from "@/components/svg/map-icon";
import { useBackOfficSettigs } from "@/context/back-office-settings-context";
import { switchToFontSize } from "@/model/enum/FontsSizeSettingsEnum";
import { switchToFontFamily } from "@/model/enum/FontsTypeSettingsEnum";
import { themeSwitch } from "@/utils/themeHelper";
import React from "react";
export default function BackOfficeUIEditor0Section() { 
    const { restaurantThemeSettings} = useBackOfficSettigs();
    return <div className="w-full h-full flex flex-col justify-center items-center">
        
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-row justify-center items-center mb-2">
                <div className="mr-1" style={{width: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize1}}><MapIcon/></div>                
                <div style={{
                    color: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).fontColor0,
                    fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize1,
                    fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
                }}>{ restaurantThemeSettings.editor.locationText }</div>
            </div>
            <div className="w-[80%] rounded-xl flex flex-col justify-center items-center py-5" style={{
                backgroundColor: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).buttonColor0,
                borderColor: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).fontColor0,
                borderWidth: 5
            }}>
                <div className="mb-1" style={{width: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize2}}>
                    <EmptyIcon />
                </div>
                <div className="max-w-[80%] text-center break-words" style={{
                    color: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).fontColor0,
                    fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize0,
                    fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
                }}>{ restaurantThemeSettings.editor.takePictureDescription}</div>
            </div>
        </div>
    </div>;
}