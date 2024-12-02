<script setup lang="ts">
import {
  LinkIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon,
} from "@heroicons/vue/20/solid";

const props = defineProps<{
  user?: ProfileData;
  success?: boolean;
}>();

const { user, success } = props;
</script>

<template>
  <div
    v-if="success"
    class="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden transition-all duration-300 max-w-full min-w-[20rem] min-h-[17.5rem]"
  >
    <div class="relative flex-shrink-0">
      <NuxtImg
        v-if="user?.avatar?.url"
        :src="`${user.avatar?.url}?size=1024`"
        :alt="`${user.displayName || user.username}`"
        class="w-full md:w-80 h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <NuxtImg
        v-else
        :src="`https://cdn.discordapp.com/embed/avatars/${Math.floor(
          Math.random() * 5
        )}.png`"
        :alt="`${user?.displayName || user?.username}`"
        class="w-full md:w-80 h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div class="flex flex-col flex-grow p-6 space-y-4">
      <div>
        <h2
          class="flex items-center gap-2 text-2xl md:text-3xl font-bold text-gray-900"
        >
          {{ user?.displayName || user?.username }}
          <span
            v-if="user && user.accountAge > '1'"
            class="text-sm md:text-base font-medium text-gray-500"
          >
            ({{ user?.accountAge }} year{{
              parseInt(user?.accountAge) > 1 ? "s" : ""
            }}
            on Discord)
          </span>
          <div class="group/tooltip relative">
            <StarIcon
              v-if="user?.id === '265896171384340480'"
              class="h-6 w-6 text-amber-400"
              aria-hidden="true"
            />
            <div
              class="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-amber-400 text-white text-sm rounded opacity-0 invisible md:group-hover/tooltip:opacity-100 md:group-hover/tooltip:visible transition-all whitespace-nowrap"
            >
              Website Owner
            </div>
          </div>
        </h2>
      </div>

      <div class="flex gap-3">
        <div
          v-for="badge in user?.badges"
          :key="badge.name"
          class="group/tooltip relative"
        >
          <NuxtImg
            :src="badge.image"
            :alt="badge.name"
            class="h-7 transition-transform hover:scale-110"
          />
          <div
            v-if="!badge.image.includes('Nitro.svg')"
            class="absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-900 text-white text-sm rounded opacity-0 invisible md:group-hover/tooltip:opacity-100 md:group-hover/tooltip:visible transition-all whitespace-nowrap"
          >
            {{ badge.name }}
          </div>
        </div>
      </div>

      <div class="mt-auto pt-6 border-t border-gray-200">
        <div class="flex flex-col sm:flex-row gap-3">
          <NuxtLink
            :href="`discord://-/users/${user?.id}`"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#5865F2] text-white font-medium transition-colors hover:bg-[#4752C4] focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2"
          >
            <ArrowTopRightOnSquareIcon class="h-5 w-5" aria-hidden="true" />
            View on Discord
          </NuxtLink>
          <NuxtLink
            :href="`https://discord.name/${user?.id}`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 text-white font-medium transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
          >
            <LinkIcon class="h-5 w-5" aria-hidden="true" />
            View on Discord.Name
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <template v-else>
    <NotFound />
  </template>
</template>
