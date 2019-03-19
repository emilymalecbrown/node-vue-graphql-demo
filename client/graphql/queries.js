import gql from 'graphql-tag';

export const getCountryEmojis = gql`{
  countries {
    code,
    emoji
  }
}`;

export const getCountryLanguages = gql`{
  countries {
    code,
    languages {
      native,
      name
    }
  }
}`;
