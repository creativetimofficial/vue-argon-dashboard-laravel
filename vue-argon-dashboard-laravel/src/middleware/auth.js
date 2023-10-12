import store from "../store";

export default async function auth({ next }) {

  if (!store.getters["auth/isAuthenticated"]) {
    return next({ name: "Login" });
  }
  
  try{
    await store.dispatch("profile/me");
    next();
  }catch(error){
    try {
      await store.dispatch("auth/logout");
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return next({ name: "Login" });
    }
  }
  
}
