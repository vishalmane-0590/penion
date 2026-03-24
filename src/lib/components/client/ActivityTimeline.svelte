<script>
  // Timeline section component
</script>

<div class="w-full flex flex-col items-center mt-6">
  <div class="bg-[#A26D1D] text-white font-bold text-[13px] px-8 py-1.5 rounded-sm shadow-md mb-8 tracking-wider">
    Client Activity
  </div>

  <div class="relative w-full max-w-5xl mx-auto flex flex-col items-center">
    <!-- Central Line -->
    <div class="absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#EACFB6] -translate-x-1/2 z-0"></div>

    <!-- TODAY SECTION -->
    <div class="relative w-full flex flex-col items-center mb-10">
      <div class="z-10 bg-[#C07026] text-white font-extrabold text-[10px] px-5 py-1.5 rounded shadow-sm mb-8 ring-4 ring-[#FCFBF8]">
        TODAY
      </div>

      <!-- Activity Item 1 (LEFT) -->
      <div class="w-full relative flex justify-end pr-[50%] -mt-4">
        <div class="absolute right-1/2 translate-x-1/2 top-10 w-3.5 h-3.5 bg-white border-[3.5px] border-[#A26D1D] rounded-full z-20 shadow-sm"></div>
        <div class="w-[440px] pr-8 py-2">
          <span class="block text-[13px] font-bold text-gray-500 mb-2 text-right uppercase tracking-wider">ACS-GROW Project</span>
          <div class="bg-white border border-[#EACFB6] rounded-xl shadow-[0_4px_12px_rgba(162,109,29,0.08)] p-5 flex gap-4 transition-all hover:scale-[1.01] hover:shadow-[0_8px_20px_rgba(162,109,29,0.12)]">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop" class="w-14 h-14 rounded-full border-2 border-[#FDF8F3] shadow-sm shrink-0" alt="user" />
            <div class="flex flex-col w-full">
              <div class="flex items-start justify-between">
                <span class="text-[15px] font-extrabold text-gray-900">Max Jacobs</span>
                <div class="flex flex-col items-end gap-1.5">
                  <span class="text-[#A26D1D] text-[10px] bg-[#FDF8F3] font-bold px-2 py-0.5 rounded border border-[#EACFB6]/30 uppercase tracking-tighter">Review Service Agreement</span>
                  <span class="bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0] px-2 py-0.5 rounded text-[9px] font-bold uppercase">Complete</span>
                </div>
              </div>
              <div class="flex items-start gap-2.5 mt-3">
                <div class="w-4 h-4 border-2 border-[#EACFB6] rounded bg-[#FDF8F3] mt-0.5 shrink-0"></div>
                <p class="text-[13px] text-gray-600 leading-relaxed font-medium">Verified the service agreement for the current project phase.</p>
              </div>
            </div>
            <div class="absolute -bottom-6 left-0 text-gray-400 text-[10px] font-bold opacity-70">12:55 AM</div>
          </div>
        </div>
      </div>
    </div>

    <!-- YESTERDAY SECTION -->
    <div class="relative w-full flex flex-col items-center">
      <div class="z-10 bg-[#C07026] text-white font-extrabold text-[10px] px-4 py-1.5 rounded shadow-sm mb-10 ring-4 ring-[#FCFBF8]">
        YESTERDAY
      </div>

      <div class="w-full flex flex-col gap-12">
        <!-- Activity Item 2 (RIGHT) -->
        <div class="w-full relative flex justify-start pl-[50%]">
          <div class="absolute left-1/2 -translate-x-1/2 top-10 w-3.5 h-3.5 bg-[#A26D1D] rounded-full z-20 shadow-sm border-[3px] border-white"></div>
          <div class="w-[440px] pl-8 py-2">
            <span class="block text-[13px] font-bold text-gray-500 mb-2 uppercase tracking-wider">ACS-GROW Project</span>
            <div class="bg-white border border-[#EACFB6] rounded-xl shadow-sm p-4 flex gap-4 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=150&h=150&auto=format&fit=crop" class="w-14 h-14 rounded-full border-2 border-white shadow-sm shrink-0" alt="user" />
              <div class="flex flex-col w-full">
                <div class="flex items-start justify-between">
                  <span class="text-[15px] font-extrabold text-gray-900">Ethan Miller</span>
                  <div class="flex flex-col items-end gap-1.5">
                    <span class="text-[#A26D1D] text-[10px] bg-[#FDF8F3] font-bold px-2 py-0.5 rounded border border-[#EACFB6]/30 uppercase tracking-tighter">Setup project & preparers</span>
                    <span class="bg-[#FEE2E2] text-[#DC2626] border border-[#FECACA] px-2 py-0.5 rounded text-[9px] font-bold uppercase">Not started</span>
                  </div>
                </div>
                <p class="text-[12px] text-gray-600 mt-2 leading-relaxed font-medium">Initiating project setup tasks and coordinating with the team to assign preparers.</p>
              </div>
              <div class="absolute -bottom-6 right-0 text-gray-400 text-[10px] font-bold opacity-70">9:56 AM</div>
            </div>
          </div>
        </div>

        <!-- Activity Item 3 (RIGHT) -->
        <div class="w-full relative flex justify-start pl-[50%]">
          <div class="absolute left-1/2 -translate-x-1/2 top-8 w-3 h-3 bg-[#A26D1D] rounded-full z-20 shadow-sm border-2 border-white"></div>
          <div class="w-[440px] pl-8">
            <div class="bg-white border border-[#EACFB6]/60 rounded-xl p-4 flex gap-4 shadow-sm">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop" class="w-12 h-12 rounded-full border border-gray-100 shrink-0" alt="user" />
              <div class="flex flex-col w-full">
                <div class="flex items-center justify-between">
                  <span class="text-[14px] font-bold text-gray-800">Dakota Evans</span>
                  <span class="bg-[#FFFBEB] text-[#D97706] border border-[#FEF3C7] px-2 py-0.5 rounded text-[9px] font-extrabold uppercase">In progress</span>
                </div>
                <p class="text-[12px] text-gray-500 mt-1 leading-snug">The CPA-1270 form has been received and is currently being reviewed and signed.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Activity Item 4 (RIGHT) -->
        <div class="w-full relative flex justify-start pl-[50%]">
          <div class="absolute left-1/2 -translate-x-1/2 top-8 w-3 h-3 bg-[#A26D1D] rounded-full z-20 shadow-sm border-2 border-white"></div>
          <div class="w-[440px] pl-8">
            <div class="bg-white border border-[#EACFB6]/60 rounded-xl p-4 flex gap-4 shadow-sm">
              <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=150&h=150&auto=format&fit=crop" class="w-12 h-12 rounded-full border border-gray-100 shrink-0" alt="user" />
              <div class="flex flex-col w-full">
                <div class="flex items-center justify-between">
                  <span class="text-[14px] font-bold text-gray-800">Cameron Lee</span>
                  <span class="bg-[#FEE2E2] text-[#DC2626] border border-[#FECACA] px-2 py-0.5 rounded text-[9px] font-extrabold uppercase">Not started</span>
                </div>
                <p class="text-[12px] text-gray-500 mt-1 leading-snug">Waiting for the FSA release documents to be finalized before proceeding.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Activity Item 5 (RIGHT) -->
        <div class="w-full relative flex justify-start pl-[50%]">
          <div class="absolute left-1/2 -translate-x-1/2 top-10 w-3.5 h-3.5 bg-white border-[3.5px] border-[#A26D1D] rounded-full z-20 shadow-sm"></div>
          <div class="w-[440px] pl-8 py-2">
            <div class="bg-white border border-[#EACFB6] rounded-xl shadow-sm p-5 flex gap-4 transition-transform hover:scale-[1.01]">
              <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=150&h=150&auto=format&fit=crop" class="w-14 h-14 rounded-full border-2 border-white shadow-sm shrink-0" alt="user" />
              <div class="flex flex-col w-full">
                <div class="flex items-start justify-between">
                  <span class="text-[15px] font-extrabold text-gray-900">Harper Collins</span>
                  <span class="bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0] px-2.5 py-0.5 rounded text-[9px] font-bold uppercase">Complete</span>
                </div>
                <div class="flex items-start gap-2.5 mt-3">
                  <div class="w-4 h-4 border-2 border-[#EACFB6] rounded bg-[#FDF8F3] mt-0.5 shrink-0"></div>
                  <p class="text-[13px] text-gray-600 leading-relaxed font-medium">Successfully gathered the required documentation from the PSA.</p>
                </div>
              </div>
              <div class="absolute -bottom-6 right-0 text-gray-400 text-[10px] font-bold opacity-70">12:55 AM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
