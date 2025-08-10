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

export interface SaveNewsDTO {
  title: string;
  description: string;
  content: string;
  author: string;
}

export interface NewsModalProps {
  open: boolean;
  handleClose: () => void;
}
