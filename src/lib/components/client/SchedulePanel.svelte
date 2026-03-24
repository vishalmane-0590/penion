<script>
  import { Menu, ChevronDown, ChevronLeft, ChevronRight } from "lucide-svelte";
  
  let { clientName = $bindable(), projects } = $props();
  let isProjectDropdownOpen = $state(false);
</script>

<div class="bg-white border border-[#EACFB6] rounded-xl flex flex-col shadow-sm flex-1 mb-6">
  <div class="border-b border-[#EACFB6] p-2.5 flex items-center justify-between text-[#A26D1D] font-bold text-sm relative">
    <Menu size={18} strokeWidth={2} class="relative z-10" />
    <span class="absolute left-1/2 -translate-x-1/2">Schedule</span>
    <div class="relative z-10 w-44">
      <button
        onclick={() => (isProjectDropdownOpen = !isProjectDropdownOpen)}
        class="flex items-center justify-between border border-[#EACFB6] text-[#A26D1D] rounded px-3 py-1 bg-white text-[11px] font-bold w-full shadow-sm focus:outline-none pr-2 truncate"
      >
        <span class="truncate">{clientName}</span>
        <ChevronDown size={14} class="text-[#A26D1D] shrink-0 ml-1" />
      </button>

      {#if isProjectDropdownOpen}
        <div class="absolute top-[110%] right-0 w-[200px] bg-white border border-gray-200 rounded shadow-lg z-20 flex flex-col p-1 gap-1 text-[10px] font-bold text-gray-700 animate-in fade-in slide-in-from-top-1 duration-200">
          {#each projects as proj}
            <button
              onclick={() => {
                clientName = proj;
                isProjectDropdownOpen = false;
              }}
              class="px-3 py-2 text-left hover:bg-[#FDF8F3] hover:text-[#A26D1D] rounded transition-colors {clientName === proj ? 'bg-[#FDF8F3] text-[#A26D1D]' : ''}"
            >
              {proj}
            </button>
          {/each}
          <div class="border-t border-gray-100 my-1"></div>
          <button class="px-3 py-2 text-center text-gray-400 opacity-70 italic text-[9px]">Select a project to view schedule</button>
        </div>
      {/if}
    </div>
  </div>

  <!-- Calendar body -->
  <div class="p-3 w-full">
    <div class="flex items-center justify-between mb-4 mt-2 px-2">
      <button class="text-gray-400 hover:text-gray-700"><ChevronLeft size={20} /></button>
      <span class="text-gray-900 font-extrabold text-[15px]">January 2026</span>
      <button class="text-gray-400 hover:text-gray-700"><ChevronRight size={20} /></button>
    </div>
    <div class="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-[13px]">
      <div class="font-bold text-[#EF4444] mb-2">Sun</div>
      <div class="font-bold text-gray-700 mb-2">Mon</div>
      <div class="font-bold text-gray-700 mb-2">Tue</div>
      <div class="font-bold text-gray-700 mb-2">Wed</div>
      <div class="font-bold text-gray-700 mb-2">Thu</div>
      <div class="font-bold text-gray-700 mb-2">Fri</div>
      <div class="font-bold text-gray-700 mb-2">Sat</div>

      {#each Array(31).fill(0).map((_, i) => i + 1) as day, i}
        {#if i === 0}
          <div class="col-start-5"></div>
        {/if}
        <div class="relative flex justify-center items-center font-bold text-gray-800 p-1">
          {#if day === 15}
            <div class="absolute inset-0 bg-[#FDF8F3] border-2 border-[#EACFB6] rounded-md z-[-1] scale-[1.2]"></div>
            <span class="text-[#A26D1D]">{day}</span>
          {:else if [4, 11, 18, 25].includes(day)}
            <span class="text-[#EF4444]">{day}</span>
          {:else if [3].includes(day)}
            <span class="text-[#10B981]">{day}</span>
          {:else if [8].includes(day)}
            <span class="text-[#10B981] relative group">{day}
              <div class="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-[#10B981] rounded-full"></div>
            </span>
          {:else}
            <span>{day}</span>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
