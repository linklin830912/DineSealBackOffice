import { RestaurantSettings } from "@/model/theme/RestaurantSettings";

export function mapToRestaurantThemeSettings(data: any): RestaurantSettings{
    const settingsData = data.restaurant_theme_settings[0];
    return {
        profile: {},
        theme: {
            colorThemeEnum: settingsData.color_theme_id,
            fontType: settingsData.font_type_id,
            fontSize: settingsData.font_size_id,
            svgL: settingsData.svg_l_type_id,
            svgS: settingsData.svg_s_type_id
        },
        seoSettings: {},
    } as RestaurantSettings;
 }