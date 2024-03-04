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

- [Features](#features)
- [Basic Usage](#basic-usage)
  - [Parsing a `.dta` file](#parsing-a-dta-file)
  - [Creating a new song](#creating-a-new-song)
  - ["Stringify" a `Song` class back to `.dta` file contents](#stringify-a-song-class-back-to-dta-file-contents)
  - [Sort a collection of songs (`SongCollection` class)](#sort-a-collection-of-songs-songcollection-class)
- [Package API](#package-api)
  - [`DTAParser()`](#dtaparser)

# Features

With _DTA Parser_ you can:

- Parse both individual song `.dta` file or a song pack `.dta` file as an object.
- Create a `.dta` file directly using JavaScript.
- "Stringify" any created/parsed song back to `.dta` file contents.
- Sort a collection of songs based on many sorting methods available on the package.
- Fetch and even process any value from any song.
- Fetch album artworks URLs from any song using the _Spotify API_ (coming soon).

# Basic Usage

## Parsing a `.dta` file

```ts
import DTAParser from 'dta-parser'
import fs from 'fs'

// Fetch a .dta file to get its contents as string.
const dtaFileContents = fs.readFileSync('/path/to/dta-file.dta', 'utf-8')

// Use "DTAParser()", passing the .dta file contents
// as first argument.
const mySongs = DTAParser(dtaFileContents)
...
```

## Creating a new song

```ts
// Create a recipe.
const newSongRecipe: DTAFileRecipe = {
  id: '7748onestop',
  name: 'Onestop',
  artist: 'David Yackley',
  master: true,
  song_id: 1774800009,
  songname: '7748onestop',
  tracks: {
    drum: { rank: 2, channels: 4 },
    bass: { rank: 4, real_rank: 4, channels: 2, tuning: [-4, -4, -4, -4] },
    guitar: { rank: 6, real_rank: 6, channels: 2, hasSolo: true },
    keys: { rank: 6, real_rank: 6, channels: 2, hasSolo: true },
    backing: 2,
  },
  preview: 30000,
  song_length: 249767,
  rank_band: 6,
  rating: 1,
  genre: {
    genre: 'Fusion',
    sub_genre: 'Fusion',
  },
  year_released: 1998,
  album: {
    hasArt: true,
  },
  author: 'Ruggy',
  multitrack: true,
  CATemh: true,
  pack_name: 'Windows .MID Pack 01',
}

// Create a new Song class.
const song = new Song(newSongRecipe)
```

## "Stringify" a `Song` class back to `.dta` file contents

```ts
// Create a new Song class.
const song = new Song(...)

// Stringify its contents.
const songContents = song.stringify()
```

## Sort a collection of songs (`SongCollection` class)

```ts
// Create a new Song class.
const song = new Song(...)

// Sort all songs based on the songs' artist.
song.sort('Artist')
```

# Package API

## `DTAParser()`

Parses a .dta file content.

- #### _dtaFileContents_ `string`

  - The .dta file contents as string.

- #### _options?_ `DTAParserOptions`
  - `OPTIONAL`: An object with options that customizes the parsing process.
    - _sortBy?_ `SongSortingTypes`: Changes the sorting of the songs. Is no sorting is specified, it will keep the order from the parsed `.dta` file.
    - _update?_ `SongUpdateObject`: Applies direct values updates on any song inside the `.dta` file based on the song's shortname ID.
    - _updateAll?_ `MultipleSongsUpdateObject`: Applies common direct values updates on all songs inside the `.dta` file.
    - _asJSON?_ `boolean`: Parses a `.dta` file directly into a simple `DTAFile` object. Default is `false`.
