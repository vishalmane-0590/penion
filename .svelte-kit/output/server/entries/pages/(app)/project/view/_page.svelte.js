import { a as sanitize_props, b as spread_props, c as slot, e as escape_html, d as attr_class, j as attr, f as stringify, k as derived, l as ensure_array_like, h as head, p as clsx } from "../../../../../chunks/index2.js";
import "clsx";
import { I as Icon } from "../../../../../chunks/Icon.js";
import { C as Chevron_up } from "../../../../../chunks/chevron-up.js";
import { C as Chevron_down } from "../../../../../chunks/chevron-down.js";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../chunks/root.js";
import "../../../../../chunks/state.svelte.js";
import { X } from "../../../../../chunks/x.js";
function Check($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  Icon($$renderer, spread_props([
    { name: "check" },
    $$sanitized_props,
    {
      /**
       * @component @name Check
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/check
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
function Command($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "command" },
    $$sanitized_props,
    {
      /**
       * @component @name Command
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgNnYxMmEzIDMgMCAxIDAgMy0zSDZhMyAzIDAgMSAwIDMgM1Y2YTMgMyAwIDEgMC0zIDNoMTJhMyAzIDAgMSAwLTMtMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/command
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
function Copy($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "14",
        "height": "14",
        "x": "8",
        "y": "8",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "copy" },
    $$sanitized_props,
    {
      /**
       * @component @name Copy
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiIgLz4KICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/copy
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
function Share_2($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "18", "cy": "5", "r": "3" }],
    ["circle", { "cx": "6", "cy": "12", "r": "3" }],
    ["circle", { "cx": "18", "cy": "19", "r": "3" }],
    [
      "line",
      { "x1": "8.59", "x2": "15.42", "y1": "13.51", "y2": "17.49" }
    ],
    [
      "line",
      { "x1": "15.41", "x2": "8.59", "y1": "6.51", "y2": "10.49" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "share-2" },
    $$sanitized_props,
    {
      /**
       * @component @name Share2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjUiIHI9IjMiIC8+CiAgPGNpcmNsZSBjeD0iNiIgY3k9IjEyIiByPSIzIiAvPgogIDxjaXJjbGUgY3g9IjE4IiBjeT0iMTkiIHI9IjMiIC8+CiAgPGxpbmUgeDE9IjguNTkiIHgyPSIxNS40MiIgeTE9IjEzLjUxIiB5Mj0iMTcuNDkiIC8+CiAgPGxpbmUgeDE9IjE1LjQxIiB4Mj0iOC41OSIgeTE9IjYuNTEiIHkyPSIxMC40OSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/share-2
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
function CIFHeader($$renderer, $$props) {
  let {
    client = "John Carter",
    pm = "Alex meian",
    status = "Live"
  } = $$props;
  $$renderer.push(`<div class="bg-white border border-[#EACFB6] rounded-4xl p-6 mb-4 shadow-sm flex items-center justify-between"><div class="flex flex-col gap-2"><h1 class="text-[#A26D1D] text-3xl font-bold tracking-tight">Client Intake Form (CIF)</h1> <div class="flex items-center gap-6 text-[13px] font-medium text-gray-700"><div class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-black rounded-full"></span> <span>Client: <span class="font-semibold">${escape_html(client)}</span></span></div> <div class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-black rounded-full"></span> <span>Project Manager: <span class="font-semibold">${escape_html(pm)}</span></span></div> <div class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-black rounded-full"></span> <span>Status: <span class="font-semibold">${escape_html(status)}</span></span></div></div></div> <div class="flex items-center gap-3"><button type="button" class="flex items-center gap-2 bg-[#A26D1D] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#8B5D19] transition-colors shadow-sm">`);
  Share_2($$renderer, { size: 18 });
  $$renderer.push(`<!----> Share</button> <button type="button" class="flex items-center gap-2 bg-[#A26D1D] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#8B5D19] transition-colors shadow-sm">`);
  Command($$renderer, { size: 18 });
  $$renderer.push(`<!----> Reconcile</button></div></div>`);
}
function CollapsibleSection($$renderer, $$props) {
  let {
    title,
    tier,
    lastUpdated = "",
    children,
    isOpen = true,
    showSave = false,
    showRefresh = false
  } = $$props;
  let hasFooter = derived(() => showSave || showRefresh);
  $$renderer.push(`<div class="bg-white border-2 border-[#EACFB6] rounded-3xl mb-4 shadow-[0_4px_12px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300"><button${attr_class("w-full px-8 py-5 flex items-center justify-between select-none hover:bg-[#FDF8F3]/40 transition-colors", void 0, { "border-b": isOpen, "border-[#EACFB6]": isOpen })} type="button"${attr("aria-expanded", isOpen)}><h2 class="text-[#A26D1D] text-[17px] font-extrabold tracking-tight">${escape_html(title)}</h2> <div class="flex items-center gap-4">`);
  if (lastUpdated) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div class="flex items-center gap-2 text-[13px] font-medium text-gray-500 mr-2"><span class="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> <span>Last Updated: ${escape_html(lastUpdated)}</span></div>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> `);
  if (tier) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<span class="text-[11px] font-bold text-[#A26D1D]/70 tracking-tight">${escape_html(tier)}</span>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <div class="text-[#A26D1D] ml-1">`);
  if (isOpen) {
    $$renderer.push("<!--[0-->");
    Chevron_up($$renderer, { size: 22, strokeWidth: 2.5 });
  } else {
    $$renderer.push("<!--[-1-->");
    Chevron_down($$renderer, { size: 22, strokeWidth: 2.5 });
  }
  $$renderer.push(`<!--]--></div></div></button> `);
  if (isOpen) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div><div${attr_class(`px-10 pt-6 ${stringify(hasFooter() ? "pb-6" : "pb-8")} flex flex-col gap-6`)}>`);
    children($$renderer);
    $$renderer.push(`<!----></div> `);
    if (hasFooter()) {
      $$renderer.push("<!--[0-->");
      $$renderer.push(`<div class="px-10 py-5 border-t border-[#EACFB6]/60 flex items-center gap-3 bg-[#FDFAF6]">`);
      if (showSave) {
        $$renderer.push("<!--[0-->");
        $$renderer.push(`<button type="button" class="bg-[#A26D1D] text-white px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-[#8B5D19] transition-all shadow-sm active:scale-95">Save</button>`);
      } else {
        $$renderer.push("<!--[-1-->");
      }
      $$renderer.push(`<!--]--> `);
      if (showRefresh) {
        $$renderer.push("<!--[0-->");
        $$renderer.push(`<button type="button" class="bg-[#A26D1D] flex items-center gap-2 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#8B5D19] transition-all shadow-sm active:scale-95"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M3 21v-5h5"></path></svg> Refresh from CRM</button>`);
      } else {
        $$renderer.push("<!--[-1-->");
      }
      $$renderer.push(`<!--]--></div>`);
    } else {
      $$renderer.push("<!--[-1-->");
    }
    $$renderer.push(`<!--]--></div>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
function ShareIntakeModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { open = false } = $$props;
    let form = {
      mail: "Test@example.com",
      cc: "Test@example.com",
      subject: "Client Intake Form - Action Required",
      template: "Client Intake",
      content: "Dear,\n\nWe’re excited to begin working with you! To help us better understand your needs, please fill out our client intake form by clicking the link below.\n\n{{magic_link}}\n\nThis form ensures we have all the necessary details to serve you effectively. If you have any questions or concerns, feel free to reach out.\n\nBest regards,\nPinion",
      linkExpiryDays: 7,
      stages: ["Client Profile", "Conservation Scope"]
    };
    let generatedLink = "https://client-intake.app/fill/ABCD1234rer";
    const templates = ["Client Intake"];
    const stages = ["Client Profile", "Eligibility Gate", "Conservation Scope"];
    if (open) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="fixed inset-0 z-[120] flex items-center justify-center bg-[#2F2417]/28 px-3 py-5 backdrop-blur-[2px] sm:px-5"><div class="relative w-full max-w-[640px] overflow-hidden rounded-[18px] border border-[#D6A052] bg-[#FFFEFC] shadow-[0_30px_90px_rgba(84,56,16,0.2)]"><button type="button" class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#8A5B15] transition-colors hover:bg-[#F6EADA]" aria-label="Close share dialog">`);
      X($$renderer2, { size: 18 });
      $$renderer2.push(`<!----></button> <div class="max-h-[92vh] overflow-y-auto px-5 pb-5 pt-4 sm:px-5"><h2 class="pr-10 text-[16px] font-semibold tracking-[-0.01em] text-[#B27212]">Share Client Intake Form</h2> <div class="mt-5 space-y-3.5"><label class="block"><span class="mb-2 block text-[15px] font-medium text-[#171717]">Mail</span> <input${attr("value", form.mail)} type="email" class="h-11 w-full rounded-[14px] border border-[#F0DFC8] bg-white px-4 text-[15px] text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors placeholder:text-[#9B9B9B] focus:border-[#C58B33]"/></label> <label class="block"><span class="mb-2 block text-[15px] font-medium text-[#171717]">CC</span> <input${attr("value", form.cc)} type="email" class="h-11 w-full rounded-[14px] border border-[#F0DFC8] bg-white px-4 text-[15px] text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors placeholder:text-[#9B9B9B] focus:border-[#C58B33]"/></label> <label class="block"><span class="mb-2 block text-[15px] font-medium text-[#171717]">Subject</span> <input${attr("value", form.subject)} type="text" class="h-11 w-full rounded-[14px] border border-[#F0DFC8] bg-white px-4 text-[15px] text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors placeholder:text-[#9B9B9B] focus:border-[#C58B33]"/></label> <label class="block"><span class="mb-2 block text-[15px] font-medium text-[#171717]">Template</span> <div class="relative">`);
      $$renderer2.select(
        {
          value: form.template,
          class: "h-11 w-full appearance-none rounded-[14px] border border-[#F0DFC8] bg-white px-4 pr-12 text-[15px] text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C58B33]"
        },
        ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(templates);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let template = each_array[$$index];
            $$renderer3.option({ value: template }, ($$renderer4) => {
              $$renderer4.push(`${escape_html(template)}`);
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
      );
      $$renderer2.push(` <span class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#171717]">`);
      Chevron_down($$renderer2, { size: 18, strokeWidth: 2.4 });
      $$renderer2.push(`<!----></span></div></label> <label class="block"><span class="mb-2 block text-[15px] font-medium text-[#171717]">Content</span> <textarea rows="9" class="min-h-[290px] w-full rounded-[14px] border border-[#F0DFC8] bg-white px-4 py-3.5 text-[15px] leading-[1.55] text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors placeholder:text-[#9B9B9B] focus:border-[#C58B33]">`);
      const $$body = escape_html(form.content);
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea></label> <label class="block"><span class="mb-2 block text-[15px] font-medium text-[#171717]">Link Expiry Interval (Days)</span> <div class="relative"><input${attr("value", form.linkExpiryDays)} type="number" min="1" class="h-11 w-full rounded-[14px] border border-[#F0DFC8] bg-white px-4 pr-11 text-[15px] text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors [appearance:textfield] focus:border-[#C58B33]"/> <span class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#CA943B]"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L11 8H1L6 2Z" fill="currentColor"></path><path d="M6 16L1 10H11L6 16Z" fill="currentColor"></path></svg></span></div></label> <fieldset class="pt-1"><legend class="text-[15px] font-medium text-[#171717]">Select stages to share</legend> <div class="mt-3 space-y-5"><!--[-->`);
      const each_array_1 = ensure_array_like(stages);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let stage = each_array_1[$$index_1];
        $$renderer2.push(`<label class="flex items-center gap-3 text-[15px] font-medium text-[#171717]"><span class="relative flex h-6 w-6 items-center justify-center"><input type="checkbox"${attr("value", stage)}${attr("checked", form.stages.includes(stage), true)} class="peer h-6 w-6 appearance-none rounded-[6px] border border-[#CFCFCF] bg-white transition-colors checked:border-[#E6C99B] checked:bg-white"/> <svg class="pointer-events-none absolute h-3.5 w-3.5 text-[#D39B3E] opacity-0 transition-opacity peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> <span>${escape_html(stage)}</span></label>`);
      }
      $$renderer2.push(`<!--]--></div></fieldset> <div class="pt-1"><button type="button" class="inline-flex h-10 items-center rounded-[6px] bg-[#B2740E] px-4 text-[15px] font-medium text-white transition-colors hover:bg-[#98620B]">Generate Magic Link</button></div> <div class="rounded-[12px] border border-[#F2E5D4] bg-[#FBF8F3] pl-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"><div class="rounded-[10px] border-l-[4px] border-[#B2740E] bg-[#F7F3ED] px-4 py-3 text-[15px] text-[#171717]">${escape_html(generatedLink)}</div></div> <div class="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-start"><button type="button" class="inline-flex h-10 items-center justify-center gap-2 rounded-[6px] border border-[#F1E2CC] bg-[#FFF9F1] px-4 text-[15px] font-medium text-[#B2740E] transition-colors hover:bg-[#FDF1DF]">`);
      {
        $$renderer2.push("<!--[-1-->");
        Copy($$renderer2, { size: 18, strokeWidth: 2.2 });
        $$renderer2.push(`<!----> Copy Link`);
      }
      $$renderer2.push(`<!--]--></button> <button type="button" class="inline-flex h-10 items-center justify-center gap-2 rounded-[6px] bg-[#B2740E] px-7 text-[15px] font-medium text-white transition-colors hover:bg-[#98620B]">`);
      Check($$renderer2, { size: 18, strokeWidth: 2.6 });
      $$renderer2.push(`<!----> Done</button></div></div></div></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _page($$renderer) {
  let isShareModalOpen = false;
  let clientProfile = {
    name: "Banner Land & Livestock",
    entity: "C Corporation",
    phone: "+1-970-474-2715",
    operationType: "Crop",
    usdaPrograms: ["CSP"]
  };
  let eligibilityGate = { fsaRegNum: "-", complianceStatus: "Compliant" };
  let conservationScope = { goals: "-", totalAcres: "-" };
  const operationTypes = ["Crop", "Livestock", "Mixed", "Other"];
  const complianceStatuses = ["Compliant", "Non-Compliant", "Pending"];
  const usdaPrograms = [{ id: "CSP", label: "CSP" }, { id: "EQIP", label: "EQIP" }];
  const inputClass = "w-full px-5 py-3.5 bg-white border-2 border-[#EACFB6]/70 rounded-2xl text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#A26D1D] transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.04)]";
  const selectClass = `${inputClass} appearance-none cursor-pointer`;
  const labelClass = "text-[11px] font-extrabold text-gray-400 uppercase tracking-widest";
  head("4zkskd", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Project View - Client Intake Form</title>`);
    });
  });
  $$renderer.push(`<div class="flex flex-col w-full bg-[#F8F5F0] min-h-screen pt-5 pb-14 px-6 overflow-y-auto">`);
  CIFHeader($$renderer, {
    client: "John Carter",
    pm: "Alex meian",
    status: "Live"
  });
  $$renderer.push(`<!----> <div class="w-full flex flex-col gap-3">`);
  CollapsibleSection($$renderer, {
    title: "Client Profile",
    tier: "Tier 0+1",
    lastUpdated: "2 days ago",
    showRefresh: true,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="grid grid-cols-1 gap-5"><div class="flex flex-col gap-2"><label for="client-name"${attr_class(clsx(labelClass))}>Client Name</label> <input type="text" id="client-name"${attr("value", clientProfile.name)}${attr_class(clsx(inputClass))}/></div> <div class="flex flex-col gap-2"><label for="entity"${attr_class(clsx(labelClass))}>Entity</label> <input type="text" id="entity"${attr("value", clientProfile.entity)}${attr_class(clsx(inputClass))}/></div> <div class="flex flex-col gap-2"><label for="phone"${attr_class(clsx(labelClass))}>Phone</label> <input type="text" id="phone"${attr("value", clientProfile.phone)}${attr_class(clsx(inputClass))}/></div> <div class="flex flex-col gap-2"><label for="operation-type"${attr_class(clsx(labelClass))}>Operation Type</label> <div class="relative">`);
      $$renderer2.select(
        {
          id: "operation-type",
          value: clientProfile.operationType,
          class: selectClass
        },
        ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(operationTypes);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let type = each_array[$$index];
            $$renderer3.option({ value: type }, ($$renderer4) => {
              $$renderer4.push(`${escape_html(type)}`);
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
      );
      $$renderer2.push(` <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">`);
      Chevron_down($$renderer2, { size: 18, strokeWidth: 2.5 });
      $$renderer2.push(`<!----></div></div></div> <div class="flex flex-col gap-3"><span${attr_class(clsx(labelClass))}>USDA Programs</span> <div class="flex items-center gap-8"><!--[-->`);
      const each_array_1 = ensure_array_like(usdaPrograms);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let program = each_array_1[$$index_1];
        $$renderer2.push(`<label class="flex items-center gap-3 cursor-pointer group select-none"><div class="relative flex items-center justify-center"><input type="checkbox"${attr("value", program.id)}${attr("checked", clientProfile.usdaPrograms.includes(program.id), true)} class="peer appearance-none w-5 h-5 border-2 border-[#EACFB6] rounded-md bg-white checked:border-[#A26D1D] transition-all cursor-pointer"/> <svg class="absolute w-3 h-3 text-[#A26D1D] hidden peer-checked:block pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <span class="text-sm font-bold text-gray-700 group-hover:text-[#A26D1D] transition-colors">${escape_html(program.label)}</span></label>`);
      }
      $$renderer2.push(`<!--]--></div></div></div>`);
    }
  });
  $$renderer.push(`<!----> `);
  CollapsibleSection($$renderer, {
    title: "Eligibility Gate",
    tier: "Tier 2",
    showSave: true,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="flex flex-col gap-5"><div class="bg-[#FDF8F0] border-l-4 border-[#A26D1D] px-4 py-3 rounded-r-xl"><p class="text-[13px] font-semibold text-gray-700">Completing Client Profile helps pre-qualify eligibility questions.</p></div> <div class="grid grid-cols-1 gap-5"><div class="flex flex-col gap-2"><label for="fsa-reg"${attr_class(clsx(labelClass))}>FSA Registration Number</label> <input type="text" id="fsa-reg"${attr("value", eligibilityGate.fsaRegNum)}${attr_class(clsx(inputClass))}/></div> <div class="flex flex-col gap-2"><label for="compliance-status"${attr_class(clsx(labelClass))}>Compliance Status</label> <div class="relative">`);
      $$renderer2.select(
        {
          id: "compliance-status",
          value: eligibilityGate.complianceStatus,
          class: selectClass
        },
        ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          const each_array_2 = ensure_array_like(complianceStatuses);
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let status = each_array_2[$$index_2];
            $$renderer3.option({ value: status }, ($$renderer4) => {
              $$renderer4.push(`${escape_html(status)}`);
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
      );
      $$renderer2.push(` <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">`);
      Chevron_down($$renderer2, { size: 18, strokeWidth: 2.5 });
      $$renderer2.push(`<!----></div></div></div></div></div>`);
    }
  });
  $$renderer.push(`<!----> `);
  CollapsibleSection($$renderer, {
    title: "Conservation Scope",
    tier: "Tier 3",
    showSave: true,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="flex flex-col gap-5"><div class="bg-[#FDF8F0] border-l-4 border-[#A26D1D] px-4 py-3 rounded-r-xl"><p class="text-[13px] font-semibold text-gray-700">Eligibility information is usually needed before conservation planning.</p></div> <div class="grid grid-cols-1 gap-5"><div class="flex flex-col gap-2"><label for="goals"${attr_class(clsx(labelClass))}>Conservation Goals</label> <input type="text" id="goals"${attr("value", conservationScope.goals)}${attr_class(clsx(inputClass))}/></div> <div class="flex flex-col gap-2"><label for="total-acres"${attr_class(clsx(labelClass))}>Total Acres</label> <input type="text" id="total-acres"${attr("value", conservationScope.totalAcres)}${attr_class(`${stringify(inputClass)} text-center`)}/></div></div></div>`);
    }
  });
  $$renderer.push(`<!----></div></div> `);
  ShareIntakeModal($$renderer, {
    open: isShareModalOpen
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
