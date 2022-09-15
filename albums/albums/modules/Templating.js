import Request from "./Request.js";
import GenericFunctions from "./GenericFunctions.js";

export default class Templating extends Request {
    constructor(url, html) {
        super(url);
        this.html = html;
    }

    pickRandomAlbums(data, int) {
        const res = []
        const func = new GenericFunctions()

        for (let i = 0; i < int; i++) {
            let random = func.getRandomInt(1, data.length - 1)
            while (res.indexOf(data[random]) !== -1) {
                console.log(data[random])
                random = func.getRandomInt(1, data.length - 1)
            }
            res.push(data[random])
        };
        return res;
    }

    async render(int = 10) {
        const data = await super.getData()
        const albums = this.pickRandomAlbums(data, int)
        let grid = document.createElement('div')
        grid.classList.add(`grid`)
        for (let i = 0; i < albums.length; i++) {
            let index = i + 1;
            const album = albums[i]

            let gridBox = document.createElement('div')
            gridBox.classList.add(`album${index}`)
            gridBox.classList.add(`card`)

            let albumCard = document.createElement('div');

            let artistLink = document.createElement('a');
            artistLink.href = album.url
            artistLink.target = "_blank";
            let albumArtist = document.createElement('p');
            albumArtist.innerHTML = album.artist
            artistLink.appendChild(albumArtist);

            let nameLink = document.createElement('a');
            nameLink.href = album.url
            nameLink.target = "_blank";
            let albumName = document.createElement('p');
            albumName.innerHTML = album.name
            nameLink.appendChild(albumName);

            let albumUrl = document.createElement('a');
            albumUrl.href = album.url
            albumUrl.target = "_blank";
            albumUrl.innerHTML = `Watch on Last.fm`
            albumUrl.classList.add(`link`)

            let albumCover = document.createElement('img');
            albumCover.src = albums[i].image[3]['#text']

            albumCard.appendChild(artistLink)
            albumCard.appendChild(nameLink)
            albumCard.appendChild(albumUrl)

            gridBox.appendChild(albumCover)
            gridBox.appendChild(albumCard)

            grid.appendChild(gridBox)

        }
        return this.html.appendChild(grid);
    }
}