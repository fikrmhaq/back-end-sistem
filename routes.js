import guru from "./samples/guru.json" assert { type: "json" };
import siswa from "./samples/siswa.json" assert { type: "json" };

const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage : version 1.0';
        },
    },
    {
        method: 'GET',
        path: '/siswa',
        handler: (request, h) => {
            return siswa;
        },
    },
    {
        method: 'GET',
        path: '/guru',
        handler: (request, h) => {
            return guru;
        },
    },
];

export default routes;
