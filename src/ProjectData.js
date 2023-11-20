export const projectsData = [
    {
        id: 1,
        name: 'Alura Geek',
        path: 'alurageek',
        category: 'Full Stack Application',
        preview: '/Projects/AluraGeek/1.jpg',
        images: [
            {desktopSrc: '../Projects/AluraGeek/1.jpg', mobileSrc: '../Projects/AluraGeek/1-mobile.jpg'},
            {desktopSrc: '../Projects/AluraGeek/2.jpg', mobileSrc: '../Projects/AluraGeek/2-mobile.jpg'},
            {desktopSrc: '../Projects/AluraGeek/3.jpg', mobileSrc: '../Projects/AluraGeek/3-mobile.jpg'},
            {desktopSrc: '../Projects/AluraGeek/4.jpg', mobileSrc: '../Projects/AluraGeek/4-mobile.jpg'},
            {desktopSrc: '../Projects/AluraGeek/5.jpg', mobileSrc: ''},
        ],
        description: 'Web application of what would be an ecommerce developed as a challenge by Alura Latam.',
        tags: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        longDescription: `<p>This was a frontend application and a small backend part, it was a challenge set by Alura Latam in her frontend web development teaching.</p>
        <p>This application has an administrator view, where you can create and delete products that will be sold.</p>
        <p>To simulate the database, a fake API was used through a .json file, which would then use its data to show the products to the client.</p>`,
        linkGithub : 'https://github.com/Daniel-Barrera-D/AluraGeek',
        demo: 'https://daniel-barrera-d.github.io/AluraGeek/'
    },
    {
        id: 2,
        name: 'Text Encryptor',
        path: 'encryptor',
        category: 'Frontend Application',
        preview: '/Projects/Encriptador/1.jpg',
        images: [
            {desktopSrc: '../Projects/Encriptador/1.jpg', mobileSrc: '../Projects/Encriptador/1-mobile.jpg'},
            {desktopSrc: '../Projects/Encriptador/2.jpg', mobileSrc: '../Projects/Encriptador/2-mobile.jpg'},
            {desktopSrc: '../Projects/Encriptador/3.jpg', mobileSrc: '../Projects/Encriptador/3-mobile.jpg'},
        ],
        description: 'Web application to encrypt or decrypt texts.',
        tags: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        longDescription: `<p>Application where the user enters a text, this must be in lowercase and without accents, what it will do is to encrypt the text that the user has typed.</p>
        <p>It has the option to copy to the clipboard the result and it will be automatically copied to the text input for a better user experience, in case you want to encrypt or decrypt a result according to the occasion.</p>
        <p>Developed with HTML, CSS and JavaScript.</p>`,
        linkGithub : 'https://github.com/Daniel-Barrera-D/Encriptador',
        demo: 'https://daniel-barrera-d.github.io/Encriptador/'
    },
    {
        id: 3,
        name: 'Movie Trailers',
        path: 'movie',
        category: 'Frontend Application',
        preview: '/Projects/MovieTrailers/2.jpg',
        images: [
            {desktopSrc: '../Projects/MovieTrailers/1.jpg', mobileSrc: '../Projects/MovieTrailers/1-mobile.jpg'},
            {desktopSrc: '../Projects/MovieTrailers/2.jpg', mobileSrc: '../Projects/MovieTrailers/2-mobile.jpg'},
            {desktopSrc: '../Projects/MovieTrailers/3.jpg', mobileSrc: '../Projects/MovieTrailers/3-mobile.jpg'},
            {desktopSrc: '../Projects/MovieTrailers/4.jpg', mobileSrc: '../Projects/MovieTrailers/4-mobile.jpg'},
        ],
        description: 'Web application to view movie trailers.',
        tags: [
            'React',
            'MUI',
        ],
        longDescription: `<p>Web application where users can view movie trailers, classified by genre.</p>
        <p>The application has two different routes, where in one you can add new movie trailers and in the other new genres, both through a form.</p>
        <p>Developed in React and making use of the MUI library.</p>`,
        linkGithub : 'https://github.com/Daniel-Barrera-D/Movie-Trailes',
        demo: 'https://movie-trailes.vercel.app/'
    },
]