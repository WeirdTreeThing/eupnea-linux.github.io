export default {
  title: "The Eupnea Project",
  description: "Boot a full Linux system and gain complete control over your device WITHOUT modifying the firmware.",
  cleanUrls: true,
  rewrites: {
    "docs/extra/overview.md": "overview.md",
    "docs/extra/faq.md": "faq.md",
    "docs/extra/troubleshoot.md": "troubleshoot.md"
  },
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/eupnea-linux" },
    ],
    sidebar: [
      {
        items: [
          { text: "Overview", link: "/overview" },
          { text: "FAQ", link: "/faq" },
          { text: "Troubleshooting", link: "/troubleshoot" },
        ]
      },
      {
        text: "📜 Depthboot instructions",
        items: [
          { text: "Requirements", link: "/docs/depthboot/requirements" },
          { text: "Supported devices", link: "/docs/depthboot/supported-devices" },
          { text: "Build instructions", link: "/docs/depthboot/build-instructions" },
          { text: "Audio", link: "/docs/depthboot/audio" },
          { text: "Install to internal", link: "/docs/depthboot/install-to-internal" },
        ]
      },
      {
        text: "📖 Project documentation",
        items: [
          { text: "Eupnea Kernels", link: "/docs/project/kernels" },
          { text: "Supported devices", link: "/docs/project/supported-devices" },
          { text: "Supported distros + DEs (Depthboot)", link: "https://docs.google.com/spreadsheets/d/1-zIX8lWEXVcO71xCuzvZpHvCUizrU7csKfJusqB2CYM" },
        ]
      },
      {
        text: "💻 Chromebook documentation",
        items: [
          { text: "Firmware comparison", link: "/docs/chromebook/firmware-comparison" },
          { text: "Sleep bootlock", link: "/docs/chromebook/bootlock" },
          { text: "Depthcharge", link: "/docs/chromebook/depthcharge" },
          { text: "SWAP(ZRAM)", link: "/docs/chromebook/ram-extensions" },
          { text: "Keyboard layout", link: "/docs/chromebook/keyd" },
        ]
      },
      {
        text: "🔨 Compile instructions",
        items: [
          { text: "Compile a Eupnea kernel", link: "/docs/compile/kernel" },
          { text: "Compile EupneaOS", link: "/docs/compile/eupneaos" },
          { text: "Compile Depthboot", link: "/docs/depthboot/requirements" },
        ]
      },
      {
        text: "🌐 External docs",
        items: [
          { text: "UEFI/rw_legacy", link: "https://mrchromebox.tech/#bootmodes" },
          { text: "Linux on pre-coreboot Chromebooks", link: "https://github.com/nh2/chrubuntu-anyos" },
          { text: "Linux on arm Chromebooks", link: "https://github.com/Maccraft123/Cadmium" },
        ]
      },
      {
        text: "👥 Community",
        items: [
          { text: "GitHub (source code)", link: "https://github.com/eupnea-linux" },
          { text: "Revolt server", link: "https://rvlt.gg/6YxHB2Cz" },
          { text: "Discord server", link: "https://discord.gg/jxXb2PwzYz" },
        ]
      }
    ]
  },
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/assets/project-icon.svg" }
    ],
    [
      "link",
      { rel: "shortcut icon", href: "/favicon.ico" }
    ],
    [
      "meta",
      { property: "og:url", content: "https://eupnea-linux.github.io/" }
    ],
    [
      "meta",
      { property: "og:image", content: "https://eupnea-linux.github.io/assets/project-icon.svg" }
    ],
    [
      "meta",
      { property: "og:type", content: "website" }
    ],
    [
      "meta",
      { property: "og:site_name", content: "The Eupnea Project" }
    ]
  ],
}
