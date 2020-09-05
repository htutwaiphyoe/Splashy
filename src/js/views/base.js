export const DOMs = {
    body: document.querySelector("body"),
    photos: document.querySelector(".photos"),
    details: document.querySelector(".details"),
};

export const loader = () => `<div class="loader">Loading...</div>`;
export const clearLoader = () =>
    document.querySelector(".loader").parentElement.removeChild(document.querySelector(".loader"));
export const clearPhoto = () =>
    document
        .querySelector(".details__box")
        .parentElement.removeChild(document.querySelector(".details__box"));
export const removeScrollBar = () => DOMs.body.classList.toggle("show");
