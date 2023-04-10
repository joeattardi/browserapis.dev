import { useStaticQuery, graphql } from 'gatsby';

export default function useSearchIndex() {
  const data = useStaticQuery(graphql`
    {
      localSearchDemos {
        index
        store
      }
    }
  `);

  return data.localSearchDemos;
}