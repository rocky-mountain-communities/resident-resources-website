export interface Resource {
  name: string;
  description: string;
  phone: string;
  location: string;
  button: {
    link: string;
    text: string;
  };
}
export interface Resources {
  [key: string]: Resource;
}

export interface Subcategory {
  name: string;
  entries: Resources;
}
export interface ResourceCategories {
  [key: string]: {
    name: string;
    subcategories: {
      [key: string]: Subcategory;
    };
  };
}
