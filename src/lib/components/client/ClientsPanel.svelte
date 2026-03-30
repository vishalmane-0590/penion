<script>
  import { Menu, Search } from "lucide-svelte";

  const projects = [
    { title: "Client Intake (CIF)", status: "Active", color: "status-success" },
    { title: "CIF Review", status: "Active", color: "status-success" },
    { title: "Client Intake (CIF)", status: "Draft", color: "status-warning" },
    { title: "ACS-Grow Project", status: "Draft", color: "status-warning" },
    { title: "ACS-Grow Intake", status: "Active", color: "status-success" },
    { title: "ACS-Grow Review", status: "Active", color: "status-success" },
    { title: "STAR Data Setup", status: "Active", color: "status-success" },
    { title: "STAR Linked Client", status: "Draft", color: "status-warning" },
    { title: "FSA Registration", status: "Active", color: "status-success" },
    { title: "Filing Intake", status: "Active", color: "status-success" },
    { title: "Review Draft", status: "Draft", color: "status-warning" },
    { title: "ACS Plan", status: "Active", color: "status-success" },
  ];
</script>

<div class="client-card flex h-[26rem] flex-col overflow-hidden">
  <div
    class="client-panel-header grid grid-cols-[24px_1fr_24px] items-center bg-[var(--client-surface-muted)] p-2.5 text-sm font-bold"
  >
    <Menu size={18} strokeWidth={2} />
    <span class="text-center text-[15px] font-bold">Projects</span>
    <div class="w-4"></div>
  </div>
  <div class="flex min-h-0 flex-1 flex-col p-4">
    <div class="relative w-full mb-4">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"
      >
        <Search class="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search projects here..."
        class="w-full rounded-[12px] border border-[var(--client-border-strong)] bg-white py-2.5 pl-12 pr-3 text-sm shadow-sm placeholder:text-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
      />
    </div>
    <div class="client-scrollbar grid min-h-0 flex-1 grid-cols-3 gap-3 overflow-y-scroll pr-1">
      {#each projects as proj}
        <div
          class="rounded-[12px] border border-gray-200 border-l-[3px] border-l-[var(--color-primary)] bg-white p-3 shadow-[0_10px_24px_rgba(0,0,0,0.04)] transition-colors hover:bg-gray-50"
        >
          <p
            class="client-title mb-3 text-[11px] font-semibold leading-tight tracking-tight sm:text-[13px]"
          >
            {proj.title}
          </p>
          <span
            class="status-pill inline-flex rounded-md px-2.5 py-1 text-[10px] font-medium {proj.color}"
          >
            {proj.status}
          </span>
        </div>
      {/each}
    </div>
  </div>
</div>
