// array met kunstwerken (globale variabele)
const artworks = [
    {
        title: 'Untitled ',
        year: '2011-2012',
        imageUrl: 'images/meemgallery-mohamed-melehi-untitled-6-2011-2012.webp',
    },
    {
        title: 'Untitled',
        year: '2011-2012',
        imageUrl: 'images/meemgallery-mohamed-melehi-untitled-1-2011-2012.webp',
    },
    {
        title: 'Pink Flame',
        year: '1972',
        imageUrl: 'images/meemgallery-mohamed-melehi-pink-flame-1972.webp',
    },
    {
        title: 'Composition',
        year: '1978',
        imageUrl: 'images/meemgallery-mohamed-melehi-composition-1978.jpg',
    },
    {
        title: 'Cross A',
        year: '1984',
        imageUrl: 'images/meemgallery-mohamed-melehi-cross-a-1984.webp',
    },
    {
        title: 'Untitled',
        year: '2011-2012',
        imageUrl: 'images/meemgallery-mohamed-melehi-untitled-1975.webp',
    },
    {
        title: 'Croise B',
        year: '1984',
        imageUrl: 'images/meemgallery-mohamed-melehi-croise-b-1984.webp',
    },
    {
        title: 'Untitled ',
        year: '2011-2012',
        imageUrl: 'images/meemgallery-mohamed-melehi-untitled-8-2011-2012.webp',
    },
    {
        title: 'Untitled ',
        year: '2011-2012',
        imageUrl: 'images/meemgallery-mohamed-melehi-untitled-7-2011-2012.webp',
    },
    {
        title: 'Zig Zag',
        year: '2011',
        imageUrl: 'images/meemgallery-mohamed-melehi-zig-zag-2011.webp',
    },
];

    // Function om de gallery te genereren
function generateGallery() {
    // (lokale variabele) gallery container element selecteren
    const galleryContainer = document.getElementById('gallery-container');

    // Loop door de artworks array en maak voor elk artwork een gallery item
    artworks.forEach(artwork => {
        // HTML elementen aanmaken
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        const image = document.createElement('img');
        image.src = artwork.imageUrl;
        image.alt = artwork.title;
        // Image en caption
        const caption = document.createElement('p');
        caption.textContent = `${artwork.title} ${artwork.year}`;

        // Append de image en catpion aan de gallery kunstwerk
        galleryItem.appendChild(image);
        galleryItem.appendChild(caption);

        // Append de gallery kunstwerk aan de gallery container
        galleryContainer.appendChild(galleryItem);
    });
}

// Call de generateGallery function als de website geladen wordt
window.onload = generateGallery;