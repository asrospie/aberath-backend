module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ab91a244e88af73ecd0bf5deefa20fa3'),
  },
});
