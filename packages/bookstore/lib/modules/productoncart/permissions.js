import Users from "meteor/vulcan:users";

Users.groups.members.can([
  'productoncart.create',
  'productoncart.update.own',
  'productoncart.delete.own',
]);

Users.groups.admins.can([
  'productoncart.update.all',
  'productoncart.delete.all',
]);
