// 'use client'
// import axios from 'axios';

// import React, {
//     createContext,
//     useContext,
//     useEffect,
//     useState,
//     ReactNode,
//     FC,
// } from 'react'
// import { Game } from '@/types/sportsType'

// // Define the context type
// // interface FixturesContextType {
// //     fixture : Fixtures[];
// //     loading : Boolean;
// //     error : string | null; // <-- changed to allow nullType
// // }

// export interface SportsContextState {
//     games: Game[];
//     loading: boolean;
//     error: string | null;
//     fetchTrendingGames: () => Promise<void>;  // the function trigers the fetch

// }

// // create the context with initial value undifined
// const SportsContext = createContext<SportsContextState | undefined>(undefined)

// // FixturesProvider component
// export const FixturesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [games, setGames] = useState<Game[]>([])
//     const [loading, setLoading] = useState<boolean>(true)
//     const [error, setError] = useState<string | null>(null)

//     const apikey = '3'

//     const fetchTrendingGames = async () => {
//         setLoading(true);
//         setError(null);

//         // The most popular laegues for our " trending" features

//         const trendingLeaguesIds = [
//             '4328',
//             '4335',
//             '4387',
//             '4391',
//         ];

//         try {
//             const requests = trendingLeaguesIds.map(id =>
//                 axios.get(`https://www.thesportsdb.com/api/v1/json/${apikey}/eventsnextleafue.php?id=${id}`)
//             );

//             const response = await axios.all(requests)

//             const allGames = response.flatMap(response => response.data.events || []);

//             const sortedGames = allGames.sort((a, b) =>
//                 new Date(a.dataEvent).getTime() - new Date(b.dataEvent).getTime()
//             );

//             setGames(sortedGames);

//         } catch (err) {
//             console.error("Failed to fetch trending games:", err);
//             setError("Failed to load games. Please try again later")
//         } finally {
//             setLoading(false)
//         }
//     };

//     const value = {
//         games,
//         loading,
//         error,
//         fetchTrendingGames,
//     }

// }


// return (
//     <SportsContext.Provider value={value}>
//         {children}
//     </SportsContext.Provider>
// );
    
// }

// // costom hook to access PostContext
// export const useSports = () => {
//     const context = useContext(SportsContext);
//     if (context === undefined) {
//         throw new Error('useSports must be used within a SportstProvider')
//     }
//     return context;
// }







'use client';

import axios from 'axios';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import { Game } from '@/types/sportsType';

export interface SportsContextState {
  games: Game[];
  loading: boolean;
  error: string | null;
  fetchTrendingGames: () => Promise<void>;
}

const SportsContext = createContext<SportsContextState | undefined>(undefined);

export const SportsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apikey = '3';

  const fetchTrendingGames = async () => {
    setLoading(true);
    setError(null);

    const trendingLeaguesIds = ['4328', '4335', '4387', '4391'];

    try {
      const requests = trendingLeaguesIds.map(id =>
        axios.get(`https://www.thesportsdb.com/api/v1/json/${apikey}/eventsnextleague.php?id=${id}`)
      );

      const responses = await axios.all(requests);
      const allGames = responses.flatMap(res => res.data.events || []);

      const sortedGames = allGames.sort(
        (a, b) => new Date(a.dateEvent).getTime() - new Date(b.dateEvent).getTime()
      );

      const limitedGames = sortedGames.slice( 0, 15)

      setGames(limitedGames);
      
    } catch (err) {
      console.error('Failed to fetch trending games:', err);
      setError('Failed to load games. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const value: SportsContextState = {
    games,
    loading,
    error,
    fetchTrendingGames,
  };

  return (
    <SportsContext.Provider value={value}>
      {children}
    </SportsContext.Provider>
  );
};

// Custom hook
export const useSports = () => {
  const context = useContext(SportsContext);
  if (context === undefined) {
    throw new Error('useSports must be used within a SportsProvider');
  }
  return context;
};
