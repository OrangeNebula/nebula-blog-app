class ArticleListItem {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly createdAt: Date,
  ) {}
}

export { ArticleListItem };
