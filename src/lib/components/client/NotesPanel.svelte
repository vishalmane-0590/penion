<script>
  import { Menu } from "lucide-svelte";

  const notes = [
    {
      title: "Project Information Overview",
      content:
        "This document is designed to gather essential information from new projects, such as their contact details, background, and specific needs, to provide personalized services.",
    },
    {
      title: "Data Collection Form",
      content:
        "This form is intended to collect key information from new projects, including their contact details, history, and unique requirements, to ensure tailored services.",
    },
    {
      title: "Onboarding Checklist",
      content:
        "This form is crafted to gather crucial information from new projects, including their contact details, background, and specific needs, to customize our services.",
    },
    {
      title: "Registration Summary",
      content:
        "A structured sequence of events designed to integrate new projects into an organization smoothly, covering orientation, training, and introductions to key tools.",
    },
  ];
</script>

<div class="client-card flex h-[26rem] flex-col overflow-hidden">
  <div
    class="client-panel-header grid grid-cols-[24px_1fr_24px] items-center bg-[var(--client-surface-muted)] p-2.5 text-sm font-bold"
  >
    <Menu size={18} strokeWidth={2} />
    <span class="text-center text-[15px] font-bold">Notes</span>
    <div class="w-4"></div>
  </div>
  <div class="client-scrollbar min-h-0 flex-1 overflow-y-auto px-4 pb-4 pt-5">
    {#each notes as note}
      <div
        class="mb-3 rounded-[12px] border border-gray-200 border-t-2 border-t-[var(--color-primary)] bg-white px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] last:mb-0"
      >
        <h4 class="client-title mb-1.5 text-[12px] font-bold underline underline-offset-4 sm:text-[13px]">
          {note.title}
        </h4>
        <p class="text-[11px] leading-[1.35] text-slate-800 sm:text-[12px]">
          {note.content}
        </p>
      </div>
    {/each}
  </div>
</div>
