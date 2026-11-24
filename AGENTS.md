# AGENTS.md: Starlight core

This public package owns the common Astro and Starlight implementation for
`Kronuz.github.io`, `gmendezb-pages`, Xapiand docs, and Detent docs. Site
repositories own content, navigation, branding, and deployment configuration.

The blogs use `styles/blog.css`; the docs use `styles/docs.css`. All four sites
load `styles/footer.css` and render `components/Footer.astro`. The footer keeps
the public blog's centered copyright and social layout, with the GitHub hosting
credit. A site can override copyright or social links through
`Astro.locals.kzFooter`. Reading controls and Markdown plugins live once in
this package. A change to a shared control is tested in all four sites before
the package revision is updated there.

Public commits use `Germán Méndez Bravo <german.mb@gmail.com>` on `main`.
Do not add AI attribution. Commit messages have an imperative subject and a
short, wrapped body. Build and browser tests run under `quiet light` after
`quiet check` on the shared development machine.
