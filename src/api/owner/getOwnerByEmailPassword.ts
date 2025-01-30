import { gql } from '@apollo/client';

export const GET_OWNER_BY_EMAIL_PASSWORD = gql`
    query getOwnerByEmailPassword($email: String = "", $password: String = "") {
    restaurant_owner(where: {email: {_eq: $email}, password: {_eq: $password}}) {
        restaurant_owner_id
        email
    }
}`
