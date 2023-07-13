# Changelog

## `1.1.0` July 13, 2023
- Added additional information for official pre-RB3 songs DTA parsing:
    - Now you can seek additional information from the RB3 Deluxe update patch when parsing official, pre-RB3 songs or song packs!
    - In addition to this, a new object key argument is available on the main `DTAParser` function options: `applyUpdates`.
- Fixed a bug on the track counting logic, where the last declared instrument tracks count (usually vocals or keys) would be counted wrong on certain DTA file structures.

## `1.0.0` July 11, 2023
- First stable version.