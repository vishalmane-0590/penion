<script>
  import { Menu } from "lucide-svelte";
</script>

<div class="bg-white border border-[#EACFB6] rounded-xl flex flex-col shadow-sm">
  <div class="border-b border-[#EACFB6] p-2.5 flex items-center justify-between text-[#A26D1D] font-bold text-sm">
    <Menu size={18} strokeWidth={2} />
    <span>Notes</span>
    <div class="w-4"></div>
  </div>
  <div class="p-4 flex flex-col">
    {#each [{ title: "Project Information Overview", content: "This document is designed to gather essential information from new projects, such as their contact details, background, and specific needs, to provide personalized services." }, { title: "Data Collection Form", content: "This form is intended to collect key information from new projects, including their contact details, history, and unique requirements, to ensure tailored services." }, { title: "Onboarding Checklist", content: "This form is crafted to gather crucial information from new projects, including their contact details, background, and specific needs, to customize our services." }, { title: "Registration Summary", content: "A structured sequence of events designed to integrate new projects into an organization smoothly, covering orientation, training, and introductions to key tools." }] as note}
      <div class="border border-gray-200 rounded-md p-3 mb-2 bg-[#FCFBF8] shadow-[inset_0_0_2px_rgba(0,0,0,0.05)] last:mb-0">
        <h4 class="font-bold text-gray-900 text-[13px] mb-1">{note.title}</h4>
        <p class="text-[11px] text-gray-600 leading-snug">{note.content}</p>
      </div>
    {/each}
  </div>
</div>
