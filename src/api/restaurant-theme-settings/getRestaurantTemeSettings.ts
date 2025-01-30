import { gql } from "@apollo/client";

export const GET_RESTAURANT_THEME_SETTINGS_BY_ID = gql`
    query getRestaurantThemeSettingsById($id: uuid = "") {
    restaurant_theme_settings(where: {restaurant_theme_settings_id: {_eq: $id}}) {
        color_theme_id
        font_type_id
        restaurant_theme_settings_id
        svg_l_type_id
        font_size_id
        svg_s_type_id
    }
}`
