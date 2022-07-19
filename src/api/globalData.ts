import { client } from '../common/contentfulClientProvider';

export const getGlobalData = async () => {
  try {
    const info = await client.getEntries({ content_type: 'information' });

    return {
      props: {
        info: info.items,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
