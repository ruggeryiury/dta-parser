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
- [Usage](#-usage)
    - [Parsing a DTA file](#parsing-a-dta-file)
    - [Sorting all songs when parsing](#sorting-all-songs-when-parsing)
    - [Getting any value from a song](#getting-any-value-from-a-song)
    - [Updating values from a song](#updating-values-from-a-song)
    - [Exporting a song individually, or as a pack](#exporting-a-song-individually-or-as-a-pack)

# Usage

## Parsing a DTA file
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

console.log(parsedDTAs) // => Array of parsed songs from the .dta file.
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
const parsedDTAs = DTAParser(dtaFileContents, { sortBy: 'song_id' })

console.log(parsedDTAs) // => Array of parsed songs, sorted by song's ID.
```

## Getting any value from a song
There's two methods to access information from a song:
- Accessing through `content`: All song information are stored on the parsed song object on `content`.

```ts
import DTAParser from 'dta-parser'
import fs from 'fs'

// Read a .dta file contents.
const dtaFileContents = fs.readFileSync(
    '/path/to/dta-file.dta',
    { encoding: 'utf-8' }
)

// Use "DTAParser()".
const parsedDTAs = DTAParser(dtaFileContents)

// Select any song.
const song = parsedDTAs[0]

// Access the song's title.
const songName = song.content.name

// Access the song's artist/band.
const songArtist = song.content.artist

// Use .rawContent to access anything from the song.
console.log(`"${songName}", by ${songArtist}.`) // => "Song Title", by Song Artist.
```

- Using the `.get()` method: Most of the information from a song can be processed using the `.get()` method. By using it, you can control many aspects from the desired value, with each one of them having different kinds of settings.

```ts
import DTAParser from 'dta-parser'
import fs from 'fs'

// Read a .dta file contents.
const dtaFileContents = fs.readFileSync(
    '/path/to/dta-file.dta',
    { encoding: 'utf-8' }
)

// Use "DTAParser()".
const parsedDTAs = DTAParser(dtaFileContents)

// Select any song.
const song = parsedDTAs[0]

// Get the song's title.
const songName = song.get('name')

// Get the song's artist.
const songArtist = song.get('artist')

console.log(`"${songName}", by ${songArtist}`) // => "Song Title", by Song Artist
```

## Updating values from a song
_To be added._
## Exporting a song individually, or as a pack
You can stringify a single `DTADocument` or an `Array` for `DTADocument` back to a formatted .dta file contents.

- For single songs, use the `DTADocument.export()`:
```ts
import DTAParser from 'dta-parser'
import fs from 'fs'

// Read a .dta file contents.
const dtaFileContents = fs.readFileSync(
    '/path/to/dta-file.dta',
    { encoding: 'utf-8' }
)

// Use "DTAParser()".
const parsedDTAs = DTAParser(dtaFileContents)

// Select any song.
const song = parsedDTAs[0]

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

// A stringified version of the whole pack.
const newDTAFileContents = DTAArray.stringify(parsedDTAs)
```

