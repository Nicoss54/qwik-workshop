export interface People {
  lastname: string;
  firstname: string;
  photo: string;
  entryDate: string;
  birthDate: string;
  gender: string;
  email: string;
  skills: string[];
  geo: {
    lat: number;
    lng: number;
  };
  phone: string;
  address: {
    street: string;
    postalCode: number;
    city: string;
  };
  links: {
    twitter: string;
  };
}
