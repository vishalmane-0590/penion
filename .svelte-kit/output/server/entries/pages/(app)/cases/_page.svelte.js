import { h as head, j as attr, l as ensure_array_like, d as attr_class, f as stringify, e as escape_html, k as derived } from "../../../../chunks/index2.js";
import { S as Search } from "../../../../chunks/search.js";
import { E as External_link } from "../../../../chunks/external-link.js";
import { S as Square_pen } from "../../../../chunks/square-pen.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const allCases = [
      {
        id: 1,
        caseName: "4020 Farms LLC",
        client: "Growing Acres",
        county: "Boone, IA"
      },
      {
        id: 2,
        caseName: "3020 Farms ALC",
        client: "Andrew Freeland",
        county: "Boone, IA"
      },
      {
        id: 3,
        caseName: "A&D Family Farms",
        client: "Austin Allred",
        county: "Piatt, IL"
      },
      {
        id: 4,
        caseName: "ADCOCK FAMILY FARMS LLC",
        client: "Austin Allred Farms LLC",
        county: "Champaign, IL"
      },
      {
        id: 5,
        caseName: "SUSTAINABLE FARMING LLC",
        client: "B.A.N. Inc",
        county: "Hardin, TN"
      },
      {
        id: 6,
        caseName: "Agricultural Service Company",
        client: "BFC Trust",
        county: "Macon, IL"
      },
      {
        id: 7,
        caseName: "Alan Grafton",
        client: "Austin Allred Farms LLC",
        county: "De Witt, IL"
      },
      {
        id: 8,
        caseName: "Alex Forsbach",
        client: "Austin Allred",
        county: "Dallas, AL"
      },
      {
        id: 9,
        caseName: "Anderson Ag Enterprises",
        client: "Andrew Freeland",
        county: "Piatt, IL"
      },
      {
        id: 10,
        caseName: "Andrew Freeland",
        client: "Growing Acres",
        county: "Cass, MO"
      },
      ...Array.from({ length: 18 }).map((_, i) => ({
        id: 11 + i,
        caseName: `Sample Farm ${11 + i}`,
        client: "Sample Client",
        county: "Sample County"
      }))
    ];
    let searchQuery = "";
    let currentPage = 1;
    let entriesPerPage = 10;
    let sortKey = "id";
    let sortOrder = "asc";
    let filteredCases = derived(() => allCases.filter((c) => c.caseName.toLowerCase().includes(searchQuery.toLowerCase()) || c.client.toLowerCase().includes(searchQuery.toLowerCase()) || c.county.toLowerCase().includes(searchQuery.toLowerCase())));
    let sortedCases = derived(() => [...filteredCases()].sort((a, b) => {
      let valA = a[sortKey];
      let valB = b[sortKey];
      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    }));
    let totalEntries = derived(() => sortedCases().length);
    let paginatedCases = derived(() => sortedCases().slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage));
    head("23ga4v", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Cases</title>`);
      });
    });
    $$renderer2.push(`<div class="bg-white flex flex-col w-full h-full font-sans"><div class="py-5 px-6 flex items-center justify-between border-b border-gray-200"><div class="relative w-[480px]"><div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">`);
    Search($$renderer2, { class: "h-4 w-4 text-gray-400", strokeWidth: 2 });
    $$renderer2.push(`<!----></div> <input type="text"${attr("value", searchQuery)} placeholder="Searches by case name, client, county" class="block w-full pl-[2.6rem] pr-3 py-2 border border-gray-300 rounded text-[14px] bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#A66B12] focus:border-[#A66B12] text-gray-900 shadow-sm"/></div> <button class="bg-[#A66B12] hover:bg-[#8F5A0D] text-white px-6 py-2 rounded text-[14px] font-medium transition-colors shadow-sm tracking-wide">Create Case</button></div> <div class="overflow-x-auto w-full"><table class="w-full text-left border-collapse"><thead><tr class="border-b border-gray-200"><!--[-->`);
    const each_array = ensure_array_like([
      { key: "id", label: "Sr No", width: "w-24" },
      { key: "caseName", label: "Case", width: "w-80" },
      { key: "client", label: "Clients", width: "w-64" },
      { key: "county", label: "County", width: "w-64" }
    ]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let col = each_array[$$index];
      $$renderer2.push(`<th${attr_class(`${stringify(col.width)} py-4 px-6 text-[14px] font-semibold text-gray-900 cursor-pointer select-none group`)}><div class="flex items-center gap-2">${escape_html(col.label)} <div class="flex flex-col gap-[2px]"><svg width="8" height="6" viewBox="0 0 8 6" fill="none" class="opacity-80"><path d="M4 0L8 6H0L4 0Z"${attr("fill", sortKey === col.key && sortOrder === "asc" ? "#A66B12" : "#C1A173")}></path></svg> <svg width="8" height="6" viewBox="0 0 8 6" fill="none" class="opacity-80"><path d="M4 6L0 0H8L4 6Z"${attr("fill", sortKey === col.key && sortOrder === "desc" ? "#A66B12" : "#C1A173")}></path></svg></div></div></th>`);
    }
    $$renderer2.push(`<!--]--><th class="py-4 px-6 text-[14px] font-semibold text-gray-900 w-32">Action</th></tr></thead><tbody><!--[-->`);
    const each_array_1 = ensure_array_like(paginatedCases());
    for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
      let caseItem = each_array_1[index];
      $$renderer2.push(`<tr${attr_class(`border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors ${stringify(caseItem.id === 1 ? "bg-[#FCF9F3]" : "")}`)}><td class="py-4 px-6 text-[14px] text-gray-800">${escape_html(caseItem.id)}</td><td${attr_class(`py-4 px-6 text-[14px] ${stringify(caseItem.id === 1 ? "text-[#AD7D25] font-semibold" : "text-gray-900 font-semibold")}`)}>${escape_html(caseItem.caseName)}</td><td class="py-4 px-6 text-[14px] text-gray-600">${escape_html(caseItem.client)}</td><td class="py-4 px-6 text-[14px] text-gray-600">${escape_html(caseItem.county)}</td><td class="py-4 px-6"><div class="flex gap-4 items-center"><button class="text-[#A66B12] hover:text-[#8F5A0D] transition-colors" title="Open external">`);
      External_link($$renderer2, { size: 20, strokeWidth: 2.5, class: "scale-x-[-1]" });
      $$renderer2.push(`<!----></button> <button class="text-[#3B82F6] hover:text-[#2563EB] transition-colors" title="Edit row">`);
      Square_pen($$renderer2, { size: 20, strokeWidth: 2.5 });
      $$renderer2.push(`<!----></button></div></td></tr>`);
    }
    $$renderer2.push(`<!--]--></tbody></table></div> <div class="mt-4 border-t border-gray-200 py-4 px-6 flex items-center justify-between"><div class="flex items-center text-[14px] text-gray-900"><span class="mr-3">Show</span> <div class="relative">`);
    $$renderer2.select(
      {
        value: entriesPerPage,
        class: "appearance-none border border-gray-200 rounded px-3 py-1.5 pr-8 bg-white focus:outline-none focus:ring-1 focus:ring-[#A66B12] focus:border-[#A66B12] cursor-pointer"
      },
      ($$renderer3) => {
        $$renderer3.option({ value: 10 }, ($$renderer4) => {
          $$renderer4.push(`10`);
        });
        $$renderer3.option({ value: 20 }, ($$renderer4) => {
          $$renderer4.push(`20`);
        });
        $$renderer3.option({ value: 50 }, ($$renderer4) => {
          $$renderer4.push(`50`);
        });
      }
    );
    $$renderer2.push(` <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-[#A66B12]"><svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M5 6L0 0H10L5 6Z" fill="currentColor"></path></svg></div></div> <span class="ml-3">Entries</span></div> <div class="flex items-center gap-2 text-[14px] absolute left-1/2 transform -translate-x-1/2"><button class="text-gray-300 font-medium px-2 py-1 mr-2 bg-transparent cursor-not-allowed"${attr("disabled", currentPage === 1, true)}>Previous</button> <!--[-->`);
    const each_array_2 = ensure_array_like([1, 2, 3]);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let page = each_array_2[$$index_2];
      $$renderer2.push(`<button${attr_class(`w-8 h-8 flex items-center justify-center rounded transition-colors border ${stringify(currentPage === page ? "bg-[#A66B12] text-white border-[#A66B12] font-semibold border" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 font-medium")}`)}>${escape_html(page)}</button>`);
    }
    $$renderer2.push(`<!--]--> <button class="text-gray-900 font-medium px-2 py-1 ml-2 transition-colors hover:text-[#A66B12]">Next</button></div> <div class="text-[14px] text-[#22C55E] font-medium tracking-wide">Showing ${escape_html((currentPage - 1) * entriesPerPage + 1)} to ${escape_html(Math.min(currentPage * entriesPerPage, totalEntries()))} of ${escape_html(totalEntries())} entries</div></div></div>`);
  });
}
export {
  _page as default
};
