export interface News {
  _id: string;
  title: string;
  description: string;
  content: string;
  date: Date;
  author: string;
  archiveDate?: Date | string;
}

export interface NewsState {
  allNews: News[];
  isLoaded: boolean;
}
