export type Fixtures = {
  data: 
    {
      id: number,
      sport_id: number,
      league_id: number,
      season_id: number,
      round_id: number,
      state_id: number,
      venue_id: number,
      name: string,
      starting_at: string,
      result_info: string,
      starting_at_timestamp: Date
    },
  }

  export interface Game {
    idEvent: string;
    strEvent: string;
    strLeague: string;
    strHomeTeam: string;
    strAwayTeam: string;
    dateEvent: string;
    strTime: string;
    strThumb: string;
  }

export type Team = {
  idTeam: string;
  strTeam: string;
  strLeague: string;
  strStadium: string;
}

export interface TeamsResponse {
  teams: Team[] | null;
}



export interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate?: string;
}

export interface LeaguesResponse {
  leagues: League[];
}