import { PowerStats } from "./PowerStats";

export class SuperHeros {
  id: number;
  name: string;
  slug: string;
  powerstats: PowerStats;


  constructor(
    id: number,
    name: string,
    slug: string,
    powerstats: PowerStats,
  ) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.powerstats = powerstats;
  }
}
