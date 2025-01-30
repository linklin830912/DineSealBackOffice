import { RestaurantOwner } from "@/model/RestaurantOwner";

export function mapToRestaurantOwner(data: any): RestaurantOwner { 
    const ownerData = data.restaurant_owner[0]
    return {
        ownerId: ownerData.restaurant_owner_id,
        email: ownerData.email
    } as RestaurantOwner;
}