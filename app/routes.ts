import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home/home.tsx"),
    route("expenses", "routes/expenses/expenses.tsx"),
    route("profile", "routes/profile/profile.tsx"),
    route("settings", "routes/settings/settings.tsx")
] satisfies RouteConfig;
