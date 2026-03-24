<script>
  import { Briefcase, ChevronLeft, Folder, Users, XCircle, SquarePen, FileText } from "lucide-svelte";
  import { page } from "$app/stores";
  
  let isClientRoute = $derived($page.url.pathname.startsWith('/client/'));
  let clientName = $derived(isClientRoute ? decodeURIComponent($page.params.id || $page.url.pathname.split('/').pop() || 'Client') : '');
</script>

<aside
  class="fixed inset-y-0 left-0 w-64 bg-[#FCFBF8] border-r border-[#EACFB6] flex flex-col z-20"
>
  <!-- Logo section -->
  <div class="h-20 flex items-center px-6 relative w-full bg-white border-b border-gray-100">
    <div class="flex items-center gap-2">
      <img src="/Logo.png" alt="pinion" class="w-auto h-14" />
    </div>

    <!-- Collapse button -->
    <button
      class="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 shadow-sm z-30"
    >
      <ChevronLeft size={16} strokeWidth={2} />
    </button>
  </div>

  <!-- Navigation -->
  <nav class="flex-1 px-4 py-4 space-y-4 overflow-y-auto w-full">
    {#if isClientRoute}
       <!-- Active Client Card -->
       <div class="border border-[#EACFB6] bg-white rounded-lg p-3 relative mb-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] min-h-[110px] flex flex-col items-center justify-center">
         <button class="absolute top-2 right-2 text-[#EF4444] hover:text-red-700 transition">
           <XCircle size={15} strokeWidth={2} />
         </button>
         <button class="absolute bottom-2 right-2 text-[#3B82F6] hover:text-blue-700 transition">
           <SquarePen size={14} strokeWidth={2} />
         </button>

         <div class="flex flex-col items-center justify-center gap-1.5 mt-2 text-[#A26D1D]">
            <Folder size={26} strokeWidth={1.5} fill="#FDF8F3" class="text-[#A26D1D]" /> 
            <span class="text-center font-extrabold tracking-tight text-[13px] leading-[1.1] text-[#A26D1D] px-2 w-[110px] wrap-break-word">{clientName}</span>
         </div>
       </div>

       <!-- Side Navigation -->
       <div class="space-y-4">
          <!-- Case List -->
          <a
            href="/cases"
            class="w-full flex items-center gap-3.5 px-3 py-3 {$page.url.pathname === '/cases' ? 'bg-[#FDF8F3] border-[#EACFB6] text-[#A26D1D]' : 'bg-white border-gray-200 text-gray-800'} rounded border text-sm shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:bg-gray-50 transition"
          >
             <FileText size={18} strokeWidth={1.5} class={$page.url.pathname === '/cases' ? "text-[#A26D1D]" : "text-gray-800"} />
             <span class="font-bold text-[13px] tracking-tight">Case List</span>
          </a>
         
         <!-- Manage Client -->
         <a
           href="/client/{encodeURIComponent($page.params.id)}/manage"
           class="w-full flex items-center gap-3.5 px-3 py-3 {$page.url.pathname.endsWith('/manage') ? 'bg-[#FDF8F3] border-[#EACFB6] text-[#A26D1D]' : 'bg-white border-white text-gray-800'} rounded border text-sm shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:bg-[#FCF9F3] transition"
         >
            <Users size={18} strokeWidth={1.5} class="text-[#A26D1D]" />
            <span class="font-bold text-[13px] tracking-tight">Manage Client</span>
         </a>
       </div>
    {:else}
       <a
         href="/cases"
         class="flex items-center gap-3 px-3 py-2.5 {$page.url.pathname === '/cases' ? 'bg-[#FDF8F3] text-[#A26D1D]' : 'text-gray-600 hover:bg-gray-50'} rounded-md text-sm font-medium transition-colors"
       >
         <Briefcase
           size={20}
           class={$page.url.pathname === "/cases" ? "text-[#A26D1D]" : "text-gray-400"}
           strokeWidth={1.5}
         />
         Case List
       </a>
    {/if}
  </nav>
</aside>
