<script>
  import { Menu, Upload } from "lucide-svelte";

  const defaultFiles = [
    "System Integration Guide.docx",
    "Project Timeline.zip",
    "Location Data Sheet.zip",
    "Site Plan Document.zip",
    "Process Diagram.docx",
    "On-site Safety Document.zip",
    "Network Configuration.docx",
    "Project Schedule.zip",
    "Sensor Data.zip",
    "Project Overview.zip",
    "System Schematic.docx",
    "Safety Protocols.zip",
    "Safety Protocols.zip",
  ];

  let fileInput;
  let docsFiles = $state(
    defaultFiles.map((name, index) => createFileCard(name, `seed-${index}`)),
  );

  function createFileCard(name, id) {
    const parts = name.split(".");
    const extension = (parts.pop() || "file").toUpperCase();
    const title = parts.join(".").replaceAll(" ", "\n");

    return {
      id,
      name,
      title,
      extension,
      badgeClass: getBadgeClass(extension),
      iconClass: getIconClass(extension),
    };
  }

  function getBadgeClass(extension) {
    if (extension === "DOCX") return "status-info";
    if (extension === "PDF") return "status-danger";
    if (extension === "ZIP") return "status-neutral";
    return "status-warning";
  }

  function getIconClass(extension) {
    if (extension === "DOCX") return "doc-icon-word";
    if (extension === "ZIP") return "doc-icon-zip";
    return "doc-icon-generic";
  }

  function openFilePicker() {
    fileInput?.click();
  }

  function handleUpload(event) {
    const selectedFiles = Array.from(event.currentTarget.files || []);

    if (!selectedFiles.length) return;

    docsFiles = [
      ...selectedFiles.map((file) =>
        createFileCard(file.name, `${file.name}-${file.lastModified}`),
      ),
      ...docsFiles,
    ];

    event.currentTarget.value = "";
  }
</script>

<div class="client-card flex h-[26rem] flex-col overflow-hidden">
  <div
    class="client-panel-header grid grid-cols-[24px_1fr_auto] items-center bg-[var(--client-surface-muted)] p-2.5 text-sm font-bold"
  >
    <Menu size={18} strokeWidth={2} class="relative z-10" />
    <span class="text-center text-[15px] font-bold">Docs & Files</span>
    <button
      type="button"
      onclick={openFilePicker}
      class="relative z-10 flex items-center gap-1 rounded-[8px] border border-[var(--client-border-strong)] bg-white px-3 py-1.5 text-[11px] font-medium text-[var(--color-primary)] shadow-sm transition-colors hover:bg-[var(--client-surface)]"
    >
      <Upload size={12} strokeWidth={2.5} /> Upload File
    </button>
  </div>
  <input
    bind:this={fileInput}
    type="file"
    class="hidden"
    multiple
    onchange={handleUpload}
  />
  <div
    class="client-scrollbar grid min-h-0 flex-1 grid-cols-2 gap-4 overflow-y-auto p-4 pr-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
  >
    {#each docsFiles as file (file.id)}
      <div
        class="flex min-h-[128px] flex-col justify-between rounded-[6px] border border-gray-200 bg-white px-2 py-3 text-center shadow-[0_8px_22px_rgba(0,0,0,0.03)] transition-colors hover:bg-gray-50"
      >
        <span
          class="client-title mb-3 flex min-h-[50px] items-start justify-center text-[10px] font-bold leading-[1.25]"
        >
          {file.title}
        </span>
        <div class="flex flex-col items-center">
          <div class="relative h-[46px] w-[38px]">
            <div class="doc-icon-sheet {file.iconClass}">
              <div class="doc-icon-corner"></div>
              <div class="doc-icon-lines">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div
              class="status-pill absolute -bottom-1 left-1/2 -translate-x-1/2 px-[5px] py-px text-[8px] font-bold text-white {file.badgeClass}"
            >
              {file.extension}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .doc-icon-sheet {
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
  }

  .doc-icon-corner {
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-top: 10px solid rgba(255, 255, 255, 0.85);
  }

  .doc-icon-lines {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
  }

  .doc-icon-lines div {
    width: 16px;
    border-top: 2px solid currentColor;
  }

  .doc-icon-lines div:nth-child(even) {
    width: 12px;
  }

  .doc-icon-word {
    background: linear-gradient(180deg, #dff0ff 0%, #bfe0ff 100%);
    color: #6aaef1;
  }

  .doc-icon-zip {
    background: linear-gradient(180deg, #f5f5f5 0%, #e6e6e6 100%);
    color: #1f2937;
  }

  .doc-icon-zip .doc-icon-lines div {
    width: 2px;
    height: 4px;
    border-top: 0;
    background: currentColor;
  }

  .doc-icon-generic {
    background: linear-gradient(180deg, #f3f7fb 0%, #dce7f3 100%);
    color: #6b7280;
  }
</style>
