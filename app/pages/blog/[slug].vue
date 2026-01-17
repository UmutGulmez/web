<template>
  <div>

    <div class="container mx-auto grid grid-cols-4 gap-6 p-6">
      <!-- Left sidebar -->
      <div class="col-span-1 p-4 px-8 pt-9 rounded">
        <nuxt-link to="/">
          <div class="text-xl flex items-center opacity-85 hover:opacity-100">
            <i class="fas fa-arrow-left mr-2"/>
            Geri Dön
          </div>
        </nuxt-link>
        <br>
        <div class="detailsBox">
          <p class="text-center text-sm font-serif w-full mb-3">YAZI ETİKETLERİ</p>
            <span class="tag" v-for="tag in tagsList" :key="tag">{{ tag }}</span>
        </div>
      </div>

      <!-- Main content -->
      <div class="col-span-2 p-6 rounded shadow">
          <h1>
             {{ post?.title }}
          </h1>
          <hr class="border-gray-500" >
          <div class="mt-2 mb-7 flex justify-between">
            <div class="flex gap-2">
              <div class="text-md text-gray-500 hover:text-gray-300">
                <i class="icon fas fa-calendar-alt" />
                {{ formattedDate }}
              </div>
            <div class="text-md text-gray-500 hover:text-gray-300">
              <i class="fas fa-hourglass-start"/>
              {{ post?.readingTime }}
            </div>
            </div>
            <div>
              <i class="text-md fas fa-link text-gray-500 hover:text-gray-300"/>
            </div>
          </div>
          <NuxtImg :src="post?.bannerImage" class="bannerImage"/>
          <ContentRenderer :tag="'article'" :value="post || {}" class="article-body" />

          <div class=" mt-9 pt-9 flex justify-center">
            <ContactLinks/>
          </div>
      </div>

      <!-- Right sidebar -->
      <div class="col-span-1 p-4 rounded">

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const route = useRoute()
const pageId = computed(() => 'blog-' + route.path)
const { data: post } = await useAsyncData(pageId, () => {
  return queryCollection('blog')
    .path(route.path)
    .first()
})

function formatDateToDDMMYYYY(input?: string | Date | null) {
  if (!input) return ''
  const d = input instanceof Date ? input : new Date(String(input))
  if (Number.isNaN(d.getTime())) return ''
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const yyyy = d.getFullYear()
  return `${dd}.${mm}.${yyyy}`
}

const formattedDate = computed(() => {
  const raw = post?.value?.date ?? null
  return formatDateToDDMMYYYY(raw)
})

const tagsList = computed(() => {
  const t = post?.value?.tags ?? ''
  if (Array.isArray(t)) return t
  return String(t)
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)
})

</script>

<style >
h1 {
  @apply text-4xl pb-4
}

.bannerImage {
  @apply w-full h-auto rounded-lg mb-7;
}

.article-body {
  @apply text-xl;
  color: rgba(255, 255, 255, 0.795);
  h1 {
    @apply text-6xl mb-9
  }
  p > a {
    @apply underline hover:text-white
  }
  p, h2, h3, h4, h5, h6 {
    @apply py-2
  }
  h1, h2, h3, h4, h5, h6 {
    @apply text-white text-2xl pt-5;
    & > a {
      @apply cursor-text;
      pointer-events: none;
    }
  }
  p > img {
    @apply mx-auto w-full p-5 rounded-md bg-white mt-4;
  }
  p.image-alt {
    @apply text-center text-sm
  }
  pre {
    @apply font-serif p-5 text-base bg-gradient-to-br from-[#18181b] via-[#232323] to-[#101010] rounded-lg my-2
  }
  hr {
  @apply my-2 p-6 border-0 flex justify-center ;
  &:before {
        content: "...";
        display: inline-block;
        margin-left: .6em;
        color: #fafafa;
        position: relative;
        top: -20px;
        font-weight: 400;
        font-style: italic;
        font-size: 30px;
        letter-spacing: .6em;

  }
}
}

.detailsBox {
  @apply border border-white/10 mt-4 bg-gradient-to-br from-[#18181b] via-[#232323] to-[#101010] rounded-lg p-4 h-64 shadow-md;
}

.tag {
  @apply inline-block bg-[#101010] text-white text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-md;
}
</style>