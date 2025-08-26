<!-- Header -->
<script>
	export let name = 'Umut Utku';
	export let email = 'umututku@example.com';
</script>

<header class="flex justify-between p-6 sm:p-8">
	<a href="" class="flex items-center rounded-full px-5 text-2xl text-white/90 hover:text-white hover:bg-white/10">{name}</a>
	<a
		href={`mailto:${email}`}
		class="group flex items-center gap-2 rounded-full border border-white/30 bg-gradient-to-r from-[#18181b] via-[#232323] to-[#101010] px-5 py-3 shadow-lg transition-all duration-200 hover:bg-[#232323] hover:from-green-700/40"
	>
		<span class="relative">
			<span
				class="mr-2 inline-block h-3 w-3 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_2px_rgba(34,197,94,0.7)]"
			></span>
		</span>
		<span class="font-medium tracking-wide text-white/90 drop-shadow">{email}</span>
	</a>
</header>
