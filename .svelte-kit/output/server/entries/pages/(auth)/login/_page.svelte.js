import { a as sanitize_props, b as spread_props, c as slot, j as attr } from "../../../../chunks/index2.js";
import { T as Toggle } from "../../../../chunks/Toggle.js";
import { M as Mail } from "../../../../chunks/mail.js";
import { I as Icon } from "../../../../chunks/Icon.js";
function Eye($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "eye" },
    $$sanitized_props,
    {
      /**
       * @component @name Eye
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi4wNjIgMTIuMzQ4YTEgMSAwIDAgMSAwLS42OTYgMTAuNzUgMTAuNzUgMCAwIDEgMTkuODc2IDAgMSAxIDAgMCAxIDAgLjY5NiAxMC43NSAxMC43NSAwIDAgMS0xOS44NzYgMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/eye
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
function Lock($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "11",
        "x": "3",
        "y": "11",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "lock" },
    $$sanitized_props,
    {
      /**
       * @component @name Lock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTEiIHg9IjMiIHk9IjExIiByeD0iMiIgcnk9IjIiIC8+CiAgPHBhdGggZD0iTTcgMTFWN2E1IDUgMCAwIDEgMTAgMHY0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/lock
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
    let email = "";
    let password = "";
    let rememberMe = false;
    let loading = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="w-full max-w-md mx-4"><div class="bg-white border border-[#EACFB6] rounded-xl shadow-sm p-8"><div class="flex justify-center mb-6"><img src="/Logo.png" alt="Penion" class="h-12"/></div> <h1 class="text-xl font-bold text-gray-800 text-center">Welcome back</h1> <p class="text-sm text-gray-500 text-center mt-1 mb-6">Sign in to your account</p> <form class="space-y-4"><div><label for="email" class="block text-sm font-medium text-gray-700 mb-1.5">Email</label> <div class="relative"><span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">`);
      Mail($$renderer3, { size: 18, strokeWidth: 1.5 });
      $$renderer3.push(`<!----></span> <input id="email" type="email" placeholder="you@example.com"${attr("value", email)} required="" class="w-full border border-[#EACFB6] rounded-lg pl-10 pr-4 py-2.5 text-sm bg-white placeholder-gray-400 outline-none focus:ring-1 focus:ring-[#A3703E] focus:border-[#A3703E] transition-colors"/></div></div> <div><label for="password" class="block text-sm font-medium text-gray-700 mb-1.5">Password</label> <div class="relative"><span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">`);
      Lock($$renderer3, { size: 18, strokeWidth: 1.5 });
      $$renderer3.push(`<!----></span> <input id="password"${attr("type", "password")} placeholder="Enter your password"${attr("value", password)} required="" class="w-full border border-[#EACFB6] rounded-lg pl-10 pr-10 py-2.5 text-sm bg-white placeholder-gray-400 outline-none focus:ring-1 focus:ring-[#A3703E] focus:border-[#A3703E] transition-colors"/> <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors">`);
      {
        $$renderer3.push("<!--[-1-->");
        Eye($$renderer3, { size: 18, strokeWidth: 1.5 });
      }
      $$renderer3.push(`<!--]--></button></div></div> <div class="flex items-center justify-between pt-1">`);
      Toggle($$renderer3, {
        label: "Remember me",
        get checked() {
          return rememberMe;
        },
        set checked($$value) {
          rememberMe = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <a href="/login" class="text-sm text-[#A26D1D] hover:underline">Forgot password?</a></div> <button type="submit"${attr("disabled", loading, true)} class="w-full bg-[#A26D1D] hover:bg-[#8B5C18] disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm">`);
      {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`Sign In`);
      }
      $$renderer3.push(`<!--]--></button></form> <p class="text-sm text-gray-500 text-center mt-6">Don't have an account? <span class="text-[#A26D1D] font-medium">Contact admin</span></p></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
