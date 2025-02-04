import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about-us", "routes/about-us.tsx"),
  route("/programs", "routes/programs.tsx"),
  route("/contact-us", "routes/contact-us.tsx"),
  route("/partnership", "routes/partner.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
