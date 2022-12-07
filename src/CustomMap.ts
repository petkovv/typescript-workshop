interface Entity {
    name: string;
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
        const infowindow = new google.maps.InfoWindow({
            content: `I am here and my name is ${entity.name}`,
            ariaLabel: "My information",
          });

        const marker =  new google.maps.Marker({
            map: this.map,
            position: entity.location,
        })
        marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map: this.map,
            });
          });
    }

    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.map,
    //         position: company.location,
    //     })
    // }
}