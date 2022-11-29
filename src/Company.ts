export class Company {
    companyName: string;
    location: {
        lat: number;
        lng: number;
    };
    catchPhrase: string;

    constructor(companyName: string, location: { lat: number; lng: number; }, catchPhrase: string) {
        this.companyName = companyName;
        this.location = location;
        this.catchPhrase = catchPhrase;
    }
}