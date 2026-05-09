/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NVIDIA_API_KEY: string;
  readonly NVIDIA_BASE_URL: string;
  readonly NVIDIA_MODEL: string;
  readonly PUBLIC_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
