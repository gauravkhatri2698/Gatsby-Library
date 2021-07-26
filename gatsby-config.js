require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-harperdb`,
      options: {
        secret: process.env.HARPER_DB_SECRET_KEY,
        url: process.env.HARPER_DB_URL,
        payload: {
          operation: "sql",
          sql: "SELECT * FROM library.book",
        },
        type: "books",
      },
    },
  ],
};
