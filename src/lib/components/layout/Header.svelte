<script>
  import {
    Home,
    FolderOpen,
    Users,
    Search,
    Bell,
    ChevronDown,
  } from "lucide-svelte";
  import { page } from "$app/stores";
</script>

<header
  class="fixed top-0 left-64 right-0 h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10 w-[calc(100%-16rem)] min-w-0"
>
  <nav class="flex items-center gap-8">
    <a
      href="/dashboard"
      class="flex items-center gap-2 {$page.url.pathname === '/dashboard'
        ? 'text-[#C07026] text-sm font-semibold'
        : 'text-gray-400 hover:text-gray-600 text-sm font-medium'} select-none"
    >
      <Home size={18} strokeWidth={2} />
      Dashboard
    </a>
    <a
      href="/cases"
      class="flex items-center gap-2 {$page.url.pathname === '/cases'
        ? 'text-[#C07026] text-sm font-semibold'
        : 'text-gray-400 hover:text-gray-600 text-sm font-medium'} select-none"
    >
      <FolderOpen size={18} strokeWidth={2} />
      <!-- Case List -->
      Project
    </a>
    <a
      href="/client"
      class="flex items-center gap-2 {$page.url.pathname === '/client'
        ? 'text-[#C07026] text-sm font-semibold'
        : 'text-gray-400 hover:text-gray-600 text-sm font-medium'} select-none"
    >
      <Users size={18} strokeWidth={2} />
      Client
    </a>
    <a
      href="/find"
      class="flex items-center gap-2 {$page.url.pathname === '/find'
        ? 'text-[#C07026] text-sm font-semibold'
        : 'text-gray-400 hover:text-gray-600 text-sm font-medium'} select-none"
    >
      <Search size={18} strokeWidth={2} />
      Find
    </a>
  </nav>

  <div class="flex items-center gap-6">
    <button class="text-gray-400 hover:text-gray-600 relative">
      <Bell size={20} strokeWidth={2} />
      <span
        class="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-[#C07026] rounded-full"
      ></span>
    </button>
    <div
      class="flex items-center gap-3 cursor-pointer select-none border border-gray-200 rounded-full pl-1 pr-3 py-1 bg-white hover:bg-gray-50 transition-colors shadow-sm"
    >
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
        alt="Jamie Fox"
        class="w-8 h-8 rounded-full border border-gray-100 object-cover"
      />
      <span class="text-sm font-medium text-gray-700">Jamie Fox</span>
      <ChevronDown size={16} class="text-gray-400 ml-1" />
    </div>
  </div>
</header>
