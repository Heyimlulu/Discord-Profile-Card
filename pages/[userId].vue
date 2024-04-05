<template>
  <Card :user="response?.data" :success="response?.success" />
</template>

<script setup lang="ts">
const userId = useRoute().params.userId;
const { data: dataDiscordUser } = await useFetch<DiscordLookupResponse>(
  `https://rest-api.discord.name/v1/user/lookup/${userId}`
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
        href: `https://discord.name/${data.id}`,
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
    ogUrl: `https://discord.name/${data.id}`,
    twitterCard: "summary_large_image",
  });
} else {
  useHead({
    title: "Discord Lookup",
  });
}

definePageMeta({
  layout: false,
});
</script>
