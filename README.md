<div align=center>
<img src='https://raw.githubusercontent.com/ruggeryiury/dta-parser/master/assets/header.webp' alt='DTA Parser: Package Header Image'>
</div>

<div align=center>
<img src='https://xesque.rocketseat.dev/platform/tech/javascript.svg' width='36px' title='JavaScript'/> 
<img src='https://xesque.rocketseat.dev/platform/tech/typescript.svg' width='36px' title='TypeScript'/>
</div>

<div align=center>
<img src='https://img.shields.io/github/last-commit/ruggeryiury/dta-parser?color=%23DDD&style=for-the-badge' /> <img src='https://img.shields.io/github/repo-size/ruggeryiury/dta-parser?style=for-the-badge' /> <img src='https://img.shields.io/github/issues/ruggeryiury/dta-parser?style=for-the-badge' /> <img src='https://img.shields.io/github/package-json/v/ruggeryiury/dta-parser?style=for-the-badge' /> <img src='https://img.shields.io/github/license/ruggeryiury/dta-parser?style=for-the-badge' />
</div>

- [Features](#features)
- [Basic Usage](#basic-usage)
  - [Parsing a `.dta` file](#parsing-a-dta-file)
  - [Creating a new song entry (using recipe)](#creating-a-new-song-entry-using-recipe)
  - ["Stringify" a `Song` class back to `.dta` file contents](#stringify-a-song-class-back-to-dta-file-contents)
  - [Sort a collection of songs](#sort-a-collection-of-songs)
- [More Rock Band related projects](#more-rock-band-related-projects)

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

// Read a .dta file to get its contents.
const dtaFileContents = fs.readFileSync('/path/to/dta-file.dta')

// Use "DTAParser()", passing the .dta file contents
// as first argument.
const mySongs = DTAParser(dtaFileContents)
...
```

## Creating a new song entry (using recipe)

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

## Sort a collection of songs

```ts
// Parse a .dta file contents
const mySongs = DTAParser(dtaFileContents)

// Sort all songs based on the songs' artist.
mySongs.sort('Artist')
```

# More Rock Band related projects

- [RBTools-JS](https://github.com/ruggeryiury/rbtools-js): A highly typed module package to manipulate several Rock Band game files.
- [My Customs Projects](https://github.com/ruggeryiury/ruggy-customs-projects): All my customs projects.
- [C3 Library Patch](https://github.com/ruggeryiury/c3-library-patch): A metadata patch for many released customs.
- [PRO Guitar/Bass Guide](https://ruggeryiury.github.io/proguitarbass-guide/): My famous PRO Guitar/Bass guide.
