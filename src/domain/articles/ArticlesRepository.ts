import { Id } from '../Id'
import { Article } from './Article'
import { Locale } from '../language'

export interface ArticlesRepository {
  findOneByLocale(id: Id, locale: Locale): Promise<Article>
  findAllByLocale(locale: Locale): Promise<Article[]>
}