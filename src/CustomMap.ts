interface Entity {
    location: {
        lat: number;
        lng: number;
    }
}

export class CustomMap {
    private map: google.maps.Map;

    constructor(mapContainer: string) {
        this.map = new google.maps.Map(document.getElementById(mapContainer)!, {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 1
        })
    }

    addMarker(entity: Entity): void {
        new google.maps.Marker({
            map: this.map,
            position: entity.location,
        })
    }

    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.map,
    //         position: company.location,
    //     })
    // }
}