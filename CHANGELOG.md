# Changelog

## `1.0.0` ???, 2023

- Major changes from older beta releases:

  - `DTAFile` objects were deprecated, storing the information as a non-complex object (using type `DTAFileContents`).
  - Now, `DTAFile` is a module where you can find methods to manipulate `DTAFileContents` objects.

- Exposed type `DTAFileContents`.
- Created generic types `ExpandedDTAFileContents` to create custom DTA File object with additional content values.

- `DTAFile`:

  - Added new module methods `get()`, `stringify()`, and `update()`, to use with single parsed songs.
  - Added new module method `fullfill()`: Type-safety injects custom DTA file contents attributes.

- `DTAArray`:

  - Added new module method `toJSON()`: Converts an array of parsed songs object to an array with JSON representations of all parsed songs.
  - Added new module method `fromJSON()`: Converts JSON representations of parsed songs into an array of `DTAFile` objects.
  - Added new module method `filter()`: Filters songs from an array, with a tons of options.
  - Added new module method `getHeaders()`: A method that returns an array of string that all, narrowed available values of all songs inside a parsed songs array.
  - Added new module method `update()`: Updates a parsed songs array with contents of another parsed songs array.
  - Added new module method `songList()`: Returns an array with all available songs unique string ID from a parsed songs array.
  - Added new module method `getSongsFromAuthor()`: Filters an array of parsed songs based on the given author ID.

- Some core functions where updated to let you use `DTAFileContents` objects rather than using `DTAFile` complex objects.
- Fixed a bug where keys solo was not placed when using the `DTAFile.update()` method.
- Fixed a bug where vocals and keys ranking where calculated from the 5-lane guitar ranking map.

## `1.0.0-beta.3` July 23, 2023

- `DTAParser`:

  - New options parameter `update`: Updates any song that will be parsed directly based on its unique string ID.
  - New options parameter `updateAll`: Updates a few mostly common values from all songs that will be parsed.
  - If `harmonixSongs` is set to `true` on `DTAParser` _options_, all songs will be parsed with "Harmonix" as author, and the multitrack key will be set to `true`.
  - Added parsing for `pack_name`, `context`, `base_points`, `downloaded`, and `decade` values.
  - Fixed an issue where the `karaoke` key inherits the value from the `multitrack` key.

- `DTAFile`:

  - Added documentation of several values from the `.dta` file.
  - Content and custom-only content objects have been merged into the `DTAFile.content` object.
  - New method `json()`: Returns a JSON representation of all values from a song.

- `DTAFile.stringify()` / `DTAArray.stringify()`:

  - New options parameter `omitUnusedRanks`: By default, only the PRO Guitar and PRO Bass rankings are omitted from the `.dta` file contents if they're not available. By setting this to `true`, it will omit non-available instrument rankings from the generated file.
  - New options parameter `useSpaces`: Set this to `true` if you want to use space indentation rather than tabs. Default is 3 (three) spaces, but you can customize the amount of space characters by placing a number.
  - New options parameter `wiiMode`: Now you can generate `.dta` files for Wii-package building.

- `DTAArray` module:

  - Added new module method `getSongByID()`: Searches for a song inside an array based on its unique string ID.
  - Added new module method `sort()`: sort by songs' unique string ID.

- `DTATools` module:
  - Added new module method `readJSON()`, in addition to new `DTAFile.json()` method.
  - Added new module method `checkDrumMix()`.

## `1.0.0-beta.2` July 13, 2023

- `DTAParser`:

  - New options parameter `harmonixSongs`: Now you can seek additional information from the RB3 Deluxe update patch when parsing official, pre-RB3 songs or song packs.

- Fixed a bug on the track counting logic, where the last declared instrument tracks count (usually vocals or keys) would be counted wrong on certain `.dta` files' structures.

## `1.0.0-beta` July 11, 2023

- First stable version.
