import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    countries {
      code
      currency
      emoji
      emojiU
      name
      native
      phone
      capital
    }
  }
`;
