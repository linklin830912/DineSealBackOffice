import { ColorThemeSettingsEnum } from "@/model/enum/ColorThemeSettingsEnum";
import { ColorThemeSettings } from "@/model/theme/ColorThemeSettings";

export function themeSwitch(themeEnum: ColorThemeSettingsEnum): ColorThemeSettings {    
    
    switch (themeEnum) { 
        case ColorThemeSettingsEnum.DARK:
            return {
                pages: {
                    main: {
                        backgroundColor0: "#fcfcd7",
                        backgroundColor1: "white",
                        buttonColor0: "white",
                        buttonColor1: "yellow",
                        svgFillColor0: "yellow",
                        svgFillColor1: "yellow",
                        svgStrokeColor0: "yellow",
                        svgStrokeColor1: "yellow",
                        fontColor0: "black",           
                        fontSize0: "7px",
                        fontSize1: "10px",
                    },
                    editor: {},
                    history: {}
                }
            };
        default: // LIGHT
            return {
                pages: {
                    main: {
                        backgroundColor0: "#bfb793",
                        backgroundColor1: "#ffed9c",
                        buttonColor0: "#a18300",
                        buttonColor1: "#d1ab02",

                        svgFillColor0: "#bfaf21",
                        svgFillColor1: "#fff700",
                        svgStrokeColor0: "#a18300",
                        svgStrokeColor1: "white",

                        fontColor0: "white",           
                        fontSize0: "7px",
                        fontSize1: "10px",
                    },
                    editor: {},
                    history: {}
                }
            };
    }
}