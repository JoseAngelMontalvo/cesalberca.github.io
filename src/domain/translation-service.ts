import { Locale } from './language/locale'
import { TranslationIdentifiers } from './language/translations/translation-identifiers'
import { TranslationError } from './language/translation-error'
import { Translator } from './language/translator'
import { Injectable } from './types/injectable'
import { Inject } from './types/inject'
import { TYPES } from '../types'

@Injectable()
export class TranslationService {
  constructor(@Inject(TYPES.TRANSLATOR) private readonly translator: Translator) {}

  translate(locale: Locale, key: keyof TranslationIdentifiers): string {
    const language = this.translator.translations.get(locale)

    if (language !== undefined) {
      const translation = language.get(key)

      if (translation !== undefined) {
        return translation
      } else {
        const defaultTranslation = this.translator.getDefaultLocaleTranslation().get(key)
        if (defaultTranslation === undefined) {
          throw new TranslationError(
            `Translation for key "${key}" in locale "${locale}" could not be found`
          )
        }

        return defaultTranslation
      }
    }

    return this.translator.getDefaultLocaleTranslation().get(key)!
  }

  toString(locale: Locale) {
    switch (locale) {
      case Locale.DEFAULT:
      case Locale.EN:
        return 'en' as const
      case Locale.ES:
        return 'es' as const
      default:
        throw new TranslationError(`Locale ${locale} not found`)
    }
  }

  toLocale(string: string): Locale {
    switch (string) {
      case 'en':
        return Locale.EN
      case 'es':
        return Locale.ES
      default:
        throw new TranslationError(`String ${string} could not be mapped to a locale`)
    }
  }
}
