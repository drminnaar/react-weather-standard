import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/geolocation/v1/geolocate';
const API_KEY = process.env.GOOGLE_GEOLOCATION_API_KEY;

class GeolocationService {

    getCurrentPosition() {
        const url = `${BASE_URL}?key=${API_KEY}`;

        return new Promise((resolve, reject) => {
            axios
                .post(url, { considerIp: true })
                .then(response => {
                    if (response && response.status === 200) {
                        const { lat, lng } = response.data.location;
                        resolve({
                            latitude: lat,
                            longitude: lng
                        });
                    } else {
                        reject('Unable to retrieve current location');
                    }
                })
                .catch(error => {
                    const { errors } = error.response.data.error;
                    if (errors && errors.length > 0) {
                        errors.forEach(e => console.log(`Error: ${e.message}, Reason: ${e.reason}`));
                    }
                });
        });
    }
}

export { GeolocationService };