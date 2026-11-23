# Kronuz Starlight core

Shared components, styles, and Markdown rendering for the public and internal
Kronuz blogs and the Xapiand and Detent documentation sites.

Each site supplies its content, navigation, logo, links, and deployment settings.
The package supplies the common reading controls, code and diagram rendering,
and blog or docs style preset. Sites pin the package to one Git commit.

Use `@kronuz/starlight-core/components/Search.astro` and similar package paths
in Starlight's `components` map. Add either
`@kronuz/starlight-core/styles/blog.css` or
`@kronuz/starlight-core/styles/docs.css` to `customCss`.
