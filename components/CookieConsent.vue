<template>
  <ClientOnly>
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-full opacity-0"
    >
      <div v-if="showConsent" class="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-[#2f3136] rounded-lg shadow-xl border border-[#1e1f22] z-50">
        <div class="p-4 md:p-6">
          <div class="mb-4">
            <h3 class="text-white font-semibold text-lg mb-2">🍪 Cookie Settings</h3>
            <p class="text-[#b5bac1] text-sm leading-relaxed">
              We use cookies to enhance your user experience. Choose your cookie preferences below.
            </p>
          </div>
          <div class="flex flex-col gap-2 sm:flex-row sm:gap-3">
            <button
              @click="acceptAll"
              class="px-4 py-2 bg-[#5865f2] hover:bg-[#4752c4] text-white rounded-md text-sm font-medium transition-colors duration-200"
            >
              Accept All
            </button>
            <button
              @click="acceptNecessary"
              class="px-4 py-2 bg-[#4f545c] hover:bg-[#686d73] text-white rounded-md text-sm font-medium transition-colors duration-200"
            >
              Necessary Only
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </ClientOnly>
</template>

<script setup lang="ts">
const { gtag } = useGtag()

// Initialize showConsent state
const showConsent = ref(false)

// Initialize consent state on client-side only
onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    showConsent.value = true
  } else {
    if (consent === 'all') {
      applyAllConsent()
    } else if (consent === 'necessary') {
      applyNecessaryConsent()
    }
  }
})

const applyAllConsent = () => {
  gtag('consent', 'update', {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
    analytics_storage: 'granted'
  })
}

const applyNecessaryConsent = () => {
  gtag('consent', 'update', {
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    ad_storage: 'denied',
    analytics_storage: 'granted'
  })
  
  gtag('set', {
    'allow_google_signals': false,
    'allow_ad_personalization_signals': false,
    'restricted_data_processing': true
  })
}

const acceptAll = () => {
  applyAllConsent()
  showConsent.value = false
  localStorage.setItem('cookie-consent', 'all')
}

const acceptNecessary = () => {
  applyNecessaryConsent()
  showConsent.value = false
  localStorage.setItem('cookie-consent', 'necessary')
}
</script> 