export interface FeaturedProducts {
  img: [{ thumbnails: { large: { url: string } } }];
  productId: string;
  productCost: string;
  productName: string;
}

export interface ProductProps {
  img: string;
  title: string;
  price: string;
  productId: string;
}
export interface ProductArrProps {
  img: [{ thumbnails: { large: { url: string } } }];
  title: string;
  price: string;
  productId: string;
}

export interface ProductsResponse {
  Images: [{ thumbnails: { large: { url: string } } }];
  Name: string;
  UnitCost: string;
  objectID: string;
}

export interface UserUpdateProps {
  fullname?: string;
  phoneNumber?: string;
  address?: string;
  province?: string;
  city?: string;
}
