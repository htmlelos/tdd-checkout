import axios from "axios";
// console.log("-->", axios);

const swapiGetter = (id: number) =>
  axios
    .get(`https://swapi.dev/api/people/${id}`)
    .then((res) => {
      return res.data.name as string;
    })
    .catch((error) => console.error(error));

export default swapiGetter;
