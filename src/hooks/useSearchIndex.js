import { useStaticQuery, graphql } from 'gatsby';


export default function useSearchIndex() {
  const data = useStaticQuery(graphql`
    query SearchIndex {
      localSearchDemos {
        index
        store
      }
    }
  `);

  return data.localSearchDemos;
}