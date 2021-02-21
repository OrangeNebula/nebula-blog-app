class Article {
  constructor(
    public readonly title: string,
    public readonly contents: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {
  }
}

export { Article }