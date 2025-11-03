/// <reference types="vite/client" />

/* Asset modules (lowercase + uppercase PNG) */
declare module "*.png" { const src: string; export default src; }
declare module "*.PNG" { const src: string; export default src; }
declare module "*.jpg" { const src: string; export default src; }
declare module "*.jpeg" { const src: string; export default src; }
declare module "*.webp" { const src: string; export default src; }
declare module "*.svg" { const src: string; export default src; }

/* --- MUI palette augmentation for `accent` --- */
import "@mui/material/styles";
declare module "@mui/material/styles" {
    interface Palette {
        accent: Palette["primary"];
    }
    interface PaletteOptions {
        accent?: PaletteOptions["primary"];
    }
}


export default defineConfig({
    plugins: [react()],
    assetsInclude: ["**/*.PNG"]
});