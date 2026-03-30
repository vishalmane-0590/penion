<script>
  import { 
    Search, Star, Mail, Phone, Users, ExternalLink, Link2, EyeOff, Trash2, CheckCircle2, Clock, FileText, ChevronLeft, X, Edit
  } from "lucide-svelte";
  import { page } from "$app/stores";

  let searchQuery = $state("");
  let clientName = $derived(decodeURIComponent($page.params.id || "Client"));

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
        return "status-success";
      case "Not started":
        return "status-danger";
      case "Not Linked":
        return "status-warning";
      default:
        return "status-neutral";
    }
}

  function getStatusIcon(status) {
    if (status === "Complete" || status === "Linked") return CheckCircle2;
    if (status === "Not started") return X;
    return Clock;
  }
  const actionButtons = [
    { label: "Edit", icon: Edit, color: "status-info" },
    { label: "Contacts", icon: Users, color: "status-warning" },
    { label: "Open CIF", icon: ExternalLink, color: "status-warning" },
    { label: "Open Intake", icon: ExternalLink, color: "status-warning" },
    { label: "Link Star", icon: Link2, color: "status-info" },
    { label: "Hide", icon: EyeOff, color: "status-neutral" },
    { label: "Remove", icon: Trash2, color: "status-danger" }
  ];
</script>

<svelte:head>
  <title>Manage Clients - {clientName}</title>
</svelte:head>

<div class="client-shell flex h-full flex-col">
  <!-- Header -->
  <div class="client-card client-panel-header flex items-center justify-between rounded-t-xl border-b px-6 py-5 shadow-sm">
    <div class="flex items-center gap-4">
      <a 
        href="/client/{$page.params.id}" 
        class="rounded-lg p-2 text-slate-400 transition-all hover:bg-[var(--client-surface-muted)] hover:text-[var(--client-heading)]"
      >
        <ChevronLeft size={24} />
      </a>
      <div class="flex flex-col gap-1">
        <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">Clients associated with Case File</span>
        <h2 class="client-title text-lg font-extrabold tracking-tight">'{clientName}':</h2>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <button class="rounded-lg bg-[var(--color-primary)] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[var(--color-sidebar)]">
        Add Client
      </button>
    </div>
  </div>

  <!-- Search Bar -->
  <div class="border-b border-[var(--client-border)] bg-white px-6 py-4 shadow-sm">
    <div class="relative w-full">
      <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
        <Search class="h-4.5 w-4.5 text-gray-400" />
      </div>
      <input 
        type="text" 
        bind:value={searchQuery}
        placeholder="Find by a Client..."
        class="w-full rounded-xl border border-[var(--client-border)] bg-white py-3 pl-[2.8rem] pr-4 text-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] placeholder:text-gray-400 focus:border-[var(--color-primary)] focus:outline-none"
      />
    </div>
  </div>

  <!-- Content Area -->
  <div class="client-shell client-scrollbar flex flex-1 flex-col gap-6 overflow-y-auto p-6">
    {#each clients as client}
      <div 
        class="client-card flex cursor-pointer flex-col gap-5 border-2 p-6 transition-all hover:bg-[var(--client-surface-muted)] hover:shadow-md {client.isPrimary ? 'border-[var(--client-border-strong)]' : 'border-slate-100'} group"
      >
        <!-- Card Header (Name & ID) -->
        <div class="flex items-center justify-between border-b pb-2 {client.isPrimary ? 'border-[var(--client-border)]' : 'border-gray-50'}">
          <div class="flex items-center gap-3">
            <Star 
              size={20} 
              class={client.isPrimary ? 'text-[var(--client-heading)]' : 'text-gray-300'} 
              fill={client.isPrimary ? 'var(--client-heading)' : 'none'} 
            />
            <span class="client-title text-lg font-extrabold">{client.name}</span>
            <div class="flex items-center gap-2">
              <span class="client-badge rounded px-2 py-0.5 text-xs font-bold shadow-sm">
                {client.id}
              </span>
              <span class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                ({client.role})
              </span>
            </div>
          </div>
        </div>

        <!-- Contact Info (Email & Phone on one line) -->
        <div class="flex items-center justify-between text-[13px] font-bold text-gray-700 mt-2 pr-2">
          <div class="flex items-center gap-2">
            <Mail size={18} class="client-link" />
            {client.email}
          </div>
          <div class="flex items-center gap-2">
            <Phone size={18} class="text-black" />
            {client.phone}
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
                <div class="client-link">
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
              <div class="status-pill flex items-center gap-2 rounded-md px-3 py-1 text-[11px] font-extrabold tracking-tight {getStatusColor(status.value)}">
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
          {#each actionButtons as action}
            {@const Icon = action.icon}
            <button class="status-pill flex items-center justify-center gap-2 rounded-lg border py-3 text-[11px] font-bold transition-all hover:brightness-95 {action.color}">
              <Icon size={14} strokeWidth={2.5} />
              {action.label}
            </button>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
