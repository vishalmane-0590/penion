<script>
  import {
    Menu,
    Mail,
    Phone,
    Snowflake,
    FileText,
    CircleCheck,
    CircleX,
    Star,
  } from "lucide-svelte";
</script>

<div class="client-card flex h-[26rem] flex-col overflow-hidden">
  <div class="client-panel-header grid grid-cols-[24px_1fr_24px] items-center bg-[var(--client-surface-muted)] p-2.5 text-sm font-bold">
    <Menu size={18} strokeWidth={2} class="relative z-10" />
    <span class="text-center text-[15px] font-bold">Pinion STAR Data</span>
    <div class="w-4 relative z-10"></div>
  </div>
  <div class="client-scrollbar min-h-0 flex-1 overflow-y-auto p-4">
    <div class="rounded-[12px] border border-[var(--client-border)] bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
      <div class="mb-3 flex items-center gap-3">
        <Star size={18} strokeWidth={1.8} class="text-[var(--color-primary)]" />
        <span class="client-title text-[15px] font-bold">Ryan Smith</span>
        <span class="rounded-[4px] border border-[var(--client-border)] bg-[var(--client-surface-muted)] px-2 py-0.5 text-[10px] font-bold text-[var(--color-primary)]">
          #364
        </span>
      </div>

      <div class="mb-3 border-b border-[var(--client-border)]"></div>

      <div class="mb-5 flex items-center justify-between text-[12px] text-slate-800">
        <span class="flex items-center gap-2">
          <Mail size={16} class="text-black" />
          ryan@example.net
        </span>
        <span class="flex items-center gap-2">
          <Phone size={16} class="text-black" />
          547-730-4595
        </span>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <span class="flex items-center gap-3 text-[13px] text-slate-800">
            <Snowflake size={16} class="text-[#2563eb]" />
            STAR Status:
          </span>
          <span class="status-pill status-success px-3 py-1 text-[11px] font-medium">
            <CircleCheck size={12} />
            Linked
          </span>
        </div>
        <div class="flex items-center justify-between">
          <span class="flex items-center gap-3 text-[13px] text-slate-800">
            <FileText size={16} class="text-[#2563eb]" />
            CIF Status:
          </span>
          <span class="status-pill status-success px-3 py-1 text-[11px] font-medium">
            <CircleCheck size={12} />
            Complete
          </span>
        </div>
        <div class="flex items-center justify-between">
          <span class="flex items-center gap-3 text-[13px] text-slate-800">
            <FileText size={16} class="text-[#2563eb]" />
            ACS-GROW Status:
          </span>
          <span class="status-pill status-danger px-3 py-1 text-[11px] font-medium">
            <CircleX size={12} />
            Not started
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
