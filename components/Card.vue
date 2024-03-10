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
    class="flex flex-col md:flex-row rounded-3xl bg-white cursor-pointer overflow-hidden [transition:all_0.3s] max-w-full min-w-[20rem] min-h-[17.5rem] shadow-indigo-500 shadow-md md:hover:shadow-lg md:hover:shadow-indigo-300 md:hover:scale-105 md:hover:rotate-2 ease-out"
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
      <h2 class="text-2xl font-bold">
        {{ user?.displayName || user?.username }}
        <span v-if="user && user.accountAge > '1'"
          >({{ user?.accountAge }} years old)</span
        >
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
        <p class="font-semibold text-sm">
          {{ user?.createdAt }}
        </p>
        <div class="border-t-2 pt-4 gap-3 flex flex-wrap">
          <NuxtLink
            :href="`discord://-/users/${user?.id}`"
            rel="noopener noreferrer"
            class="flex-[1_0_15rem] flex justify-center items-center whitespace-nowrap max-w-full shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          >
            View on Discord
          </NuxtLink>
          <NuxtLink
            :href="`https://discord.name/${user?.id}`"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-[1_0_05rem] flex justify-center items-center whitespace-nowrap max-w-full shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          >
            More info
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <template v-else>
    <NotFound />
  </template>
</template>
