export class FileLoader {
  private constructor() {}

  public loadArticles(): string[] {
    const spanishArticles = require.context(`./../domain/articles/es`).keys()
    const englishArticles = require.context(`./../domain/articles/en`).keys()
    return Array.from(new Set([...spanishArticles, ...englishArticles]))
  }

  public loadTalks(): string[] {
    const spanishTalks = require.context(`./../domain/talks/es`).keys()
    const englishTalks = require.context(`./../domain/talks/en`).keys()
    return Array.from(new Set([...spanishTalks, ...englishTalks]))
  }

  public static create() {
    return new FileLoader()
  }
}