interface ImportMetaEnv {
  readonly VITE_CONTACT_FORM_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  gtag?: (...args: any[]) => void
}