import { createWebHistory, createRouter } from "vue-router";
import portfolioPage from "@/views/PortfolioPage.vue";
import publish from "@/router/publish/index.js";

const routes = [
    {
        path: "/",
        component: () => import("@/views/PortfolioPage.vue"),
    },
    {
        path: "/PortfolioPage",
        name: "PortfolioPage",
        component: portfolioPage,
    },
    ...publish,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;