export type RootStackParamList = {
  Books: {userId: string};
  BookDetails: {id: BookType['isbn']};
};

export interface BookType {
  title: string;
  isbn: string;
  pageCount: number;
  publishedDate: {$date: string};
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
  status: string;
  authors: string[];
  categories: string[];
}
