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

- [API](#api)
  - [`SongsDTA()` class](#songsdta-class)
    - [Class properties](#class-properties)
    - [Static methods](#static-methods)
      - [`fromURL()`](#fromurl)
      - [`fromRecipes()`](#fromrecipes)
    - [`genRecipes()`](#genrecipes)
    - [`getSongByID()`](#getsongbyid)
    - [`patchSongIDs()`](#patchsongids)
    - [`patchEncodings()`](#patchencodings)
    - [`update()`](#update)
    - [`updateAll()`](#updateall)
    - [`sort()`](#sort)
    - [`stringify()`](#stringify)
- [More Rock Band related projects](#more-rock-band-related-projects)

# API

The main exports of this package consists on classes that represents the contents of a `.dta` file to be processed. All secondary methods used on these classes is also available to import from `dta-parser/lib`.

## `SongsDTA()` class

SongsDTA is a class that represents the contents of a `songs.dta` file. It is initalized passing a path as an argument, this argument can be:

- A path to a `song.dta` file (as `string` or an instantiated [`Path`](https://github.com/ruggeryiury/path-js) class).
- The contents of a DTA file (as `string`).
- A `Buffer` object of a DTA file.
- A parsed `DTAFile` object.

```ts
import { SongsDTA } from 'dta-parser'
const dtaPath = 'path/to/songs.dta'
const songs = new SongsDTA(dtaPath)
```

### Class properties

- **_songs_** `DTAFile[]` An array with object that represents the contents of a DTA song entry.

### Static methods

#### `fromURL()`

Asynchronously fetches a `songs.dta` file from an URL.

- Parameters:

  - **_url_** `string` The URL of the `.dta` file.

- Returns: `Promise<SongsDTA>` A new instantiated `SongsDTA` class.

#### `fromRecipes()`

Returns a new `SongsDTA` instance from complete songs' recipes.

- Parameters:

  - **_recipes_** `DTAFileRecipe | DTAFileRecipe[]` A `DTAFileRecipe` object, or an array of `DTAFileRecipe` objects.

- Returns: `Promise<SongsDTA>` A new instantiated `SongsDTA` class.

### `genRecipes()`

Creates an array of `DTAFileRecipe` objects from each songs entry of this class.

- Returns: `DTAFileRecipe[]`

### `getSongByID()`

Returns a specific song contents based on its song ID (shortname). If no song if found, it will returns as `undefined`.

- Parameters:

  - **_id_** `string` A `DTAFileRecipe` object, or an array of `DTAFileRecipe` objects.

- Returns: `DTAFile | undefined`

### `patchSongIDs()`

Patches non-numerical song IDs to numerical ones, using specific CRC32 hashing method.

[_See the original C# function on **GitHub Gist**_](https://gist.github.com/InvoxiPlayGames/f0de3ad707b1d42055c53f0fd1428f7f), coded by [Emma (InvoxiPlayGames)](https://gist.github.com/InvoxiPlayGames).

### `patchEncodings()`

Patches the encoding values of each song.

### `update()`

Updates a song contents based on its song ID (shortname).

- Parameters:

  - **_id_** `string` The unique shortname ID of the song you want to update.
  - **_update_** `DTAUpdateOptionsForExtend` An object with updates values to be applied on the `DTAFile` song entry.

### `updateAll()`

Updates all songs with provided update values.

- Parameters:
  - **_update_** `DTAUpdateOptionsForExtend` update An object with updates values to be applied on each `DTAFile` song entry.

### `sort()`

Sorts all songs entries using several sorting methods.

- Parameters:
  - **_sortBy_** `SongSortingTypes` The sorting method type.

### `stringify()`

Stringifies all songs from this class to `.dta` file contents.

- Parameters:

  - **_options ?_** `SongStringifyOptions` An object with values that changes the behavior of the stringify process.

- Returns: `string`

# More Rock Band related projects

- [RBTools-JS](https://github.com/ruggeryiury/rbtools-js): A highly typed module package to manipulate several Rock Band game files.
- [My Customs Projects](https://github.com/ruggeryiury/ruggy-customs-projects): All my customs projects.
- [C3 Library Patch](https://github.com/ruggeryiury/c3-library-patch): A metadata patch for many released customs.
- [PRO Guitar/Bass Guide](https://ruggeryiury.github.io/proguitarbass-guide/): My famous PRO Guitar/Bass guide.
