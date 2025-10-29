import axios from "axios";
// import api from "../api";
import api from "@/libs/axios";
// import { TeamsResponse } from "../types";
import { TeamsResponse } from "@/types/sportsType";




function fetchJSONData() {
    fetch("https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            console.log(data))
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}
fetchJSONData();




// src/services/sportsService.ts

const apiToken = process.env.API_TOKEN

export const fixtures = async (): Promise<any> => {
    const response = await api.get<any>('/fixtures?api_token=apitoken');
    console.log('fetched response:', response.data)
    return response.data;
};






// var fbURLv2="https://www.thesportsdb.com/api/v2/json/all/leagues";
// var commentdata = "";
// $.ajax({
//     url: fbURLv2,
//     data: "message="+commentdata,
//     dataType: "json",
//     type: 'POST',
//     beforeSend: function(xhr) {
//         xhr.setRequestHeader('X-API-KEY', 'xxxxxx');
//         xhr.setRequestHeader('Content-Type', 'application/json');
//     },
//     // If success         
//     success: function (resp) {
//         console.log(resp);
//     },
//     // If error
//     error: function(e) {
//         console.log(e);
//     }
// });


export const getLeagues = async (): Promise<TeamsResponse> => {
    const response = await api.post<TeamsResponse>("/leagues", {
        message: "" // same as commentdata in your old code
    });
    return response.data;
};