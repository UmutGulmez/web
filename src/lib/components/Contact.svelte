<!-- Contact Section -->
<section id="contact" class="section">
	<div class="section-title">contact</div>
	<div class="mt-7 flex justify-center">
		<div
			class="card min-h-min! mb-10 mt-12 w-full py-3 text-white backdrop-blur-sm md:ml-0 md:mr-4 md:mt-0 md:w-[420px] md:self-auto lg:mr-12 lg:w-[620px]"
		>
			<div class="flex justify-center">
				{#each Array(6) as _, i}
					<a
						href="https://linkedin.com/"
						target="_blank"
						aria-label="LinkedIn"
						class="group relative mx-2 flex flex-col rounded-xl border border-white/10 bg-[#0B0B0B] p-3 shadow-xl transition-transform hover:bg-[#232323]"
					>
						<svg
							class="h-6 w-6 text-gray-400 transition hover:text-white"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"
							/>
						</svg>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
