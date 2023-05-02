module.exports = {
  settings: {
    cors: {
      enabled: true,
    },
  },
  routes: [
    {
      method: 'GET',
      path: '/ensaios/:id',
      handler: async (ctx) => {
        const { id } = ctx.params;
        const item = await strapi.services.ensaios.findOne({ id });
        return item;
      },
    },
  ],
};