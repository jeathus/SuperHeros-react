export interface PowerStats {
  intelligence?: number;
  strength?: number;
  speed?: number;
  durability?: number;
  power?: number;
  combat?: number;
}

export class SuperHeros {
  id: number;
  name: string;
  slug: string;
  powerstats: PowerStats;

  constructor(
    id: number,
    name: string,
    slug: string,
    powerstats: PowerStats = {}
  ) {
    this.id = id;
    this.name = name || "Unknown Hero";
    this.slug = slug || "unknown-slug";
    this.powerstats = powerstats;
  }

  // Getter for PowerStats
  getPowerStats(): string {
    return `
      Intelligence: ${this.powerstats.intelligence ?? "N/A"},
      Strength: ${this.powerstats.strength ?? "N/A"},
      Speed: ${this.powerstats.speed ?? "N/A"},
      Durability: ${this.powerstats.durability ?? "N/A"},
      Power: ${this.powerstats.power ?? "N/A"},
      Combat: ${this.powerstats.combat ?? "N/A"}
    `;
  }

  // Method to Display Hero Information
  displayInfo(): string {
    return `
      ID: ${this.id}
      Name: ${this.name}
      Slug: ${this.slug}
      Power Stats:
      ${this.getPowerStats()}
    `;
  }
}
