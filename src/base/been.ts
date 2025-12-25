import { TypeStats } from "../types/types";

export class LiveBeen {
  name: string;
  stats: TypeStats;
  constructor(name: string, stats: TypeStats) {
    this.name = name;
    this.stats = stats;
  }
}
