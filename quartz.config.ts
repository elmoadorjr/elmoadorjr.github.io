import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { Backlinks, Head, PageContent, Footer } from "./quartz/components"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ripples of Mine",
    pageTitleSuffix: " | overfed with information, but starved of wisdom",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      googleAnalyticsId: "G-XXXXXXXXXX",
    },
    comments: {
      provider: "giscus",
      config: {
        repo: "elmoadorjr/elmoadorjr.github.io",
        repoId: "",
        category: "Comments",
        categoryId: "",
        mapping: "pathname",
        reactionsEnabled: true,
        emitMetadata: false,
        theme: "preferred_color_scheme",
      },
    },
    locale: "en-US",
    baseUrl: "elmoadorjr.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    social: {
      twitter: "elmoadorjr",
      github: "elmoadorjr",
      linkedin: "elmoadorjr",
      instagram: "elmoadorjr",
      tiktok: "@elmoadorjr"
    },
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
    components: {
      backlinks: Backlinks(),
      head: Head(),
      page: PageContent(),
      footer: Footer(),
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config