<script>
  import { Menu, ChevronDown, ChevronLeft, ChevronRight } from "lucide-svelte";

  let { clientName = $bindable(), projects } = $props();
  let isProjectDropdownOpen = $state(false);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const markedDays = [8, 14, 19, 30];
</script>

<div class="client-card mb-6 flex h-[26rem] flex-1 flex-col overflow-hidden">
  <div class="client-panel-header grid grid-cols-[24px_1fr_auto] items-center bg-[var(--client-surface-muted)] p-2.5 text-sm font-bold">
    <Menu size={18} strokeWidth={2} class="relative z-10" />
    <span class="text-center text-[15px] font-bold">Schedule</span>
    <div class="relative z-10 w-[106px]">
      <button
        onclick={() => (isProjectDropdownOpen = !isProjectDropdownOpen)}
        class="flex w-full items-center justify-between rounded-[6px] border border-[var(--client-border-strong)] bg-white px-3 py-1.5 text-[11px] font-medium text-black shadow-sm focus:outline-none"
      >
        <span class="truncate">All</span>
        <ChevronDown size={14} class="ml-1 shrink-0 text-black" />
      </button>

      {#if isProjectDropdownOpen}
        <div class="absolute right-0 top-[110%] z-20 flex w-[140px] flex-col gap-1 rounded-[6px] border border-[var(--client-border-strong)] bg-white p-1 text-[10px] font-medium text-gray-700 shadow-lg">
          {#each projects as proj}
            <button
              onclick={() => {
                clientName = proj;
                isProjectDropdownOpen = false;
              }}
              class="rounded px-2.5 py-1.5 text-left transition-colors hover:bg-[var(--client-surface-muted)] hover:text-[var(--client-heading)]"
            >
              {proj}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  </div>

  <!-- Calendar body -->
  <div class="flex min-h-0 flex-1 flex-col p-3">
    <div class="flex items-center justify-between px-2 pb-4 pt-2">
      <button class="text-black"><ChevronLeft size={20} /></button>
      <span class="client-title text-[15px] font-bold">January 2026</span>
      <div class="h-5 w-5"></div>
    </div>
    <div class="min-h-0 flex-1 rounded-[14px] border border-[var(--client-border)] bg-white px-4 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
      <div class="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-[13px]">
        {#each weekdays as label}
          <div class="mb-2 font-medium {label === 'Sun' ? 'text-[#ff5a36]' : 'text-black'}">
            {label}
          </div>
        {/each}

        {#each days as day, i}
          {#if i === 0}
            <div class="col-start-5"></div>
          {/if}
          <div class="relative flex items-center justify-center p-1 text-[13px] text-black">
            {#if day === 15}
              <div class="absolute inset-x-1 inset-y-0 rounded-[6px] border border-[var(--client-border-strong)] bg-[var(--client-surface-muted)]"></div>
              <span class="relative client-title font-bold">{day}</span>
            {:else}
              <span class="{[4, 11, 25].includes(day) ? 'text-[#ff5a36]' : ''}">
                {day}
              </span>
              {#if markedDays.includes(day)}
                <div class="absolute top-0.5 h-[4px] w-[4px] rounded-full bg-[#43a047]"></div>
              {/if}
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
