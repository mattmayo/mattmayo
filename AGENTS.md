## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

If served CSS/markup doesn't reflect recent edits (checked via `curl`), the dev server may be serving a stale HMR cache — run `astro dev stop` then `astro dev --background` again and re-check.

Node is installed via nvm and may not be on the default shell PATH (e.g. `~/.local/share/nvm/v<version>/bin`). If `node`/`npm`/`astro` aren't found, locate the running dev server's binary via `lsof -i :4321` rather than assuming Node isn't installed.

## Styling notes

This project imports `open-props/normalize`, which applies a low-specificity `:where(p){max-inline-size:60ch}` rule to all `<p>` elements. If a paragraph needs to be wider than 60ch, override with `max-inline-size: none` rather than assuming the constraint comes from custom CSS.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
