# Changelog

## `1.2.0` July 23, 2023

- `DTAParser`:
    - New customized option `update`: Updates any song that will be parsed directly based on its unique string ID.
    - New customized option `updateAll`: Updates a few mostly common values from all songs that will be parsed.
    - If `harmonixSongs` is set to `true` on `DTAParser` _options_, all songs will be parsed with "Harmonix" as author, and the multitrack key will be set to `true`.
    - Added parsing for `pack_name`, `context`, `base_points`, `downloaded`, and `decade` values.
    - Fixed an issue where the `karaoke` key inherits the value from the `multitrack` key.

- `DTADocument`:
    - Added documentation of several values from the `.dta` file.
    - Content and custom-only content objects have been merged into the `DTADocument.content` object.
    - New method `json()`: Returns a JSON representation of all values from a song.

- `DTADocument.stringify()` / `DTAArray.stringify()`:
    - New customized option `omitUnusedRanks`: By default, only the PRO Guitar and PRO Bass rankings are omitted from the `.dta` file contents if they're not available. By setting this to `true`, it will omit non-available instrument rankings from the generated file.
    - New customized option `useSpaces`: Set this to `true` if you want to use space indentation rather than tabs. Default is 3 (three) spaces, but you can customize the amount of space characters by placing a number.
    - New customized option `wiiMode`: Now you can generate `.dta` files for Wii-package building.

- `DTAArray` module:
    - Added new module method `getSongByID()`: Searches for a song inside an array based on its unique string ID.
    - Added new module method `filter()`: Filters songs from an array, with a tons of options.
    - Added new module method `sort()`: sort by songs' unique string ID.

- `DTATools` module:
    - Added new module method `readJSON()`, in addition to new `DTADocument.json()` method.
    - Added new module method `checkDrumMix()`.

- Added new `DTANode` module.

## `1.1.0` July 13, 2023
- `DTAParser`:
    - New customized option `harmonixSongs`: Now you can seek additional information from the RB3 Deluxe update patch when parsing official, pre-RB3 songs or song packs.

- Fixed a bug on the track counting logic, where the last declared instrument tracks count (usually vocals or keys) would be counted wrong on certain `.dta` files' structures.

## `1.0.0` July 11, 2023
- First stable version.