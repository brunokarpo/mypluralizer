import * as pluralize from 'pluralize'

/**
 * @method: Returns the plural form of any noun.
 * @param {string}
 * @Return {string}
 */
export function getPlural(str: any): string {
    return pluralize.plural(str)
}