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
                        backgroundColor2: "#ffffff",
                        buttonColor0: "white",
                        buttonColor1: "yellow",
                        buttonColor2: "#7a7761",
                        svgFillColor0: "yellow",
                        svgFillColor1: "yellow",
                        svgStrokeColor0: "yellow",
                        svgStrokeColor1: "yellow",
                        fontColor0: "black",
                        fontColor1: "black",
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
                        backgroundColor2: "#ffffff",
                        buttonColor0: "#a18300",
                        buttonColor1: "#d1ab02",
                        buttonColor2: "#c9c7b3",

                        svgFillColor0: "#bfaf21",
                        svgFillColor1: "#fff700",
                        svgStrokeColor0: "#a18300",
                        svgStrokeColor1: "white",

                        fontColor0: "#ffffff",
                        fontColor1: "#403c22",
                    },
                    editor: {},
                    history: {}
                }
            };
    }
}