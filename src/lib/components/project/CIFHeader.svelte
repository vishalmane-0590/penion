<script>
  import { Share2, Command } from "lucide-svelte";

  let { client = "John Carter", pm = "Alex meian", status = "Live", onShare = () => {} } = $props();
</script>

<div
  class="bg-white border border-[#EACFB6] rounded-4xl p-6 mb-4 shadow-sm flex items-center justify-between"
>
  <div class="flex flex-col gap-2">
    <h1 class="text-[#A26D1D] text-3xl font-bold tracking-tight">
      Client Intake Form (CIF)
    </h1>
    <div class="flex items-center gap-6 text-[13px] font-medium text-gray-700">
      <div class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-black rounded-full"></span>
        <span>Client: <span class="font-semibold">{client}</span></span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-black rounded-full"></span>
        <span>Project Manager: <span class="font-semibold">{pm}</span></span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-black rounded-full"></span>
        <span>Status: <span class="font-semibold">{status}</span></span>
      </div>
    </div>
  </div>

  <div class="flex items-center gap-3">
    <button
      type="button"
      onclick={onShare}
      class="flex items-center gap-2 bg-[#A26D1D] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#8B5D19] transition-colors shadow-sm"
    >
      <Share2 size={18} />
      Share
    </button>
    <button
      type="button"
      class="flex items-center gap-2 bg-[#A26D1D] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#8B5D19] transition-colors shadow-sm"
    >
      <Command size={18} />
      Reconcile
    </button>
  </div>
</div>
