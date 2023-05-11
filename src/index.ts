import swapiGetter from "./service/swapiGetter";

console.log("Running");

swapiGetter(1).then((res) => console.log("PEOPLE->", res));
