<template>
  <div class="grid min-h-full place-items-center py-10">
    <div class="text-center bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h1 class="text-2xl font-bold tracking-tight text-gray-900 mb-4">
        Discord Profile Card
      </h1>
      <input
        v-model="userId"
        type="text"
        placeholder="Enter Discord ID"
        class="placeholder:text-xs transition-all block w-full border rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5865F2]"
        @input="validateInput"
      />
      <div
        class="flex justify-center items-center h-8 w-full bg-[#5865F2] hover:bg-[#5865F2]/80 mt-3 rounded-md border border-transparent px-5 py-2 text-base font-medium text-white shadow focus:outline focus:outline-[#5865F2] focus:outline-offset-2 sm:px-10 transition font-bold cursor-pointer"
        :class="{ 'opacity-60 cursor-not-allowed': !isInputValid }"
      >
        <NuxtLink :to="`/${userId}`">Display User Card</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      isInputValid: false
    }
  },
  methods: {
    validateInput() {
      const id = this.userId;
      const isNumeric = /^\d+$/.test(id);
      const validLength = id.length >= 15 && id.length <= 22;
      this.isInputValid = isNumeric && validLength;
    }
  }
}
</script>

<script setup>
useHead({
  title: "Discord Profile Card",
  meta: [
    {
      name: "description",
      content: "Generate a Discord profile card using a user's ID."
    }
  ]
});

useSeoMeta({
  ogTitle: "Discord Profile Card",
  ogDescription: "Generate a Discord profile card using a user's ID.",
  ogImage: "https://cdn.discordapp.com/embed/avatars/0.png",
  ogUrl: "https://discord.my",
  twitterCard: "summary_large_image"
});
</script>

<style scoped>
</style>
