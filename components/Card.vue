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
    class="flex flex-col md:flex-row rounded-3xl bg-white cursor-pointer overflow-hidden [transition:all_0.3s] max-w-full min-w-[20rem] min-h-[17.5rem] shadow-neutral-500 shadow-md md:hover:shadow-lg md:hover:shadow-neutral-300 md:hover:scale-105 md:hover:rotate-2 ease-out"
  >
    <div class="flex">
      <NuxtImg
        v-if="user?.avatar?.url"
        :src="`${user.avatar?.url}?size=1024`"
        :alt="`${user.displayName || user.username}`"
        class="size-full md:size-80 object-cover"
      />
      <NuxtImg
        v-else
        :src="`https://cdn.discordapp.com/embed/avatars/${Math.floor(
          Math.random() * 5
        )}.png`"
        :alt="`${user?.displayName || user?.username}`"
        class="size-full md:size-80 object-cover"
      />
    </div>
    <div class="flex flex-col justify-start p-4">
      <h2
        class="flex items-center gap-x-1 text-lg md:text-3xl font-bold mt-auto"
      >
        {{ user?.displayName || user?.username }}
        <span class="text-xs md:text-lg" v-if="user && user.accountAge > '1'"
          >({{ user?.accountAge }} years old)</span
        >
        <StarIcon
          v-if="user?.id === '265896171384340480'"
          class="text-amber-400 -ml-0.5 h-5 w-5"
          aria-hidden="true"
        />
      </h2>
      <div class="flex gap-x-4 my-4">
        <NuxtImg
          v-for="badge in user?.badges"
          :key="badge.name"
          :src="badge.image"
          :alt="badge.name"
          class="h-6"
        />
      </div>
      <div class="mt-auto">
        <div class="flex flex-col md:flex-row border-t-2 pt-4 gap-3">
          <NuxtLink
            :href="`discord://-/users/${user?.id}`"
            rel="noopener noreferrer"
            class="flex gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <ArrowTopRightOnSquareIcon
              class="-ml-0.5 h-5 w-5"
              aria-hidden="true"
            />
            View on Discord
          </NuxtLink>
          <NuxtLink
            :href="`https://discord.name/${user?.id}`"
            target="_blank"
            rel="noopener noreferrer"
            class="flex gap-x-1.5 rounded-md bg-neutral-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
          >
            <LinkIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
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
