<script>
  import { page } from "$app/stores";
  import { ArrowLeft } from "lucide-svelte";
  import TaskGroup from "$lib/components/project/TaskGroup.svelte";

  const projectId = $page.params.id || "ACS-GROW Project";

  const projectInfo = {
    title: "ACS-GROW Project",
    client: "John Carter",
    pm: "Alex meian",
    dueDate: "22 Apr 2026",
    status: "In Progress"
  };

  const stages = [
    {
      title: "Setup & Assign Preparers",
      completed: 1,
      total: 1,
      dueDate: "02 Mar 2026",
      assignee: "Ethan Parker",
      tasks: [
        { text: "Setup project and assign preparers", done: false }
      ]
    },
    {
      title: "Client Onboarding",
      completed: 2,
      total: 4,
      dueDate: "12 Mar 2026",
      assignee: "Ethan Parker",
      tasks: [
        { text: "Create Client File in SP", done: true },
        { text: "Review Service Agreement", done: true },
        { text: "Prepare Auth Forms", done: false },
        { text: "Send Intro Email", done: false }
      ]
    },
    {
      title: "Essential Information",
      completed: 0,
      total: 5,
      dueDate: "22 Mar 2026",
      assignee: "Sophia Turner",
      tasks: [
        { text: "FSA-211 Signed", done: false },
        { text: "CPA-1270 Signed", done: false },
        { text: "FSA Third Party Release Signed", done: false },
        { text: "Request info from FSA", done: false },
        { text: "Info Received from FSA", done: false }
      ]
    },
    {
      title: "USDA Document Review ACS",
      completed: 0,
      total: 1,
      dueDate: "02 Apr 2026",
      assignee: "Sophia Turner",
      isCollapsed: true,
      tasks: [{ text: "Document review complete", done: false }]
    },
    {
      title: "USDA Document Review FPS",
      completed: 0,
      total: 1,
      dueDate: "12 Apr 2026",
      assignee: "Lucas Martinez",
      isCollapsed: true,
      tasks: [{ text: "Document review complete", done: false }]
    },
    {
      title: "Finalize & Schedule",
      completed: 0,
      total: 2,
      dueDate: "22 Apr 2026",
      assignee: "Lucas Martinez",
      isCollapsed: true,
      tasks: [
        { text: "Finalize documents", done: false },
        { text: "Schedule meeting", done: false }
      ]
    }
  ];
</script>

<svelte:head>
  <title>{projectInfo.title} - Grow Project View</title>
</svelte:head>

<div class="flex flex-col w-full bg-[#FCFBF8] min-h-screen pt-4 pb-12 px-10 overflow-y-auto">
  
  <!-- Project Header Card -->
  <div class="bg-white border border-[#EACFB6] rounded-xl p-6 mb-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center justify-between">
    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-extrabold text-[#A66B12] leading-none">{projectInfo.title}</h1>
      
      <div class="flex items-center gap-x-16">
        <div class="flex flex-col gap-1.5 min-w-[140px]">
          <span class="text-[10px] font-extrabold text-[#C1A173] uppercase tracking-widest">Client:</span>
          <span class="text-[14px] font-bold text-gray-800 tracking-tight">{projectInfo.client}</span>
        </div>
        <div class="flex flex-col gap-1.5 min-w-[140px]">
          <span class="text-[10px] font-extrabold text-[#C1A173] uppercase tracking-widest">Project Manager:</span>
          <span class="text-[14px] font-bold text-gray-800 tracking-tight">{projectInfo.pm}</span>
        </div>
        <div class="flex flex-col gap-1.5 min-w-[120px]">
          <span class="text-[10px] font-extrabold text-[#C1A173] uppercase tracking-widest">Due Date:</span>
          <span class="text-[14px] font-bold text-gray-800 tracking-tight">{projectInfo.dueDate}</span>
        </div>
        <div class="flex flex-col gap-1.5 min-w-[100px]">
          <span class="text-[10px] font-extrabold text-[#C1A173] uppercase tracking-widest">Status:</span>
          <span class="text-[14px] font-bold text-gray-800 tracking-tight">{projectInfo.status}</span>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <a 
      href="/client/{encodeURIComponent(projectInfo.client)}"
      class="flex items-center gap-2 bg-[#A66B12] hover:bg-[#8F5A0D] text-white px-6 py-2.5 rounded-lg text-[14px] font-bold transition-all shadow-md active:scale-95"
    >
      <ArrowLeft size={18} strokeWidth={2.5} />
      Client Details
    </a>
  </div>

  <!-- Stages List Wrapper -->
  <div class="bg-white border border-[#EACFB6] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden px-4 py-2">
    {#each stages as stage}
      <TaskGroup 
        title={stage.title}
        completedCount={stage.completed}
        totalCount={stage.total}
        dueDate={stage.dueDate}
        assignee={stage.assignee}
        tasks={stage.tasks}
        isCollapsed={stage.isCollapsed}
      />
    {/each}
  </div>

</div>
