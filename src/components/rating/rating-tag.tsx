import { switchToFontSize } from "@/model/enum/FontsSizeSettingsEnum";
import { switchToFontFamily } from "@/model/enum/FontsTypeSettingsEnum";
import { RestaurantThemeSettings } from "@/model/theme/RestaurantThemeSettings";
import { themeSwitch } from "@/utils/themeHelper";
import React, { useEffect, useState } from "react";
type RatingTagProps = {
    placeHolder: string;
    values: string[];
    handleTagSelected: (x: string[]) => void
    restaurantThemeSettings: RestaurantThemeSettings
}
export default function RatingTag(props: RatingTagProps) { 
    const [isOpen, setIsOpen] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const [validValues, setValidValues] = useState<string[]>(props.values);
    useEffect(() => { 
        setIsOpen(false)
    }, [tags])
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }
    return <div className="w-full flex flex-col" >
        <div className="w-full flex relative flex-col">
            <input className="w-full border-[1px] px-1 focus:outline-none focus:border-2 rounded-lg"
                style={{
                    borderColor: themeSwitch(props.restaurantThemeSettings.main.colorThemeEnum).buttonColor0,
                    backgroundColor: themeSwitch(props.restaurantThemeSettings.main.colorThemeEnum).backgroundColor2,
                    fontSize: switchToFontSize(props.restaurantThemeSettings.main.fontSize).fontSize1,
                    fontFamily: switchToFontFamily(props.restaurantThemeSettings.main.fontType),
                    color: themeSwitch(props.restaurantThemeSettings.main.colorThemeEnum).fontColor0,
                }}
                placeholder={props.placeHolder }
                onClick={() => { setIsOpen(!isOpen) }}
                onChange={handleInputChange}
            />
            {isOpen && <ul className="absolute w-full top-[17px]" style={{
                    backgroundColor: themeSwitch(props.restaurantThemeSettings.main.colorThemeEnum).backgroundColor0,
                    fontSize: switchToFontSize(props.restaurantThemeSettings.main.fontSize).fontSize1,
                    fontFamily: switchToFontFamily(props.restaurantThemeSettings.main.fontType),
                    color:themeSwitch(props.restaurantThemeSettings.main.colorThemeEnum).fontColor0
                }}>{
                    props.values.filter((tag=>tag!=="")).map((val, index) => <li key={index}> <button className="w-full text-start px-1 border-[1px]"
                    style={{
                        fontSize: switchToFontSize(props.restaurantThemeSettings.main.fontSize).fontSize1,
                        fontFamily: switchToFontFamily(props.restaurantThemeSettings.main.fontType),
                        color:themeSwitch(props.restaurantThemeSettings.main.colorThemeEnum).fontColor0
                    }}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        setTags([...tags, val])
                        let newValidValues = [...validValues];
                        newValidValues = newValidValues.filter((v) => v !== val)
                        setValidValues(newValidValues);
                        props.handleTagSelected([...tags, val]);
                    }}
                >{val}</button></li>)
            }
        </ul>}
        </div>
        <div className="w-full flex flex-row mt-2 flex-wrap">{
            tags.filter((tag=>tag!=="")).map((tag, index) => <div className="px-3 py-1 mb-1 mr-1 rounded-[50px] bg-pageSvgPath0Color text-h6"
                style={{
                    backgroundColor: themeSwitch(props.restaurantThemeSettings.main.colorThemeEnum).buttonColor0,
                    fontSize: switchToFontSize(props.restaurantThemeSettings.main.fontSize).fontSize1,
                    fontFamily: switchToFontFamily(props.restaurantThemeSettings.main.fontType),
                    color:themeSwitch(props.restaurantThemeSettings.main.colorThemeEnum).fontColor0
                }}
                key={index}>{
                tag}</div>)
        }</div>
        
    </div>
}