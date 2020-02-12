const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  campaignItems: forwardTo('db'),
  campaignItem: forwardTo('db'),
  campaignScript: forwardTo('db'),
  campaignScripts: forwardTo('db'),


  // async campaignScripts(parent, args, ctx, info) {

  //   // const campaignScripts = await ctx.db.query.campaignScript(
  //   //   console.log(args),
  //   //   {
  //   //     where: {
  //   //       campaignID: 'ck4ecgy3o1o2p0db095bz0iguc'
  //   //     },
  //   //   },
  //   //   info
  //   // );


  //   const campaignScripts = await context.prisma
  //   .linksConnection({
  //     where: {
  //       OR: [
  //         { description_contains: args.filter },
  //         { url_contains: args.filter },
  //       ],
  //     },
  //   })
  //   .aggregate()
  //   .count()


  //   return campaignScripts;
  // },



  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    // check if there is a current user id
    if(!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user({
      where: {id: ctx.request.userId},

    }, info);
  },
  async users(parent, args, ctx, info) {
    // check if they are logged in
    if(!ctx.request.userId) {
      throw new Error('You must be logged in');
    }
    // check if user has permissions to query all users
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE', 'USER']);

    // if they do, query all users
    return ctx.db.query.users({}, info);
  },
  async order(parent, args, ctx, info) {
    // make sure they are logged in
    if(!ctx.request.userId) {
      throw new Error('You arent logged in');
    }
    //query the current order
    const order = await ctx.db.query.order({
      where: { id: args.id },
    }, info)
    // check if they have permissions to see this order
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes('ADMIN');
    if(!ownsOrder || !hasPermissionToSeeOrder) {
      throw new Error('You cant see this bud');
    }
    // return the order
    return order;
  },
  async orders(parent, args, ctx, info) {
    const {userId} = ctx.request;
    if(!userId) {
      throw new Error('You arent logged in');
    }
    return ctx.db.query.orders({
      where: {
        user: {
          id: userId
        }
      }
    }, info)
  }
};

module.exports = Query;