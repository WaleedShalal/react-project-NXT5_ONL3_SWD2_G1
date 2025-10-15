import { redirect } from "react-router";

export default async function authMiddleware({ context }, next) {
  console.log("🚀 ~ authMiddleware ~ context:", context);
  // await next();
  const isAdminUser = false;
  if (!isAdminUser) {
    throw redirect("/login");
  }
}
