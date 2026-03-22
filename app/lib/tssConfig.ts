export const TSS_PACKAGE = "tea-simple-smart-css";
export const TSS_VERSION = process.env.NEXT_PUBLIC_TSS_VERSION || "1.0.3";

export const TSS_CDN_JSDELIVR = `https://cdn.jsdelivr.net/npm/${TSS_PACKAGE}@${TSS_VERSION}/dist/tss.min.js`;
export const TSS_CDN_UNPKG = `https://unpkg.com/${TSS_PACKAGE}@${TSS_VERSION}/dist/tss.min.js`;
export const TSS_NPM_INSTALL = `npm install ${TSS_PACKAGE}`;
export const TSS_BUN_INSTALL = `bun add ${TSS_PACKAGE}`;
export const TSS_CDN_TAG = `https://cdn.jsdelivr.net/npm/${TSS_PACKAGE}@${TSS_VERSION}/dist/tss.min.js`;
