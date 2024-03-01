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

# Features

With *DTA Parser* you can:
- Parse both individual song `.dta` file or a song pack `.dta` file as an object.
- Create a `.dta` file directly using JavaScript.
- "Stringify" any created/parsed song back to `.dta` file contents.
- Sort a collection of songs based on many sorting methods available on the package.
- Fetch and even process any value from any song.
- Fetch album artworks URLs from any song using the *Spotify API* (coming soon).

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