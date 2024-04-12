export type DefaultOptionsObject<T, R extends boolean | object | undefined> = R extends true ? Required<T> : R extends false | undefined ? T : Omit<Required<T>, keyof R> & R

/**
 * Utility to create default options for any function, while mixing with user-provided options.
 *
 * On Typescript, it has two type parameters. The first one is required and it's the default options type. It can have optional properties that will return as required properties if you put a `true` value as second type parameter.
 * - - - -
 * @param {T} defaultOptions The default options of the function.
 * @param {T} userOptions `OPTIONAL`: User-provided options with properties to override any default option property. If `undefined` or an empty object, no default properties will be replaced.
 * @returns {DefaultOptionsReturnType<T, R>} The default options merged with given user options.
 * @since v1.1
 */
const useDefaultOptions = <T, R extends boolean | object | undefined = undefined>(defaultOptions: DefaultOptionsObject<T, R>, userOptions?: T): DefaultOptionsObject<T, R> => {
  if (!userOptions) return defaultOptions
  return { ...defaultOptions, ...userOptions }
}

export default useDefaultOptions
