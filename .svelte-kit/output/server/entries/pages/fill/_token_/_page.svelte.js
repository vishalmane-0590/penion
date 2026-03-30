import { h as head, j as attr, l as ensure_array_like, e as escape_html } from "../../../../chunks/index2.js";
import { C as Chevron_up } from "../../../../chunks/chevron-up.js";
import { C as Chevron_down } from "../../../../chunks/chevron-down.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { params } = $$props;
    let sections = {
      clientProfile: true,
      eligibilityGate: true,
      conservationScope: true
    };
    let clientProfile = {
      name: "Banner Land & Livestock",
      entity: "C Corporation",
      phone: "+1-970-474-2715",
      operationType: "Crop",
      usdaPrograms: ["CSP"]
    };
    let eligibilityGate = { fsaRegistrationNumber: "-", complianceStatus: "Compliant" };
    let conservationScope = { conservationGoals: "-", totalAcres: "-" };
    const operationTypes = ["Crop", "Livestock", "Mixed", "Other"];
    const complianceStatuses = ["Compliant", "Non-Compliant", "Pending"];
    const usdaPrograms = ["CSP", "EQIP"];
    head("xh9mz8", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Client Intake Form - ${escape_html(params.token)}</title>`);
      });
    });
    $$renderer2.push(`<div class="min-h-screen bg-[#F7F4EE] px-[10px] py-[14px] text-[#171717]"><div class="rounded-[18px] bg-[#F2F0EC] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"><div class="mx-auto flex w-full max-w-[1705px] flex-col gap-12"><section class="rounded-[16px] border border-[#E4C9A0] bg-white px-7 py-4 shadow-[0_2px_12px_rgba(82,57,17,0.04)]"><div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between"><div class="flex flex-col gap-2 lg:flex-row lg:items-end lg:gap-4"><h1 class="text-[34px] font-bold tracking-[-0.03em] text-[#B16F08]">Client Intake Form (CIF)</h1> <p class="pb-[4px] text-[20px] font-medium tracking-[-0.02em] text-[#1A1A1A]">Please review and complete the information below.</p></div> <div class="flex items-center gap-6 self-end xl:self-auto"><button type="button" class="inline-flex h-[46px] items-center justify-center rounded-[8px] bg-[#F4EBDD] px-8 text-[17px] font-medium text-[#B16F08] transition-colors hover:bg-[#F0E2CC]">Save Draft</button> <button type="button" class="inline-flex h-[46px] items-center justify-center rounded-[8px] bg-[#B16F08] px-8 text-[17px] font-medium text-white transition-colors hover:bg-[#965F06]">Submit Intake</button></div></div></section> <section class="rounded-[18px] border border-[#E5D2B2] bg-white px-3 pb-4 pt-3 shadow-[0_2px_12px_rgba(82,57,17,0.04)]"><button type="button" class="flex w-full items-center justify-between px-6 py-4"${attr("aria-expanded", sections.clientProfile)}><div class="flex items-center gap-3"><h2 class="text-[20px] font-semibold tracking-[-0.02em] text-[#B16F08]">Client Profile</h2></div> <div class="flex items-center gap-6"><span class="text-[14px] font-medium text-[#B16F08]">(Tier 0+1)</span> `);
    {
      $$renderer2.push("<!--[0-->");
      Chevron_up($$renderer2, { size: 24, strokeWidth: 2.5 });
    }
    $$renderer2.push(`<!--]--></div></button> <div class="mx-3 border-t border-[#E4C9A0]"></div> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="px-3 pb-1 pt-3"><div class="mx-3 border-l-[4px] border-[#B16F08] bg-[#F8F5EF] px-6 py-4 text-[17px] font-normal text-[#1D1D1D]">Please confirm your business information before continuing.</div> <div class="space-y-5 px-3 pb-2 pt-8"><label class="block"><span class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]">Client Name</span> <input${attr("value", clientProfile.name)} type="text" class="h-[54px] w-full rounded-[16px] border border-[#F0E0C7] bg-white px-4 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"/></label> <label class="block"><span class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]">Entity</span> <input${attr("value", clientProfile.entity)} type="text" class="h-[54px] w-full rounded-[16px] border border-[#F0E0C7] bg-white px-4 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"/></label> <label class="block"><span class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]">Phone</span> <input${attr("value", clientProfile.phone)} type="text" class="h-[54px] w-full rounded-[16px] border border-[#F0E0C7] bg-white px-4 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"/></label> <label class="block"><span class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]">Operation Type</span> <div class="relative">`);
      $$renderer2.select(
        {
          value: clientProfile.operationType,
          class: "h-[54px] w-full appearance-none rounded-[16px] border border-[#F0E0C7] bg-white px-4 pr-14 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"
        },
        ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(operationTypes);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let operationType = each_array[$$index];
            $$renderer3.option({ value: operationType }, ($$renderer4) => {
              $$renderer4.push(`${escape_html(operationType)}`);
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
      );
      $$renderer2.push(` <span class="pointer-events-none absolute inset-y-0 right-5 flex items-center text-black">`);
      Chevron_down($$renderer2, { size: 24, strokeWidth: 2.5 });
      $$renderer2.push(`<!----></span></div></label> <fieldset class="pt-1"><legend class="mb-4 text-[19px] font-medium tracking-[-0.02em] text-[#171717]">USDA Programs</legend> <div class="flex flex-wrap items-center gap-7"><!--[-->`);
      const each_array_1 = ensure_array_like(usdaPrograms);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let program = each_array_1[$$index_1];
        $$renderer2.push(`<label class="flex items-center gap-3 text-[18px] font-normal text-[#171717]"><span class="relative flex h-[26px] w-[26px] items-center justify-center"><input type="checkbox"${attr("value", program)}${attr("checked", clientProfile.usdaPrograms.includes(program), true)} class="peer h-[26px] w-[26px] appearance-none rounded-[6px] border border-[#B6B6B6] bg-white checked:border-[#E7C58E]"/> <svg class="pointer-events-none absolute h-4 w-4 text-[#D19638] opacity-0 transition-opacity peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> <span>${escape_html(program)}</span></label>`);
      }
      $$renderer2.push(`<!--]--></div></fieldset></div></div>`);
    }
    $$renderer2.push(`<!--]--></section> <section class="rounded-[18px] border border-[#E5D2B2] bg-white px-3 pb-4 pt-3 shadow-[0_2px_12px_rgba(82,57,17,0.04)]"><button type="button" class="flex w-full items-center justify-between px-6 py-4"${attr("aria-expanded", sections.eligibilityGate)}><h2 class="text-[20px] font-semibold tracking-[-0.02em] text-[#B16F08]">Eligibility Gate</h2> <div class="flex items-center gap-6"><span class="text-[14px] font-medium text-[#B16F08]">Tier 2</span> `);
    {
      $$renderer2.push("<!--[0-->");
      Chevron_up($$renderer2, { size: 24, strokeWidth: 2.5 });
    }
    $$renderer2.push(`<!--]--></div></button> <div class="mx-3 border-t border-[#E4C9A0]"></div> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="space-y-5 px-6 pb-2 pt-6"><label class="block"><span class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]">FSA Registration Number</span> <input${attr("value", eligibilityGate.fsaRegistrationNumber)} type="text" class="h-[54px] w-full rounded-[16px] border border-[#F0E0C7] bg-white px-4 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"/></label> <label class="block"><span class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]">Compliance Status</span> <div class="relative">`);
      $$renderer2.select(
        {
          value: eligibilityGate.complianceStatus,
          class: "h-[54px] w-full appearance-none rounded-[16px] border border-[#F0E0C7] bg-white px-4 pr-14 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"
        },
        ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          const each_array_2 = ensure_array_like(complianceStatuses);
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let complianceStatus = each_array_2[$$index_2];
            $$renderer3.option({ value: complianceStatus }, ($$renderer4) => {
              $$renderer4.push(`${escape_html(complianceStatus)}`);
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
      );
      $$renderer2.push(` <span class="pointer-events-none absolute inset-y-0 right-5 flex items-center text-black">`);
      Chevron_down($$renderer2, { size: 24, strokeWidth: 2.5 });
      $$renderer2.push(`<!----></span></div></label></div>`);
    }
    $$renderer2.push(`<!--]--></section> <section class="rounded-[18px] border border-[#E5D2B2] bg-white px-3 pb-4 pt-3 shadow-[0_2px_12px_rgba(82,57,17,0.04)]"><button type="button" class="flex w-full items-center justify-between px-6 py-4"${attr("aria-expanded", sections.conservationScope)}><h2 class="text-[20px] font-semibold tracking-[-0.02em] text-[#B16F08]">Conservation Scope</h2> <div class="flex items-center gap-6"><span class="text-[14px] font-medium text-[#B16F08]">Tier 3</span> `);
    {
      $$renderer2.push("<!--[0-->");
      Chevron_up($$renderer2, { size: 24, strokeWidth: 2.5 });
    }
    $$renderer2.push(`<!--]--></div></button> <div class="mx-3 border-t border-[#E4C9A0]"></div> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="space-y-5 px-6 pb-2 pt-6"><label class="block"><span class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]">Conservation Goals</span> <input${attr("value", conservationScope.conservationGoals)} type="text" class="h-[54px] w-full rounded-[16px] border border-[#F0E0C7] bg-white px-4 text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"/></label> <label class="block"><span class="mb-3 block text-[19px] font-medium tracking-[-0.02em] text-[#171717]">Total Acres</span> <input${attr("value", conservationScope.totalAcres)} type="text" class="h-[54px] w-full rounded-[16px] border border-[#F0E0C7] bg-white px-4 text-center text-[18px] font-normal text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C78D34]"/></label></div>`);
    }
    $$renderer2.push(`<!--]--></section></div></div></div>`);
  });
}
export {
  _page as default
};
