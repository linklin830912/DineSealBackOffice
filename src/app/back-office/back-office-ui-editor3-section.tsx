import RatingStar from "@/components/rating/rating-star";
import RatingTag from "@/components/rating/rating-tag";
import MapIcon from "@/components/svg/map-icon";
import { useBackOfficSettigs } from "@/context/back-office-settings-context";
import { switchToFontSize } from "@/model/enum/FontsSizeSettingsEnum";
import { switchToFontFamily } from "@/model/enum/FontsTypeSettingsEnum";
import { themeSwitch } from "@/utils/themeHelper";
import React from "react";
export default function BackOfficeUIEditor3Section() { 
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

        <div className="w-[80%] rounded-xl flex flex-col justify-start items-start p-1"
            style={{
                backgroundColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.backgroundColor2,
                borderColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.backgroundColor2,
                borderWidth: 5
            }}>

            {restaurantSettings.editor.haveNotice && <div className="w-full">
                    <div className="w-full min-h-[50px] px-2 py-1 rounded-[10px] text-center font-semibold" style={{
                        backgroundColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.buttonColor0,
                        color: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.fontColor0,
                        fontSize: switchToFontSize(restaurantSettings.main.fontSize).fontSize1,
                        fontFamily: switchToFontFamily(restaurantSettings.main.fontType)
                    }}>{restaurantSettings.editor.noticeLabel}
                </div>
            </div>}
            <div className="flext flex-col justify-center items-center text-center py-1"style={{
                        color: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.fontColor1,
                        fontSize: switchToFontSize(restaurantSettings.main.fontSize).fontSize0,
                        fontFamily: switchToFontFamily(restaurantSettings.main.fontType)
                    }}>
                {restaurantSettings.editor.consentQuestionLabel}
                <div className="w-full flex flex-row justify-start items-center pt-1">
                    <input type="checkbox" style={{accentColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.buttonColor0}}/> 
                    <div className="ml-1">{ restaurantSettings.editor.consentQuestionAgreeLabel}</div>
                </div>
            </div>
            
        </div>
    </div>;
}