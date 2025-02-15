import MapIcon from "@/components/svg/map-icon";
import { useBackOfficSettigs } from "@/context/back-office-settings-context";
import { switchToFontSize } from "@/model/enum/FontsSizeSettingsEnum";
import { switchToFontFamily } from "@/model/enum/FontsTypeSettingsEnum";
import { themeSwitch } from "@/utils/themeHelper";
import React from "react";
export default function BackOfficeUIEditor3Section() { 
    const { restaurantThemeSettings} = useBackOfficSettigs();
    return <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-row justify-center items-center mb-2">
            <div className="mr-1" style={{width: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize1}}><MapIcon/></div>                
            <div style={{
                color: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).fontColor0,
                fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize1,
                fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
            }}>{ restaurantThemeSettings.editor.locationText }</div>
        </div>

        <div className="w-[80%] rounded-xl flex flex-col justify-start items-start p-1"
            style={{
                backgroundColor: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).backgroundColor2,
                borderColor: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).backgroundColor2,
                borderWidth: 5
            }}>

            {restaurantThemeSettings.editor.haveNotice && <div className="w-full">
                    <div className="w-full min-h-[50px] px-2 py-1 rounded-[10px] text-center font-semibold" style={{
                        backgroundColor: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).buttonColor0,
                        color: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).fontColor0,
                        fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize1,
                        fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
                    }}>{restaurantThemeSettings.editor.noticeLabel}
                </div>
            </div>}
            <div className="flext flex-col justify-center items-center text-center py-1"style={{
                        color: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).fontColor1,
                        fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize0,
                        fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
                    }}>
                {restaurantThemeSettings.editor.consentQuestionLabel}
                <div className="w-full flex flex-row justify-start items-center pt-1">
                    <input type="checkbox" style={{accentColor: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).buttonColor0}}/> 
                    <div className="ml-1">{ restaurantThemeSettings.editor.consentQuestionAgreeLabel}</div>
                </div>
            </div>
            
        </div>
    </div>;
}