import { switchToFontSize } from "@/model/enum/FontsSizeSettingsEnum";
import { switchToFontFamily } from "@/model/enum/FontsTypeSettingsEnum";
import { ColorThemeSettings } from "@/model/theme/ColorThemeSettings";
import { RestaurantSettings } from "@/model/theme/RestaurantSettings";
import { themeSwitch } from "@/utils/themeHelper";
import React, { useEffect, useState } from "react";
type RatingTagProps = {
    placeHolder: string;
    values: string[];
    handleTagSelected: (x: string[]) => void
    restaurantSettings: RestaurantSettings
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
                    borderColor: themeSwitch(props.restaurantSettings.main.colorThemeEnum).pages.main.buttonColor0,
                    fontSize: switchToFontSize(props.restaurantSettings.main.fontSize).fontSize1,
                    fontFamily: switchToFontFamily(props.restaurantSettings.main.fontType),
                    color: themeSwitch(props.restaurantSettings.main.colorThemeEnum).pages.main.fontColor0,
                }}
                placeholder={props.placeHolder }
                onClick={() => { setIsOpen(!isOpen) }}
                onChange={handleInputChange}
            />
            {isOpen && <ul className="absolute w-full top-[17px]" style={{
                    backgroundColor: themeSwitch(props.restaurantSettings.main.colorThemeEnum).pages.main.backgroundColor0,
                    fontSize: switchToFontSize(props.restaurantSettings.main.fontSize).fontSize1,
                    fontFamily: switchToFontFamily(props.restaurantSettings.main.fontType),
                    color:themeSwitch(props.restaurantSettings.main.colorThemeEnum).pages.main.fontColor0
                }}>{
                    props.values.filter((tag=>tag!=="")).map((val, index) => <li key={index}> <button className="w-full text-start px-1 border-[1px]"
                    style={{
                        fontSize: switchToFontSize(props.restaurantSettings.main.fontSize).fontSize1,
                        fontFamily: switchToFontFamily(props.restaurantSettings.main.fontType),
                        color:themeSwitch(props.restaurantSettings.main.colorThemeEnum).pages.main.fontColor0
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
                    backgroundColor: themeSwitch(props.restaurantSettings.main.colorThemeEnum).pages.main.buttonColor0,
                    fontSize: switchToFontSize(props.restaurantSettings.main.fontSize).fontSize1,
                    fontFamily: switchToFontFamily(props.restaurantSettings.main.fontType),
                    color:themeSwitch(props.restaurantSettings.main.colorThemeEnum).pages.main.fontColor0
                }}
                key={index}>{
                tag}</div>)
        }</div>
        
    </div>
}