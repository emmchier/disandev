import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { client } from '../../common/contentfulClientProvider';
import { ProjectI } from '../../interfaces';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const projects = await client.getEntries({ content_type: 'proyectos' });
  const fields: ISitemapField[] = projects.items.map((project: ProjectI) => ({
    loc: `https://disandev.vercel.app/projects/${project.slug}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
