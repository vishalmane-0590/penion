<script>
  let { label, checked = $bindable(false) } = $props();
</script>

<div class="flex items-center gap-3">
  <span class="text-sm font-medium text-gray-700">{label}</span>
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    onclick={() => checked = !checked}
    class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none {checked ? 'bg-[#EBDBC9]' : 'bg-gray-200'}"
  >
    <span class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#A3703E] shadow-sm ring-0 transition duration-200 ease-in-out {checked ? 'translate-x-5' : 'translate-x-0'}"></span>
  </button>
</div>
