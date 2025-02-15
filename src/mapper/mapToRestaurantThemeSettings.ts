import { RestaurantThemeSettings } from "@/model/theme/RestaurantThemeSettings";

export function mapToRestaurantThemeSettings(data: any): RestaurantThemeSettings{
    const settingsData = data.restaurant_theme_settings[0];
    return settingsData.value as RestaurantThemeSettings;
}
export function isRestaurantThemeSettingsValid(data: any) { 
    if (data === undefined) return false;
    return data.restaurant_theme_settings[0] !== undefined;
}