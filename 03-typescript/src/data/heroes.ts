export interface Hero {
  id: number;
  name: string;
  owner: string;
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: "spiderman",
    owner: "marvel",
  },
  {
    id: 2,
    name: "superman",
    owner: "dc",
  },
  {
    id: 3,
    name: "batman",
    owner: "dc",
  },
];
