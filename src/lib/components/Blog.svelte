<!-- Blog Section -->
<section id="blog" class="section">
	<div class="section-title">blog</div>
	<div class="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each [{ title: 'Interface Motion Study', desc: 'A study on smooth UI transitions and micro-interactions for modern web apps.', year: '2025' }, { title: 'Design System', desc: 'Reusable components and guidelines for scalable product design.', year: '2024' }, { title: 'Interaction Lab', desc: 'Prototyping and testing new forms of digital interaction.', year: '2023' }, { title: 'Interaction Lab', desc: 'Prototyping and testing new forms of digital interaction.', year: '2023' }, { title: 'Interaction Lab', desc: 'Prototyping and testing new forms of digital interaction.', year: '2023' }] as blog}
			<article class="card">
				<div class="flex flex-1 flex-col justify-between p-6">
					<div>
						<h3 class="mb-1 text-lg font-semibold text-white">{blog.title}</h3>
						<p class="mb-2 text-sm text-white/60">{blog.desc}</p>
					</div>
					<span class="mb-2 inline-block w-fit rounded bg-white/5 px-2 py-1 text-xs text-white/40"
						>{blog.year}</span
					>
				</div>
				<div class="card-footer" style="min-height:48px;">
					<div class="card-footer-divider"></div>
					<a href="#" class="card-btn">View</a>
					<a href="#" class="card-btn-right">Source</a>
				</div>
			</article>
		{/each}
		<a href="" class="see-more-card">
			<p class="see-more-text">
				See More
				<span class="p-2">
					<i class="fa-solid fa-arrow-right"></i>
				</span>
			</p>
		</a>
	</div>
</section>
