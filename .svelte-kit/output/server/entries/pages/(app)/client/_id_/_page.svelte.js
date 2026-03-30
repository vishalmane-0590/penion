import { a as sanitize_props, b as spread_props, c as slot, e as escape_html, l as ensure_array_like, d as attr_class, f as stringify, m as bind_props, j as attr, i as store_get, u as unsubscribe_stores, h as head } from "../../../../../chunks/index2.js";
import { p as page } from "../../../../../chunks/stores.js";
import "clsx";
import { I as Icon } from "../../../../../chunks/Icon.js";
import { E as Eye_off, L as Link_2, T as Trash_2, P as Phone, C as Circle_check } from "../../../../../chunks/trash-2.js";
import { S as Square_pen } from "../../../../../chunks/square-pen.js";
import { M as Mail } from "../../../../../chunks/mail.js";
import { S as Search } from "../../../../../chunks/search.js";
import { F as File_text, C as Chevron_left } from "../../../../../chunks/file-text.js";
import { C as Chevron_down } from "../../../../../chunks/chevron-down.js";
import { C as Circle_x } from "../../../../../chunks/circle-x.js";
function Award($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
      }
    ],
    ["circle", { "cx": "12", "cy": "8", "r": "6" }]
  ];
  Icon($$renderer, spread_props([
    { name: "award" },
    $$sanitized_props,
    {
      /**
       * @component @name Award
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUuNDc3IDEyLjg5IDEuNTE1IDguNTI2YS41LjUgMCAwIDEtLjgxLjQ3bC0zLjU4LTIuNjg3YTEgMSAwIDAgMC0xLjE5NyAwbC0zLjU4NiAyLjY4NmEuNS41IDAgMCAxLS44MS0uNDY5bDEuNTE0LTguNTI2IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/award
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
function Building_2($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M10 12h4" }],
    ["path", { "d": "M10 8h4" }],
    ["path", { "d": "M14 21v-3a2 2 0 0 0-4 0v3" }],
    [
      "path",
      {
        "d": "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"
      }
    ],
    ["path", { "d": "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" }]
  ];
  Icon($$renderer, spread_props([
    { name: "building-2" },
    $$sanitized_props,
    {
      /**
       * @component @name Building2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTJoNCIgLz4KICA8cGF0aCBkPSJNMTAgOGg0IiAvPgogIDxwYXRoIGQ9Ik0xNCAyMXYtM2EyIDIgMCAwIDAtNCAwdjMiIC8+CiAgPHBhdGggZD0iTTYgMTBINGEyIDIgMCAwIDAtMiAydjdhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0yVjlhMiAyIDAgMCAwLTItMmgtMiIgLz4KICA8cGF0aCBkPSJNNiAyMVY1YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/building-2
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
function Chevron_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$renderer, spread_props([
    { name: "chevron-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ChevronRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtOSAxOCA2LTYtNi02IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/chevron-right
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
function Circle_user($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }],
    [
      "path",
      { "d": "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "circle-user" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleUser
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIiAvPgogIDxwYXRoIGQ9Ik03IDIwLjY2MlYxOWEyIDIgMCAwIDEgMi0yaDZhMiAyIDAgMCAxIDIgMnYxLjY2MiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/circle-user
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
function Menu($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M4 5h16" }],
    ["path", { "d": "M4 12h16" }],
    ["path", { "d": "M4 19h16" }]
  ];
  Icon($$renderer, spread_props([
    { name: "menu" },
    $$sanitized_props,
    {
      /**
       * @component @name Menu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCA1aDE2IiAvPgogIDxwYXRoIGQ9Ik00IDEyaDE2IiAvPgogIDxwYXRoIGQ9Ik00IDE5aDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/menu
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
function Square_check_big($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"
      }
    ],
    ["path", { "d": "m9 11 3 3L22 4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "square-check-big" },
    $$sanitized_props,
    {
      /**
       * @component @name SquareCheckBig
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTAuNjU2VjE5YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxMi4zNDQiIC8+CiAgPHBhdGggZD0ibTkgMTEgMyAzTDIyIDQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/square-check-big
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
function Upload($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 3v12" }],
    ["path", { "d": "m17 8-5-5-5 5" }],
    ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "upload" },
    $$sanitized_props,
    {
      /**
       * @component @name Upload
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgM3YxMiIgLz4KICA8cGF0aCBkPSJtMTcgOC01LTUtNSA1IiAvPgogIDxwYXRoIGQ9Ik0yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/upload
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
function ClientHeader($$renderer, $$props) {
  let { clientName } = $$props;
  $$renderer.push(`<div class="client-card-muted relative mb-6 p-4"><div class="mb-4 flex items-center justify-between border-b border-[var(--client-border)] pb-4"><div class="flex items-center gap-2"><span class="client-tag flex items-center gap-1 rounded px-2.5 py-1 text-xs font-semibold shadow-sm">`);
  Award($$renderer, { size: 14, fill: "white" });
  $$renderer.push(`<!----> Primary Client</span> <button class="client-tag-alt flex items-center gap-1 rounded px-2.5 py-1 text-xs font-semibold shadow-sm transition-colors hover:bg-[var(--color-primary)]">`);
  Award($$renderer, { size: 14, fill: "none", strokeWidth: 2.5 });
  $$renderer.push(`<!----> Change</button></div> <div class="client-title absolute left-1/2 flex -translate-x-1/2 items-center gap-2 text-xl font-extrabold tracking-tight">`);
  Circle_user($$renderer, { size: 28, strokeWidth: 2 });
  $$renderer.push(`<!----> ${escape_html(clientName)} <span class="client-badge ml-1 rounded px-2 py-0.5 text-xs font-bold shadow-sm">#213</span></div> <div class="flex items-center gap-3.5"><button class="text-[#9CA3AF] transition-colors hover:text-gray-600">`);
  Eye_off($$renderer, { size: 18, strokeWidth: 2 });
  $$renderer.push(`<!----></button> <button class="client-title transition-colors hover:text-[var(--color-primary)]">`);
  Award($$renderer, { size: 18, strokeWidth: 2, fill: "currentColor" });
  $$renderer.push(`<!----></button> <button class="client-link transition-colors hover:text-[var(--color-sidebar)]">`);
  Square_pen($$renderer, { size: 18, strokeWidth: 2 });
  $$renderer.push(`<!----></button> <button class="text-[#6B7280] hover:text-gray-900 transition-colors">`);
  Link_2($$renderer, { size: 18, strokeWidth: 2 });
  $$renderer.push(`<!----></button> <button class="status-danger rounded p-1 transition-colors hover:brightness-95">`);
  Trash_2($$renderer, { size: 16, strokeWidth: 2.5 });
  $$renderer.push(`<!----></button></div></div> <div class="flex items-center justify-center gap-10 text-sm font-semibold text-gray-800"><span class="flex items-center gap-2">`);
  Circle_user($$renderer, { size: 18, class: "client-link", strokeWidth: 2 });
  $$renderer.push(`<!----> Contact: ${escape_html(clientName)}</span> <span class="flex items-center gap-2">`);
  Mail($$renderer, { size: 18, class: "client-link", strokeWidth: 2 });
  $$renderer.push(`<!----> nathan@weathersfarms.net</span> <span class="flex items-center gap-2">`);
  Phone($$renderer, { size: 18, class: "client-link", strokeWidth: 2 });
  $$renderer.push(`<!----> 970-630-3595</span> <span class="flex items-center gap-2">`);
  Building_2($$renderer, { size: 18, class: "client-link", strokeWidth: 2 });
  $$renderer.push(`<!----> Entity: Corporation</span></div></div>`);
}
function ClientsPanel($$renderer) {
  const projects = [
    {
      title: "Client Intake (CIF)",
      status: "Active",
      color: "status-success"
    },
    {
      title: "CIF Review",
      status: "Active",
      color: "status-success"
    },
    {
      title: "Client Intake (CIF)",
      status: "Draft",
      color: "status-warning"
    },
    {
      title: "ACS-Grow Project",
      status: "Draft",
      color: "status-warning"
    },
    {
      title: "ACS-Grow Intake",
      status: "Active",
      color: "status-success"
    },
    {
      title: "ACS-Grow Review",
      status: "Active",
      color: "status-success"
    },
    {
      title: "STAR Data Setup",
      status: "Active",
      color: "status-success"
    },
    {
      title: "STAR Linked Client",
      status: "Draft",
      color: "status-warning"
    },
    {
      title: "FSA Registration",
      status: "Active",
      color: "status-success"
    },
    {
      title: "Filing Intake",
      status: "Active",
      color: "status-success"
    },
    {
      title: "Review Draft",
      status: "Draft",
      color: "status-warning"
    },
    { title: "ACS Plan", status: "Active", color: "status-success" }
  ];
  $$renderer.push(`<div class="client-card flex h-[26rem] flex-col overflow-hidden"><div class="client-panel-header grid grid-cols-[24px_1fr_24px] items-center bg-[var(--client-surface-muted)] p-2.5 text-sm font-bold">`);
  Menu($$renderer, { size: 18, strokeWidth: 2 });
  $$renderer.push(`<!----> <span class="text-center text-[15px] font-bold">Projects</span> <div class="w-4"></div></div> <div class="flex min-h-0 flex-1 flex-col p-4"><div class="relative w-full mb-4"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">`);
  Search($$renderer, { class: "h-5 w-5 text-gray-400" });
  $$renderer.push(`<!----></div> <input type="text" placeholder="Search projects here..." class="w-full rounded-[12px] border border-[var(--client-border-strong)] bg-white py-2.5 pl-12 pr-3 text-sm shadow-sm placeholder:text-gray-500 focus:border-[var(--color-primary)] focus:outline-none"/></div> <div class="client-scrollbar grid min-h-0 flex-1 grid-cols-3 gap-3 overflow-y-scroll pr-1"><!--[-->`);
  const each_array = ensure_array_like(projects);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let proj = each_array[$$index];
    $$renderer.push(`<div class="rounded-[12px] border border-gray-200 border-l-[3px] border-l-[var(--color-primary)] bg-white p-3 shadow-[0_10px_24px_rgba(0,0,0,0.04)] transition-colors hover:bg-gray-50"><p class="client-title mb-3 text-[11px] font-semibold leading-tight tracking-tight sm:text-[13px]">${escape_html(proj.title)}</p> <span${attr_class(`status-pill inline-flex rounded-md px-2.5 py-1 text-[10px] font-medium ${stringify(proj.color)}`)}>${escape_html(proj.status)}</span></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div>`);
}
function DocsPanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const defaultFiles = [
      "System Integration Guide.docx",
      "Project Timeline.zip",
      "Location Data Sheet.zip",
      "Site Plan Document.zip",
      "Process Diagram.docx",
      "On-site Safety Document.zip",
      "Network Configuration.docx",
      "Project Schedule.zip",
      "Sensor Data.zip",
      "Project Overview.zip",
      "System Schematic.docx",
      "Safety Protocols.zip"
    ];
    let docsFiles = defaultFiles.map((name, index) => createFileCard(name, `seed-${index}`));
    function createFileCard(name, id) {
      const parts = name.split(".");
      const extension = (parts.pop() || "file").toUpperCase();
      const title = parts.join(".").replaceAll(" ", "\n");
      return {
        id,
        name,
        title,
        extension,
        badgeClass: getBadgeClass(extension),
        iconClass: getIconClass(extension)
      };
    }
    function getBadgeClass(extension) {
      if (extension === "DOCX") return "status-info";
      if (extension === "PDF") return "status-danger";
      if (extension === "ZIP") return "status-neutral";
      return "status-warning";
    }
    function getIconClass(extension) {
      if (extension === "DOCX") return "doc-icon-word";
      if (extension === "ZIP") return "doc-icon-zip";
      return "doc-icon-generic";
    }
    $$renderer2.push(`<div class="client-card flex h-[26rem] flex-col overflow-hidden"><div class="client-panel-header grid grid-cols-[24px_1fr_auto] items-center bg-[var(--client-surface-muted)] p-2.5 text-sm font-bold">`);
    Menu($$renderer2, { size: 18, strokeWidth: 2, class: "relative z-10" });
    $$renderer2.push(`<!----> <span class="text-center text-[15px] font-bold">Docs &amp; Files</span> <button type="button" class="relative z-10 flex items-center gap-1 rounded-[8px] border border-[var(--client-border-strong)] bg-white px-3 py-1.5 text-[11px] font-medium text-[var(--color-primary)] shadow-sm transition-colors hover:bg-[var(--client-surface)]">`);
    Upload($$renderer2, { size: 12, strokeWidth: 2.5 });
    $$renderer2.push(`<!----> Upload File</button></div> <input type="file" class="hidden" multiple=""/> <div class="client-scrollbar grid min-h-0 flex-1 grid-cols-2 gap-4 overflow-y-auto p-4 pr-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"><!--[-->`);
    const each_array = ensure_array_like(docsFiles);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let file = each_array[$$index];
      $$renderer2.push(`<div class="flex min-h-[128px] flex-col justify-between rounded-[6px] border border-gray-200 bg-white px-2 py-3 text-center shadow-[0_8px_22px_rgba(0,0,0,0.03)] transition-colors hover:bg-gray-50"><span class="client-title mb-3 flex min-h-[50px] items-start justify-center text-[10px] font-bold leading-[1.25]">${escape_html(file.title)}</span> <div class="flex flex-col items-center"><div class="relative h-[46px] w-[38px]"><div${attr_class(`doc-icon-sheet ${stringify(file.iconClass)}`, "svelte-1yabjy1")}><div class="doc-icon-corner svelte-1yabjy1"></div> <div class="doc-icon-lines svelte-1yabjy1"><div class="svelte-1yabjy1"></div> <div class="svelte-1yabjy1"></div> <div class="svelte-1yabjy1"></div> <div class="svelte-1yabjy1"></div></div></div> <div${attr_class(`status-pill absolute -bottom-1 left-1/2 -translate-x-1/2 px-[5px] py-px text-[8px] font-bold text-white ${stringify(file.badgeClass)}`, "svelte-1yabjy1")}>${escape_html(file.extension)}</div></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function GovtFormsPanel($$renderer) {
  $$renderer.push(`<div class="client-card flex flex-col"><div class="client-panel-header relative flex items-center justify-between p-2.5 text-sm font-bold">`);
  Menu($$renderer, { size: 18, strokeWidth: 2, class: "relative z-10" });
  $$renderer.push(`<!----> <span class="absolute left-1/2 -translate-x-1/2">GOVT PDF Forms</span> <div class="w-4 relative z-10"></div></div> <div class="client-scrollbar max-h-[22rem] overflow-y-auto p-2"><!--[-->`);
  const each_array = ensure_array_like([
    "IRS-1040.pdf",
    "W-2-Form.pdf",
    "Form-1099.pdf",
    "Form-4506.pdf",
    "Schedule-C.pdf"
  ]);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let form = each_array[$$index];
    $$renderer.push(`<div class="flex items-center justify-between p-3 border-b border-gray-100 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 group transition-colors"><div class="flex items-center gap-2">`);
    File_text($$renderer, {
      size: 18,
      class: "text-[var(--color-primary)]",
      fill: "rgba(31, 113, 181, 0.18)",
      strokeWidth: 1.5
    });
    $$renderer.push(`<!----> ${escape_html(form)}</div> `);
    Chevron_down($$renderer, { size: 18, class: "text-gray-400 group-hover:text-gray-600" });
    $$renderer.push(`<!----></div>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function NotesPanel($$renderer) {
  const notes = [
    {
      title: "Project Information Overview",
      content: "This document is designed to gather essential information from new projects, such as their contact details, background, and specific needs, to provide personalized services."
    },
    {
      title: "Data Collection Form",
      content: "This form is intended to collect key information from new projects, including their contact details, history, and unique requirements, to ensure tailored services."
    },
    {
      title: "Onboarding Checklist",
      content: "This form is crafted to gather crucial information from new projects, including their contact details, background, and specific needs, to customize our services."
    },
    {
      title: "Registration Summary",
      content: "A structured sequence of events designed to integrate new projects into an organization smoothly, covering orientation, training, and introductions to key tools."
    }
  ];
  $$renderer.push(`<div class="client-card flex h-[26rem] flex-col overflow-hidden"><div class="client-panel-header grid grid-cols-[24px_1fr_24px] items-center bg-[var(--client-surface-muted)] p-2.5 text-sm font-bold">`);
  Menu($$renderer, { size: 18, strokeWidth: 2 });
  $$renderer.push(`<!----> <span class="text-center text-[15px] font-bold">Notes</span> <div class="w-4"></div></div> <div class="client-scrollbar min-h-0 flex-1 overflow-y-auto px-4 pb-4 pt-5"><!--[-->`);
  const each_array = ensure_array_like(notes);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let note = each_array[$$index];
    $$renderer.push(`<div class="mb-3 rounded-[12px] border border-gray-200 border-t-2 border-t-[var(--color-primary)] bg-white px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] last:mb-0"><h4 class="client-title mb-1.5 text-[12px] font-bold underline underline-offset-4 sm:text-[13px]">${escape_html(note.title)}</h4> <p class="text-[11px] leading-[1.35] text-slate-800 sm:text-[12px]">${escape_html(note.content)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function StarDataPanel($$renderer) {
  $$renderer.push(`<div class="client-card flex flex-col"><div class="client-panel-header relative flex items-center justify-between p-2.5 text-sm font-bold">`);
  Menu($$renderer, { size: 18, strokeWidth: 2, class: "relative z-10" });
  $$renderer.push(`<!----> <span class="absolute left-1/2 -translate-x-1/2">Pinion STAR Data</span> <div class="w-4 relative z-10"></div></div> <div class="client-scrollbar max-h-[22rem] overflow-y-auto p-4 px-5"><div class="flex items-center gap-3 mb-4"><div class="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--client-heading)] bg-[var(--color-primary)] font-bold text-white shadow-sm">RS</div> <div class="flex items-center gap-2"><span class="font-extrabold text-gray-900 text-[15px]">Ryan Smith</span> <span class="client-badge rounded px-1.5 py-0.5 text-[10px] font-bold shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">#384</span></div></div> <div class="flex items-center justify-between text-[12px] text-gray-800 font-semibold mb-6 border-b border-gray-100 pb-3"><span class="flex items-center gap-2">`);
  Mail($$renderer, { size: 16, class: "client-link" });
  $$renderer.push(`<!----> ryan@example.net</span> <span class="flex items-center gap-2">`);
  Phone($$renderer, { size: 16, class: "text-black" });
  $$renderer.push(`<!----> 947-730-4595</span></div> <div class="flex flex-col gap-3"><div class="flex items-center justify-between"><span class="flex items-center gap-3 text-[13px] font-semibold text-gray-600">`);
  Circle_check($$renderer, { size: 16, class: "client-link" });
  $$renderer.push(`<!----> STAR Status</span> <span class="status-pill status-success px-3 py-1 text-[11px] font-bold">`);
  Square_check_big($$renderer, { size: 12 });
  $$renderer.push(`<!----> Linked</span></div> <div class="flex items-center justify-between"><span class="flex items-center gap-3 text-[13px] font-semibold text-gray-600">`);
  File_text($$renderer, { size: 16, class: "client-link" });
  $$renderer.push(`<!----> CIF Status</span> <span class="status-pill status-success px-3 py-1 text-[11px] font-bold">`);
  Square_check_big($$renderer, { size: 12 });
  $$renderer.push(`<!----> Complete</span></div> <div class="flex items-center justify-between"><span class="flex items-center gap-3 text-[13px] font-semibold text-gray-600">`);
  File_text($$renderer, { size: 16, class: "client-link" });
  $$renderer.push(`<!----> ACS-GROW Status</span> <span class="status-pill status-danger px-3 py-1 text-[11px] font-bold">`);
  Circle_x($$renderer, { size: 12 });
  $$renderer.push(`<!----> Not started</span></div></div></div></div>`);
}
function SchedulePanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { clientName = void 0, projects } = $$props;
    $$renderer2.push(`<div class="client-card mb-6 flex flex-1 flex-col"><div class="client-panel-header relative flex items-center justify-between p-2.5 text-sm font-bold">`);
    Menu($$renderer2, { size: 18, strokeWidth: 2, class: "relative z-10" });
    $$renderer2.push(`<!----> <span class="absolute left-1/2 -translate-x-1/2">Schedule</span> <div class="relative z-10 w-44"><button class="flex w-full items-center justify-between truncate rounded border border-[var(--client-border)] bg-white px-3 py-1 pr-2 text-[11px] font-bold text-[var(--client-heading)] shadow-sm focus:outline-none"><span class="truncate">${escape_html(clientName)}</span> `);
    Chevron_down($$renderer2, {
      size: 14,
      class: "ml-1 shrink-0 text-[var(--client-heading)]"
    });
    $$renderer2.push(`<!----></button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="p-3 w-full"><div class="flex items-center justify-between mb-4 mt-2 px-2"><button class="text-gray-400 hover:text-gray-700">`);
    Chevron_left($$renderer2, { size: 20 });
    $$renderer2.push(`<!----></button> <span class="text-gray-900 font-extrabold text-[15px]">January 2026</span> <button class="text-gray-400 hover:text-gray-700">`);
    Chevron_right($$renderer2, { size: 20 });
    $$renderer2.push(`<!----></button></div> <div class="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-[13px]"><div class="mb-2 font-bold text-[var(--color-destructive)]">Sun</div> <div class="font-bold text-gray-700 mb-2">Mon</div> <div class="font-bold text-gray-700 mb-2">Tue</div> <div class="font-bold text-gray-700 mb-2">Wed</div> <div class="font-bold text-gray-700 mb-2">Thu</div> <div class="font-bold text-gray-700 mb-2">Fri</div> <div class="font-bold text-gray-700 mb-2">Sat</div> <!--[-->`);
    const each_array_1 = ensure_array_like(Array(31).fill(0).map((_, i) => i + 1));
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let day = each_array_1[i];
      if (i === 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="col-start-5"></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="relative flex justify-center items-center font-bold text-gray-800 p-1">`);
      if (day === 15) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="absolute inset-0 z-[-1] scale-[1.2] rounded-md border-2 border-[var(--client-border-strong)] bg-[var(--client-surface-muted)]"></div> <span class="text-[var(--client-heading)]">${escape_html(day)}</span>`);
      } else if ([4, 11, 18, 25].includes(day)) {
        $$renderer2.push("<!--[1-->");
        $$renderer2.push(`<span class="text-[var(--color-destructive)]">${escape_html(day)}</span>`);
      } else if ([3].includes(day)) {
        $$renderer2.push("<!--[2-->");
        $$renderer2.push(`<span class="text-[var(--status-success-fg)]">${escape_html(day)}</span>`);
      } else if ([8].includes(day)) {
        $$renderer2.push("<!--[3-->");
        $$renderer2.push(`<span class="group relative text-[var(--status-success-fg)]">${escape_html(day)} <div class="absolute bottom-[-2px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--status-success-fg)]"></div></span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<span>${escape_html(day)}</span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    bind_props($$props, { clientName });
  });
}
function ActivityTimeline($$renderer) {
  const todayItem = {
    project: "ACS-GROW Project",
    name: "Max Jacob",
    task: "Review Service Agreement",
    status: "Complete",
    time: "12:55am",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=160&h=160&auto=format&fit=crop"
  };
  const yesterdayItems = [
    {
      time: "9:56am",
      name: "Ethan Miller",
      task: "Setup project and assign preparers",
      status: "Not started",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=160&h=160&auto=format&fit=crop"
    },
    {
      time: "9:48am",
      name: "Dakota Evans",
      task: "CPA-1270 Signed",
      status: "In progress",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=160&h=160&auto=format&fit=crop"
    },
    {
      time: "9:47am",
      name: "Cameron Lee",
      task: "FSA Third Party Release Signed",
      status: "Not started",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=160&h=160&auto=format&fit=crop"
    },
    {
      time: "12:55am",
      name: "Harper Collins",
      task: "Request info from FSA",
      status: "Complete",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=160&h=160&auto=format&fit=crop"
    }
  ];
  function getStatusClass(status) {
    if (status === "Complete") {
      return "status-pill status-success";
    }
    if (status === "In progress") {
      return "status-pill status-warning";
    }
    return "status-pill status-danger";
  }
  $$renderer.push(`<section class="client-card-muted mt-7 -mx-3 rounded-[20px] px-4 pb-8 pt-5 shadow-[0_6px_24px_rgba(0,85,101,0.06)] sm:px-5 lg:-mx-5 lg:px-6"><div class="relative"><div class="mx-auto mb-8 h-px w-full bg-[var(--client-border)]"></div> <div class="absolute left-1/2 top-[-15px] -translate-x-1/2"><span class="inline-flex h-[30px] items-center justify-center rounded-[4px] bg-[var(--color-sidebar)] px-4 text-[13px] font-medium text-white shadow-sm">Project Activity</span></div></div> <div class="relative mx-auto max-w-[1240px] pt-8"><div class="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[var(--client-timeline-line)] lg:block"></div> <div class="mb-7 flex justify-center"><span class="inline-flex h-[28px] items-center justify-center rounded-[4px] bg-[var(--color-primary)] px-5 text-[13px] font-semibold text-white">TODAY</span></div> <div class="grid grid-cols-1 gap-8 lg:grid-cols-2"><div class="pr-0 lg:pr-6"><div class="border-t border-[var(--client-timeline-line)] pt-3"><div class="mb-2 text-[14px] font-normal text-slate-800">${escape_html(todayItem.project)}</div> <div class="flex items-start gap-3"><img${attr("src", todayItem.avatar)}${attr("alt", todayItem.name)} class="h-[42px] w-[42px] rounded-full object-cover"/> <div class="min-w-0 flex-1"><div class="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-3"><div class="min-w-0 flex flex-1 flex-wrap items-center gap-x-4 gap-y-2 pr-2 lg:flex-nowrap"><span class="client-link shrink-0 text-[14px] font-medium underline underline-offset-[2px]">${escape_html(todayItem.name)}</span> <span class="client-link truncate text-[13px] font-normal">${escape_html(todayItem.task)}</span></div> <span${attr_class(`inline-flex h-[27px] shrink-0 items-center rounded-[6px] px-3 text-[12px] font-medium ${getStatusClass(todayItem.status)}`)}>${escape_html(todayItem.status)}</span></div> <div class="mt-2 flex items-center gap-2"><span class="inline-block h-[16px] w-[16px] rounded-[3px] border border-slate-800 bg-white"></span> <p class="text-[13px] leading-[1.3] text-slate-700">${escape_html(todayItem.details)}</p></div> <div class="mt-3 pl-[2px] text-right text-[12px] text-slate-600">${escape_html(todayItem.time)}</div></div></div></div></div> <div></div></div> <div class="mb-6 mt-4 flex justify-center lg:mt-0"><span class="inline-flex h-[28px] items-center justify-center rounded-[4px] bg-[var(--color-primary)] px-5 text-[13px] font-semibold text-white">YESTERDAY</span></div> <div class="grid grid-cols-1 gap-8 lg:grid-cols-2"><div></div> <div class="pl-0 lg:pl-6"><div class="space-y-5"><div class="border-t border-[var(--client-timeline-line)] pt-3 text-[14px] font-normal text-slate-800">ACS-GROW Project</div> <!--[-->`);
  const each_array = ensure_array_like(yesterdayItems);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$renderer.push(`<div class="grid grid-cols-[56px_minmax(0,1fr)] gap-4 lg:grid-cols-[78px_minmax(0,1fr)]"><div class="pt-[46px] text-right text-[12px] text-slate-700">${escape_html(item.time)}</div> <div class="flex items-start gap-3"><img${attr("src", item.avatar)}${attr("alt", item.name)} class="mt-0.5 h-[42px] w-[42px] rounded-full object-cover"/> <div class="min-w-0 flex-1"><div class="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-3"><div class="min-w-0 flex flex-1 flex-wrap items-center gap-x-4 gap-y-2 pr-2 lg:flex-nowrap"><span class="client-link shrink-0 text-[14px] font-medium underline underline-offset-[2px]">${escape_html(item.name)}</span> <span class="client-link truncate text-[13px] font-normal">${escape_html(item.task)}</span></div> <span${attr_class(`inline-flex h-[27px] shrink-0 items-center rounded-[6px] px-3 text-[12px] font-medium ${getStatusClass(item.status)}`)}>${escape_html(item.status)}</span></div> <p class="mt-2 text-[13px] leading-[1.55] text-slate-700">${escape_html(item.details)}</p> `);
    if (item.status === "Complete") {
      $$renderer.push("<!--[0-->");
      $$renderer.push(`<div class="mt-2 flex items-center gap-2"><span class="inline-block h-[16px] w-[16px] rounded-[3px] border border-slate-800 bg-white"></span> <p class="text-[13px] leading-[1.3] text-slate-700">${escape_html(item.details)}</p></div>`);
    } else {
      $$renderer.push("<!--[-1-->");
    }
    $$renderer.push(`<!--]--></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></div></section>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let clientName = decodeURIComponent(store_get($$store_subs ??= {}, "$page", page).params.id || "Client");
    const projects = [
      "Client Intake (CIF)",
      "CIF Review",
      "ACS-Grow Project",
      "ACS-Grow Intake",
      "ACS-Grow Review",
      "STAR Data Setup",
      "FSA Registration"
    ];
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("nfuf71", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>${escape_html(clientName)} - Client Details</title>`);
        });
      });
      $$renderer3.push(`<div class="client-card flex h-[1000px] w-full overflow-hidden -mx-4 -my-2 font-sans"><main class="client-shell client-scrollbar relative flex-1 overflow-y-auto px-6 py-6">`);
      ClientHeader($$renderer3, { clientName });
      $$renderer3.push(`<!----> <div class="grid grid-cols-2 gap-6 w-full"><div class="flex flex-col gap-6">`);
      ClientsPanel($$renderer3);
      $$renderer3.push(`<!----> `);
      DocsPanel($$renderer3);
      $$renderer3.push(`<!----> `);
      GovtFormsPanel($$renderer3);
      $$renderer3.push(`<!----></div> <div class="flex flex-col gap-6">`);
      NotesPanel($$renderer3);
      $$renderer3.push(`<!----> `);
      StarDataPanel($$renderer3);
      $$renderer3.push(`<!----> `);
      SchedulePanel($$renderer3, {
        projects,
        get clientName() {
          return clientName;
        },
        set clientName($$value) {
          clientName = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> `);
      ActivityTimeline($$renderer3);
      $$renderer3.push(`<!----></main></div> <div class="h-16"></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
