export interface User {
  competitiveStats: CompetitiveStats;
  endorsement: number;
  endorsementIcon: string;
  gamesWon: number;
  icon: string;
  level: number;
  levelIcon: string;
  name: string;
  prestige: string;
  prestigeIcon: string;
  private: boolean;
  quickPlayStats: QuickPlayStats;
  rating: number;
  ratingIcon: string;
  ratings: Ratings;
}

export interface CompetitiveStats {
  awards: Awards;
  games: Games;
}
export interface QuickPlayStats {
  awards: Awards;
  games: Games;
}

export interface Awards {
  cards: number;
  medals: number;
  medalsBronze: number;
  medalsSilver: number;
  medalsGold: number;
}

export interface Games {
  played: number;
  won: number;
}

export interface Ratings {
  [index: number]: {
    level: number;
    role: string;
    roleIcon: string;
    rankIcon: string;
  };
}
