<script>
  import { Menu, Search } from "lucide-svelte";
</script>

<div class="bg-white border border-[#EACFB6] rounded-xl flex flex-col shadow-sm">
  <div class="border-b border-[#EACFB6] p-2.5 flex items-center justify-between text-[#A26D1D] font-bold text-sm">
    <Menu size={18} strokeWidth={2} />
    <span>Clients</span>
    <div class="w-4"></div>
  </div>
  <div class="p-4">
    <div class="relative w-full mb-4">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search class="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search clients here..."
        class="w-full pl-9 pr-3 py-2 border border-gray-200 rounded text-sm bg-white placeholder-gray-400 focus:outline-none focus:border-[#A26D1D] shadow-sm"
      />
    </div>
    <div class="grid grid-cols-2 gap-3">
      {#each [{ title: "Client Intake (CIF)", status: "Active", color: "text-[#22C55E]" }, { title: "CIF Review", status: "Active", color: "text-[#22C55E]" }, { title: "Client Intake (CIF)", status: "Draft", color: "text-[#EAB308]" }, { title: "ACS-Grow Project", status: "Draft", color: "text-[#EAB308]" }, { title: "ACS-Grow Intake", status: "Active", color: "text-[#22C55E]" }, { title: "ACS-Grow Review", status: "Active", color: "text-[#22C55E]" }, { title: "STAR Data Setup", status: "Active", color: "text-[#22C55E]" }, { title: "STAR Linked Client", status: "Draft", color: "text-[#EAB308]" }, { title: "FSA Registration", status: "Active", color: "text-[#22C55E]" }] as proj}
        <div class="border border-gray-200 rounded p-2.5 pb-2 hover:bg-gray-50 transition-colors">
          <p class="text-[13px] font-bold text-gray-800 tracking-tight leading-tight mb-2">
            {proj.title}
          </p>
          <span class="inline-block px-2 py-0.5 bg-[#FDF8F3] border border-[#F3E5D4] rounded text-[10px] font-bold {proj.color}">
            {proj.status}
          </span>
        </div>
      {/each}
    </div>
  </div>
</div>
