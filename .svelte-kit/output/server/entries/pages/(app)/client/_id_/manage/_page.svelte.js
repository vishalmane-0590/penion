import { a as sanitize_props, b as spread_props, c as slot, h as head, j as attr, f as stringify, i as store_get, e as escape_html, l as ensure_array_like, d as attr_class, u as unsubscribe_stores, k as derived } from "../../../../../../chunks/index2.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { C as Chevron_left, F as File_text } from "../../../../../../chunks/file-text.js";
import { S as Search } from "../../../../../../chunks/search.js";
import { I as Icon } from "../../../../../../chunks/Icon.js";
import { M as Mail } from "../../../../../../chunks/mail.js";
import { P as Phone, C as Circle_check, L as Link_2, E as Eye_off, T as Trash_2 } from "../../../../../../chunks/trash-2.js";
import { X } from "../../../../../../chunks/x.js";
import { S as Square_pen } from "../../../../../../chunks/square-pen.js";
import { U as Users } from "../../../../../../chunks/users.js";
import { E as External_link } from "../../../../../../chunks/external-link.js";
function Clock($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 6v6l4 2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "clock" },
    $$sanitized_props,
    {
      /**
       * @component @name Clock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgNnY2bDQgMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/clock
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
function Star($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "star" },
    $$sanitized_props,
    {
      /**
       * @component @name Star
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuNTI1IDIuMjk1YS41My41MyAwIDAgMSAuOTUgMGwyLjMxIDQuNjc5YTIuMTIzIDIuMTIzIDAgMCAwIDEuNTk1IDEuMTZsNS4xNjYuNzU2YS41My41MyAwIDAgMSAuMjk0LjkwNGwtMy43MzYgMy42MzhhMi4xMjMgMi4xMjMgMCAwIDAtLjYxMSAxLjg3OGwuODgyIDUuMTRhLjUzLjUzIDAgMCAxLS43NzEuNTZsLTQuNjE4LTIuNDI4YTIuMTIyIDIuMTIyIDAgMCAwLTEuOTczIDBMNi4zOTYgMjEuMDFhLjUzLjUzIDAgMCAxLS43Ny0uNTZsLjg4MS01LjEzOWEyLjEyMiAyLjEyMiAwIDAgMC0uNjExLTEuODc5TDIuMTYgOS43OTVhLjUzLjUzIDAgMCAxIC4yOTQtLjkwNmw1LjE2NS0uNzU1YTIuMTIyIDIuMTIyIDAgMCAwIDEuNTk3LTEuMTZ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/star
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
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let searchQuery = "";
    let clientName = derived(() => decodeURIComponent(store_get($$store_subs ??= {}, "$page", page).params.id || "Client"));
    const clients = [
      {
        id: "#332",
        name: "Alex meian",
        role: "Primary Client",
        email: "nathan@weathersfarms.net",
        phone: "970-630-3595",
        isPrimary: true,
        starStatus: "Not Linked",
        cifStatus: "Complete",
        acsGrowStatus: "Complete"
      },
      {
        id: "#364",
        name: "Ryan Smith",
        role: "Additional Client",
        email: "ryan@example.net",
        phone: "547-730-4595",
        isPrimary: false,
        starStatus: "Linked",
        cifStatus: "Complete",
        acsGrowStatus: "Not started"
      },
      {
        id: "#355",
        name: "Nicholas Brown",
        role: "Additional Client",
        email: "nicholas@example.net",
        phone: "846-215-3452",
        isPrimary: false,
        starStatus: "Linked",
        cifStatus: "Not started",
        acsGrowStatus: "Complete"
      }
    ];
    function getStatusColor(status) {
      switch (status) {
        case "Complete":
        case "Linked":
          return "status-success";
        case "Not started":
          return "status-danger";
        case "Not Linked":
          return "status-warning";
        default:
          return "status-neutral";
      }
    }
    function getStatusIcon(status) {
      if (status === "Complete" || status === "Linked") return Circle_check;
      if (status === "Not started") return X;
      return Clock;
    }
    const actionButtons = [
      { label: "Edit", icon: Square_pen, color: "status-info" },
      { label: "Contacts", icon: Users, color: "status-warning" },
      {
        label: "Open CIF",
        icon: External_link,
        color: "status-warning"
      },
      {
        label: "Open Intake",
        icon: External_link,
        color: "status-warning"
      },
      { label: "Link Star", icon: Link_2, color: "status-info" },
      { label: "Hide", icon: Eye_off, color: "status-neutral" },
      { label: "Remove", icon: Trash_2, color: "status-danger" }
    ];
    head("jfezyp", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Manage Clients - ${escape_html(clientName())}</title>`);
      });
    });
    $$renderer2.push(`<div class="client-shell flex h-full flex-col"><div class="client-card client-panel-header flex items-center justify-between rounded-t-xl border-b px-6 py-5 shadow-sm"><div class="flex items-center gap-4"><a${attr("href", `/client/${stringify(store_get($$store_subs ??= {}, "$page", page).params.id)}`)} class="rounded-lg p-2 text-slate-400 transition-all hover:bg-[var(--client-surface-muted)] hover:text-[var(--client-heading)]">`);
    Chevron_left($$renderer2, { size: 24 });
    $$renderer2.push(`<!----></a> <div class="flex flex-col gap-1"><span class="text-xs font-bold text-gray-500 uppercase tracking-wider">Clients associated with Case File</span> <h2 class="client-title text-lg font-extrabold tracking-tight">'${escape_html(clientName())}':</h2></div></div> <div class="flex items-center gap-4"><button class="rounded-lg bg-[var(--color-primary)] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[var(--color-sidebar)]">Add Client</button></div></div> <div class="border-b border-[var(--client-border)] bg-white px-6 py-4 shadow-sm"><div class="relative w-full"><div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">`);
    Search($$renderer2, { class: "h-4.5 w-4.5 text-gray-400" });
    $$renderer2.push(`<!----></div> <input type="text"${attr("value", searchQuery)} placeholder="Find by a Client..." class="w-full rounded-xl border border-[var(--client-border)] bg-white py-3 pl-[2.8rem] pr-4 text-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] placeholder:text-gray-400 focus:border-[var(--color-primary)] focus:outline-none"/></div></div> <div class="client-shell client-scrollbar flex flex-1 flex-col gap-6 overflow-y-auto p-6"><!--[-->`);
    const each_array = ensure_array_like(clients);
    for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
      let client = each_array[$$index_2];
      $$renderer2.push(`<div${attr_class(`client-card flex cursor-pointer flex-col gap-5 border-2 p-6 transition-all hover:bg-[var(--client-surface-muted)] hover:shadow-md ${stringify(client.isPrimary ? "border-[var(--client-border-strong)]" : "border-slate-100")} group`)}><div${attr_class(`flex items-center justify-between border-b pb-2 ${stringify(client.isPrimary ? "border-[var(--client-border)]" : "border-gray-50")}`)}><div class="flex items-center gap-3">`);
      Star($$renderer2, {
        size: 20,
        class: client.isPrimary ? "text-[var(--client-heading)]" : "text-gray-300",
        fill: client.isPrimary ? "var(--client-heading)" : "none"
      });
      $$renderer2.push(`<!----> <span class="client-title text-lg font-extrabold">${escape_html(client.name)}</span> <div class="flex items-center gap-2"><span class="client-badge rounded px-2 py-0.5 text-xs font-bold shadow-sm">${escape_html(client.id)}</span> <span class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">(${escape_html(client.role)})</span></div></div></div> <div class="flex items-center justify-between text-[13px] font-bold text-gray-700 mt-2 pr-2"><div class="flex items-center gap-2">`);
      Mail($$renderer2, { size: 18, class: "client-link" });
      $$renderer2.push(`<!----> ${escape_html(client.email)}</div> <div class="flex items-center gap-2">`);
      Phone($$renderer2, { size: 18, class: "text-black" });
      $$renderer2.push(`<!----> ${escape_html(client.phone)}</div></div> <div class="flex flex-col gap-3"><!--[-->`);
      const each_array_1 = ensure_array_like([
        {
          label: "STAR Status:",
          value: client.starStatus,
          icon: "snowflake"
        },
        { label: "CIF Status:", value: client.cifStatus, icon: "file" },
        {
          label: "ACS-GROW Status:",
          value: client.acsGrowStatus,
          icon: "file"
        }
      ]);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let status = each_array_1[$$index];
        const Icon2 = getStatusIcon(status.value);
        $$renderer2.push(`<div class="flex items-center justify-between"><div class="flex items-center gap-3"><div class="client-link">`);
        if (status.icon === "snowflake") {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="flex items-center justify-center p-0.5 rounded-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10 2 2 2 2-2"></path><path d="m22 8-2 2 2 2"></path><path d="m14 22-2-2-2 2"></path><path d="m2 16 2-2-2-2"></path><path d="M20 10c-1.1 0-2-.9-2-2s.9-2 2-2"></path><path d="M4 14c1.1 0 2 .9 2 2s-.9 2-2 2"></path><path d="M10 20c0 1.1.9 2 2 2s2-.9 2-2"></path><path d="M14 4c0-1.1-.9-2-2-2s-2 .9-2 2"></path><path d="m7.5 10.5 2 2"></path><path d="m14.5 13.5 2 2"></path><path d="m16.5 10.5-2 2"></path><path d="m9.5 13.5-2 2"></path><path d="M12 8v8"></path><path d="M8 12h8"></path></svg></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          File_text($$renderer2, { size: 18 });
        }
        $$renderer2.push(`<!--]--></div> <span class="text-sm font-bold text-gray-700">${escape_html(status.label)}</span></div> <div${attr_class(`status-pill flex items-center gap-2 rounded-md px-3 py-1 text-[11px] font-extrabold tracking-tight ${stringify(getStatusColor(status.value))}`)}><span class="opacity-80">`);
        if (Icon2) {
          $$renderer2.push("<!--[-->");
          Icon2($$renderer2, { size: 12 });
          $$renderer2.push("<!--]-->");
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push("<!--]-->");
        }
        $$renderer2.push(`</span> ${escape_html(status.value)}</div></div>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-7 gap-3 mt-2"><!--[-->`);
      const each_array_2 = ensure_array_like(actionButtons);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let action = each_array_2[$$index_1];
        const Icon2 = action.icon;
        $$renderer2.push(`<button${attr_class(`status-pill flex items-center justify-center gap-2 rounded-lg border py-3 text-[11px] font-bold transition-all hover:brightness-95 ${stringify(action.color)}`)}>`);
        if (Icon2) {
          $$renderer2.push("<!--[-->");
          Icon2($$renderer2, { size: 14, strokeWidth: 2.5 });
          $$renderer2.push("<!--]-->");
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push("<!--]-->");
        }
        $$renderer2.push(` ${escape_html(action.label)}</button>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
