<div align=center>
<img src='https://raw.githubusercontent.com/ruggeryiury/dta-parser/master/images/header.webp' alt='Header'>
</div>

<div align=center>
<img src='https://xesque.rocketseat.dev/platform/tech/javascript.svg' width='24px' title='JavaScript'/> 
<img src='https://xesque.rocketseat.dev/platform/tech/typescript.svg' width='24px' title='TypeScript'/>
</div>

<div align=center>
<img src='https://img.shields.io/github/last-commit/ruggeryiury/dta-parser?color=%23DDD&style=for-the-badge' /> <img src='https://img.shields.io/github/repo-size/ruggeryiury/dta-parser?style=for-the-badge' /> <img src='https://img.shields.io/github/issues/ruggeryiury/dta-parser?style=for-the-badge' /> <img src='https://img.shields.io/github/package-json/v/ruggeryiury/dta-parser?style=for-the-badge' /> <img src='https://img.shields.io/github/license/ruggeryiury/dta-parser?style=for-the-badge' />
</div>

## 💠 Table of Contents

- [Usage](#usage)
  - [Parsing a `.dta` file](#parsing-a-dta-file)
  - [Sorting all songs](#sorting-all-songs)

# Usage

## Parsing a `.dta` file

Just read the contents of a `.dta` file, when use `DTAParser()` to parse it. It will return an array of each song included on the .dta file parsed as a `DTAFileContents` type.

```ts
import DTAParser from 'dta-parser'
import fs from 'fs'

// Read a .dta file to get its contents.
const dtaFileContents = fs.readFileSync('/path/to/dta-file.dta')

// Use "DTAParser()", passing the .dta file contents
// as first argument.
const mySongs = DTAParser(dtaFileContents)
...
```

## Sorting all songs

Pass an object as second argument on `DTAParser`, then assign the `sortBy` parameter to a sort type to automatically sort all songs on the parsing process.

There's a few options for this one: `name`, `artist`, `song_id`, etc.

```ts
import DTAParser from 'dta-parser'
import fs from 'fs'

// Read a .dta file to get its contents.
const dtaFileContents = fs.readFileSync('/path/to/dta-file.dta', 'utf-8')

// Use "DTAParser()", passing the .dta file contents
// as first argument, and the sorting options
// as second inside an object.
const mySongs = DTAParser(dtaFileContents, {
    sortBy: 'song_id'
})
...
```

You can also use the `DTAFile` module to sort songs after the parsing process using the `DTAFile.sort()` method.

```ts
// Update the import to use the DTAFile module.
import DTAParser, { DTAFile } from 'dta-parser'
...

// Use the DTAFile module to sort already parsed songs.
// On this example, it will be sorted by the song's unique ID.
const sortedSongs = DTAFile.sort(mySongs, 'song_id')
...
```
