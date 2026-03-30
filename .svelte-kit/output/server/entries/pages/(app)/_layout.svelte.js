import "clsx";
import { a as sanitize_props, b as spread_props, c as slot, d as attr_class, f as stringify, i as store_get, u as unsubscribe_stores, e as escape_html, j as attr, k as derived } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { U as Users } from "../../../chunks/users.js";
import { S as Search } from "../../../chunks/search.js";
import { C as Chevron_down } from "../../../chunks/chevron-down.js";
import { C as Chevron_left, F as File_text } from "../../../chunks/file-text.js";
import { C as Circle_x } from "../../../chunks/circle-x.js";
import { S as Square_pen } from "../../../chunks/square-pen.js";
function Bell($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }],
    [
      "path",
      {
        "d": "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "bell" },
    $$sanitized_props,
    {
      /**
       * @component @name Bell
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAuMjY4IDIxYTIgMiAwIDAgMCAzLjQ2NCAwIiAvPgogIDxwYXRoIGQ9Ik0zLjI2MiAxNS4zMjZBMSAxIDAgMCAwIDQgMTdoMTZhMSAxIDAgMCAwIC43NC0xLjY3M0MxOS40MSAxMy45NTYgMTggMTIuNDk5IDE4IDhBNiA2IDAgMCAwIDYgOGMwIDQuNDk5LTEuNDExIDUuOTU2LTIuNzM4IDcuMzI2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/bell
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Briefcase($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }
    ],
    [
      "rect",
      { "width": "20", "height": "14", "x": "2", "y": "6", "rx": "2" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "briefcase" },
    $$sanitized_props,
    {
      /**
       * @component @name Briefcase
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMjBWNGEyIDIgMCAwIDAtMi0yaC00YTIgMiAwIDAgMC0yIDJ2MTYiIC8+CiAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiB4PSIyIiB5PSI2IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/briefcase
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Folder_open($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "folder-open" },
    $$sanitized_props,
    {
      /**
       * @component @name FolderOpen
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNiAxNCAxLjUtMi45QTIgMiAwIDAgMSA5LjI0IDEwSDIwYTIgMiAwIDAgMSAxLjk0IDIuNWwtMS41NCA2YTIgMiAwIDAgMS0xLjk1IDEuNUg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDMuOWEyIDIgMCAwIDEgMS42OS45bC44MSAxLjJhMiAyIDAgMCAwIDEuNjcuOUgxOGEyIDIgMCAwIDEgMiAydjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/folder-open
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Folder($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "folder" },
    $$sanitized_props,
    {
      /**
       * @component @name Folder
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMjBhMiAyIDAgMCAwIDItMlY4YTIgMiAwIDAgMC0yLTJoLTcuOWEyIDIgMCAwIDEtMS42OS0uOUw5LjYgMy45QTIgMiAwIDAgMCA3LjkzIDNINGEyIDIgMCAwIDAtMiAydjEzYTIgMiAwIDAgMCAyIDJaIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/folder
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function House($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }
    ],
    [
      "path",
      {
        "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "house" },
    $$sanitized_props,
    {
      /**
       * @component @name House
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiIC8+CiAgPHBhdGggZD0iTTMgMTBhMiAyIDAgMCAxIC43MDktMS41MjhsNy02YTIgMiAwIDAgMSAyLjU4MiAwbDcgNkEyIDIgMCAwIDEgMjEgMTB2OWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/house
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<header class="fixed top-0 left-64 right-0 h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10 w-[calc(100%-16rem)] min-w-0"><nav class="flex items-center gap-8"><a href="/dashboard"${attr_class(`flex items-center gap-2 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/dashboard" ? "text-[#C07026] text-sm font-semibold" : "text-gray-400 hover:text-gray-600 text-sm font-medium")} select-none`)}>`);
    House($$renderer2, { size: 18, strokeWidth: 2 });
    $$renderer2.push(`<!----> Dashboard</a> <a href="/cases"${attr_class(`flex items-center gap-2 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/cases" ? "text-[#C07026] text-sm font-semibold" : "text-gray-400 hover:text-gray-600 text-sm font-medium")} select-none`)}>`);
    Folder_open($$renderer2, { size: 18, strokeWidth: 2 });
    $$renderer2.push(`<!----> Project</a> <a href="/client"${attr_class(`flex items-center gap-2 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/client" ? "text-[#C07026] text-sm font-semibold" : "text-gray-400 hover:text-gray-600 text-sm font-medium")} select-none`)}>`);
    Users($$renderer2, { size: 18, strokeWidth: 2 });
    $$renderer2.push(`<!----> Client</a> <a href="/find"${attr_class(`flex items-center gap-2 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/find" ? "text-[#C07026] text-sm font-semibold" : "text-gray-400 hover:text-gray-600 text-sm font-medium")} select-none`)}>`);
    Search($$renderer2, { size: 18, strokeWidth: 2 });
    $$renderer2.push(`<!----> Find</a></nav> <div class="flex items-center gap-6"><button class="text-gray-400 hover:text-gray-600 relative">`);
    Bell($$renderer2, { size: 20, strokeWidth: 2 });
    $$renderer2.push(`<!----> <span class="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-[#C07026] rounded-full"></span></button> <div class="flex items-center gap-3 cursor-pointer select-none border border-gray-200 rounded-full pl-1 pr-3 py-1 bg-white hover:bg-gray-50 transition-colors shadow-sm"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop" alt="Jamie Fox" class="w-8 h-8 rounded-full border border-gray-100 object-cover"/> <span class="text-sm font-medium text-gray-700">Jamie Fox</span> `);
    Chevron_down($$renderer2, { size: 16, class: "text-gray-400 ml-1" });
    $$renderer2.push(`<!----></div></div></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let isClientRoute = derived(() => store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/client/"));
    let clientName = derived(() => isClientRoute() ? decodeURIComponent(store_get($$store_subs ??= {}, "$page", page).params.id || store_get($$store_subs ??= {}, "$page", page).url.pathname.split("/").pop() || "Client") : "");
    $$renderer2.push(`<aside class="fixed inset-y-0 left-0 w-64 bg-[#FCFBF8] border-r border-[#EACFB6] flex flex-col z-20"><div class="h-20 flex items-center px-6 relative w-full bg-white border-b border-gray-100"><div class="flex items-center gap-2"><img src="/Logo.png" alt="pinion" class="w-auto h-14"/></div> <button class="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 shadow-sm z-30">`);
    Chevron_left($$renderer2, { size: 16, strokeWidth: 2 });
    $$renderer2.push(`<!----></button></div> <nav class="flex-1 px-4 py-4 space-y-4 overflow-y-auto w-full">`);
    if (isClientRoute()) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="border border-[#EACFB6] bg-white rounded-lg p-3 relative mb-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] min-h-[110px] flex flex-col items-center justify-center"><button class="absolute top-2 right-2 text-[#EF4444] hover:text-red-700 transition">`);
      Circle_x($$renderer2, { size: 15, strokeWidth: 2 });
      $$renderer2.push(`<!----></button> <button class="absolute bottom-2 right-2 text-[#3B82F6] hover:text-blue-700 transition">`);
      Square_pen($$renderer2, { size: 14, strokeWidth: 2 });
      $$renderer2.push(`<!----></button> <div class="flex flex-col items-center justify-center gap-1.5 mt-2 text-[#A26D1D]">`);
      Folder($$renderer2, {
        size: 26,
        strokeWidth: 1.5,
        fill: "#FDF8F3",
        class: "text-[#A26D1D]"
      });
      $$renderer2.push(`<!----> <span class="text-center font-extrabold tracking-tight text-[13px] leading-[1.1] text-[#A26D1D] px-2 w-[110px] wrap-break-word">${escape_html(clientName())}</span></div></div> <div class="space-y-4"><a href="/cases"${attr_class(`w-full flex items-center gap-3.5 px-3 py-3 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/cases" ? "bg-[#FDF8F3] border-[#EACFB6] text-[#A26D1D]" : "bg-white border-gray-200 text-gray-800")} rounded border text-sm shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:bg-gray-50 transition`)}>`);
      File_text($$renderer2, {
        size: 18,
        strokeWidth: 1.5,
        class: store_get($$store_subs ??= {}, "$page", page).url.pathname === "/cases" ? "text-[#A26D1D]" : "text-gray-800"
      });
      $$renderer2.push(`<!----> <span class="font-bold text-[13px] tracking-tight">Case List</span></a> <a${attr("href", `/client/${stringify(encodeURIComponent(store_get($$store_subs ??= {}, "$page", page).params.id))}/manage`)}${attr_class(`w-full flex items-center gap-3.5 px-3 py-3 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname.endsWith("/manage") ? "bg-[#FDF8F3] border-[#EACFB6] text-[#A26D1D]" : "bg-white border-white text-gray-800")} rounded border text-sm shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:bg-[#FCF9F3] transition`)}>`);
      Users($$renderer2, { size: 18, strokeWidth: 1.5, class: "text-[#A26D1D]" });
      $$renderer2.push(`<!----> <span class="font-bold text-[13px] tracking-tight">Manage Client</span></a></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<a href="/cases"${attr_class(`flex items-center gap-3 px-3 py-2.5 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/cases" ? "bg-[#FDF8F3] text-[#A26D1D]" : "text-gray-600 hover:bg-gray-50")} rounded-md text-sm font-medium transition-colors`)}>`);
      Briefcase($$renderer2, {
        size: 20,
        class: store_get($$store_subs ??= {}, "$page", page).url.pathname === "/cases" ? "text-[#A26D1D]" : "text-gray-400",
        strokeWidth: 1.5
      });
      $$renderer2.push(`<!----> Case List</a>`);
    }
    $$renderer2.push(`<!--]--></nav></aside>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="min-h-screen bg-[#FDFBFA] font-sans pl-64 pt-20 flex flex-col w-full relative">`);
  Sidebar($$renderer);
  $$renderer.push(`<!----> `);
  Header($$renderer);
  $$renderer.push(`<!----> <main class="flex-1 px-8 py-6 max-w-full overflow-x-hidden focus:outline-none w-full">`);
  children($$renderer);
  $$renderer.push(`<!----></main></div>`);
}
export {
  _layout as default
};
