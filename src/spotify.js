export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = 'http://localhost:3000/';

const clientId = "848ea3bb53d34768b8285e865ca114a0";

const scopes = "user-read-currently-playing%20user-read-recently-played%20user-top-read%20user-modify-playback-state" ;
// scopes = scopes.join("%20");
// %20user-read-playing-state
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;

