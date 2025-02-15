module.exports = {

"[project]/app/data/projects.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "projects": (()=>projects)
});
const projects = [
    {
        slug: "nazosui",
        title: "ナゾスイ",
        description: "川崎水族館での謎解き",
        tag: [
            "nazo",
            "editorial"
        ],
        image: "nazosui.jpg",
        layout: "standard",
        year: 2023,
        month: 4,
        url: "http://nazosui.kawa-sui.com/",
        client: "RIDDLER"
    },
    {
        slug: "maitsuki",
        title: "毎月謎コン",
        description: "毎月謎コン様のメインビジュアルやロゴなどのグラフィックデザインを担当しました！</ br>「毎月、面白かった謎解きを集めよう」といったカジュアルな企画なため、グラフィックも親しみを持てるような温かい配色にしたり、「いかにも謎解き公演に居そう」な人たちを描いてみたりしています。",
        tag: [
            "logo",
            "graphic"
        ],
        image: "maitsuki.jpg",
        layout: "custom",
        year: 2023,
        month: 4,
        url: "https://x.com/nazocontest",
        client: "毎月謎コン"
    },
    {
        slug: "towerush",
        title: "TOWERUSH",
        description: "東京タワーでのイベント",
        tag: [
            "logo",
            "graphic",
            "event"
        ],
        image: null,
        layout: "standard",
        year: 2023,
        month: 12,
        url: "https://x.com/towerush_q",
        client: "TOWERUSH"
    },
    {
        slug: "lightriddlefes",
        title: "ライト謎解きフェス ロゴ",
        description: "東京タワーでのイベント",
        tag: [
            "logo"
        ],
        image: "lightriddlefes.jpg",
        layout: "standard",
        year: 2024,
        month: 7,
        url: "https://x.com/lightriddlefes",
        client: "TOWERUSH"
    }
];
}}),
"[project]/app/work/[projectId]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ProjectDetailPage),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/data/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
function ProjectDetailPage({ params }) {
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === params.projectId);
    console.log("params:", params); // ここで params の型を確認
    if (!project) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const ProjectLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_module_context__({
            "../../components/project-layouts/lightriddlefes": {
                id: ()=>"[project]/app/components/project-layouts/lightriddlefes.tsx [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_require__("[project]/app/components/project-layouts/lightriddlefes.tsx [app-rsc] (ecmascript, async loader)")(__turbopack_import__)
            },
            "../../components/project-layouts/lightriddlefes.tsx": {
                id: ()=>"[project]/app/components/project-layouts/lightriddlefes.tsx [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_require__("[project]/app/components/project-layouts/lightriddlefes.tsx [app-rsc] (ecmascript, async loader)")(__turbopack_import__)
            },
            "../../components/project-layouts/maitsuki": {
                id: ()=>"[project]/app/components/project-layouts/maitsuki.tsx [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_require__("[project]/app/components/project-layouts/maitsuki.tsx [app-rsc] (ecmascript, async loader)")(__turbopack_import__)
            },
            "../../components/project-layouts/maitsuki.tsx": {
                id: ()=>"[project]/app/components/project-layouts/maitsuki.tsx [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_require__("[project]/app/components/project-layouts/maitsuki.tsx [app-rsc] (ecmascript, async loader)")(__turbopack_import__)
            },
            "../../components/project-layouts/nazosui": {
                id: ()=>"[project]/app/components/project-layouts/nazosui.tsx [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_require__("[project]/app/components/project-layouts/nazosui.tsx [app-rsc] (ecmascript, async loader)")(__turbopack_import__)
            },
            "../../components/project-layouts/nazosui.tsx": {
                id: ()=>"[project]/app/components/project-layouts/nazosui.tsx [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_require__("[project]/app/components/project-layouts/nazosui.tsx [app-rsc] (ecmascript, async loader)")(__turbopack_import__)
            },
            "../../components/project-layouts/towerush": {
                id: ()=>"[project]/app/components/project-layouts/towerush.tsx [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_require__("[project]/app/components/project-layouts/towerush.tsx [app-rsc] (ecmascript, async loader)")(__turbopack_import__)
            },
            "../../components/project-layouts/towerush.tsx": {
                id: ()=>"[project]/app/components/project-layouts/towerush.tsx [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_require__("[project]/app/components/project-layouts/towerush.tsx [app-rsc] (ecmascript, async loader)")(__turbopack_import__)
            }
        }).import(`../../components/project-layouts/${params.projectId}`), {
        loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/work/[projectId]/page.tsx",
                lineNumber: 22,
                columnNumber: 22
            }, this),
        ssr: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectLayout, {
        project: project
    }, void 0, false, {
        fileName: "[project]/app/work/[projectId]/page.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((project)=>({
            projectId: project.slug
        }));
}
}}),
"[project]/app/work/[projectId]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/app/work/[projectId]/page.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/work/[projectId]/page/actions.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_45383c._.js.map