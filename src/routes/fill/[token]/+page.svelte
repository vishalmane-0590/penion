<script>
  import { ChevronDown, ChevronUp } from "lucide-svelte";

  let { params } = $props();

  let sections = $state({
    clientProfile: true,
    eligibilityGate: true,
    conservationScope: true,
  });

  let clientProfile = $state({
    name: "Banner Land & Livestock",
    entity: "C Corporation",
    phone: "+1-970-474-2715",
    operationType: "Crop",
    usdaPrograms: ["CSP"],
  });

  let eligibilityGate = $state({
    fsaRegistrationNumber: "-",
    complianceStatus: "Compliant",
  });

  let conservationScope = $state({
    conservationGoals: "-",
    totalAcres: "-",
  });

  const operationTypes = ["Crop", "Livestock", "Mixed", "Other"];
  const complianceStatuses = ["Compliant", "Non-Compliant", "Pending"];
  const usdaPrograms = ["CSP", "EQIP"];

  function toggleSection(section) {
    sections[section] = !sections[section];
  }
</script>

<svelte:head>
  <title>Client Intake Form - {params.token}</title>
</svelte:head>

<div class="min-h-screen bg-[#F7F4EE] px-[10px] py-[14px] text-[#171717]">
  <div
    class="rounded-[18px] bg-[#F2F0EC] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"
  >
    <div class="mx-auto flex w-full max-w-[1705px] flex-col gap-12">
      <section
        class="rounded-[16px] border border-[#E4C9A0] bg-white px-7 py-4 shadow-[0_2px_12px_rgba(82,57,17,0.04)]"
      >
        <div
          class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between"
        >
          <div class="flex flex-col gap-2 lg:flex-row lg:items-end lg:gap-4">
            <h1 class="text-[34px] font-bold tracking-[-0.03em] text-[#B16F08]">
              Client Intake Form (CIF)
            </h1>
            <p
              class="pb-[4px] text-[20px] font-medium tracking-[-0.02em] text-[#1A1A1A]"
            >
              Please review and complete the information below.
            </p>
          </div>

          <div class="flex items-center gap-6 self-end xl:self-auto">
            <button
              type="button"
              class="inline-flex h-[46px] items-center justify-center rounded-[8px] bg-[#F4EBDD] px-8 text-[17px] font-medium text-[#B16F08] transition-colors hover:bg-[#F0E2CC]"
            >
              Save Draft
            </button>
            <button
              type="button"
              class="inline-flex h-[46px] items-center justify-center rounded-[8px] bg-[#B16F08] px-8 text-[17px] font-medium text-white transition-colors hover:bg-[#965F06]"
            >
              Submit Intake
            </button>
          </div>
        </div>
      </section>

      <section
        class="rounded-[18px] border border-[#E5D2B2] bg-white px-3 pb-4 pt-3 shadow-[0_2px_12px_rgba(82,57,17,0.04)]"
      >
        <button
          type="button"
          class="flex w-full items-center justify-between px-6 py-4"
          onclick={() => toggleSection("clientProfile")}
          aria-expanded={sections.clientProfile}
        >
          <div class="flex items-center gap-3">
            <h2
              class="text-[20px] font-semibold tracking-[-0.02em] text-[#B16F08]"
            >
              Client Profile
            </h2>
          </div>

          <div class="flex items-center gap-6">
            <span class="text-[14px] font-medium text-[#B16F08]"
              >(Tier 0+1)</span
            >
            {#if sections.clientProfile}
              <ChevronUp size={24} strokeWidth={2.5} />
            {:else}
              <ChevronDown size={24} strokeWidth={2.5} />
            {/if}
          </div>
        </button>

        <div class="mx-3 border-t border-[#E4C9A0]"></div>

        {#if sections.clientProfile}
          <div class="px-3 pb-1 pt-3">
            <div
              class="mx-3 border-l-[4px] border-[#B16F08] bg-[#F8F5EF] px-6 py-4 text-[17px] font-normal text-[#1D1D1D]"
            >
              Please confirm your business information before continuing.
            </div>

            <div class="space-y-5 px-3 pb-2 pt-8">
              <label class="block">
                <span
                  class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]"
                  >Client Name</span
                >
                <input
                  bind:value={clientProfile.name}
                  type="text"
                  class="h-[54px] w-full rounded-[16px] border border-[#F0E0C7] bg-white px-4 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"
                />
              </label>

              <label class="block">
                <span
                  class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]"
                  >Entity</span
                >
                <input
                  bind:value={clientProfile.entity}
                  type="text"
                  class="h-[54px] w-full rounded-[16px] border border-[#F0E0C7] bg-white px-4 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"
                />
              </label>

              <label class="block">
                <span
                  class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]"
                  >Phone</span
                >
                <input
                  bind:value={clientProfile.phone}
                  type="text"
                  class="h-[54px] w-full rounded-[16px] border border-[#F0E0C7] bg-white px-4 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"
                />
              </label>

              <label class="block">
                <span
                  class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]"
                  >Operation Type</span
                >
                <div class="relative">
                  <select
                    bind:value={clientProfile.operationType}
                    class="h-[54px] w-full appearance-none rounded-[16px] border border-[#F0E0C7] bg-white px-4 pr-14 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"
                  >
                    {#each operationTypes as operationType}
                      <option value={operationType}>{operationType}</option>
                    {/each}
                  </select>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-5 flex items-center text-black"
                  >
                    <ChevronDown size={24} strokeWidth={2.5} />
                  </span>
                </div>
              </label>

              <fieldset class="pt-1">
                <legend
                  class="mb-4 text-[19px] font-medium tracking-[-0.02em] text-[#171717]"
                  >USDA Programs</legend
                >
                <div class="flex flex-wrap items-center gap-7">
                  {#each usdaPrograms as program}
                    <label
                      class="flex items-center gap-3 text-[18px] font-normal text-[#171717]"
                    >
                      <span
                        class="relative flex h-[26px] w-[26px] items-center justify-center"
                      >
                        <input
                          type="checkbox"
                          value={program}
                          bind:group={clientProfile.usdaPrograms}
                          class="peer h-[26px] w-[26px] appearance-none rounded-[6px] border border-[#B6B6B6] bg-white checked:border-[#E7C58E]"
                        />
                        <svg
                          class="pointer-events-none absolute h-4 w-4 text-[#D19638] opacity-0 transition-opacity peer-checked:opacity-100"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span>{program}</span>
                    </label>
                  {/each}
                </div>
              </fieldset>
            </div>
          </div>
        {/if}
      </section>

      <section
        class="rounded-[18px] border border-[#E5D2B2] bg-white px-3 pb-4 pt-3 shadow-[0_2px_12px_rgba(82,57,17,0.04)]"
      >
        <button
          type="button"
          class="flex w-full items-center justify-between px-6 py-4"
          onclick={() => toggleSection("eligibilityGate")}
          aria-expanded={sections.eligibilityGate}
        >
          <h2
            class="text-[20px] font-semibold tracking-[-0.02em] text-[#B16F08]"
          >
            Eligibility Gate
          </h2>

          <div class="flex items-center gap-6">
            <span class="text-[14px] font-medium text-[#B16F08]">Tier 2</span>
            {#if sections.eligibilityGate}
              <ChevronUp size={24} strokeWidth={2.5} />
            {:else}
              <ChevronDown size={24} strokeWidth={2.5} />
            {/if}
          </div>
        </button>

        <div class="mx-3 border-t border-[#E4C9A0]"></div>

        {#if sections.eligibilityGate}
          <div class="space-y-5 px-6 pb-2 pt-6">
            <label class="block">
              <span
                class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]"
                >FSA Registration Number</span
              >
              <input
                bind:value={eligibilityGate.fsaRegistrationNumber}
                type="text"
                class="h-[54px] w-full rounded-[16px] border border-[#F0E0C7] bg-white px-4 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"
              />
            </label>

            <label class="block">
              <span
                class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]"
                >Compliance Status</span
              >
              <div class="relative">
                <select
                  bind:value={eligibilityGate.complianceStatus}
                  class="h-[54px] w-full appearance-none rounded-[16px] border border-[#F0E0C7] bg-white px-4 pr-14 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"
                >
                  {#each complianceStatuses as complianceStatus}
                    <option value={complianceStatus}>{complianceStatus}</option>
                  {/each}
                </select>
                <span
                  class="pointer-events-none absolute inset-y-0 right-5 flex items-center text-black"
                >
                  <ChevronDown size={24} strokeWidth={2.5} />
                </span>
              </div>
            </label>
          </div>
        {/if}
      </section>

      <section
        class="rounded-[18px] border border-[#E5D2B2] bg-white px-3 pb-4 pt-3 shadow-[0_2px_12px_rgba(82,57,17,0.04)]"
      >
        <button
          type="button"
          class="flex w-full items-center justify-between px-6 py-4"
          onclick={() => toggleSection("conservationScope")}
          aria-expanded={sections.conservationScope}
        >
          <h2
            class="text-[20px] font-semibold tracking-[-0.02em] text-[#B16F08]"
          >
            Conservation Scope
          </h2>

          <div class="flex items-center gap-6">
            <span class="text-[14px] font-medium text-[#B16F08]">Tier 3</span>
            {#if sections.conservationScope}
              <ChevronUp size={24} strokeWidth={2.5} />
            {:else}
              <ChevronDown size={24} strokeWidth={2.5} />
            {/if}
          </div>
        </button>

        <div class="mx-3 border-t border-[#E4C9A0]"></div>

        {#if sections.conservationScope}
          <div class="space-y-5 px-6 pb-2 pt-6">
            <label class="block">
              <span
                class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]"
                >Conservation Goals</span
              >
              <input
                bind:value={conservationScope.conservationGoals}
                type="text"
                class="h-[54px] w-full rounded-[16px] border border-[#F0E0C7] bg-white px-4 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"
              />
            </label>

            <label class="block">
              <span
                class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]"
                >Total Acres</span
              >
              <input
                bind:value={conservationScope.totalAcres}
                type="text"
                class="h-[54px] w-full rounded-[16px] border border-[#F0E0C7] bg-white px-4 text-center text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"
              />
            </label>
          </div>
        {/if}
      </section>
    </div>
  </div>
</div>
