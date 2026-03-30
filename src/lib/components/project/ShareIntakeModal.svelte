<script>
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { Copy, Check, ChevronDown, X } from "lucide-svelte";
  import { fade, scale } from "svelte/transition";

  let { open = false, onClose = () => {} } = $props();

  let form = $state({
    mail: "Test@example.com",
    cc: "Test@example.com",
    subject: "Client Intake Form - Action Required",
    template: "Client Intake",
    content:
      "Dear,\n\nWe’re excited to begin working with you! To help us better understand your needs, please fill out our client intake form by clicking the link below.\n\n{{magic_link}}\n\nThis form ensures we have all the necessary details to serve you effectively. If you have any questions or concerns, feel free to reach out.\n\nBest regards,\nPinion",
    linkExpiryDays: 7,
    stages: ["Client Profile", "Conservation Scope"],
  });

  let generatedLink = $state("https://client-intake.app/fill/ABCD1234rer");
  let isCopied = $state(false);

  const templates = ["Client Intake"];
  const stages = ["Client Profile", "Eligibility Gate", "Conservation Scope"];
  const magicLinkPath = "/fill/ABCD1234rer";

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(generatedLink);
      isCopied = true;
      setTimeout(() => {
        isCopied = false;
      }, 1600);
    } catch {
      isCopied = false;
    }
  }

  function generateMagicLink() {
    if (browser) {
      generatedLink = `${window.location.origin}${magicLinkPath}`;
    }

    onClose();
    goto(magicLinkPath);
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleKeydown(event) {
    if (open && event.key === "Escape") {
      onClose();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-[120] flex items-center justify-center bg-[#2F2417]/28 px-3 py-5 backdrop-blur-[2px] sm:px-5"
    onclick={handleBackdropClick}
    transition:fade={{ duration: 180 }}
  >
    <div
      class="relative w-full max-w-[640px] overflow-hidden rounded-[18px] border border-[#D6A052] bg-[#FFFEFC] shadow-[0_30px_90px_rgba(84,56,16,0.2)]"
      onclick={(event) => event.stopPropagation()}
      transition:scale={{ duration: 220, start: 0.97 }}
    >
      <button
        type="button"
        onclick={onClose}
        class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#8A5B15] transition-colors hover:bg-[#F6EADA]"
        aria-label="Close share dialog"
      >
        <X size={18} />
      </button>

      <div class="max-h-[92vh] overflow-y-auto px-5 pb-5 pt-4 sm:px-5">
        <h2
          class="pr-10 text-[16px] font-semibold tracking-[-0.01em] text-[#B27212]"
        >
          Share Client Intake Form
        </h2>

        <div class="mt-5 space-y-3.5">
          <label class="block">
            <span class="mb-2 block text-[15px] font-medium text-[#171717]"
              >Mail</span
            >
            <input
              bind:value={form.mail}
              type="email"
              class="h-11 w-full rounded-[14px] border border-[#F0DFC8] bg-white px-4 text-[15px] text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors placeholder:text-[#9B9B9B] focus:border-[#C58B33]"
            />
          </label>

          <label class="block">
            <span class="mb-2 block text-[15px] font-medium text-[#171717]"
              >CC</span
            >
            <input
              bind:value={form.cc}
              type="email"
              class="h-11 w-full rounded-[14px] border border-[#F0DFC8] bg-white px-4 text-[15px] text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors placeholder:text-[#9B9B9B] focus:border-[#C58B33]"
            />
          </label>

          <label class="block">
            <span class="mb-2 block text-[15px] font-medium text-[#171717]"
              >Subject</span
            >
            <input
              bind:value={form.subject}
              type="text"
              class="h-11 w-full rounded-[14px] border border-[#F0DFC8] bg-white px-4 text-[15px] text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors placeholder:text-[#9B9B9B] focus:border-[#C58B33]"
            />
          </label>

          <label class="block">
            <span class="mb-2 block text-[15px] font-medium text-[#171717]"
              >Template</span
            >
            <div class="relative">
              <select
                bind:value={form.template}
                class="h-11 w-full appearance-none rounded-[14px] border border-[#F0DFC8] bg-white px-4 pr-12 text-[15px] text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors focus:border-[#C58B33]"
              >
                {#each templates as template}
                  <option value={template}>{template}</option>
                {/each}
              </select>
              <span
                class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#171717]"
              >
                <ChevronDown size={18} strokeWidth={2.4} />
              </span>
            </div>
          </label>

          <label class="block">
            <span class="mb-2 block text-[15px] font-medium text-[#171717]"
              >Content</span
            >
            <textarea
              bind:value={form.content}
              rows="9"
              class="min-h-[290px] w-full rounded-[14px] border border-[#F0DFC8] bg-white px-4 py-3.5 text-[15px] leading-[1.55] text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors placeholder:text-[#9B9B9B] focus:border-[#C58B33]"
            ></textarea>
          </label>

          <label class="block">
            <span class="mb-2 block text-[15px] font-medium text-[#171717]"
              >Link Expiry Interval (Days)</span
            >
            <div class="relative">
              <input
                bind:value={form.linkExpiryDays}
                type="number"
                min="1"
                class="h-11 w-full rounded-[14px] border border-[#F0DFC8] bg-white px-4 pr-11 text-[15px] text-[#171717] shadow-[inset_0_1px_2px_rgba(89,52,9,0.03)] outline-none transition-colors [appearance:textfield] focus:border-[#C58B33]"
              />
              <span
                class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#CA943B]"
              >
                <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 2L11 8H1L6 2Z" fill="currentColor"></path>
                  <path d="M6 16L1 10H11L6 16Z" fill="currentColor"></path>
                </svg>
              </span>
            </div>
          </label>

          <fieldset class="pt-1">
            <legend class="text-[15px] font-medium text-[#171717]"
              >Select stages to share</legend
            >
            <div class="mt-3 space-y-5">
              {#each stages as stage}
                <label
                  class="flex items-center gap-3 text-[15px] font-medium text-[#171717]"
                >
                  <span
                    class="relative flex h-6 w-6 items-center justify-center"
                  >
                    <input
                      type="checkbox"
                      value={stage}
                      bind:group={form.stages}
                      class="peer h-6 w-6 appearance-none rounded-[6px] border border-[#CFCFCF] bg-white transition-colors checked:border-[#E6C99B] checked:bg-white"
                    />
                    <svg
                      class="pointer-events-none absolute h-3.5 w-3.5 text-[#D39B3E] opacity-0 transition-opacity peer-checked:opacity-100"
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
                  <span>{stage}</span>
                </label>
              {/each}
            </div>
          </fieldset>

          <div class="pt-1">
            <button
              type="button"
              onclick={generateMagicLink}
              class="inline-flex h-10 items-center rounded-[6px] bg-[#B2740E] px-4 text-[15px] font-medium text-white transition-colors hover:bg-[#98620B]"
            >
              Generate Magic Link
            </button>
          </div>

          <div
            class="rounded-[12px] border border-[#F2E5D4] bg-[#FBF8F3] pl-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
          >
            <div
              class="rounded-[10px] border-l-[4px] border-[#B2740E] bg-[#F7F3ED] px-4 py-3 text-[15px] text-[#171717]"
            >
              {generatedLink}
            </div>
          </div>

          <div
            class="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-start"
          >
            <button
              type="button"
              onclick={copyLink}
              class="inline-flex h-10 items-center justify-center gap-2 rounded-[6px] border border-[#F1E2CC] bg-[#FFF9F1] px-4 text-[15px] font-medium text-[#B2740E] transition-colors hover:bg-[#FDF1DF]"
            >
              {#if isCopied}
                <Check size={18} strokeWidth={2.2} />
                Copied
              {:else}
                <Copy size={18} strokeWidth={2.2} />
                Copy Link
              {/if}
            </button>

            <button
              type="button"
              onclick={onClose}
              class="inline-flex h-10 items-center justify-center gap-2 rounded-[6px] bg-[#B2740E] px-7 text-[15px] font-medium text-white transition-colors hover:bg-[#98620B]"
            >
              <Check size={18} strokeWidth={2.6} />
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
