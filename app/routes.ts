import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("expenses", "routes/expenses.tsx"),
    route("profile", "routes/profile.tsx"),
    route("settings", "routes/settings.tsx")
] satisfies RouteConfig;
