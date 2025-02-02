import RatingStar from "@/components/rating/rating-star";
import RatingTag from "@/components/rating/rating-tag";
import MapIcon from "@/components/svg/map-icon";
import { useBackOfficSettigs } from "@/context/back-office-settings-context";
import { switchToFontSize } from "@/model/enum/FontsSizeSettingsEnum";
import { switchToFontFamily } from "@/model/enum/FontsTypeSettingsEnum";
import { themeSwitch } from "@/utils/themeHelper";
import React from "react";
import { HiPhotograph } from "react-icons/hi";
export default function BackOfficeUIEditor2Section() { 
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
            <div style={{
                    color: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.fontColor1,
                    fontSize: switchToFontSize(restaurantSettings.main.fontSize).fontSize0,
                    fontFamily: switchToFontFamily(restaurantSettings.main.fontType)
                }}>{restaurantSettings.editor.feedbackLabel}
            </div>
            <div className="w-full rounded-xl flex justify-center items-center py-3" style={{
                    backgroundColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.buttonColor0
                }}>
                <HiPhotograph size={"30"}/>
            </div>
            {restaurantSettings.editor.haveRating && <div className="w-full">
                <div className="mt-1" style={{
                    color: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.fontColor1,
                    fontSize: switchToFontSize(restaurantSettings.main.fontSize).fontSize0,
                    fontFamily: switchToFontFamily(restaurantSettings.main.fontType)
                    }}>{restaurantSettings.editor.ratingLabel}
                </div>
                <RatingStar starColor={themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.buttonColor0}
                    totalStars={5} handleStarSelected={() => { }} />
            </div>}
            {restaurantSettings.editor.haveTags && <div className="w-full">
                    <div className="mt-1" style={{
                        color: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.fontColor1,
                        fontSize: switchToFontSize(restaurantSettings.main.fontSize).fontSize0,
                        fontFamily: switchToFontFamily(restaurantSettings.main.fontType)
                    }}>{restaurantSettings.editor.tagsLabel}
                </div>

                <div>
                    <RatingTag placeHolder={restaurantSettings.editor.tagsText}
                        restaurantSettings={restaurantSettings}
                        values={restaurantSettings.editor.tags} handleTagSelected={() => { }} />
                </div>
            </div>}

            {restaurantSettings.editor.haveAppreciations && <div className="w-full">
                    <div className="w-full min-h-[50px] mt-1 px-2 py-1 rounded-[10px]" style={{
                        backgroundColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.buttonColor2,
                        color: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.fontColor1,
                        fontSize: switchToFontSize(restaurantSettings.main.fontSize).fontSize1,
                        fontFamily: switchToFontFamily(restaurantSettings.main.fontType)
                    }}>{restaurantSettings.editor.appreciationsText}
                </div>
            </div>}
            
            
            
            
        </div>
    </div>;
}