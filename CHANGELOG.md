# Changelog

## `1.2.0` July 16, 2023
- `DTAParser`:
    - New customized option `update`: Now you can update any song that will be parsed directly based on its unique string ID.
    - New customized option `updateAll`: Now you can update a few values from all songs. For now, only the author can be updated.
    - If `harmonixSongs` is set to `true` on `DTAParser` _options_, all songs will be parsed with "Harmonix" as author, and the multitrack key will be set to `true`.

- Added new `DTAArray` module method: `getSongByID()`:
    - Now you can search for a parsed song inside an array based on its unique string ID.
    
- Added new `DTAArray.sort()` option: sort by songs' unique string ID.

## `1.1.0` July 13, 2023
- `DTAParser`:
    - New customized option `harmonixSongs`: Now you can seek additional information from the RB3 Deluxe update patch when parsing official, pre-RB3 songs or song packs using !

- Fixed a bug on the track counting logic, where the last declared instrument tracks count (usually vocals or keys) would be counted wrong on certain DTA file structures.

## `1.0.0` July 11, 2023
- First stable version.