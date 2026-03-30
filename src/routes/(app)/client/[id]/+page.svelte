<script>
  import { page } from "$app/stores";

  // Components
  import ClientHeader from "$lib/components/client/ClientHeader.svelte";
  import ClientsPanel from "$lib/components/client/ClientsPanel.svelte";
  import DocsPanel from "$lib/components/client/DocsPanel.svelte";
  import GovtFormsPanel from "$lib/components/client/GovtFormsPanel.svelte";
  import NotesPanel from "$lib/components/client/NotesPanel.svelte";
  import StarDataPanel from "$lib/components/client/StarDataPanel.svelte";
  import SchedulePanel from "$lib/components/client/SchedulePanel.svelte";
  import ActivityTimeline from "$lib/components/client/ActivityTimeline.svelte";

  let clientName = $state(decodeURIComponent($page.params.id || "Client"));

  const projects = [
    "Client Intake (CIF)",
    "CIF Review",
    "ACS-Grow Project",
    "ACS-Grow Intake",
    "ACS-Grow Review",
    "STAR Data Setup",
    "FSA Registration",
  ];
</script>

<svelte:head>
  <title>{clientName} - Client Details</title>
</svelte:head>

<div
  class=" flex h-[1000px] w-full overflow-hidden -mx-4 -my-2 font-sans"
>
  <!-- Main Content Area -->
  <main
    class="client-shell client-scrollbar relative flex-1 overflow-y-auto px-6 py-6"
  >
    <!-- Top Banner Section -->
    <ClientHeader {clientName} />

    <!-- Details Grid -->
    <div class="grid grid-cols-2 gap-6 w-full">
      <!-- Left Column -->
      <div class="flex flex-col gap-6">
        <ClientsPanel />
        <DocsPanel />
        <GovtFormsPanel />
      </div>

      <!-- Right Column -->
      <div class="flex flex-col gap-6">
        <NotesPanel />
        <StarDataPanel />
        <SchedulePanel bind:clientName {projects} />
      </div>
    </div>

    <!-- Timeline Section -->
    <!-- <ActivityTimeline /> -->
  </main>
</div>

<div class="h-16"></div>
