export class Company {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    catchPhrase: string;

    constructor(name: string, location: { lat: number; lng: number; }, catchPhrase: string) {
        this.name = name;
        this.location = location;
        this.catchPhrase = catchPhrase;
    }
}