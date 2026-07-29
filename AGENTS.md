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

## `.screen` container width and padding

`.screen`'s `max-width` and its `clamp()`-based padding are tuned together on purpose:

- The vertical/right-edge-style paddings (top, bottom) use `clamp(min, Xvw, max)` where `X = max_px / (screen_max_width_px / 100)`. This makes the padding hit its ceiling at exactly the same viewport width where `.screen` itself stops growing (currently 900px), so padding and container width scale in lockstep below that width and both go flat above it. If `.screen`'s `max-width` changes, recompute these `vw` percentages to match, or the padding will keep growing (or stop growing) at the wrong width relative to the container.
- The left/right padding is intentionally inverted: it's flat at 20px through mobile widths (≤640px, matching the `.listing-row` stacking breakpoint), tapers linearly to 0px between 640px and 900px, then stays flat at 0px above 900px. This uses `clamp(0px, calc(A - Bvw), 20px)` rather than a plain `Xvw` — the `calc()` intentionally decreases as viewport grows, which is the opposite direction from the top/bottom padding. Don't "simplify" this back to a normal `clamp(min, Xvw, max)` — the inversion is the point.

## Headshot flicker animation

The headshot's amber-to-color reveal (`@keyframes headshot-reveal` on `.headshot`) is built to look like an old CRT struggling to hold a picture, not a smooth crossfade:

- Uses `steps(1, jump-end)` as the timing function, not `ease`, so the filter snaps instantly between keyframes instead of fading — that's what makes it read as "flicker" rather than "dissolve."
- The keyframe percentages encode absolute real-time offsets relative to the animation's total duration. Whenever the total duration changes (currently 30s), every keyframe percentage must be rescaled (`old_seconds / new_duration_seconds * 100`) to preserve the actual flicker timing (short on/off stutter, ~1.2s clear hold, short stutter back to amber). Don't just change the duration and leave percentages as-is, or the flicker will compress/stretch unintentionally.
- `animation-delay` on the shorthand only delays the *first* iteration; with `infinite`, later cycles repeat back-to-back at the animation's own duration with no extra gap. This is why delay = duration (30s) currently gives "wait 30s, then flicker every 30s" rather than needing separate logic.
- Manual hover is kept independent of the loop: `.headshot:hover` sets `animation: none; filter: none;` — using `none` (not just overriding `filter`) avoids the animation's per-frame filter value fighting with the hover rule, since CSS animations otherwise take priority over normal declarations on the same property.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
