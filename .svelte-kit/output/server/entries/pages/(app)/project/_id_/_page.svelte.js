import { a as sanitize_props, b as spread_props, c as slot, j as attr, e as escape_html, l as ensure_array_like, d as attr_class, f as stringify, i as store_get, h as head, u as unsubscribe_stores } from "../../../../../chunks/index2.js";
import { p as page } from "../../../../../chunks/stores.js";
import { A as AvatarCircle } from "../../../../../chunks/AvatarCircle.js";
import { C as Chevron_down } from "../../../../../chunks/chevron-down.js";
import { C as Chevron_up } from "../../../../../chunks/chevron-up.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
function Arrow_left($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m12 19-7-7 7-7" }],
    ["path", { "d": "M19 12H5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-left" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIgMTktNy03IDctNyIgLz4KICA8cGF0aCBkPSJNMTkgMTJINSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-left
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
function TaskGroup($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      title,
      completedCount = 0,
      totalCount = 0,
      dueDate,
      assignee,
      tasks = [],
      isCollapsed: initialCollapsed = false
    } = $$props;
    let isCollapsed = initialCollapsed;
    $$renderer2.push(`<div class="bg-white border-b border-[#EACFB6] last:border-0 flex flex-col w-full"><div class="flex items-center justify-between py-4 px-2 group cursor-pointer select-none" role="button" tabindex="0"${attr("aria-expanded", !isCollapsed)}><div class="flex flex-col gap-0.5"><span class="text-[12px] font-bold text-[#A66B12] opacity-80 uppercase tracking-tight">(${escape_html(completedCount)}/${escape_html(totalCount)})</span> <h3 class="text-[15px] font-bold text-[#A66B12] leading-tight tracking-tight">${escape_html(title)}</h3></div> <div class="flex items-center gap-10"><div class="flex flex-col items-end gap-1"><span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Due Date: ${escape_html(dueDate)}</span> <div class="flex items-center gap-2">`);
    AvatarCircle($$renderer2, { seed: assignee });
    $$renderer2.push(`<!----> <span class="text-[13px] font-bold text-gray-700">${escape_html(assignee)}</span> <button class="text-gray-400 group-hover:text-gray-600 transition-colors ml-1">`);
    if (isCollapsed) {
      $$renderer2.push("<!--[0-->");
      Chevron_down($$renderer2, { size: 18, strokeWidth: 2.5 });
    } else {
      $$renderer2.push("<!--[-1-->");
      Chevron_up($$renderer2, { size: 18, strokeWidth: 2.5 });
    }
    $$renderer2.push(`<!--]--></button></div></div></div></div> `);
    if (!isCollapsed && tasks.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex flex-col bg-white border-t border-[#EACFB6]/50 mb-3 mx-1 rounded-lg"><!--[-->`);
      const each_array = ensure_array_like(tasks);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let task = each_array[$$index];
        $$renderer2.push(`<label class="flex items-center gap-4 p-3 border-b border-[#EACFB6]/40 last:border-0 cursor-pointer transition-colors hover:bg-[#FDF8F3] group/item first:rounded-t-lg last:rounded-b-lg"><div class="relative flex items-center"><input type="checkbox"${attr("checked", task.done, true)} class="w-4.5 h-4.5 rounded border-[#EACFB6] text-[#A66B12] focus:ring-[#A66B12] cursor-pointer"/></div> <span${attr_class(`text-[14px] ${stringify(task.done ? "text-gray-400" : "text-gray-700")} font-semibold tracking-tight`)}>${escape_html(task.text)}</span></label>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    store_get($$store_subs ??= {}, "$page", page).params.id || "ACS-GROW Project";
    const projectInfo = {
      title: "ACS-GROW Project",
      client: "John Carter",
      pm: "Alex meian",
      dueDate: "22 Apr 2026",
      status: "In Progress"
    };
    const stages = [
      {
        title: "Setup & Assign Preparers",
        completed: 1,
        total: 1,
        dueDate: "02 Mar 2026",
        assignee: "Ethan Parker",
        tasks: [{ text: "Setup project and assign preparers", done: false }]
      },
      {
        title: "Client Onboarding",
        completed: 2,
        total: 4,
        dueDate: "12 Mar 2026",
        assignee: "Ethan Parker",
        tasks: [
          { text: "Create Client File in SP", done: true },
          { text: "Review Service Agreement", done: true },
          { text: "Prepare Auth Forms", done: false },
          { text: "Send Intro Email", done: false }
        ]
      },
      {
        title: "Essential Information",
        completed: 0,
        total: 5,
        dueDate: "22 Mar 2026",
        assignee: "Sophia Turner",
        tasks: [
          { text: "FSA-211 Signed", done: false },
          { text: "CPA-1270 Signed", done: false },
          { text: "FSA Third Party Release Signed", done: false },
          { text: "Request info from FSA", done: false },
          { text: "Info Received from FSA", done: false }
        ]
      },
      {
        title: "USDA Document Review ACS",
        completed: 0,
        total: 1,
        dueDate: "02 Apr 2026",
        assignee: "Sophia Turner",
        isCollapsed: true,
        tasks: [{ text: "Document review complete", done: false }]
      },
      {
        title: "USDA Document Review FPS",
        completed: 0,
        total: 1,
        dueDate: "12 Apr 2026",
        assignee: "Lucas Martinez",
        isCollapsed: true,
        tasks: [{ text: "Document review complete", done: false }]
      },
      {
        title: "Finalize & Schedule",
        completed: 0,
        total: 2,
        dueDate: "22 Apr 2026",
        assignee: "Lucas Martinez",
        isCollapsed: true,
        tasks: [
          { text: "Finalize documents", done: false },
          { text: "Schedule meeting", done: false }
        ]
      }
    ];
    head("ypxp1n", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(projectInfo.title)} - Grow Project View</title>`);
      });
    });
    $$renderer2.push(`<div class="flex flex-col w-full bg-[#FCFBF8] min-h-screen pt-4 pb-12 px-10 overflow-y-auto"><div class="bg-white border border-[#EACFB6] rounded-xl p-6 mb-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center justify-between"><div class="flex flex-col gap-5"><h1 class="text-2xl font-extrabold text-[#A66B12] leading-none">${escape_html(projectInfo.title)}</h1> <div class="flex items-center gap-x-16"><div class="flex flex-col gap-1.5 min-w-[140px]"><span class="text-[10px] font-extrabold text-[#C1A173] uppercase tracking-widest">Client:</span> <span class="text-[14px] font-bold text-gray-800 tracking-tight">${escape_html(projectInfo.client)}</span></div> <div class="flex flex-col gap-1.5 min-w-[140px]"><span class="text-[10px] font-extrabold text-[#C1A173] uppercase tracking-widest">Project Manager:</span> <span class="text-[14px] font-bold text-gray-800 tracking-tight">${escape_html(projectInfo.pm)}</span></div> <div class="flex flex-col gap-1.5 min-w-[120px]"><span class="text-[10px] font-extrabold text-[#C1A173] uppercase tracking-widest">Due Date:</span> <span class="text-[14px] font-bold text-gray-800 tracking-tight">${escape_html(projectInfo.dueDate)}</span></div> <div class="flex flex-col gap-1.5 min-w-[100px]"><span class="text-[10px] font-extrabold text-[#C1A173] uppercase tracking-widest">Status:</span> <span class="text-[14px] font-bold text-gray-800 tracking-tight">${escape_html(projectInfo.status)}</span></div></div></div> <a${attr("href", `/client/${stringify(encodeURIComponent(projectInfo.client))}`)} class="flex items-center gap-2 bg-[#A66B12] hover:bg-[#8F5A0D] text-white px-6 py-2.5 rounded-lg text-[14px] font-bold transition-all shadow-md active:scale-95">`);
    Arrow_left($$renderer2, { size: 18, strokeWidth: 2.5 });
    $$renderer2.push(`<!----> Client Details</a></div> <div class="bg-white border border-[#EACFB6] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden px-4 py-2"><!--[-->`);
    const each_array = ensure_array_like(stages);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let stage = each_array[$$index];
      TaskGroup($$renderer2, {
        title: stage.title,
        completedCount: stage.completed,
        totalCount: stage.total,
        dueDate: stage.dueDate,
        assignee: stage.assignee,
        tasks: stage.tasks,
        isCollapsed: stage.isCollapsed
      });
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
