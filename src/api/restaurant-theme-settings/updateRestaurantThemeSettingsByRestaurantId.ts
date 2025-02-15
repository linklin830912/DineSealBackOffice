import { gql } from "@apollo/client"
export const UPDATE_RESTAURANT_THEME_SETTINGS_BY_RESTAURANT_ID = gql`
mutation updateRestaurantTHemeSettingsByRestaurantId($restaurantId: Int = 10, $value: json = "") {
  update_restaurant_theme_settings(where: {restaurant_id: {_eq: $restaurantId}}, _set: {value: $value}) {
    returning {
      restaurant_id
      restaurant_theme_settings_id
      value
    }
  }
}`