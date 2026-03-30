import { l as ensure_array_like, e as escape_html, o as attr_style, f as stringify, d as attr_class, h as head, j as attr, k as derived } from "../../../../chunks/index2.js";
import { T as Toggle } from "../../../../chunks/Toggle.js";
import { A as AvatarCircle } from "../../../../chunks/AvatarCircle.js";
import { C as Chevron_down } from "../../../../chunks/chevron-down.js";
import { S as Search } from "../../../../chunks/search.js";
function ProjectTable($$renderer, $$props) {
  let { projects } = $$props;
  $$renderer.push(`<div class="overflow-x-auto rounded-lg bg-[#FCFBF8] border border-[#EACFB6] border-dashed"><table class="min-w-full bg-white relative"><thead class="bg-[#FCFBF8]"><tr><th scope="col" class="px-4 py-4 text-left text-sm font-bold text-gray-900 w-[18%] border-b border-r border-[#EACFB6] border-dashed">Project</th><th scope="col" class="px-4 py-4 text-left text-sm font-bold text-gray-900 w-[15%] border-b border-r border-[#EACFB6] border-dashed">Client</th><th scope="col" class="px-3 py-4 text-left text-sm font-bold text-gray-900 w-[10%] border-b border-r border-[#EACFB6] border-dashed leading-tight">Workflow<br/>Type</th><th scope="col" class="px-3 py-4 text-left text-sm font-bold text-gray-900 w-[15%] border-b border-r border-[#EACFB6] border-dashed leading-tight">Ongoing<br/>Stage</th><th scope="col" class="px-3 py-4 text-left text-sm font-bold text-gray-900 whitespace-nowrap w-[10%] border-b border-r border-[#EACFB6] border-dashed leading-tight">Completed<br/>To do's</th><th scope="col" class="px-3 py-4 text-left text-sm font-bold text-gray-900 w-[8%] border-b border-r border-[#EACFB6] border-dashed leading-tight">Project<br/>Manager</th><th scope="col" class="px-4 py-4 text-left text-sm font-bold text-gray-900 w-[12%] border-b border-r border-[#EACFB6] border-dashed">The Team</th><th scope="col" class="px-4 py-4 text-left text-sm font-bold text-gray-900 w-[12%] border-b border-r border-[#EACFB6] border-dashed">Due Date</th><th scope="col" class="px-4 py-4 text-left text-sm font-bold text-gray-900 w-[10%] border-b border-[#EACFB6] border-dashed"><div class="flex items-center gap-1">Status `);
  Chevron_down($$renderer, { size: 14, class: "text-[#C07026]" });
  $$renderer.push(`<!----></div></th></tr></thead><tbody class="divide-y divide-[#EACFB6]/60"><!--[-->`);
  const each_array = ensure_array_like(projects);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array[$$index_1];
    $$renderer.push(`<tr class="divide-x divide-[#EACFB6] divide-dashed hover:bg-gray-50/50 transition-colors cursor-pointer"><td class="px-4 py-3 text-sm font-bold text-gray-900">${escape_html(project?.name)}</td><td class="px-4 py-3 whitespace-nowrap"><div class="flex items-center gap-3 w-fit">`);
    AvatarCircle($$renderer, { initials: project.clientInitials, seed: project.client });
    $$renderer.push(`<!----> <span class="text-sm font-semibold text-[#BC6C25] truncate">${escape_html(project.client)}</span></div></td><td class="px-3 py-3 text-sm text-gray-600">Lan...</td><td class="px-3 py-3 text-sm text-gray-600 line-clamp-2 leading-relaxed">${escape_html(project.stage)}</td><td class="px-3 py-3 text-sm text-gray-700 font-medium tracking-wide">${escape_html(project.completed)}</td><td class="px-3 py-3"><div class="flex justify-center w-8">`);
    AvatarCircle($$renderer, { seed: project.pm });
    $$renderer.push(`<!----></div></td><td class="px-4 py-3 border-r border-[#EACFB6] border-dashed"><div class="flex -space-x-2 w-fit"><!--[-->`);
    const each_array_1 = ensure_array_like(project.team);
    for (let i = 0, $$length2 = each_array_1.length; i < $$length2; i++) {
      let member = each_array_1[i];
      $$renderer.push(`<div class="relative"${attr_style(`z-index: ${stringify(project.team.length - i)}`)}>`);
      AvatarCircle($$renderer, {
        initials: member.length === 2 && member === member.toUpperCase() ? member : null,
        seed: member
      });
      $$renderer.push(`<!----></div>`);
    }
    $$renderer.push(`<!--]--></div></td><td${attr_class(`px-4 py-3 text-sm font-medium ${stringify(project.dateColor)}`)}>${escape_html(project.dueDate)}</td><td class="px-4 py-3 whitespace-nowrap"><span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#34A853] text-white tracking-wider">Active</span></td></tr>`);
  }
  $$renderer.push(`<!--]--></tbody></table></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let activeOnly = true;
    let myProjects = true;
    let searchTerm = "";
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
        dateColor: "text-red-400"
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
        dateColor: "text-red-400"
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
        dateColor: "text-red-400"
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
        dateColor: "text-red-400"
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
        dateColor: "text-yellow-500"
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
        dateColor: "text-yellow-500"
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
        dateColor: "text-yellow-500"
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
        dateColor: "text-yellow-500"
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
        dateColor: "text-green-500 bg-green-50/50 px-2 py-0.5 rounded"
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
        dateColor: "text-green-500 bg-green-50/50 px-2 py-0.5 rounded"
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
        dateColor: "text-green-500 bg-green-50/50 px-2 py-0.5 rounded"
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
        dateColor: "text-green-500 bg-green-50/50 px-2 py-0.5 rounded"
      }
    ];
    let filteredProjects = derived(() => projects.filter((project) => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || project.client.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    }));
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("1tyszyy", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Dashboard - Ongoing Projects</title>`);
        });
      });
      $$renderer3.push(`<div class="max-w-[1400px] mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8 pt-6 min-h-0 flex flex-col"><div class="flex items-center justify-between mb-6"><h1 class="text-[#BC6C25] text-xl font-semibold">List View of Ongoing Projects</h1> <div class="flex items-center gap-8">`);
      Toggle($$renderer3, {
        label: "Active only",
        get checked() {
          return activeOnly;
        },
        set checked($$value) {
          activeOnly = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Toggle($$renderer3, {
        label: "My projects",
        get checked() {
          return myProjects;
        },
        set checked($$value) {
          myProjects = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <div class="relative mb-6"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">`);
      Search($$renderer3, { class: "h-5 w-5 text-gray-400" });
      $$renderer3.push(`<!----></div> <input type="text"${attr("value", searchTerm)} class="block w-full pl-10 pr-3 py-2.5 border border-[#EBDBC9] rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#A3703E] focus:border-[#A3703E] sm:text-sm transition-colors" placeholder="Find by Project..."/></div> `);
      ProjectTable($$renderer3, { projects: filteredProjects() });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
