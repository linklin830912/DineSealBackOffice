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
            <div style={{
                    color: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).fontColor1,
                    fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize0,
                    fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
                }}>{restaurantThemeSettings.editor.feedbackLabel}
            </div>
            <div className="w-full rounded-xl flex justify-center items-center py-3" style={{
                    backgroundColor: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).buttonColor0
                }}>
                <HiPhotograph size={"30"}/>
            </div>
            {restaurantThemeSettings.editor.haveRating && <div className="w-full">
                <div className="mt-1" style={{
                    color: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).fontColor1,
                    fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize0,
                    fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
                    }}>{restaurantThemeSettings.editor.ratingLabel}
                </div>
                <RatingStar starColor={themeSwitch(restaurantThemeSettings.main.colorThemeEnum).buttonColor0}
                    totalStars={5} handleStarSelected={() => { }} />
            </div>}
            {restaurantThemeSettings.editor.haveTags && <div className="w-full">
                    <div className="mt-1" style={{
                        color: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).fontColor1,
                        fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize0,
                        fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
                    }}>{restaurantThemeSettings.editor.tagsLabel}
                </div>

                <div>
                    <RatingTag placeHolder={restaurantThemeSettings.editor.tagsText}
                        restaurantThemeSettings={restaurantThemeSettings}
                        values={restaurantThemeSettings.editor.tags} handleTagSelected={() => { }} />
                </div>
            </div>}

            {restaurantThemeSettings.editor.haveAppreciations && <div className="w-full">
                    <div className="w-full min-h-[50px] mt-1 px-2 py-1 rounded-[10px]" style={{
                        backgroundColor: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).buttonColor2,
                        color: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).fontColor1,
                        fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize1,
                        fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
                    }}>{restaurantThemeSettings.editor.appreciationsText}
                </div>
            </div>}
        </div>
    </div>;
}