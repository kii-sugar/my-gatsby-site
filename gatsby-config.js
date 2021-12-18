module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Page",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-preact",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`, // 各フォルダに異なるnameオプションを指定することで特定のフォルダのみにフィルターをかけるGraphQLクエリを作成できる
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx"
  ],
};
