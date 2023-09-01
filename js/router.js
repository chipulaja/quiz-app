const Router = {
  routes: [],
  basePath: "/",
  addRoute(route, handler) {
    this.routes.push({ route, handler });
  },
  navigate() {
    const currentRoute = window.location.hash.replace("#", "") || "/";
    const matchedRoute = this.routes.find(route => {
      const regex = new RegExp(`^${route.route.replace(/\/:[^/]+/g, '(/[^/]+)')}$`);
      return currentRoute.match(regex);
    });

    if (matchedRoute) {
      matchedRoute.handler();
    } else {
      console.error("Route not found!");
    }
  },
  setBasePath(path) {
    this.basePath = path;
  }
};

export default Router;
