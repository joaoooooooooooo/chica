module.exports = {
  settings: {
    cors: {
      enabled: true,
    },
  },
  routes: [
    {
      method: 'GET',
      path: 'https://strapi-rpjc.onrender.com/api/ensaios?:idpopulate=%2A',
      handler: async (ctx) => {
        const { id } = ctx.params;
        const item = await strapi.services.ensaios.findOne({ id });
        return item;
      },
    },
  ],
}; d