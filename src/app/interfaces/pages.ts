export interface Pages<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}
