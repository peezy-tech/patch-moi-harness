# patch-moi-harness

Tiny releaseable npm package used to exercise patch.moi fork maintenance.

The repository is intentionally small so patch.moi can iterate quickly against
the whole maintenance loop:

- GitHub is the upstream release surface.
- npm is published from GitHub Actions with trusted publishing.
- A maintained fork can carry a small patch stack on another forge.

## Usage

```bash
npx @peezy.tech/patch-moi-harness patch.moi
```

```js
import { buildInfo, greet } from "@peezy.tech/patch-moi-harness";

console.log(greet("patch.moi"));
console.log(buildInfo());
```

## Release

Releases are tag-driven:

```bash
git tag v0.1.0
git push origin main v0.1.0
```

The npm trusted publisher should be configured for:

- GitHub organization/user: `peezy-tech`
- GitHub repository: `patch-moi-harness`
- Workflow filename: `publish.yml`
- Environment: unset
