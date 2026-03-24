<script>
  import { ChevronDown } from "lucide-svelte";
  import AvatarCircle from "$lib/components/ui/AvatarCircle.svelte";

  let { projects } = $props();
</script>

<div
  class="overflow-x-auto rounded-lg bg-[#FCFBF8] border border-[#EACFB6] border-dashed"
>
  <table class="min-w-full bg-white relative">
    <thead class="bg-[#FCFBF8]">
      <tr>
        <th
          scope="col"
          class="px-4 py-4 text-left text-sm font-bold text-gray-900 w-[18%] border-b border-r border-[#EACFB6] border-dashed"
          >Project</th
        >
        <th
          scope="col"
          class="px-4 py-4 text-left text-sm font-bold text-gray-900 w-[15%] border-b border-r border-[#EACFB6] border-dashed"
          >Client</th
        >
        <th
          scope="col"
          class="px-3 py-4 text-left text-sm font-bold text-gray-900 w-[10%] border-b border-r border-[#EACFB6] border-dashed leading-tight"
          >Workflow<br />Type</th
        >
        <th
          scope="col"
          class="px-3 py-4 text-left text-sm font-bold text-gray-900 w-[15%] border-b border-r border-[#EACFB6] border-dashed leading-tight"
          >Ongoing<br />Stage</th
        >
        <th
          scope="col"
          class="px-3 py-4 text-left text-sm font-bold text-gray-900 whitespace-nowrap w-[10%] border-b border-r border-[#EACFB6] border-dashed leading-tight"
          >Completed<br />To do's</th
        >
        <th
          scope="col"
          class="px-3 py-4 text-left text-sm font-bold text-gray-900 w-[8%] border-b border-r border-[#EACFB6] border-dashed leading-tight"
          >Project<br />Manager</th
        >
        <th
          scope="col"
          class="px-4 py-4 text-left text-sm font-bold text-gray-900 w-[12%] border-b border-r border-[#EACFB6] border-dashed"
          >The Team</th
        >
        <th
          scope="col"
          class="px-4 py-4 text-left text-sm font-bold text-gray-900 w-[12%] border-b border-r border-[#EACFB6] border-dashed"
          >Due Date</th
        >
        <th
          scope="col"
          class="px-4 py-4 text-left text-sm font-bold text-gray-900 w-[10%] border-b border-[#EACFB6] border-dashed"
        >
          <div class="flex items-center gap-1">
            Status <ChevronDown size={14} class="text-[#C07026]" />
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-[#EACFB6]/60">
      {#each projects as project}
        <tr
          class="divide-x divide-[#EACFB6] divide-dashed hover:bg-gray-50/50 transition-colors cursor-pointer"
          onclick={() => window.location.href='/client/' + encodeURIComponent(project?.name)}
        >
          <td class="px-4 py-3 text-sm font-bold text-gray-900"
            >{project?.name}</td
          >
          <td class="px-4 py-3 whitespace-nowrap">
            <div class="flex items-center gap-3 w-fit">
              <AvatarCircle
                initials={project.clientInitials}
                seed={project.client}
              />
              <span class="text-sm font-semibold text-[#BC6C25] truncate"
                >{project.client}</span
              >
            </div>
          </td>
          <td class="px-3 py-3 text-sm text-gray-600">Lan...</td>
          <td
            class="px-3 py-3 text-sm text-gray-600 line-clamp-2 leading-relaxed"
            >{project.stage}</td
          >
          <td class="px-3 py-3 text-sm text-gray-700 font-medium tracking-wide"
            >{project.completed}</td
          >
          <td class="px-3 py-3">
            <div class="flex justify-center w-8">
              <AvatarCircle seed={project.pm} />
            </div>
          </td>
          <td class="px-4 py-3 border-r border-[#EACFB6] border-dashed">
            <div class="flex -space-x-2 w-fit">
              {#each project.team as member, i}
                <div
                  class="relative"
                  style="z-index: {project.team.length - i}"
                >
                  <AvatarCircle
                    initials={member.length === 2 &&
                    member === member.toUpperCase()
                      ? member
                      : null}
                    seed={member}
                  />
                </div>
              {/each}
            </div>
          </td>
          <td class="px-4 py-3 text-sm font-medium {project.dateColor}">
            {project.dueDate}
          </td>
          <td class="px-4 py-3 whitespace-nowrap">
            <span
              class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#34A853] text-white tracking-wider"
            >
              Active
            </span>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
