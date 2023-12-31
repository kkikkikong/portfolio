import { createWebHistory, createRouter } from "vue-router";
import introPage from "@/views/IntroPage.vue";
import introMaster from "@/views/IntroMaster.vue";
import phoneMain from "@/views/PhoneMain.vue";
import listTab from "@/views/ListTab.vue";
import historyList from "@/views/HistoryList.vue";

const routes = [
    {
        path: "/",
        component: () => import("@/views/IntroPage.vue"),
    },
    {
        path: "/IntroPage",
        name: "IntroPage",
        component: introPage,
    },
    {
        path: "/IntroMaster",
        name: "IntroMaster",
        component: introMaster,
    },
    {
        path: "/PhoneMain",
        name: "PhoneMain",
        component: phoneMain,
    },
    {
        path: "/ListTab",
        name: "ListTab",
        component: listTab,
    },
    {
        path: "/HistoryList",
        name: "HistoryList",
        component: historyList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;