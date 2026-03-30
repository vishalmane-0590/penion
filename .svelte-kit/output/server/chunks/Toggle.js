import { e as escape_html, j as attr, d as attr_class, m as bind_props, f as stringify } from "./index2.js";
function Toggle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { label, checked = false } = $$props;
    $$renderer2.push(`<div class="flex items-center gap-3"><span class="text-sm font-medium text-gray-700">${escape_html(label)}</span> <button type="button" role="switch"${attr("aria-checked", checked)}${attr_class(`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none ${stringify(checked ? "bg-[#EBDBC9]" : "bg-gray-200")}`)}><span${attr_class(`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#A3703E] shadow-sm ring-0 transition duration-200 ease-in-out ${stringify(checked ? "translate-x-5" : "translate-x-0")}`)}></span></button></div>`);
    bind_props($$props, { checked });
  });
}
export {
  Toggle as T
};
