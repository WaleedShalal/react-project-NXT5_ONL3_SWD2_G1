import { redirect } from "react-router";

export default async function authMiddleware({ context }, next) {
  console.log("🚀 ~ authMiddleware ~ context:", context);
  // await next();
  const isAdminUser = true;
  if (!isAdminUser) {
    throw redirect("/login");
  }
}
