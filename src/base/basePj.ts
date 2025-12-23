import { Stats } from "./baseStat";
class BaseCharacter {
  name: string;
  stats: Stats;
  constructor(name: string, stats: Stats) {
    this.name = name;
    this.stats = stats;
  }
}
