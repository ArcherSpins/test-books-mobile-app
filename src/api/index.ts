import {BookType} from '../types';

const API_URL =
  'https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json';

export class BooksApi {
  static getBookList = async (): Promise<BookType[]> => {
    return await fetch(API_URL).then(res => res.json());
  };

  static getBookById = async (
    id: BookType['isbn'],
  ): Promise<BookType | null> => {
    return (
      (await fetch(API_URL).then(res => res.json())).find(
        (item: BookType) => item.isbn === id,
      ) || null
    );
  };
}
