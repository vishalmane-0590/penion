<script>
  import { Search, ExternalLink, SquarePen } from "lucide-svelte";

  const allCases = [
    { id: 1, caseName: "4020 Farms LLC", client: "Growing Acres", county: "Boone, IA" },
    { id: 2, caseName: "3020 Farms ALC", client: "Andrew Freeland", county: "Boone, IA" },
    { id: 3, caseName: "A&D Family Farms", client: "Austin Allred", county: "Piatt, IL" },
    { id: 4, caseName: "ADCOCK FAMILY FARMS LLC", client: "Austin Allred Farms LLC", county: "Champaign, IL" },
    { id: 5, caseName: "SUSTAINABLE FARMING LLC", client: "B.A.N. Inc", county: "Hardin, TN" },
    { id: 6, caseName: "Agricultural Service Company", client: "BFC Trust", county: "Macon, IL" },
    { id: 7, caseName: "Alan Grafton", client: "Austin Allred Farms LLC", county: "De Witt, IL" },
    { id: 8, caseName: "Alex Forsbach", client: "Austin Allred", county: "Dallas, AL" },
    { id: 9, caseName: "Anderson Ag Enterprises", client: "Andrew Freeland", county: "Piatt, IL" },
    { id: 10, caseName: "Andrew Freeland", client: "Growing Acres", county: "Cass, MO" },
    ...Array.from({ length: 18 }).map((_, i) => ({
      id: 11 + i,
      caseName: `Sample Farm ${11 + i}`,
      client: "Sample Client",
      county: "Sample County"
    }))
  ];

  let searchQuery = $state("");
  let currentPage = $state(1);
  let entriesPerPage = $state(10);
  let sortKey = $state('id');
  let sortOrder = $state('asc');

  let filteredCases = $derived(
    allCases.filter(c => 
      c.caseName.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.client.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.county.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  let sortedCases = $derived(
    [...filteredCases].sort((a, b) => {
      let valA = a[sortKey];
      let valB = b[sortKey];
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();

      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    })
  );

  let totalEntries = $derived(sortedCases.length);
  let totalPages = $derived(Math.ceil(totalEntries / entriesPerPage));
  let paginatedCases = $derived(sortedCases.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage));

  function handleSort(key) {
    if (sortKey === key) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey = key;
      sortOrder = 'asc';
    }
  }

  function setPage(page) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
    }
  }

  const pagesArray = [1, 2, 3]; // Mocked as visual representation
</script>

<svelte:head>
  <title>Cases</title>
</svelte:head>

<div class="bg-white flex flex-col w-full h-full font-sans">
  <!-- Top Bar: Search and Create Case -->
  <div class="py-5 px-6 flex items-center justify-between border-b border-gray-200">
    <div class="relative w-[480px]">
      <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
        <Search class="h-4 w-4 text-gray-400" strokeWidth={2} />
      </div>
      <input 
        type="text" 
        bind:value={searchQuery}
        placeholder="Searches by case name, client, county" 
        class="block w-full pl-[2.6rem] pr-3 py-2 border border-gray-300 rounded text-[14px] bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#A66B12] focus:border-[#A66B12] text-gray-900 shadow-sm"
      />
    </div>
    <button class="bg-[#A66B12] hover:bg-[#8F5A0D] text-white px-6 py-2 rounded text-[14px] font-medium transition-colors shadow-sm tracking-wide">
      Create Case
    </button>
  </div>

  <!-- Table -->
  <div class="overflow-x-auto w-full">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b border-gray-200">
          {#each [
            { key: 'id', label: 'Sr No', width: 'w-24' },
            { key: 'caseName', label: 'Case', width: 'w-80' },
            { key: 'client', label: 'Clients', width: 'w-64' },
            { key: 'county', label: 'County', width: 'w-64' },
          ] as col}
            <th 
              class="{col.width} py-4 px-6 text-[14px] font-semibold text-gray-900 cursor-pointer select-none group"
              onclick={() => handleSort(col.key)}
            >
              <div class="flex items-center gap-2">
                {col.label}
                <div class="flex flex-col gap-[2px]">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" class="opacity-80">
                    <path d="M4 0L8 6H0L4 0Z" fill={sortKey === col.key && sortOrder === 'asc' ? '#A66B12' : '#C1A173'}/>
                  </svg>
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" class="opacity-80">
                    <path d="M4 6L0 0H8L4 6Z" fill={sortKey === col.key && sortOrder === 'desc' ? '#A66B12' : '#C1A173'}/>
                  </svg>
                </div>
              </div>
            </th>
          {/each}
          <th class="py-4 px-6 text-[14px] font-semibold text-gray-900 w-32">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {#each paginatedCases as caseItem, index}
          <tr class="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors {caseItem.id === 1 ? 'bg-[#FCF9F3]' : ''}">
            <td class="py-4 px-6 text-[14px] text-gray-800">
              {caseItem.id}
            </td>
            <td class="py-4 px-6 text-[14px] {caseItem.id === 1 ? 'text-[#AD7D25] font-semibold' : 'text-gray-900 font-semibold'}">
              {caseItem.caseName}
            </td>
            <td class="py-4 px-6 text-[14px] text-gray-600">
              {caseItem.client}
            </td>
            <td class="py-4 px-6 text-[14px] text-gray-600">
              {caseItem.county}
            </td>
            <td class="py-4 px-6">
              <div class="flex gap-4 items-center">
                <button class="text-[#A66B12] hover:text-[#8F5A0D] transition-colors" title="Open external">
                  <ExternalLink size={20} strokeWidth={2.5} class="scale-x-[-1]" /> <!-- Lucide ExternalLink arrows top right, maybe flip or just use as is -->
                </button>
                <button class="text-[#3B82F6] hover:text-[#2563EB] transition-colors" title="Edit row">
                  <SquarePen size={20} strokeWidth={2.5} />
                </button>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- Footer Pagination -->
  <div class="mt-4 border-t border-gray-200 py-4 px-6 flex items-center justify-between">
    <div class="flex items-center text-[14px] text-gray-900">
      <span class="mr-3">Show</span>
      <div class="relative">
        <select 
          bind:value={entriesPerPage}
          class="appearance-none border border-gray-200 rounded px-3 py-1.5 pr-8 bg-white focus:outline-none focus:ring-1 focus:ring-[#A66B12] focus:border-[#A66B12] cursor-pointer"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-[#A66B12]">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M5 6L0 0H10L5 6Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      <span class="ml-3">Entries</span>
    </div>

    <!-- Pagination Center -->
    <div class="flex items-center gap-2 text-[14px] absolute left-1/2 transform -translate-x-1/2">
      <button 
        class="text-gray-300 font-medium px-2 py-1 mr-2 bg-transparent cursor-not-allowed" 
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {#each [1, 2, 3] as page}
        <button 
          class="w-8 h-8 flex items-center justify-center rounded transition-colors border {currentPage === page ? 'bg-[#A66B12] text-white border-[#A66B12] font-semibold border' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 font-medium'}"
          onclick={() => setPage(page)}
        >
          {page}
        </button>
      {/each}
      <button 
        class="text-gray-900 font-medium px-2 py-1 ml-2 transition-colors hover:text-[#A66B12]"
        onclick={() => setPage(currentPage + 1)}
      >
        Next
      </button>
    </div>

    <!-- Green text summary -->
    <div class="text-[14px] text-[#22C55E] font-medium tracking-wide">
      Showing {(currentPage - 1) * entriesPerPage + 1} to {Math.min(currentPage * entriesPerPage, totalEntries)} of {totalEntries} entries
    </div>
  </div>
</div>
