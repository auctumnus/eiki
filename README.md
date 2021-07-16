# Eiki

[Eiki][yamaxanadu] is a library for judging values. It's extremely small and
decomposable - if you only use a function and only part of that function, you'll
only have a few dozen extra bytes added to your bundle!

## Install

Install through a package manager:

```sh
# npm
$ npm i eiki

# yarn
$ npm i eiki

# pnpm
$ pnpm i eiki
```

(By the way, I strongly recommend [pnpm][pnpm], since I like not having my entire disk
eaten by `node_modules`.)

## Usage

ill put up typedoc at some point but its well-commented and typed

## Comparison

- `zod`: I like `zod`, but it has some weird bloat I don't need.
- `class-validator`: It's nice but it's very big. I use it on the server-side.
- `vahv`: Nobody's heard of this one, but you should go use it, since it's cute!
  It's more for forms though. Eiki is a lower-level validation library<a href="#note1" id="note1ref"><sup>1</sup></a>.

## Contribution

Thank you for contributing! Please note all of your contributions will be placed
under MIT - make sure both you and whoever wrote all the code, whether you or not,
are okay with that!

Open up a pull request, and ensure the tests pass. If you've got an issue
that would benefit from tests showing the issue, it'd be great if you added some!

<a id="note1" href="#note1ref"><sup>1</sup></a>: I find it really funny to call anything in JS low-level.

[yamaxanadu]: https://www.youtube.com/watch?v=BsBgCYL9Dn8
[pnpm]: https://pnpm.io/
