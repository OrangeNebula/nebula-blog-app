class Article {
  public readonly createdAt: Date;

  constructor(
    public readonly title: string,
    public readonly contents: string,
    createdAt: Date,
    public readonly updatedAt: Date,
  ) {
    this.createdAt = createdAt || new Date();
  }
}

export { Article };
