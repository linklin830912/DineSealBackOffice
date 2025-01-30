import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { GET_OWNER_BY_EMAIL_PASSWORD } from '../owner/getOwnerByEmailPassword';
import { useEffect, useState } from 'react';
import { mapToRestaurantOwner } from '@/mapper/mapRestaurantOwner';
import { mapToRestaurant } from '@/mapper/mapToRestaurant';
import { Restaurant } from '@/model/Restaurant';

export const GET_RESTAURANTS_BY_OWNER_ID = gql`
query getRestaurantsByOwnerId($ownerId: uuid = "") {
  restaurant(where: {restaurant_owner_id: {_eq: $ownerId}}, order_by: {restaurant_id: asc}) {
    restaurant_theme_settings_id
    restaurant_name
    restaurant_id
    restaurant_location
    restaurant_owner_id
    restaurant_type
    restaurant_link
    menu
    media_link
    game_available
    dishes_images
  }
}`

export function useRestaurantsByEmailAndPassword(email: string, password: string):Restaurant[]{
  const [restaurants, setRestaurants] = useState<Restaurant[]>([] as Restaurant[]);
  const { data: ownerData } = useQuery(GET_OWNER_BY_EMAIL_PASSWORD, {
          variables: {
              email: email,
              password: password
          }
      });
      const [fetchRestaurants, { data: restaurantsData }] = useLazyQuery(GET_RESTAURANTS_BY_OWNER_ID);
      useEffect(() => {
          if (ownerData) {
              const owner = mapToRestaurantOwner(ownerData);
              fetchRestaurants({
                  variables: {
                      ownerId: owner.ownerId
                  }
              });
          }
      }, [ownerData]);
      useEffect(() => {
          if (restaurantsData) {            
              setRestaurants(mapToRestaurant(restaurantsData))
          }
      }, [restaurantsData]);
  return restaurants;
}