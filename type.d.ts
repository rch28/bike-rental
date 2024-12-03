interface ButtonProps {
  className?: string;
  path?: string;
  title: string;
  icon?: any;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void | undefined;
}

// type feature ={
//   start:string;
//   engine:string;
//   distance:string;
// }
// interface Bike {
//   id?: string;
//   name: string;
//   rating?: number;
//   brand?: string;
//   model?: string;
//   year?: number;
//   color?: string;
//   features: Features;
//   price: number;
//   description?: string;
//   image?: string;
//   date?: string;
// }
interface BikeResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Bike[];
}
