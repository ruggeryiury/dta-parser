# Changelog

## `1.2.0` July 18, 2023
- `DTAParser`:
    - New customized option `update`: Updates any song that will be parsed directly based on its unique string ID.
    - New customized option `updateAll`: Updates a few mostly common values from all songs that will be parsed.
    - If `harmonixSongs` is set to `true` on `DTAParser` _options_, all songs will be parsed with "Harmonix" as author, and the multitrack key will be set to `true`.
    - Added parsing for `pack_name`, `context`, and `base_points` values.
    - Fixed an issue where the `karaoke` key inherits the value from the `multitrack` key.

- `DTADocument`:
    - Added documentation of several values from the `.dta` file.
    - Content and custom-only content objects have been merged into the `DTADocument.content` object.
    - New method `json()`: Returns a JSON representation of all values from a song.

- `DTAArray` module:
    - Added new module method `getSongByID()`: Searches for a song inside an array based on its unique string ID.
    - Added new module method `filter()`: Filters songs from an array, with a tons of options.
    - Added new `DTAArray.sort()` option: sort by songs' unique string ID.

- `DTATools` module:
    - Added new module method `read()` (in addition to new `DTADocument.json()` method).

- `stringify()`:
    - New customized option `omitUnusedRanks`.
    - New customized options `useSpaces`.
    - New customized option `wiiMode`: Now you can generate `.dta` files for Wii-package building.

## `1.1.0` July 13, 2023
- `DTAParser`:
    - New customized option `harmonixSongs`: Now you can seek additional information from the RB3 Deluxe update patch when parsing official, pre-RB3 songs or song packs.

- Fixed a bug on the track counting logic, where the last declared instrument tracks count (usually vocals or keys) would be counted wrong on certain `.dta` files' structures.

## `1.0.0` July 11, 2023
- First stable version.