<script>
  import CIFHeader from "$lib/components/project/CIFHeader.svelte";
  import CollapsibleSection from "$lib/components/project/CollapsibleSection.svelte";
  import ShareIntakeModal from "$lib/components/project/ShareIntakeModal.svelte";
  import { ChevronDown } from "lucide-svelte";

  let isShareModalOpen = $state(false);

  let clientProfile = $state({
    name: "Banner Land & Livestock",
    entity: "C Corporation",
    phone: "+1-970-474-2715",
    operationType: "Crop",
    usdaPrograms: ["CSP"],
  });

  let eligibilityGate = $state({
    fsaRegNum: "-",
    complianceStatus: "Compliant",
  });

  let conservationScope = $state({
    goals: "-",
    totalAcres: "-",
  });

  const operationTypes = ["Crop", "Livestock", "Mixed", "Other"];
  const complianceStatuses = ["Compliant", "Non-Compliant", "Pending"];
  const usdaPrograms = [
    { id: "CSP", label: "CSP" },
    { id: "EQIP", label: "EQIP" },
  ];

  const inputClass = "w-full px-5 py-3.5 bg-white border-2 border-[#EACFB6]/70 rounded-2xl text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#A26D1D] transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.04)]";
  const selectClass = `${inputClass} appearance-none cursor-pointer`;
  const labelClass = "text-[11px] font-extrabold text-gray-400 uppercase tracking-widest";
</script>

<svelte:head>
  <title>Project View - Client Intake Form</title>
</svelte:head>

<div class="flex flex-col w-full bg-[#F8F5F0] min-h-screen pt-5 pb-14 px-6 overflow-y-auto">
  <CIFHeader
    client="John Carter"
    pm="Alex meian"
    status="Live"
    onShare={() => {
      isShareModalOpen = true;
    }}
  />

  <div class="w-full flex flex-col gap-3">

    <!-- ── Client Profile ── -->
    <CollapsibleSection
      title="Client Profile"
      tier="Tier 0+1"
      lastUpdated="2 days ago"
      showRefresh={true}
    >
      <div class="grid grid-cols-1 gap-5">
        <div class="flex flex-col gap-2">
          <label for="client-name" class={labelClass}>Client Name</label>
          <input type="text" id="client-name" bind:value={clientProfile.name} class={inputClass} />
        </div>

        <div class="flex flex-col gap-2">
          <label for="entity" class={labelClass}>Entity</label>
          <input type="text" id="entity" bind:value={clientProfile.entity} class={inputClass} />
        </div>

        <div class="flex flex-col gap-2">
          <label for="phone" class={labelClass}>Phone</label>
          <input type="text" id="phone" bind:value={clientProfile.phone} class={inputClass} />
        </div>

        <div class="flex flex-col gap-2">
          <label for="operation-type" class={labelClass}>Operation Type</label>
          <div class="relative">
            <select id="operation-type" bind:value={clientProfile.operationType} class={selectClass}>
              {#each operationTypes as type}
                <option value={type}>{type}</option>
              {/each}
            </select>
            <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">
              <ChevronDown size={18} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <span class={labelClass}>USDA Programs</span>
          <div class="flex items-center gap-8">
            {#each usdaPrograms as program}
              <label class="flex items-center gap-3 cursor-pointer group select-none">
                <div class="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    value={program.id}
                    bind:group={clientProfile.usdaPrograms}
                    class="peer appearance-none w-5 h-5 border-2 border-[#EACFB6] rounded-md bg-white checked:border-[#A26D1D] transition-all cursor-pointer"
                  />
                  <svg
                    class="absolute w-3 h-3 text-[#A26D1D] hidden peer-checked:block pointer-events-none"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"
                  ><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span class="text-sm font-bold text-gray-700 group-hover:text-[#A26D1D] transition-colors">{program.label}</span>
              </label>
            {/each}
          </div>
        </div>
      </div>
    </CollapsibleSection>

    <!-- ── Eligibility Gate ── -->
    <CollapsibleSection title="Eligibility Gate" tier="Tier 2" showSave={true}>
      <div class="flex flex-col gap-5">
        <div class="bg-[#FDF8F0] border-l-4 border-[#A26D1D] px-4 py-3 rounded-r-xl">
          <p class="text-[13px] font-semibold text-gray-700">
            Completing Client Profile helps pre-qualify eligibility questions.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5">
          <div class="flex flex-col gap-2">
            <label for="fsa-reg" class={labelClass}>FSA Registration Number</label>
            <input type="text" id="fsa-reg" bind:value={eligibilityGate.fsaRegNum} class={inputClass} />
          </div>

          <div class="flex flex-col gap-2">
            <label for="compliance-status" class={labelClass}>Compliance Status</label>
            <div class="relative">
              <select id="compliance-status" bind:value={eligibilityGate.complianceStatus} class={selectClass}>
                {#each complianceStatuses as status}
                  <option value={status}>{status}</option>
                {/each}
              </select>
              <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">
                <ChevronDown size={18} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollapsibleSection>

    <!-- ── Conservation Scope ── -->
    <CollapsibleSection title="Conservation Scope" tier="Tier 3" showSave={true}>
      <div class="flex flex-col gap-5">
        <div class="bg-[#FDF8F0] border-l-4 border-[#A26D1D] px-4 py-3 rounded-r-xl">
          <p class="text-[13px] font-semibold text-gray-700">
            Eligibility information is usually needed before conservation planning.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5">
          <div class="flex flex-col gap-2">
            <label for="goals" class={labelClass}>Conservation Goals</label>
            <input type="text" id="goals" bind:value={conservationScope.goals} class={inputClass} />
          </div>

          <div class="flex flex-col gap-2">
            <label for="total-acres" class={labelClass}>Total Acres</label>
            <input
              type="text"
              id="total-acres"
              bind:value={conservationScope.totalAcres}
              class="{inputClass} text-center"
            />
          </div>
        </div>
      </div>
    </CollapsibleSection>

  </div>
</div>

<ShareIntakeModal
  open={isShareModalOpen}
  onClose={() => {
    isShareModalOpen = false;
  }}
/>
