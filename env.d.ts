interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly MODE: string
  readonly VITE_TELEGRAM_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}