
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/(auth)" | "/(app)" | "/" | "/(app)/cases" | "/(app)/client" | "/(app)/client/[id]" | "/(app)/client/[id]/manage" | "/(app)/dashboard" | "/fill" | "/fill/[token]" | "/(app)/find" | "/(auth)/login" | "/(app)/project" | "/(app)/project/view" | "/(app)/project/[id]";
		RouteParams(): {
			"/(app)/client/[id]": { id: string };
			"/(app)/client/[id]/manage": { id: string };
			"/fill/[token]": { token: string };
			"/(app)/project/[id]": { id: string }
		};
		LayoutParams(): {
			"/(auth)": Record<string, never>;
			"/(app)": { id?: string };
			"/": { id?: string; token?: string };
			"/(app)/cases": Record<string, never>;
			"/(app)/client": { id?: string };
			"/(app)/client/[id]": { id: string };
			"/(app)/client/[id]/manage": { id: string };
			"/(app)/dashboard": Record<string, never>;
			"/fill": { token?: string };
			"/fill/[token]": { token: string };
			"/(app)/find": Record<string, never>;
			"/(auth)/login": Record<string, never>;
			"/(app)/project": { id?: string };
			"/(app)/project/view": Record<string, never>;
			"/(app)/project/[id]": { id: string }
		};
		Pathname(): "/" | "/cases" | "/client" | `/client/${string}` & {} | `/client/${string}/manage` & {} | "/dashboard" | `/fill/${string}` & {} | "/find" | "/login" | "/project/view" | `/project/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/Logo.png" | "/favicon.svg" | "/robots.txt" | string & {};
	}
}