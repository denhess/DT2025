declare global {
  function gtag(
    command: 'config' | 'event' | 'js' | 'set',
    targetId: string | Date,
    config?: {
      event_category?: string;
      event_label?: string;
      value?: number;
      currency?: string;
      contact_method?: string;
      page_location?: string;
      project_type?: string;
      cta_location?: string;
      send_to?: string;
      [key: string]: any;
    }
  ): void;

  interface Window {
    gtag: typeof gtag;
  }
}

export {};