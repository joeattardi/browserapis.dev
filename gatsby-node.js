exports.onCreateWebpackConfig = ({
  actions,
  loaders
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {

        },
        {
          resourceQuery: /raw/,
          type: 'asset/source'
        }
      ]
    }
  })
};
