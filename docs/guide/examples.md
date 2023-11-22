# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

::: code-group

```js [Javascript]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [Vue/Nuxt]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

```ts [React]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

```ts [Angular]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
