interface ButtonProps {
  className?: string;
  path?: string;
  title: string;
  icon?: any;
}

type feature ={
  start:string;
  engine:string;
  distance:string;
}
interface Bike {
  id: number;
  name: string;
  image: string;
  rating: number;
  features: feature;
  price: string;
}


interface userData {
  email:string;
  first_name: string;
  id: string;
  is_superuser: boolean;
  last_name: string;
  profile_picture: string;
  username: string;
};