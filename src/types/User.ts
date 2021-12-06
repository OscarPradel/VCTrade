export default interface User {
  cell: string;
  email: string;
  phone: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: Location;
  name: Name;
  picture: Picture;
}

interface Location {
  city: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  country: string;
  postcode: number;
  state: string;
  street: {
    name: string;
    number: number;
  };
  timezone: {
    description: string;
    offset: string;
  };
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
