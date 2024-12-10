const images = [
    {
        preview: '../task1/img/preview/img1.jpg',
        original: '../task1/img/original/img1.jpg',
        description: 'Shark Image 1',
    },
    {
        preview: '../task1/img/preview/img2.jpg',
        original: '../task1/img/original/img2.jpg',
        description: 'Shark Image 2',
    },
    {
        preview: '../task1/img/preview/img3.jpg',
        original: '../task1/img/original/img3.jpg',
        description: 'Shark Image 3',
    },
    {
        preview: '../task1/img/preview/img4.jpg',
        original: '../task1/img/original/img4.jpg',
        description: 'Shark Image 4',
    },
    {
        preview: '../task1/img/preview/img5.jpg',
        original: '../task1/img/original/img5.jpg',
        description: 'Shark Image 5',
    },
    {
        preview: '../task1/img/preview/img6.jpg',
        original: '../task1/img/original/img6.jpg',
        description: 'Shark Image 6',
    },
    {
        preview: '../task1/img/preview/img7.jpg',
        original: '../task1/img/original/img7.jpg',
        description: 'Shark Image 7',
    },
    {
        preview: '../task1/img/preview/img8.jpg',
        original: '../task1/img/original/img8.jpg',
        description: 'Shark Image 8',
    },
    {
        preview: '../task1/img/preview/img9.jpg',
        original: '../task1/img/original/img9.jpg',
        description: 'Shark Image 9',
    },
];

const gallery = document.querySelector('.gallery');

const galleryItems = images.map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>
`).join('');

gallery.innerHTML = galleryItems;

gallery.addEventListener('click', event => {
    const isImage = event.target.classList.contains('gallery__image');
    if (!isImage) return;

    event.preventDefault();

    const originalImage = event.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${originalImage}" alt="${event.target.alt}">
    `);

    instance.show();
});
