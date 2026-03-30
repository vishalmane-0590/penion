<script>
  import { Mail, Lock, Eye, EyeOff } from "lucide-svelte";
  import Toggle from "$lib/components/ui/Toggle.svelte";

  let email = $state("");
  let password = $state("");
  let showPassword = $state(false);
  let rememberMe = $state(false);
  let loading = $state(false);

  async function handleSubmit(e) {
    e.preventDefault();
    loading = true;
    // Simulated login for POC
    await new Promise((resolve) => setTimeout(resolve, 1500));
    loading = false;
    alert("Login submitted (POC). Email: " + email);
  }
</script>

<div class="w-full max-w-md mx-4">
  <div class="bg-white border border-[#EACFB6] rounded-xl shadow-sm p-8">
    <!-- Logo -->
    <div class="flex justify-center mb-6">
      <img src="/Logo.png" alt="Penion" class="h-12" />
    </div>

    <!-- Heading -->
    <h1 class="text-xl font-bold text-gray-800 text-center">Welcome back</h1>
    <p class="text-sm text-gray-500 text-center mt-1 mb-6">Sign in to your account</p>

    <!-- Form -->
    <form onsubmit={handleSubmit} class="space-y-4">
      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Mail size={18} strokeWidth={1.5} />
          </span>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            bind:value={email}
            required
            class="w-full border border-[#EACFB6] rounded-lg pl-10 pr-4 py-2.5 text-sm bg-white placeholder-gray-400 outline-none focus:ring-1 focus:ring-[#A3703E] focus:border-[#A3703E] transition-colors"
          />
        </div>
      </div>

      <!-- Password -->
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Lock size={18} strokeWidth={1.5} />
          </span>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            bind:value={password}
            required
            class="w-full border border-[#EACFB6] rounded-lg pl-10 pr-10 py-2.5 text-sm bg-white placeholder-gray-400 outline-none focus:ring-1 focus:ring-[#A3703E] focus:border-[#A3703E] transition-colors"
          />
          <button
            type="button"
            onclick={() => (showPassword = !showPassword)}
            class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {#if showPassword}
              <EyeOff size={18} strokeWidth={1.5} />
            {:else}
              <Eye size={18} strokeWidth={1.5} />
            {/if}
          </button>
        </div>
      </div>

      <!-- Remember me + Forgot password -->
      <div class="flex items-center justify-between pt-1">
        <Toggle label="Remember me" bind:checked={rememberMe} />
        <a href="/login" class="text-sm text-[#A26D1D] hover:underline">Forgot password?</a>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        disabled={loading}
        class="w-full bg-[#A26D1D] hover:bg-[#8B5C18] disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
      >
        {#if loading}
          Signing in...
        {:else}
          Sign In
        {/if}
      </button>
    </form>

    <!-- Footer -->
    <p class="text-sm text-gray-500 text-center mt-6">
      Don't have an account? <span class="text-[#A26D1D] font-medium">Contact admin</span>
    </p>
  </div>
</div>
