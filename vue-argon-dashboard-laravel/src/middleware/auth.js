import store from "../store";

export default async function auth({ next }) {

  if (!store.getters["auth/isAuthenticated"]) {
    return next({ name: "Login" });
  }
  
  await store.dispatch("profile/me");
  next();
}
