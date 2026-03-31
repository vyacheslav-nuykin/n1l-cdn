const n1l = {
    formatDate: (date) => new Date(date).toLocaleString('ru-RU'),

    fetchN1lAPI: async (endpoint) => {
        const res = await fetch(`https://api.n1l.ru/v1/${endpoint}`);
        return res.json();
    }
};
