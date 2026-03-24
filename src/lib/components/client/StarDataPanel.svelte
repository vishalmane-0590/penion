<script>
  import { Menu, Mail, Phone, CheckCircle2, FileText, CheckSquare, XCircle } from "lucide-svelte";
</script>

<div class="bg-white border border-[#EACFB6] rounded-xl flex flex-col shadow-sm">
  <div class="border-b border-[#EACFB6] p-2.5 flex items-center justify-between text-[#A26D1D] font-bold text-sm relative">
    <Menu size={18} strokeWidth={2} class="relative z-10" />
    <span class="absolute left-1/2 -translate-x-1/2">Pinion STAR Data</span>
    <div class="w-4 relative z-10"></div>
  </div>
  <div class="p-4 px-5">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 bg-[#EACFB6] rounded-full flex items-center justify-center font-bold text-white shadow-sm border border-[#A26D1D]">
        RS
      </div>
      <div class="flex items-center gap-2">
        <span class="font-extrabold text-gray-900 text-[15px]">Ryan Smith</span>
        <span class="bg-[#F8E9D6] text-[#A26D1D] text-[10px] font-bold px-1.5 py-0.5 rounded shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">#384</span>
      </div>
    </div>

    <div class="flex items-center justify-between text-[12px] text-gray-800 font-semibold mb-6 border-b border-gray-100 pb-3">
      <span class="flex items-center gap-2"><Mail size={16} class="text-[#A26D1D]" /> ryan@example.net</span>
      <span class="flex items-center gap-2"><Phone size={16} class="text-black" /> 947-730-4595</span>
    </div>

    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-between">
        <span class="flex items-center gap-3 text-[13px] font-semibold text-gray-600">
          <CheckCircle2 size={16} class="text-[#3B82F6]" /> STAR Status
        </span>
        <span class="flex items-center gap-1.5 bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0] px-3 py-1 rounded-md text-[11px] font-bold">
          <CheckSquare size={12} /> Linked
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span class="flex items-center gap-3 text-[13px] font-semibold text-gray-600">
          <FileText size={16} class="text-[#3B82F6]" /> CIF Status
        </span>
        <span class="flex items-center gap-1.5 bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0] px-3 py-1 rounded-md text-[11px] font-bold">
          <CheckSquare size={12} /> Complete
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span class="flex items-center gap-3 text-[13px] font-semibold text-gray-600">
          <FileText size={16} class="text-[#3B82F6]" /> ACS-GROW Status
        </span>
        <span class="flex items-center gap-1.5 bg-[#FEE2E2] text-[#DC2626] border border-[#FECACA] px-3 py-1 rounded-md text-[11px] font-bold">
          <XCircle size={12} /> Not started
        </span>
      </div>
    </div>
  </div>
</div>
