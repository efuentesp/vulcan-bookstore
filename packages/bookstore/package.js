Package.describe({
  name: "bookstore"
});

Package.onUse(api => {
  api.use([
    "vulcan:core@1.12.8",
    "vulcan:forms@1.12.8",
    "vulcan:accounts@1.12.8"
  ]);

  api.mainModule("lib/server/main.js", "server");
  api.mainModule("lib/client/main.js", "client");
});
