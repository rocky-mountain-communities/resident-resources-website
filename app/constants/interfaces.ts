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

export interface Subcategory {
  name: string;
  entries: Resource[];
}

export interface ResourceCategories {
  [key: string]: {
    name: string;
    subcategories: {
      [key: string]: Subcategory;
    };
  };
}
