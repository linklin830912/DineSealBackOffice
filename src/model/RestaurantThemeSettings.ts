export enum ColorThemeSettingsEnum { 
    LIGHT = 1,
    DARK = 2,
}
export enum FontsTypeSettingsEnum {
    ROBOTO = 1,
    HELVETICA = 2,
    INTER = 3,
    GEORGIA = 4,
    TIMES_NEW_ROMAN = 5,
    POPPINS = 6,
}
export enum FontsSizeSettingsEnum {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3
}
export enum LogoPositionEnum { 
    start = 1,
    center = 2,    
    end = 3
}
export type PhotoSettings = {
    logo: {
        position?: {
            vertical: LogoPositionEnum,
            horizontal: LogoPositionEnum
        },
        size: {
            width: number,
            height: number
        }
    },
    canEdit: boolean
}
export enum SVGTypesSettingsEnum { 
    STAR = 1,
    DIAMOND = 2,
    CIRCLE = 3,
    SQUARE = 4,
    HEXAGON = 5,
    PENTAGON = 6,
    HEART = 7
}
export type RestaurantThemeSettings = {
    color: ColorThemeSettingsEnum
    fonts: FontsTypeSettingsEnum
    fontSize: FontsSizeSettingsEnum
    photoSettings: PhotoSettings
    svgType: SVGTypesSettingsEnum
    canShare: boolean
};
