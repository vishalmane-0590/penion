<script>
  import { Menu, FileText, ChevronDown } from "lucide-svelte";
</script>

<div class="bg-white border border-[#EACFB6] rounded-xl flex flex-col shadow-sm">
  <div class="border-b border-[#EACFB6] p-2.5 flex items-center justify-between text-[#A26D1D] font-bold text-sm relative">
    <Menu size={18} strokeWidth={2} class="relative z-10" />
    <span class="absolute left-1/2 -translate-x-1/2">GOVT PDF Forms</span>
    <div class="w-4 relative z-10"></div>
  </div>
  <div class="p-2 flex flex-col gap-1">
    {#each ["IRS-1040.pdf", "W-2-Form.pdf", "Form-1099.pdf", "Form-4506.pdf", "Schedule-C.pdf"] as form}
      <div class="flex items-center justify-between p-3 border-b border-gray-100 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 group transition-colors">
        <div class="flex items-center gap-2">
          <FileText size={18} class="text-[#EF4444]" fill="#FCA5A5" strokeWidth={1.5} />
          {form}
        </div>
        <ChevronDown size={18} class="text-gray-400 group-hover:text-gray-600" />
      </div>
    {/each}
  </div>
</div>
