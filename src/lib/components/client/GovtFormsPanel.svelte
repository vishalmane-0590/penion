<script>
  import { Menu, FileText, ChevronDown } from "lucide-svelte";

  const forms = [
    "IRS-1040.pdf",
    "W-2-Form.pdf",
    "Form-1099.pdf",
    "Form-4506.pdf",
    "Schedule-C.pdf",
    "Schedule-E.pdf"
  ];
</script>

<div class="client-card flex h-[26rem] flex-col overflow-hidden">
  <div
    class="client-panel-header grid grid-cols-[24px_1fr_24px] items-center bg-[var(--client-surface-muted)] p-2.5 text-sm font-bold"
  >
    <Menu size={18} strokeWidth={2} class="relative z-10" />
    <span class="text-center text-[15px] font-bold">GOVT PDF Forms</span>
    <div class="w-4 relative z-10"></div>
  </div>
  <div class="client-scrollbar min-h-0 flex-1 overflow-y-auto px-3 pb-3 pt-5">
    {#each forms as form}
      <div
        class="mb-4 flex items-center justify-between rounded-[12px] border border-[var(--client-border)] bg-white px-3 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.03)] transition-colors hover:bg-gray-50 last:mb-0"
      >
        <div class="flex items-center gap-3">
          <div class="relative flex h-[20px] w-[16px] items-center justify-center rounded-[2px] bg-[#fff1ec] text-[#f97316]">
            <FileText size={12} strokeWidth={1.8} />
            <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-[2px] bg-[#f97316] px-[2px] py-px text-[5px] font-bold leading-none text-white">
              PDF
            </span>
          </div>
          <span class="client-title text-[14px] font-medium sm:text-[16px]">
            {form}
          </span>
        </div>
        <ChevronDown
          size={18}
          class="text-black"
        />
      </div>
    {/each}
  </div>
</div>
