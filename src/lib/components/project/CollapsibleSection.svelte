<script>
  import { ChevronUp, ChevronDown } from "lucide-svelte";
  import { slide } from 'svelte/transition';

  let { 
    title, 
    tier, 
    lastUpdated = "", 
    children, 
    isOpen = true, 
    showSave = false, 
    showRefresh = false 
  } = $props();

  function toggle() {
    isOpen = !isOpen;
  }

  // Compute whether this section has a footer button row
  let hasFooter = $derived(showSave || showRefresh);
</script>

<div class="bg-white border-2 border-[#EACFB6] rounded-3xl mb-4 shadow-[0_4px_12px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300">
  <!-- Header toggle button — always rounded-t-3xl; when collapsed also rounded-b-3xl -->
  <button 
    class="w-full px-8 py-5 flex items-center justify-between select-none hover:bg-[#FDF8F3]/40 transition-colors"
    class:border-b={isOpen}
    class:border-[#EACFB6]={isOpen}
    onclick={toggle}
    type="button"
    aria-expanded={isOpen}
  >
    <h2 class="text-[#A26D1D] text-[17px] font-extrabold tracking-tight">{title}</h2>
    
    <div class="flex items-center gap-4">
      {#if lastUpdated}
        <div class="flex items-center gap-2 text-[13px] font-medium text-gray-500 mr-2">
          <span class="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
          <span>Last Updated: {lastUpdated}</span>
        </div>
      {/if}
      {#if tier}
        <span class="text-[11px] font-bold text-[#A26D1D]/70 tracking-tight">
          {tier}
        </span>
      {/if}
      <div class="text-[#A26D1D] ml-1">
        {#if isOpen}
          <ChevronUp size={22} strokeWidth={2.5} />
        {:else}
          <ChevronDown size={22} strokeWidth={2.5} />
        {/if}
      </div>
    </div>
  </button>

  {#if isOpen}
    <div transition:slide={{ duration: 250 }}>
      <!-- Content area -->
      <div class="px-10 pt-6 {hasFooter ? 'pb-6' : 'pb-8'} flex flex-col gap-6">
        {@render children()}
      </div>

      <!-- Footer with action buttons -->
      {#if hasFooter}
        <div class="px-10 py-5 border-t border-[#EACFB6]/60 flex items-center gap-3 bg-[#FDFAF6]">
          {#if showSave}
            <button 
              type="button"
              class="bg-[#A26D1D] text-white px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-[#8B5D19] transition-all shadow-sm active:scale-95"
            >
              Save
            </button>
          {/if}
          {#if showRefresh}
            <button 
              type="button"
              class="bg-[#A26D1D] flex items-center gap-2 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#8B5D19] transition-all shadow-sm active:scale-95"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                <path d="M21 3v5h-5"/>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                <path d="M3 21v-5h5"/>
              </svg>
              Refresh from CRM
            </button>
          {/if}
        </div>
      {/if}
    </div>
  {/if}
</div>
