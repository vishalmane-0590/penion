<script>
  import { Menu, Upload } from "lucide-svelte";
</script>

<div class="bg-white border border-[#EACFB6] rounded-xl flex flex-col shadow-sm">
  <div class="border-b border-[#EACFB6] p-2.5 flex items-center justify-between text-[#A26D1D] font-bold text-sm relative">
    <Menu size={18} strokeWidth={2} class="relative z-10" />
    <span class="absolute left-1/2 -translate-x-1/2">Docs & Files</span>
    <button class="relative z-10 flex items-center gap-1 border border-[#FCA5A5] text-[#EF4444] px-2 py-1 rounded text-[11px] font-bold hover:bg-red-50">
      <Upload size={12} strokeWidth={3} /> Upload File
    </button>
  </div>
  <div class="p-4 grid grid-cols-5 gap-3 gap-y-5 justify-center">
    {#each [{ t: "System\nIntegration\nGuide", c: "DOCX", ic: "bg-[#3B82F6]" }, { t: "Project\nTimeline", c: "ZIP", ic: "bg-[#4B5563]" }, { t: "Location\nData\nSheet", c: "ZIP", ic: "bg-[#4B5563]" }, { t: "Site\nPlan\nDocument", c: "ZIP", ic: "bg-[#4B5563]" }, { t: "Process\nDiagram", c: "DOCX", ic: "bg-[#3B82F6]" }, { t: "On-site\nSafety\nDocument", c: "ZIP", ic: "bg-[#4B5563]" }, { t: "Network\nConfiguration", c: "DOCX", ic: "bg-[#3B82F6]" }, { t: "Project\nSchedule", c: "ZIP", ic: "bg-[#4B5563]" }, { t: "Sensor\nData", c: "ZIP", ic: "bg-[#4B5563]" }, { t: "Project\nOverview", c: "ZIP", ic: "bg-[#4B5563]" }, { t: "System\nSchematic", c: "DOCX", ic: "bg-[#3B82F6]" }, { t: "Safety\nProtocols", c: "ZIP", ic: "bg-[#4B5563]" }] as file}
      <div class="flex flex-col items-center justify-start text-center h-[90px]">
        <span class="text-[9px] font-bold leading-[1.1] text-gray-800 mb-1 h-8 flex items-end justify-center">
          {file.t}
        </span>
        <div class="relative w-7 h-9 border-2 border-gray-300 rounded-[3px] flex flex-col items-center shadow-sm">
          <!-- fold corner -->
          <div class="absolute -top-0.5 -right-0.5 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-white mix-blend-color-burn"></div>
          <div class="flex flex-col gap-[2px] mt-1.5 opacity-40">
            <div class="w-3 border-t-2 border-gray-400"></div>
            <div class="w-4 border-t-2 border-gray-400"></div>
            <div class="w-3 border-t-2 border-gray-400"></div>
            <div class="w-4 border-t-2 border-gray-400"></div>
          </div>
          <div class="absolute -bottom-1 {file.ic} text-white text-[8px] font-bold px-[3px] py-px rounded-[2px]">
            {file.c}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
