interface apiThemaItem {
    title: string;
    link: string;
    method: string;
}

const apiThema: apiThemaItem[] = [
    {
        title: 'Users',
        link: '/api/learning/users',
        method: 'GET'
    },
    {
        title: 'Movies',
        link: '/api/learning/movies',
        method: 'GET'
    },
    {
        title: 'Cities',
        link: '/api/learning/cities',
        method: 'GET'
    },
    {
        title: 'Users',
        link: '/api/learning/post/users',
        method: 'POST'
    },
];

export default apiThema;