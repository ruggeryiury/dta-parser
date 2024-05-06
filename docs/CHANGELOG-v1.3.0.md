- **All dependencies updated to their latest releases.**

- **Webpack removed from package**: Now, _DTAParser_ will only be released as a Node module.
  - Webpack building for older browsers proved to be way unecessary at this point. Packages like _Babel_ required a lot of plugins to manage dependency usage for selective imports, polluting the package dependencies as a whole. If you're intending to make it work, fell free to fork and create a pull request.
