// Shared UI state using Svelte 5 runes
export const modalState = $state({
  isManageClientModalOpen: false
});

export function openManageClientModal() {
  modalState.isManageClientModalOpen = true;
}

export function closeManageClientModal() {
  modalState.isManageClientModalOpen = false;
}

export function toggleManageClientModal() {
  modalState.isManageClientModalOpen = !modalState.isManageClientModalOpen;
}
