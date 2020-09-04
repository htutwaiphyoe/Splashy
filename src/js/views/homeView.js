import { DOMs } from "./base";

let photoSmalls = [];
let photoBigs = [];
const generatePhotos = (photos) => {
    photos.forEach((photo) => {
        photo.width >= photo.height ? photoSmalls.push(photo) : photoBigs.push(photo);
    });
    const smalls = photoSmalls.splice(0, 3);
    const bigs = photoBigs.splice(0, 6);

    const smallDOMString = smalls.map(
        (small, index) =>
            `
                <div class="photos__box-sm--${index} data-id="${small.id}">
                    <img
                        src="${small.urls.regular}" alt="${small.alt_description}"
                    />
                </div>

`
    );
    const bigDOMString = bigs.map(
        (small, index) =>
            `
                <div class="photos__box-big--${index} data-id="${small.id}">
                    <img
                        src="${small.urls.regular}" alt="${small.alt_description}"
                    />
                </div>

`
    );
    // return [...smallDOMString, ...bigDOMString].join("");
    return [
        smallDOMString[0],
        bigDOMString[0],
        bigDOMString[1],
        bigDOMString[2],
        smallDOMString[1],
        bigDOMString[3],
        bigDOMString[4],
        bigDOMString[5],
        smallDOMString[2],
    ].join("");
};
export const renderPhotos = (photos) => {
    console.log(photos[0]);
    let markup = `<div class="photos__box">${generatePhotos(photos)}</div>`;
    DOMs.photos.insertAdjacentHTML("beforeend", markup);
};
