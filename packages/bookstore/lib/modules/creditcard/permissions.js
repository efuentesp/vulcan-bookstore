import Users from "meteor/vulcan:users";

Users.groups.members.can([
  'creditcard.create',
  'creditcard.update.own',
  'creditcard.delete.own',
]);

Users.groups.admins.can([
  'creditcard.update.all',
  'creditcard.delete.all',
]);
