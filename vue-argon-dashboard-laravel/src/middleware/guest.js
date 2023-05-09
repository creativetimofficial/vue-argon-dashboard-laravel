import store from "../store";

export default async function guest({ next }) {

  if (store.getters["auth/isAuthenticated"]) {
    return next({ name: "Dashboard" });
  }
  
  next();
}
