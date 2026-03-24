<script>
  import { 
    X, 
    Search, 
    Star, 
    Mail, 
    Phone, 
    Edit, 
    Users, 
    ExternalLink, 
    Link2, 
    EyeOff, 
    Trash2,
    CheckCircle2,
    Clock,
    FileText
  } from "lucide-svelte";
  import { closeManageClientModal } from "$lib/state.svelte";
  import { fade, scale } from "svelte/transition";

  let searchQuery = $state("");

  const clients = [
    {
      id: "#332",
      name: "Alex meian",
      role: "Primary Client",
      email: "nathan@weathersfarms.net",
      phone: "970-630-3595",
      isPrimary: true,
      starStatus: "Not Linked",
      cifStatus: "Complete",
      acsGrowStatus: "Complete"
    },
    {
      id: "#364",
      name: "Ryan Smith",
      role: "Additional Client",
      email: "ryan@example.net",
      phone: "547-730-4595",
      isPrimary: false,
      starStatus: "Linked",
      cifStatus: "Complete",
      acsGrowStatus: "Not started"
    },
    {
      id: "#355",
      name: "Nicholas Brown",
      role: "Additional Client",
      email: "nicholas@example.net",
      phone: "846-215-3452",
      isPrimary: false,
      starStatus: "Linked",
      cifStatus: "Not started",
      acsGrowStatus: "Complete"
    }
  ];

  function getStatusColor(status) {
    switch (status) {
      case "Complete":
      case "Linked":
        return "text-[#22C55E] bg-[#DCFCE7] border-[#BBF7D0]";
      case "Not started":
        return "text-[#EF4444] bg-[#FEE2E2] border-[#FECACA]";
      case "Not Linked":
        return "text-[#A26D1D] bg-[#FDF8F3] border-[#EACFB6]";
      default:
        return "text-gray-500 bg-gray-100 border-gray-200";
    }
  }

  function getStatusIcon(status) {
    if (status === "Complete" || status === "Linked") return CheckCircle2;
    if (status === "Not started") return X;
    return Clock;
  }
</script>

<!-- Backdrop -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
  class="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-100 flex items-center justify-center p-4 transition-all"
  onclick={closeManageClientModal}
  transition:fade={{ duration: 200 }}
