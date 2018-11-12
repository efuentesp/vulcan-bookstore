import Users from "meteor/vulcan:users";

Users.groups.members.can([
  'shoppingcart.create',
  'shoppingcart.update.own',
  'shoppingcart.delete.own',
]);

Users.groups.admins.can([
  'shoppingcart.update.all',
  'shoppingcart.delete.all',
]);
