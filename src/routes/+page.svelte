<script>
	import FloatingDock from '$lib/components/FloatingDock.svelte';
	import Header from '$lib/components/Header.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<!-- Background gradient + subtle vignette -->
<div aria-hidden="true" class="fixed inset-0 -z-10">
	<div
		class="absolute inset-0 bg-[radial-gradient(1200px_700px_at_0%_0%,_#333533_0%,_#151515_45%,_#0e0e0e_70%,_#000_100%)]"
	></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_50%,_rgba(0,0,0,0.65),_transparent_70%)]"
	></div>
</div>
<div class="grain"></div>

<FloatingDock />
<Header />

<main class="min-h-[calc(84vh-88px)]">
	<div
		class="top-[34vh] flex min-h-[calc(84vh-88px)] items-center justify-center px-6 sm:top-[30vh] sm:px-14 md:px-20"
	>
		<div class="max-w-3xl">
			<h2 class="pb-2 text-center font-[Ubuntu] text-3xl text-gray-300/90 sm:text-5xl md:text-6xl">
				<span>
					<span>
						an electronics engineer who <span class="font-semibold text-white">codes</span>
					</span>
				</span>
			</h2>
		</div>
	</div>
</main>

<AboutMe />
<Contact />
<Projects />
<Blog />
<Footer />
