import { createClient } from 'contentful';

// contentful client
export const client = createClient({
  space: `${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.REACT_APP_ACCESS_TOKEN}`,
});
