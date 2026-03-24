<script>
  import { Award, UserCircle, EyeOff, SquarePen, Link2, Trash2, Mail, Phone, Building2 } from "lucide-svelte";
  
  let { clientName } = $props();
</script>

<div class="bg-[#FDF8F3] border border-[#EACFB6] rounded-xl mb-6 p-4 shadow-sm relative">
  <div class="flex items-center justify-between border-b border-[#EACFB6]/70 pb-4 mb-4">
    <!-- Left side tags -->
    <div class="flex items-center gap-2">
      <span class="bg-[#A26D1D] text-white text-xs font-semibold px-2.5 py-1 rounded shadow-sm flex items-center gap-1">
        <Award size={14} fill="white" /> Primary Client
      </span>
      <button class="bg-[#C07026] text-white text-xs font-semibold px-2.5 py-1 rounded shadow-sm flex items-center gap-1 hover:bg-[#A26D1D] transition-colors">
        <Award size={14} fill="none" strokeWidth={2.5} /> Change
      </button>
    </div>

    <!-- Center Profile Title -->
    <div class="flex items-center gap-2 text-xl tracking-tight font-extrabold text-[#A26D1D] absolute left-1/2 -translate-x-1/2">
      <UserCircle size={28} strokeWidth={2} /> {clientName}
      <span class="bg-[#F8E9D6] text-[#A26D1D] text-xs font-bold px-2 py-0.5 rounded shadow-sm ml-1">#213</span>
    </div>

    <!-- Right Action Icons -->
    <div class="flex items-center gap-3.5">
      <button class="text-[#9CA3AF] hover:text-gray-600 transition-colors"><EyeOff size={18} strokeWidth={2} /></button>
      <button class="text-[#A26D1D] hover:text-[#C07026] transition-colors"><Award size={18} strokeWidth={2} fill="#A26D1D" /></button>
      <button class="text-[#3B82F6] hover:text-blue-600 transition-colors"><SquarePen size={18} strokeWidth={2} /></button>
      <button class="text-[#6B7280] hover:text-gray-900 transition-colors"><Link2 size={18} strokeWidth={2} /></button>
      <button class="bg-[#FEE2E2] text-[#EF4444] rounded p-1 hover:bg-red-200 transition-colors"><Trash2 size={16} strokeWidth={2.5} /></button>
    </div>
  </div>

  <!-- Contact Details Row -->
  <div class="flex items-center justify-center gap-10 text-sm font-semibold text-gray-800">
    <span class="flex items-center gap-2"><UserCircle size={18} class="text-[#A26D1D]" strokeWidth={2} /> Contact: {clientName}</span>
    <span class="flex items-center gap-2"><Mail size={18} class="text-[#A26D1D]" strokeWidth={2} /> nathan@weathersfarms.net</span>
    <span class="flex items-center gap-2"><Phone size={18} class="text-[#A26D1D]" strokeWidth={2} /> 970-630-3595</span>
    <span class="flex items-center gap-2"><Building2 size={18} class="text-[#A26D1D]" strokeWidth={2} /> Entity: Corporation</span>
  </div>
</div>
