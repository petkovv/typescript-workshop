import { faker } from '@faker-js/faker'

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor(userName: string) {
        this.name = userName;
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }
}