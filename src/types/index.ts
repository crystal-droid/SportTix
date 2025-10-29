export type CurrentTabProps = 'home' | 'games' | 'sports' | 'about'

// import { searchTeam } from "./services/sportsService";
import { searchTeam } from "@/component/SportsData";
import { getLeagues } from "@/component/SportsData";


async function fetchTeam() {
    try {
        const data = await searchTeam("Arsenal");
        console.log("Team Data:", data);
    } catch (error) {
        console.error("Unable to fetch data:", error);
    }
}




// src/index.ts

// async function fetchLeagues() {
//     try {
//         const data = await getLeagues();
//         console.log("Leagues:", data.TeamsResponse);
//     } catch (error) {
//         console.error("Unable to fetch leagues:", error);
//     }
// }

// fetchLeagues();


async function fetchLeagues() {
    try {
        const data = await getLeagues();
        console.log("Leagues:", data); // ✅ correct property
    } catch (error) {
        console.error("Unable to fetch leagues:", error);
    }
}

