/**
 * This configures the translations for all ui text in your website. 
 * 
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated 
 */
import type { SupportedLanguage } from "src/utils/i18n";

export default {
    
        "site.title": {
            text: "Astro Theme Cody"
        },
        "site.description": {
            text: "A minimalist blog theme built with Astro. A quick and easy starter build for anyone who wants to start their own blog."
        },
        "profile.description": {
            text: "your bio description"
        },
        "blog.lastUpdated": {
            text: "Last updated:"
        },
        "sidebar.tableOfContents": {
            text: "Table of Contents"
        },
        "project.platform": {
            text: "PLATFORM"
        },
        "project.stack": {
            text: "STACK"
        },
        "project.website": {
            text: "WEBSITE"
        }
    
} as const satisfies TranslationUIEntries;

type TranslationUIEntries = Record<string, UIEntry>;

export type UIEntry = { text: string };