<template>
  <Card :user="response?.data" :success="response?.success" />
</template>

<script setup lang="ts">
const userId = useRoute().params.userId;
const { data: dataDiscordUser } = await useFetch<DiscordLookupResponse>(
  `https://api-v1.discord.name/v1/user/lookup/${userId}`
);
const response = dataDiscordUser.value;
const data = response?.data;

if (data && response?.success) {
  useHead({
    title: `${data.displayName || data.username} (${data.id})`,
    meta: [
      {
        name: "description",
        content: `View ${
          data.displayName || data.username
        }'s profile on Discord Lookup.`,
      },
    ],
    link: [
      {
        rel: "canonical",
        href: `https://discord.my/${data.id}`,
      },
    ],
  });

  useSeoMeta({
    ogTitle: `${data.displayName || data.username} (${data.id})`,
    ogDescription: `View ${
      data.displayName || data.username
    }'s profile on Discord Lookup.`,
    ogImage: data.avatar?.url
      ? `${data.avatar?.url}?size=512`
      : `https://cdn.discordapp.com/embed/avatars/${Math.floor(
          Math.random() * 5
        )}.png`,
    ogUrl: `https://discord.my/${data.id}`,
    twitterCard: "summary_large_image",
  });
} else {
  useHead({
    title: "Invalid User ID",
  });
}

definePageMeta({
  layout: false,
});
</script>
