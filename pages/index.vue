<template>
  <header class="fixed top-0 left-0 right-0 w-full bg-[#1a1a1a] p-4 z-50">
    <div class="max-w-7xl mx-auto mt-safe">
      <h1
        class="text-2xl md:text-4xl font-bold text-center text-white flex items-center justify-center gap-2"
      >
        <IdentificationIcon class="h-8 w-8 md:h-12 md:w-12" />
        Discord Profile Card
      </h1>
    </div>
  </header>

  <div
    class="flex items-center justify-center bg-[#1a1a1a] p-4 sm:p-6 lg:p-8 rounded-lg"
  >
    <div class="w-full max-w-md">
      <p
        class="text-center text-md text-gray-400 flex items-center justify-center gap-1"
      >
        <InformationCircleIcon class="h-4 w-4" />
        This site is not affiliated with Discord.
      </p>
      <div>
        <p class="mt-6 text-center text-sm text-gray-300">
          Enter a Discord user ID to display their profile card
        </p>
      </div>
      <div class="mt-4">
        <div class="relative">
          <input
            v-model="userId"
            type="text"
            placeholder="Enter User ID / Any ID"
            class="block w-full rounded-lg border border-gray-600 bg-[#1a1a1a] px-4 py-3 text-white placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2] focus:ring-opacity-50"
            @input="validateInput"
          />
          <div class="mt-4" :class="{ 'opacity-60': !isInputValid }">
            <NuxtLink
              :to="isInputValid ? `/${userId}` : '#'"
              class="group relative flex w-full justify-center rounded-lg bg-[#5865F2] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#4752C4] focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              :class="{ 'cursor-not-allowed': !isInputValid }"
            >
              Display Profile Card
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      isInputValid: false,
    };
  },
  methods: {
    validateInput() {
      const id = this.userId;
      const isNumeric = /^\d+$/.test(id);
      const validLength = id.length >= 15 && id.length <= 22;
      this.isInputValid = isNumeric && validLength;
    },
  },
};
</script>

<script setup>
import {
  InformationCircleIcon,
  IdentificationIcon,
} from "@heroicons/vue/20/solid";

useHead({
  title: "Discord Profile Card",
  meta: [
    {
      name: "description",
      content: "Generate a Discord profile card using a user's ID.",
    },
    {
      name: "keywords",
      content:
        "Discord Profile, Discord Profile Card, Discord User Card, Discord User Profile, Discord User Profile Card, Discord User Card Generator, Discord User Profile Card Generator, Discord, Profile, Card, Discord.My",
    },
  ],
});

useSeoMeta({
  ogTitle: "Discord Profile Card",
  ogDescription: "Generate a Discord profile card using a user's ID.",
  ogImage: "https://cdn.discordapp.com/embed/avatars/0.png",
  ogUrl: "https://discord.my",
  twitterCard: "summary_large_image",
});
</script>

<style scoped></style>
