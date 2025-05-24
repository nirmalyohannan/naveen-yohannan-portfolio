/// <reference types="vite/client" />

// Add this to handle import.meta.glob for dynamic imports
interface ImportMeta {
  readonly glob: (pattern: string) => Record<string, () => Promise<string>>;
}