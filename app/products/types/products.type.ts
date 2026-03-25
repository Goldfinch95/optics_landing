export interface ProductSpec {
  label: string;
  value: string;
}
 
export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: string;
  cashPrice: string;
  installments: string;
  whatsappMessage: string;
  specs: ProductSpec[];
}