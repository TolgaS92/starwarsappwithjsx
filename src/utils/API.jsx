import axios from "axios";

let API = {
    getStarWarsPeople: function() {
        return axios.get("https://swapi.dev/api/people/");
    },
    getStarWarsPerson: function(id) {
        return axios.get("https://swapi.dev/api/people/" + id)
    },
    getStarWarsFilms: function(id) {
        return axios.get("https://swapi.dev/api/films/" + id)
    },
    getStarWarsPersonWithName: function(query) {
        return axios.get("https://swapi.dev/api/people/?search=" + query)
    },
};
export default API;