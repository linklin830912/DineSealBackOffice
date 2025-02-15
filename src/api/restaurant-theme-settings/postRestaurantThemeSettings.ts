import { gql } from "@apollo/client"
export const POST_RESTAURANT_THEME_SETTINGS = gql`mutation postRestaurantThemeSettings($restaurantId: Int = -1, $value: json = "{}") {
  insert_restaurant_theme_settings_one(object: {restaurant_id: $restaurantId, value: $value}) {
    value
    restaurant_id
    restaurant_theme_settings_id    
  }
}`;