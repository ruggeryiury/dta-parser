import { DTAContentDocument, DTADocument } from '../@types/DTADocument'
import { leadingArticle2Trailing, omitLeadingArticle } from '../utils'
import Locale from '../locale/core'

export type GetDataValueTypes = 'name' | 'artist' | 'vocal_parts' | 'bank' | 'drum_bank'

export type GetDataValueOptions<V extends GetDataValueTypes> = V extends 'name' | 'artist' ? GetDataNamingOptions : V extends 'vocal_parts' | 'bank' | 'drum_bank' ? GetDataRawOptions : never

export type GetDataReturnValues<V extends GetDataValueTypes, O extends GetDataValueOptions<V>> =
    // String
    V extends 'name' | 'artist' | 'bank' | 'drum_bank' ? string : V extends 'vocal_parts' ? (O extends { raw: true } ? number : string) : never

export interface GetDataNamingOptions {
    /** You can specify how the leading article will be
     * placed on the string.
     * - - - -
     * * `emit`: Default option. Will return the whole
     * name/artist as it is.
     *
     * Ex.: ``An Example`` => `An Example`.
     * - - - -
     * * `omit`: Will return the name/artist with the
     * leading article ommited.
     *
     * Ex.: `An Example` => `Example`.
     * - - - -
     * * `trailing`: Will return the name/artist with the
     * leading article on the end of the string, separated with
     * a comma.
     *
     * Ex.: `An Example` => `Example, An`.
     *
     * @default 'emit'
     */
    leadingArticle?: 'emit' | 'omit' | 'trailing'
}

export interface GetDataRawOptions {
    /** Some values are kept on any `.dta` as raw
     * string codes for the game `locale` files. By setting
     * this to `true`, it will return this raw string code
     * instead of the processed raw string code.
     * @default false
     */
    raw?: boolean
}

export const getDTA = <V extends GetDataValueTypes, O extends GetDataValueOptions<V>>(dta: DTADocument, value: V, options?: O): GetDataReturnValues<V, O> => {
    if (value === 'name' || value === 'artist') {
        const opts = options as GetDataNamingOptions | undefined

        if (!opts || (opts && opts.leadingArticle === 'emit')) {
            return dta.content[value as keyof DTAContentDocument] as GetDataReturnValues<V, O>
        } else if (opts && opts.leadingArticle === 'omit') {
            return omitLeadingArticle(dta.content[value as keyof DTAContentDocument] as string) as GetDataReturnValues<V, O>
        }

        // (opts && opts.leadingArticle === 'trailing')
        return leadingArticle2Trailing(dta.content[value as keyof DTAContentDocument] as string) as GetDataReturnValues<V, O>
    } else if (value === 'vocal_parts') {
        const opts = options as GetDataRawOptions | undefined

        if (!opts || (opts && !opts.raw)) {
            return Locale.vocal_parts(dta.content.vocal_parts) as GetDataReturnValues<V, O>
        }

        // (opts && opts.raw)
        return dta.content.vocal_parts as GetDataReturnValues<V, O>
    } else if (value === 'bank') {
        const opts = options as GetDataRawOptions | undefined

        if (!opts || (opts && !opts.raw)) {
            return Locale.bank(dta.content.bank) as GetDataReturnValues<V, O>
        }

        return dta.content.bank as GetDataReturnValues<V, O>
    } else if (value === 'drum_bank') {
        const opts = options as GetDataRawOptions | undefined

        if (!opts || (opts && !opts.raw)) {
            return Locale.drum_bank(dta.content.drum_bank) as GetDataReturnValues<V, O>
        }

        return dta.content.drum_bank as GetDataReturnValues<V, O>
    } else {
        return '' as GetDataReturnValues<V, O>
    }
}
