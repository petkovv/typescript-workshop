import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User('Bat Boiko');
const company = new Company('Mobile Waves', { lat: 42.635932, lng: 23.333518 }, "Koledni bonusi")

const map = new CustomMap('map');

map.addMarker(user);
map.addMarker(company);