export default interface ResponseGetArticles {
  articles: {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
    url: string;
  }[];
  next?: string | null;
};
