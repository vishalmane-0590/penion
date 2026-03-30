import { e as escape_html, j as attr } from "./index2.js";
function AvatarCircle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { initials = null, seed } = $$props;
    function getAvatarUrl(s) {
      const realPhotos = [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
        // Man
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
        // Woman
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
        // Man
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop",
        // Woman
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
        // Woman
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
        // Woman
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&h=150&auto=format&fit=crop",
        // Man
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
        // Man
      ];
      const hash = s.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
      return realPhotos[hash % realPhotos.length];
    }
    if (initials) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="w-7 h-7 rounded-full bg-[#C29260] text-white flex items-center justify-center text-[10px] font-bold border border-white shadow-sm ring-1 ring-white">${escape_html(initials)}</div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<img${attr("src", getAvatarUrl(seed))} alt="avatar" class="w-7 h-7 rounded-full bg-gray-100 border border-white shadow-sm ring-1 ring-white object-cover"/>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  AvatarCircle as A
};
