<script>
  import { ChevronDown, ChevronUp } from "lucide-svelte";
  import AvatarCircle from "$lib/components/ui/AvatarCircle.svelte";

  let { 
    title, 
    completedCount = 0, 
    totalCount = 0, 
    dueDate, 
    assignee, 
    tasks = [], 
    isCollapsed: initialCollapsed = false 
  } = $props();

  let isCollapsed = $state(initialCollapsed);

  function toggleCollapse() {
    isCollapsed = !isCollapsed;
  }
</script>

<div class="bg-white border-b border-[#EACFB6] last:border-0 flex flex-col w-full">
  <!-- Header -->
  <div 
    class="flex items-center justify-between py-4 px-2 group cursor-pointer select-none" 
    onclick={toggleCollapse}
    onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleCollapse()}
    role="button"
    tabindex="0"
    aria-expanded={!isCollapsed}
  >
    <div class="flex flex-col gap-0.5">
      <span class="text-[12px] font-bold text-[#A66B12] opacity-80 uppercase tracking-tight">({completedCount}/{totalCount})</span>
      <h3 class="text-[15px] font-bold text-[#A66B12] leading-tight tracking-tight">{title}</h3>
    </div>

    <div class="flex items-center gap-10">
      <div class="flex flex-col items-end gap-1">
        <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Due Date: {dueDate}</span>
        <div class="flex items-center gap-2">
           <AvatarCircle seed={assignee} size="sm" />
           <span class="text-[13px] font-bold text-gray-700">{assignee}</span>
           <button class="text-gray-400 group-hover:text-gray-600 transition-colors ml-1">
             {#if isCollapsed}
               <ChevronDown size={18} strokeWidth={2.5} />
             {:else}
               <ChevronUp size={18} strokeWidth={2.5} />
             {/if}
           </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Task List -->
  {#if !isCollapsed && tasks.length > 0}
    <div class="flex flex-col bg-white border-t border-[#EACFB6]/50 mb-3 mx-1 rounded-lg">
      {#each tasks as task}
        <label class="flex items-center gap-4 p-3 border-b border-[#EACFB6]/40 last:border-0 cursor-pointer transition-colors hover:bg-[#FDF8F3] group/item first:rounded-t-lg last:rounded-b-lg">
          <div class="relative flex items-center">
            <input 
              type="checkbox" 
              checked={task.done} 
              class="w-4.5 h-4.5 rounded border-[#EACFB6] text-[#A66B12] focus:ring-[#A66B12] cursor-pointer"
            />
          </div>
          <span class="text-[14px] {task.done ? 'text-gray-400' : 'text-gray-700'} font-semibold tracking-tight">{task.text}</span>
        </label>
      {/each}
    </div>
  {/if}
</div>
