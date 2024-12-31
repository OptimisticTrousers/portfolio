export interface Category {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface FetchAllCategoriesAndTags {
  categories: Category[] | undefined;
  tags: Tag[] | undefined;
}

export interface Post {
  _id: string;
  title: string;
  contentHtml: string;
  published: boolean;
  image: {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: string;
  };
  tags: [Tag];
  caption: string;
  category: Category;
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
