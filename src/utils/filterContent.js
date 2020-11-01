export default function filterContent(series, films) {
    return {
        series: [
            {
                Genre: 'Documentaries',
                data: series?.filter((ele) => ele.genre === 'documentaries'),
            },
            {
                Genre: 'Comedies',
                data: series?.filter((ele) => ele.genre === 'comedies'),
            },
            {
                Genre: 'Children',
                data: series?.filter((ele) => ele.genre === 'children'),
            },
            {
                Genre: 'Crime',
                data: series?.filter((ele) => ele.genre === 'crime'),
            },
            {
                Genre: 'Feel Good',
                data: series?.filter((ele) => ele.genre === 'feel-good'),
            },
        ],
        films: [
            {
                Genre: 'Drama',
                data: films?.filter((ele) => ele.genre === 'drama'),
            },
            {
                Genre: 'Suspense',
                data: films?.filter((ele) => ele.genre === 'suspense'),
            },
            {
                Genre: 'Children',
                data: films?.filter((ele) => ele.genre === 'children'),
            },
            {
                Genre: 'Thriller',
                data: films?.filter((ele) => ele.genre === 'thriller'),
            },
            {
                Genre: 'Romance',
                data: films?.filter((ele) => ele.genre === 'romance'),
            },
        ],
    };
}
