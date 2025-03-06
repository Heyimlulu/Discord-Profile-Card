export const useAnalytics = () => {
  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    useTrackEvent(eventName, params)
  }

  const trackPageView = (pageTitle?: string, pagePath?: string) => {
    trackEvent('page_view', {
      page_title: pageTitle,
      page_path: pagePath
    })
  }

  const trackProfileView = (profileId: string) => {
    trackEvent('profile_view', {
      profile_id: profileId,
      timestamp: new Date().toISOString()
    })
  }

  const trackError = (errorMessage: string, errorCode?: string) => {
    trackEvent('error', {
      error_message: errorMessage,
      error_code: errorCode,
      timestamp: new Date().toISOString()
    })
  }

  return {
    trackEvent,
    trackPageView,
    trackProfileView,
    trackError
  }
} 