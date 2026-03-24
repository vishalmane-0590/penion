<script>
  import { Search } from "lucide-svelte";
  import Toggle from "$lib/components/ui/Toggle.svelte";
  import ProjectTable from "$lib/components/dashboard/ProjectTable.svelte";

  let activeOnly = $state(true);
  let myProjects = $state(true);
  let searchTerm = $state("");

  // Data
  const projects = [
    {
      name: "Client Information",
      client: "Ethan Parker",
      clientInitials: null,
      stage: "Client Onboarding",
      completed: "04 / 10",
      pm: "F1",
      team: ["F2", "F3", "RA", "F4"],
      dueDate: "Dec 01, 2025",
      dateColor: "text-red-400",
    },
    {
      name: "Nathan_Weathers",
      client: "Alex meian",
      clientInitials: "AM",
      stage: "Setup & Assign Preparers",
      completed: "05 / 12",
      pm: "M1",
      team: ["M2", "M3", "M4", "MT"],
      dueDate: "Jan 05, 2026",
      dateColor: "text-red-400",
    },
    {
      name: "Fields Assessment",
      client: "Sophia Turner",
      clientInitials: null,
      stage: "Essential Information",
      completed: "07 / 14",
      pm: "M5",
      team: ["M6", "M7", "AM", "M8"],
      dueDate: "Feb 10, 2026",
      dateColor: "text-red-400",
    },
    {
      name: "Conservation Plan",
      client: "Ava Robinson",
      clientInitials: null,
      stage: "USDA Document Review ACS",
      completed: "05 / 18",
      pm: "F5",
      team: ["F6", "F7", "F8", "F9"],
      dueDate: "Mar 12, 2026",
      dateColor: "text-red-400",
    },
    {
      name: "SproutMap",
      client: "Lucas Martinez",
      clientInitials: null,
      stage: "USDA Document Review FPS",
      completed: "06 / 14",
      pm: "M9",
      team: ["F10", "M10", "AK"],
      dueDate: "Mar 14, 2026",
      dateColor: "text-yellow-500",
    },
    {
      name: "Growtopia",
      client: "Noah Carter",
      clientInitials: null,
      stage: "Finalize & Schedule",
      completed: "06 / 17",
      pm: "M11",
      team: ["M12", "M13", "EF", "M14"],
      dueDate: "Mar 16, 2026",
      dateColor: "text-yellow-500",
    },
    {
      name: "Evergreen Initiative",
      client: "Javier Rodriguez",
      clientInitials: null,
      stage: "Client Onboarding",
      completed: "05 / 20",
      pm: "F1",
      team: ["F2", "F3", "RA", "F4"],
      dueDate: "Mar 18, 2026",
      dateColor: "text-yellow-500",
    },
    {
      name: "EnviroSolutions_Inc",
      client: "Aisha Khan",
      clientInitials: "MI",
      stage: "Setup & Assign Preparers",
      completed: "06 / 19",
      pm: "M1",
      team: ["M2", "M3", "M4", "MI"],
      dueDate: "May 25, 2026",
      dateColor: "text-yellow-500",
    },
    {
      name: "Coastal Restoration",
      client: "Isabella Rossi",
      clientInitials: null,
      stage: "Essential Information",
      completed: "08 / 22",
      pm: "M5",
      team: ["M6", "M7", "AM", "M8"],
      dueDate: "Apr 02, 2026",
      dateColor: "text-green-500 bg-green-50/50 px-2 py-0.5 rounded",
    },
    {
      name: "BioSphere Initiative",
      client: "Elena Petrova",
      clientInitials: null,
      stage: "USDA Document Review ACS",
      completed: "07 / 15",
      pm: "F5",
      team: ["F6", "F7", "F8", "F9"],
      dueDate: "Apr 08, 2026",
      dateColor: "text-green-500 bg-green-50/50 px-2 py-0.5 rounded",
    },
    {
      name: "TerraGenesis",
      client: "Kenji Tanaka",
      clientInitials: null,
      stage: "USDA Document Review FPS",
      completed: "08 / 01",
      pm: "M9",
      team: ["F10", "M10", "AK"],
      dueDate: "May 15, 2026",
      dateColor: "text-green-500 bg-green-50/50 px-2 py-0.5 rounded",
    },
    {
      name: "EcoHaven Project",
      client: "Omar Hassan",
      clientInitials: null,
      stage: "Finalize & Schedule",
      completed: "07 / 28",
      pm: "M11",
      team: ["M12", "M13", "LF", "M14"],
      dueDate: "Jun 10, 2026",
      dateColor: "text-green-500 bg-green-50/50 px-2 py-0.5 rounded",
    },
  ];

  let filteredProjects = $derived(
    projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    }),
  );
</script>

<svelte:head>
  <title>Dashboard - Ongoing Projects</title>
</svelte:head>

<div
  class="max-w-[1400px] mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8 pt-6 min-h-0 flex flex-col"
>
  <!-- Header Section -->
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-[#BC6C25] text-xl font-semibold">
      List View of Ongoing Projects
    </h1>
    <div class="flex items-center gap-8">
      <Toggle label="Active only" bind:checked={activeOnly} />
      <Toggle label="My projects" bind:checked={myProjects} />
    </div>
  </div>

  <!-- Search Bar -->
  <div class="relative mb-6">
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    >
      <Search class="h-5 w-5 text-gray-400" />
    </div>
    <input
      type="text"
      bind:value={searchTerm}
      class="block w-full pl-10 pr-3 py-2.5 border border-[#EBDBC9] rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#A3703E] focus:border-[#A3703E] sm:text-sm transition-colors"
      placeholder="Find by Project..."
    />
  </div>

  <!-- Table Section -->
  <ProjectTable projects={filteredProjects} />
</div>
