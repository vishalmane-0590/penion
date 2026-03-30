<script>
  import Navbar from "$lib/components/layout/Header.svelte";
  import Sidebar from "$lib/components/layout/Sidebar.svelte";

  let { children } = $props();
</script>

<div class="min-h-screen bg-[#FDFBFA] font-sans pl-64 pt-20 flex flex-col w-full relative">
  <Sidebar />
  <Navbar />
  <main class="flex-1 px-8 py-6 max-w-full overflow-x-hidden focus:outline-none w-full">
    {@render children()}
  </main>
</div>
