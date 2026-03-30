<script>
  const todayItem = {
    project: "ACS-GROW Project",
    name: "Max Jacob",
    task: "Review Service Agreement",
    status: "Complete",
    time: "12:55am",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=160&h=160&auto=format&fit=crop",
  };

  const yesterdayItems = [
    {
      time: "9:56am",
      name: "Ethan Miller",
      task: "Setup project and assign preparers",
      status: "Not started",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      avatar:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=160&h=160&auto=format&fit=crop",
    },
    {
      time: "9:48am",
      name: "Dakota Evans",
      task: "CPA-1270 Signed",
      status: "In progress",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=160&h=160&auto=format&fit=crop",
    },
    {
      time: "9:47am",
      name: "Cameron Lee",
      task: "FSA Third Party Release Signed",
      status: "Not started",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      avatar:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=160&h=160&auto=format&fit=crop",
    },
    {
      time: "12:55am",
      name: "Harper Collins",
      task: "Request info from FSA",
      status: "Complete",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=160&h=160&auto=format&fit=crop",
    },
  ];

  function getStatusClass(status) {
    if (status === "Complete") {
      return "status-pill status-success";
    }

    if (status === "In progress") {
      return "status-pill status-warning";
    }

    return "status-pill status-danger";
  }
</script>

<section
  class="client-card-muted mt-7 -mx-3 rounded-[20px] px-4 pb-8 pt-5 shadow-[0_6px_24px_rgba(0,85,101,0.06)] sm:px-5 lg:-mx-5 lg:px-6"
>
  <div class="relative">
    <div class="mx-auto mb-8 h-px w-full bg-[var(--client-border)]"></div>
    <div class="absolute left-1/2 top-[-15px] -translate-x-1/2">
      <span
        class="inline-flex h-[30px] items-center justify-center rounded-[4px] bg-[var(--color-sidebar)] px-4 text-[13px] font-medium text-white shadow-sm"
      >
        Project Activity
      </span>
    </div>
  </div>

  <div class="relative mx-auto max-w-[1240px] pt-8">
    <div
      class="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[var(--client-timeline-line)] lg:block"
    ></div>

    <div class="mb-7 flex justify-center">
      <span
        class="inline-flex h-[28px] items-center justify-center rounded-[4px] bg-[var(--color-primary)] px-5 text-[13px] font-semibold text-white"
      >
        TODAY
      </span>
    </div>

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div class="pr-0 lg:pr-6">
        <div class="border-t border-[var(--client-timeline-line)] pt-3">
          <div class="mb-2 text-[14px] font-normal text-slate-800">
            {todayItem.project}
          </div>

          <div class="flex items-start gap-3">
            <img
              src={todayItem.avatar}
              alt={todayItem.name}
              class="h-[42px] w-[42px] rounded-full object-cover"
            />

            <div class="min-w-0 flex-1">
              <div
                class="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-3"
              >
                <div
                  class="min-w-0 flex flex-1 flex-wrap items-center gap-x-4 gap-y-2 pr-2 lg:flex-nowrap"
                >
                  <span
                    class="client-link shrink-0 text-[14px] font-medium underline underline-offset-[2px]"
                  >
                    {todayItem.name}
                  </span>
                  <span class="client-link truncate text-[13px] font-normal">
                    {todayItem.task}
                  </span>
                </div>
                <span
                  class={`inline-flex h-[27px] shrink-0 items-center rounded-[6px] px-3 text-[12px] font-medium ${getStatusClass(todayItem.status)}`}
                >
                  {todayItem.status}
                </span>
              </div>

              <div class="mt-2 flex items-center gap-2">
                <span
                  class="inline-block h-[16px] w-[16px] rounded-[3px] border border-slate-800 bg-white"
                ></span>
                <p class="text-[13px] leading-[1.3] text-slate-700">
                  {todayItem.details}
                </p>
              </div>

              <div class="mt-3 pl-[2px] text-right text-[12px] text-slate-600">
                {todayItem.time}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>

    <div class="mb-6 mt-4 flex justify-center lg:mt-0">
      <span
        class="inline-flex h-[28px] items-center justify-center rounded-[4px] bg-[var(--color-primary)] px-5 text-[13px] font-semibold text-white"
      >
        YESTERDAY
      </span>
    </div>

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div></div>

      <div class="pl-0 lg:pl-6">
        <div class="space-y-5">
          <div
            class="border-t border-[var(--client-timeline-line)] pt-3 text-[14px] font-normal text-slate-800"
          >
            ACS-GROW Project
          </div>

          {#each yesterdayItems as item}
            <div
              class="grid grid-cols-[56px_minmax(0,1fr)] gap-4 lg:grid-cols-[78px_minmax(0,1fr)]"
            >
              <div class="pt-[46px] text-right text-[12px] text-slate-700">
                {item.time}
              </div>

              <div class="flex items-start gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  class="mt-0.5 h-[42px] w-[42px] rounded-full object-cover"
                />

                <div class="min-w-0 flex-1">
                  <div
                    class="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-3"
                  >
                    <div
                      class="min-w-0 flex flex-1 flex-wrap items-center gap-x-4 gap-y-2 pr-2 lg:flex-nowrap"
                    >
                      <span
                        class="client-link shrink-0 text-[14px] font-medium underline underline-offset-[2px]"
                      >
                        {item.name}
                      </span>
                      <span
                        class="client-link truncate text-[13px] font-normal"
                      >
                        {item.task}
                      </span>
                    </div>
                    <span
                      class={`inline-flex h-[27px] shrink-0 items-center rounded-[6px] px-3 text-[12px] font-medium ${getStatusClass(item.status)}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p class="mt-2 text-[13px] leading-[1.55] text-slate-700">
                    {item.details}
                  </p>

                  {#if item.status === "Complete"}
                    <div class="mt-2 flex items-center gap-2">
                      <span
                        class="inline-block h-[16px] w-[16px] rounded-[3px] border border-slate-800 bg-white"
                      ></span>
                      <p class="text-[13px] leading-[1.3] text-slate-700">
                        {item.details}
                      </p>
                    </div>
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
