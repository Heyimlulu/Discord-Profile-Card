<script setup lang="ts">
const props = defineProps<{
  user?: ProfileData;
  success?: boolean;
}>();

const { user, success } = props;
</script>

<template>
  <div
    v-if="success"
    class="bg-white rounded-xl overflow-hidden shadow-sm w-[30rem]"
  >
    <!-- Banner/Avatar Section -->
    <div class="relative h-32">
      <div
        v-if="user?.banner?.url"
        :style="{ backgroundImage: `url(${user.banner.url}?size=2048)` }"
        class="w-full h-full bg-cover bg-center"
      ></div>
      <div
        v-else
        class="w-full h-full bg-gradient-to-r from-pink-400 to-blue-400"
      ></div>
      <div class="absolute -bottom-12 left-4">
        <div class="relative">
          <img
            v-if="user?.avatar?.url"
            :src="`${user.avatar?.url}?size=128`"
            :alt="`${user.displayName || user.username}`"
            class="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
          <img
            v-else
            :src="`https://cdn.discordapp.com/embed/avatars/${Math.floor(
              Math.random() * 5
            )}.png`"
            :alt="`${user?.displayName || user?.username}`"
            class="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="pt-14 px-4 pb-4">
      <!-- User Info -->
      <div class="mb-4">
        <h2 class="text-gray-900 font-semibold text-lg flex items-center gap-2">
          {{ user?.displayName || user?.username }}
        </h2>
      </div>

      <!-- Badges -->
      <div class="flex gap-2 mb-6">
        <div
          v-for="badge in user?.badges"
          :key="badge.name"
          class="group/tooltip relative"
        >
          <NuxtImg
            :src="badge.image"
            :alt="badge.name"
            class="h-8 w-8 transition-transform hover:scale-110"
          />
          <!-- <div
            v-if="!badge.image.includes('Nitro.svg')"
            class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all whitespace-nowrap z-50"
          >
            {{ badge.name }}
          </div> -->
        </div>
      </div>

      <!-- Buttons -->
      <NuxtLink
        :href="`discord://-/users/${user?.id}`"
        class="w-full py-2.5 bg-[#5865F2] text-white rounded-md hover:bg-[#4752C4] transition-colors font-medium inline-block text-center"
      >
        Message {{ user?.displayName || user?.username }} on Discord
      </NuxtLink>
    </div>
  </div>
  <template v-else>
    <NotFound />
  </template>
</template>
