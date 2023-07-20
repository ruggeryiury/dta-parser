<div align=center>
<img src='./images/header.webp' alt='Header'>
</div>

<div align=center>
<img src='https://xesque.rocketseat.dev/platform/tech/javascript.svg' width='24px' title='JavaScript'/> 
<img src='https://xesque.rocketseat.dev/platform/tech/typescript.svg' width='24px' title='TypeScript'/>
</div>

  

<div align=center>
<img src='https://img.shields.io/github/last-commit/ruggeryiury/dta-parser?color=%23DDD&style=for-the-badge' /> <img src='https://img.shields.io/github/repo-size/ruggeryiury/dta-parser?style=for-the-badge' /> <img src='https://img.shields.io/github/issues/ruggeryiury/dta-parser?style=for-the-badge' /> <img src='https://img.shields.io/github/package-json/v/ruggeryiury/dta-parser?style=for-the-badge' /> <img src='https://img.shields.io/github/license/ruggeryiury/dta-parser?style=for-the-badge' />
</div>

  

# 💠 Table of Contents
- [Usage](#usage)
    - [Parsing a `.dta` File](#parsing-a-dta-file)
    - [Sorting all songs when parsing](#sorting-all-songs-when-parsing)
    - [Getting any value from a song](#getting-any-value-from-a-song)
    - [Updating values from a song](#updating-values-from-a-song)
    - [Exporting a song individually, or as a pack](#exporting-a-song-individually-or-as-a-pack)
- [Known Issues](#known-issues)
- [Changelog](https://github.com/ruggeryiury/dta-parser/blob/master/CHANGELOG.md)

# Usage

## Parsing a `.dta` File
Just read the contents of a .dta file, when use `DTAParser()` to parse it. It will return an array of each song included on the .dta file parsed as a `DTADocument` type.

```ts
import DTAParser from 'dta-parser'
import fs from 'fs'

// Read a .dta file contents.
const dtaFileContents = fs.readFileSync(
    '/path/to/dta-file.dta',
    { encoding: 'utf-8' }
)

// Use "DTAParser()", passing the .dta file contents
// as first argument.
const parsedDTAs = DTAParser(dtaFileContents)
...
```

## Sorting all songs when parsing
Pass an object as second argument on `DTAParser`, then assign `sortBy` to a sort type.

There's a few options for this one: `name`, `artist`, `song_id`, and others.

```ts
import DTAParser from 'dta-parser'
import fs from 'fs'

// Read a .dta file contents.
const dtaFileContents = fs.readFileSync(
    '/path/to/dta-file.dta',
    { encoding: 'utf-8' }
)

// Use "DTAParser()", passing the .dta file contents
// as first argument, and the sorting options 
// as second inside an object.
const parsedDTAs = DTAParser(dtaFileContents,
    { sortBy: 'song_id' }
)
...
```

## Getting any value from a song
Using the `.get()` method: Most of the information from a song can be processed using the `.get()` method. By using it, you can control many aspects from the desired value, with each one of them having different kinds of settings.

```ts
...
// Use "DTAParser()".
const parsedDTAs = DTAParser(dtaFileContents)

// Select any song from the array. You can use the
// ``DTAArray`` module to get a song from an array
// based on its unique string ID.
const song = DTAArray.getSongByID(parsedDTAs, 
    'yoursong_str_id'
)

// Get the song's title, with the leading article at
// the end of the string, separated with a comma.
const songName = song.get('name',
    { leadingArticle: 'trailing' }
)

// Get the song's artist.
const songArtist = song.get('artist')

const songInfo = `"${songName}", by ${songArtist}`
```

## Updating values from a song
_To be added._
## Exporting a song individually, or as a pack
You can stringify a single `DTADocument` or an `Array` for `DTADocument` back to a formatted .dta file contents.

- For single songs, use the `DTADocument.export()`:
```ts
...
// Use "DTAParser()".
const parsedDTAs = DTAParser(dtaFileContents)

// Select any song.
const song = DTAArray.getSongByID(parsedDTAs,
    'yoursong_str_id'
)

// A stringified version of the song.
const newDTAFileContents = song.stringify()
```

- For packs, you can use `DTAArray` module:
```ts
// Import the DTAArray module.
import DTAParser, { DTAArray } from '../index'
import fs from 'fs'

// Read a .dta file contents.
const dtaFileContents = fs.readFileSync(
    '/path/to/dta-file.dta',
    { encoding: 'utf-8' }
)

// Use "DTAParser()".
const parsedDTAs = DTAParser(dtaFileContents)

// Process songs...
...

// A stringified version of the whole pack.
const newDTAFileContents = DTAArray.stringify(parsedDTAs)
```

# Known Issues

- The parser only works for **individual songs/songs pack** `.dta` files.