/*
const Router = {
  routes: [],
  addRoute(route, handler) {
    this.routes.push({ route, handler });
  },
  navigate() {
    const currentRoute = window.location.pathname;
    const matchedRoute = this.routes.find(route => route.route === currentRoute);

    if (matchedRoute) {
      matchedRoute.handler();
    } else {
      console.error("Route not found!");
    }
  }
};

export default Router;
*/

const Router = {
  routes: [],
  addRoute(route, handler) {
    this.routes.push({ route, handler });
  },
  navigate() {
    const currentRoute = window.location.pathname;
    const matchedRoute = this.routes.find(route => {
      const regex = new RegExp(`^${route.route.replace(/\/:[^/]+/g, '(/[^/]+)')}$`);
      return currentRoute.match(regex);
    });

    if (matchedRoute) {
      matchedRoute.handler();
    } else {
      console.error("Route not found!");
    }
  }
};

export default Router;