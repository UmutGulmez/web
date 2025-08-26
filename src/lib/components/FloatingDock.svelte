<!-- Floating Navigation Dock -->
<script lang="ts">
	import { onMount } from 'svelte';
	let active = 'dock-home';
	const dockLinks = [
		{ id: 'dock-home', section: 'top' },
		{ id: 'dock-aboutme', section: 'aboutme' },
		{ id: 'dock-contact', section: 'contact' },
		{ id: 'dock-projects', section: 'projects' },
		{ id: 'dock-blog', section: 'blog' }
	];

	function getSectionTop(id: string) {
		const el = document.getElementById(id) || document.querySelector(`#${id}`);
		if (!el) return Infinity;
		const rect = el.getBoundingClientRect();
		return rect.top + window.scrollY;
	}

	function highlightDock() {
		const scroll = window.scrollY + window.innerHeight / 4;
		let newActive = dockLinks[0].id;
		for (let i = 0; i < dockLinks.length; i++) {
			const currTop = getSectionTop(dockLinks[i].section);
			const nextTop = i + 1 < dockLinks.length ? getSectionTop(dockLinks[i + 1].section) : Infinity;
			if (scroll >= currTop && scroll < nextTop) {
				newActive = dockLinks[i].id;
				break;
			}
		}
		active = newActive;
	}

	onMount(() => {
		window.addEventListener('scroll', highlightDock, { passive: true });
		window.addEventListener('resize', highlightDock);
		highlightDock();
		return () => {
			window.removeEventListener('scroll', highlightDock);
			window.removeEventListener('resize', highlightDock);
		};
	});
</script>

<nav
	id="floating-dock"
	class="fixed left-1/2 top-8 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-[#18181b] via-[#232323] to-[#101010] px-4 py-2 shadow-2xl backdrop-blur-md transition-all duration-300"
>
	<a
		href="#top"
		id="dock-home"
		class="group flex h-10 w-10 items-center justify-center rounded-full bg-[#232323] transition {active ===
		'dock-home'
			? 'bg-white/10 text-white shadow-lg'
			: 'text-white/90'}"
		aria-label="Home"
	>
		<svg
			class="h-6 w-6 text-white transition"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3 12l9-7 9 7M4 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10"
			/></svg
		>
	</a>
	<a
		href="#aboutme"
		id="dock-aboutme"
		class="rounded-full px-4 py-2 font-medium transition {active === 'dock-aboutme'
			? 'bg-white/10 text-white shadow-lg'
			: 'text-white/90'}">About Me</a
	>
	<a
		href="#contact"
		id="dock-contact"
		class="rounded-full px-4 py-2 font-medium transition {active === 'dock-contact'
			? 'bg-white/10 text-white shadow-lg'
			: 'text-white/90'}">Contact</a
	>
	<a
		href="#projects"
		id="dock-projects"
		class="rounded-full px-4 py-2 font-medium transition {active === 'dock-projects'
			? 'bg-white/10 text-white shadow-lg'
			: 'text-white/90'}">Projects</a
	>
	<a
		href="#blog"
		id="dock-blog"
		class="rounded-full px-4 py-2 font-medium transition {active === 'dock-blog'
			? 'bg-white/10 text-white shadow-lg'
			: 'text-white/90'}">Blog</a
	>
</nav>
