import { DTAContentDocument, DTADocument } from '../@types/DTADocument'
import {
    GetDataValueTypes,
    GetDataValueOptions,
    GetDataReturnValues,
    GetDataNamingOptions,
    GetDataRawOptions,
} from '../@types/core/get'
import { bankLocale, drumBankLocale, vocalPartsLocale } from '../locale'
import { leadingArticle2Trailing, omitLeadingArticle } from '../utils'

export const getDTA = <
    V extends GetDataValueTypes,
    O extends GetDataValueOptions<V>
>(
    dta: DTADocument,
    value: V,
    options?: O
): GetDataReturnValues<V, O> => {
    if (value === 'name' || value === 'artist') {
        const opts = options as GetDataNamingOptions | undefined

        if (!opts || (opts && opts.leadingArticle === 'emit')) {
            return dta.content[
                value as keyof DTAContentDocument
            ] as GetDataReturnValues<V, O>
        } else if (opts && opts.leadingArticle === 'omit') {
            return omitLeadingArticle(
                dta.content[value as keyof DTAContentDocument] as string
            ) as GetDataReturnValues<V, O>
        }

        // (opts && opts.leadingArticle === 'trailing')
        return leadingArticle2Trailing(
            dta.content[value as keyof DTAContentDocument] as string
        ) as GetDataReturnValues<V, O>


    } else if (value === 'vocal_parts') {
        const opts = options as GetDataRawOptions | undefined

        if (!opts || opts && !opts.raw) {
            return vocalPartsLocale(dta.content.vocal_parts) as GetDataReturnValues<V, O>
        }

        // (opts && opts.raw)
        return dta.content.vocal_parts as GetDataReturnValues<V, O>


    } else if (value === 'bank') {
        const opts = options as GetDataRawOptions | undefined

        if (!opts || opts && !opts.raw) {
            return bankLocale(dta.content.bank) as GetDataReturnValues<V, O>
        }

        return dta.content.bank as GetDataReturnValues<V, O>


    } else if (value === 'drum_bank') {
        const opts = options as GetDataRawOptions | undefined

        if (!opts || opts && !opts.raw) {
            return drumBankLocale(dta.content.drum_bank) as GetDataReturnValues<V, O>
        }

        return dta.content.drum_bank as GetDataReturnValues<V, O>


    } else {
        return '' as GetDataReturnValues<V, O>
    }
}
