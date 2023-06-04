# Next.js Heroicons

Heroicons for Next.js using [Heroicons](https://github.com/tailwindlabs/heroicons).

## How to install?

```bash
npm i heroicons-next
```

## How to use?

After installing the package, import `the icon component`

```js
import { OutlineAcademicCap } from "heroicons-next";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="w-10 h-10 text-gray-300 ">
      <OutlineAcademicCap />
    </div>
  );
}
```

### Using the map

You can also render an icon from a `HeroMap`

```js
import { HeroMap } from "heroicons-next";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="w-10 h-10 text-gray-300 ">
      {HeroMap["outline-academic-cap"]}
    </div>
  );
}
```

```bash
Happy coding!!!
```
