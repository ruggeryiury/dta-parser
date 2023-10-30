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

# 💠 Table of Contents

- [💠 Table of Contents](#-table-of-contents)
- [Usage](#usage)
  - [Parsing a `.dta` File](#parsing-a-dta-file)
  - [Sorting all songs](#sorting-all-songs)
  - [Getting any value from a song](#getting-any-value-from-a-song)
  - [Updating values from a song](#updating-values-from-a-song)
  - [Exporting a song individually, or as a pack](#exporting-a-song-individually-or-as-a-pack)
- [Known Issues](#known-issues)
- [Changelog](#changelog)

# Usage

## Parsing a `.dta` File

Just read the contents of a .dta file, when use `DTAParser()` to parse it. It will return an array of each song included on the .dta file parsed as a `DTAFile` type.

```ts
import DTAParser from 'dta-parser'
import fs from 'fs'

// Read or fetch a .dta file to get its contents.
const dtaFileContents = fs.readFileSync('/path/to/dta-file.dta', 'utf-8')

// Use "DTAParser()", passing the .dta file contents
// as first argument.
const mySongs = DTAParser(dtaFileContents)
...
```

## Sorting all songs

Pass an object as second argument on `DTAParser`, then assign `sortBy` to a sort type to automatically sort all songs on the parsing process.

There's a few options for this one: `name`, `artist`, `song_id`, etc.

```ts
import DTAParser from 'dta-parser'
import fs from 'fs'

// Read or fetch a .dta file to get its contents.
const dtaFileContents = fs.readFileSync('/path/to/dta-file.dta', 'utf-8')

// Use "DTAParser()", passing the .dta file contents
// as first argument, and the sorting options
// as second inside an object.
const mySongs = DTAParser(dtaFileContents, { sortBy: 'song_id' })
...
```

You can also use the `DTAArray` module to sort songs after the parsing process using the `DTAArray.sort()` method.

## Getting any value from a song

Most values from a song can be processed using the `.get()` method. By using it, you can control many aspects from the desired value, with each one of them having different kinds of settings.

```ts
...
// Use "DTAParser()".
const mySongs = DTAParser(dtaFileContents)

// Select any song from the array. You can use the
// * DTAArray * module to get a song from an array
// based on its unique string ID.
const song = DTAArray.getSongByID(mySongs, 'yoursong_str_id')

// Get the song's title, with the leading article at
// the end of the string, separated with a comma...
const songName = song.get('name', { leadingArticle: 'trailing' })

// Get the song's artist...
const songArtist = song.get('artist')

// Boolean value to check if the song has multitracks...
const hasMultitracks = song.get('multitrack')

// Get the song's charter...
const songAuthor = song.get('author')

// Get the song's genre
const songGenre = song.get('genre')
...
```

## Updating values from a song

You can update most of the song values when parsing passing an object as second argument on `DTAParser`, then passing an object with any song's unique string ID on `update` with the updates you want.

```ts
import DTAParser from 'dta-parser'
import fs from 'fs'

// Read or fetch a .dta file to get its contents.
const dtaFileContents = fs.readFileSync('/path/to/dta-file.dta', 'utf-8')

// Use "DTAParser()", passing the .dta file contents
// as first argument, and the options as second argument.
const mySongs = DTAParser(dtaFileContents, {
    // This will sort all songs based on the song's ID
    sortBy: 'song_id',

    // An object to update values from a specific
    // song inside the .dta file
    update: {

        // Updating values for a song with
        // unique string ID 'yoursong_str_id'
        'yoursong_str_id': {

            // Changing the song's title
            name: 'New Title'

            // Updating the song's genre and sub_genre
            genre: {
                genre: 'Rock',
                sub_genre: 'Psychedelic'
            }
        }
    }
})
```

You can also use `DTAFile.update()` method to update values after the parsing process.

## Exporting a song individually, or as a pack

You can stringify a single `DTAFile` or an `Array` for `DTAFile` back to a formatted .dta file contents.

- For single songs, use the `DTAFile.stringify()`:

```ts
...
// Use "DTAParser()".
const mySongs = DTAParser(dtaFileContents)

// Select any song.
const song = DTAArray.getSongByID(parsedDTAs, 'yoursong_str_id')

// A stringified version of the song.
const newDTAFileContents = song.stringify()
```

- For packs, you can use `DTAArray` module:

```ts
// Import the DTAArray module.
import DTAParser, { DTAArray } from '../index'
import fs from 'fs'

// Read or fetch a .dta file to get its contents.
const dtaFileContents = fs.readFileSync('/path/to/dta-file.dta', 'utf-8')

// Use "DTAParser()".
const mySongs = DTAParser(dtaFileContents)

// Process songs (update values, for example)...
...

// A stringified version of the whole pack.
const newDTAFileContents = DTAArray.stringify(mySongs)
```

# Known Issues

- The parser only works for **individual songs/songs pack** `.dta` files.

# Changelog

Check the [changelog](https://github.com/ruggeryiury/dta-parser/blob/master/CHANGELOG.md) to keep track of all implemented features and patches.