>
  <!-- Modal Container -->
  <div 
    class="bg-[#FCFBF8] w-full max-w-5xl max-h-[90vh] rounded-xl shadow-2xl overflow-hidden flex flex-col border border-[#EACFB6]"
    onclick={(e) => e.stopPropagation()}
    transition:scale={{ duration: 300, start: 0.95 }}
  >
    <!-- Header -->
    <div class="px-6 py-5 border-b border-[#EACFB6] bg-white flex items-center justify-between">
      <div class="flex flex-col gap-1">
        <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">Clients associated with Case File</span>
        <h2 class="text-[#A26D1D] text-lg font-extrabold tracking-tight">'Nathan_Weathers_Client_Intake_Questionnaire':</h2>
      </div>
      <div class="flex items-center gap-4">
        <button class="bg-[#A26D1D] text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-sm hover:bg-[#8B5D19] transition-colors">
          Add Client
        </button>
        <button 
          onclick={closeManageClientModal}
          class="text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <X size={24} />
        </button>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="px-6 py-4 bg-white border-b border-[#EACFB6]/50">
      <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search class="h-4.5 w-4.5 text-gray-400" />
        </div>
        <input 
          type="text" 
          bind:value={searchQuery}
          placeholder="Find by a Client..."
          class="w-full pl-[2.8rem] pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#A26D1D] shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
        />
      </div>
    </div>

    <!-- Content Area -->
    <div class="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar bg-[#FCFBF8]">
      {#each clients as client}
        <div 
          class="bg-white border-2 {client.isPrimary ? 'border-[#EACFB6]' : 'border-gray-100'} rounded-xl p-6 shadow-sm flex flex-col gap-5 transition-all hover:shadow-md"
        >
          <!-- Card Header -->
          <div class="flex items-center justify-between border-b {client.isPrimary ? 'border-[#EACFB6]/40' : 'border-gray-50'} pb-4">
            <div class="flex items-center gap-3">
              <Star 
                size={20} 
                class={client.isPrimary ? 'text-[#A26D1D]' : 'text-gray-300'} 
                fill={client.isPrimary ? '#A26D1D' : 'none'} 
              />
              <span class="text-lg font-extrabold text-[#A26D1D]">{client.name}</span>
              <div class="flex items-center gap-2">
                <span class="bg-[#F8E9D6] text-[#A26D1D] text-xs font-bold px-2 py-0.5 rounded shadow-sm">
                  {client.id}
                </span>
                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                  ({client.role})
                </span>
              </div>
            </div>
            <div class="flex items-center gap-10 text-[13px] font-bold text-gray-700">
              <div class="flex items-center gap-2">
                <Mail size={18} class="text-[#A26D1D]" />
                {client.email}
              </div>
              <div class="flex items-center gap-2">
                <Phone size={18} class="text-black" />
                {client.phone}
              </div>
            </div>
          </div>

          <!-- Status Grid -->
          <div class="flex flex-col gap-3">
            {#each [
              { label: "STAR Status:", value: client.starStatus, icon: "snowflake" },
              { label: "CIF Status:", value: client.cifStatus, icon: "file" },
              { label: "ACS-GROW Status:", value: client.acsGrowStatus, icon: "file" }
            ] as status}
              {@const Icon = getStatusIcon(status.value)}
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="text-[#3B82F6]">
                    {#if status.icon === "snowflake"}
                      <div class="flex items-center justify-center p-0.5 rounded-sm">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10 2 2 2 2-2"/><path d="m22 8-2 2 2 2"/><path d="m14 22-2-2-2 2"/><path d="m2 16 2-2-2-2"/><path d="M20 10c-1.1 0-2-.9-2-2s.9-2 2-2"/><path d="M4 14c1.1 0 2 .9 2 2s-.9 2-2 2"/><path d="M10 20c0 1.1.9 2 2 2s2-.9 2-2"/><path d="M14 4c0-1.1-.9-2-2-2s-2 .9-2 2"/><path d="m7.5 10.5 2 2"/><path d="m14.5 13.5 2 2"/><path d="m16.5 10.5-2 2"/><path d="m9.5 13.5-2 2"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                      </div>
                    {:else}
                      <FileText size={18} />
                    {/if}
                  </div>
                  <span class="text-sm font-bold text-gray-700">{status.label}</span>
                </div>
                <div class="flex items-center gap-2 px-3 py-1 rounded-md border text-[11px] font-extrabold tracking-tight {getStatusColor(status.value)}">
                  <span class="opacity-80">
                    <Icon size={12} />
                  </span>
                  {status.value}
                </div>
              </div>
            {/each}
          </div>

          <!-- Action Buttons -->
          <div class="grid grid-cols-7 gap-3 mt-2">
            {#each [
              { label: "Edit", icon: Edit, color: "text-[#3B82F6] bg-[#EFF6FF] border-[#DBEAFE]" },
              { label: "Contacts", icon: Users, color: "text-[#A26D1D] bg-[#FDF8F3] border-[#EACFB6]" },
              { label: "Open CIF", icon: ExternalLink, color: "text-[#A26D1D] bg-[#FDF8F3] border-[#EACFB6]" },
              { label: "Open Intake", icon: ExternalLink, color: "text-[#A26D1D] bg-[#FDF8F3] border-[#EACFB6]" },
              { label: "Link Star", icon: Link2, color: "text-[#3B82F6] bg-[#EFF6FF] border-[#DBEAFE]" },
              { label: "Hide", icon: EyeOff, color: "text-[#6B7280] bg-[#F9FAFB] border-[#F3F4F6]" },
              { label: "Remove", icon: Trash2, color: "text-[#EF4444] bg-[#FEF2F2] border-[#FEE2E2]" }
            ] as action}
              {@const Icon = action.icon}
              <button class="flex items-center justify-center gap-2 py-2.5 rounded-lg border font-bold text-[11px] transition-all hover:brightness-95 {action.color}">
                <Icon size={14} strokeWidth={2.5} />
                {action.label}
              </button>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #EACFB6;
    border-radius: 10px;
  }
</style>
