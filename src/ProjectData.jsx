import { useTranslation } from "react-i18next";

const ProjectData = () => {

    const { t } = useTranslation("projects")

    const projectsData = [
        {
            id: 1,
            name: t("alurageek.name"),
            path: 'alurageek',
            category: t("alurageek.category"),
            preview: '/Projects/AluraGeek/1.jpg',
            images: [
                {desktopSrc: '../Projects/AluraGeek/1.jpg', mobileSrc: '../Projects/AluraGeek/1-mobile.jpg'},
                {desktopSrc: '../Projects/AluraGeek/2.jpg', mobileSrc: '../Projects/AluraGeek/2-mobile.jpg'},
                {desktopSrc: '../Projects/AluraGeek/3.jpg', mobileSrc: '../Projects/AluraGeek/3-mobile.jpg'},
                {desktopSrc: '../Projects/AluraGeek/4.jpg', mobileSrc: '../Projects/AluraGeek/4-mobile.jpg'},
                {desktopSrc: '../Projects/AluraGeek/5.jpg', mobileSrc: ''},
            ],
            description: t("alurageek.description"),
            tags: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            longDescription: t("alurageek.longDescription"),
            linkGithub : 'https://github.com/Daniel-Barrera-D/AluraGeek',
            demo: 'https://daniel-barrera-d.github.io/AluraGeek/'
        },
        {
            id: 2,
            name: t("encryptor.name"),
            path: 'encryptor',
            category: t("encryptor.category"),
            preview: '/Projects/Encriptador/1.jpg',
            images: [
                {desktopSrc: '../Projects/Encriptador/1.jpg', mobileSrc: '../Projects/Encriptador/1-mobile.jpg'},
                {desktopSrc: '../Projects/Encriptador/2.jpg', mobileSrc: '../Projects/Encriptador/2-mobile.jpg'},
                {desktopSrc: '../Projects/Encriptador/3.jpg', mobileSrc: '../Projects/Encriptador/3-mobile.jpg'},
            ],
            description: t("encryptor.description"),
            tags: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            longDescription: t("encryptor.longDescription"),
            linkGithub : 'https://github.com/Daniel-Barrera-D/Encriptador',
            demo: 'https://daniel-barrera-d.github.io/Encriptador/'
        },
        {
            id: 3,
            name: t("movieTrailers.name"),
            path: 'movie',
            category: t("movieTrailers.category"),
            preview: '/Projects/MovieTrailers/2.jpg',
            images: [
                {desktopSrc: '../Projects/MovieTrailers/1.jpg', mobileSrc: '../Projects/MovieTrailers/1-mobile.jpg'},
                {desktopSrc: '../Projects/MovieTrailers/2.jpg', mobileSrc: '../Projects/MovieTrailers/2-mobile.jpg'},
                {desktopSrc: '../Projects/MovieTrailers/3.jpg', mobileSrc: '../Projects/MovieTrailers/3-mobile.jpg'},
                {desktopSrc: '../Projects/MovieTrailers/4.jpg', mobileSrc: '../Projects/MovieTrailers/4-mobile.jpg'},
            ],
            description: t("movieTrailers.description"),
            tags: [
                'React',
                'MUI',
            ],
            longDescription: t("movieTrailers.longDescription"),
            linkGithub : 'https://github.com/Daniel-Barrera-D/Movie-Trailes',
            demo: 'https://movie-trailes.vercel.app/'
        },
    ]
    return projectsData;
}

export default ProjectData;