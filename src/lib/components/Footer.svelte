<!-- Footer -->
<script>
	let year = new Date().getFullYear();
	export let email = 'umututku@example.com';
</script>

<footer
	class="flex items-center justify-between px-6 py-10 text-xs text-white/50 sm:px-14 md:px-20"
>
	<p>© <span>{year}</span> · All rights reserved</p>
	<nav class="flex items-center gap-6">
		<a class="transition hover:text-white" href="#aboutme">about</a>
		<a class="transition hover:text-white" href="#contact">contact</a>
		<a class="transition hover:text-white" href="#projects">projects</a>
		<a class="transition hover:text-white" href="#blog">blog</a>
		<a
			href={`mailto:${email}`}
			class="group flex items-center gap-2 rounded-full border border-green-400/30 bg-gradient-to-r from-green-700/80 via-green-600/80 to-emerald-500/80 px-5 py-2 shadow-lg transition-all duration-200 hover:scale-105"
		>
			<span class="relative flex items-center">
				<span
					class="mr-2 inline-block h-3 w-3 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_2px_rgba(34,197,94,0.7)]"
				></span>
			</span>
			<span class="font-medium tracking-wide text-white/90 drop-shadow">{email}</span>
		</a>
	</nav>
</footer>
