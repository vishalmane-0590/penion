<script>
  import {
    Award,
    UserCircle,
    EyeOff,
    SquarePen,
    Link2,
    Trash2,
    Mail,
    Phone,
    Building2,
  } from "lucide-svelte";

  let { clientName } = $props();
</script>

<div class="client-card-muted relative mb-6 p-4">
  <div
    class="mb-4 flex items-center justify-between border-b border-[var(--client-border)] pb-4"
  >
    <!-- Left side tags -->
    <div class="flex items-center gap-2">
      <span
        class="client-tag flex items-center gap-1 rounded px-2.5 py-1 text-xs font-semibold shadow-sm"
      >
        <Award size={14} fill="white" /> Primary Client
      </span>
      <button
        class="client-tag-alt flex items-center gap-1 rounded px-2.5 py-1 text-xs font-semibold shadow-sm transition-colors hover:bg-[var(--color-primary)]"
      >
        <Award size={14} fill="none" strokeWidth={2.5} /> Change
      </button>
    </div>

    <!-- Center Profile Title -->
    <div
      class="client-title absolute left-1/2 flex -translate-x-1/2 items-center gap-2 text-xl font-extrabold tracking-tight"
    >
      <UserCircle size={28} strokeWidth={2} />
      {clientName}
      <span
        class="client-badge ml-1 rounded px-2 py-0.5 text-xs font-bold shadow-sm"
        >#213</span
      >
    </div>

    <!-- Right Action Icons -->
    <div class="flex items-center gap-3.5">
      <button class="text-[#9CA3AF] transition-colors hover:text-gray-600"
        ><EyeOff size={18} strokeWidth={2} /></button
      >
      <button
        class="client-title transition-colors hover:text-[var(--color-primary)]"
        ><Award size={18} strokeWidth={2} fill="currentColor" /></button
      >
      <button
        class="client-link transition-colors hover:text-[var(--color-sidebar)]"
        ><SquarePen size={18} strokeWidth={2} /></button
      >
      <button class="text-[#6B7280] hover:text-gray-900 transition-colors"
        ><Link2 size={18} strokeWidth={2} /></button
      >
      <button
        class="status-danger rounded p-1 transition-colors hover:brightness-95"
        ><Trash2 size={16} strokeWidth={2.5} /></button
      >
    </div>
  </div>

  <!-- Contact Details Row -->
  <div
    class="flex items-center justify-center gap-10 text-sm font-semibold text-gray-800"
  >
    <span class="flex items-center gap-2"
      ><UserCircle size={18} class="client-link" strokeWidth={2} /> Contact: {clientName}</span
    >
    <span class="flex items-center gap-2"
      ><Mail size={18} class="client-link" strokeWidth={2} /> nathan@weathersfarms.net</span
    >
    <span class="flex items-center gap-2"
      ><Phone size={18} class="client-link" strokeWidth={2} /> 970-630-3595</span
    >
    <span class="flex items-center gap-2"
      ><Building2 size={18} class="client-link" strokeWidth={2} /> Entity: Corporation</span
    >
  </div>
</div>
