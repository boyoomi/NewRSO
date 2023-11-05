 const squads = [
    {
        id: 1,
        title: 'Инвар',
        category: 'Строительные',
        desc: 'ССО',
        full: 'Студенческий строительный отряд',
        image: 'squad-logo.png',
        peoples: 12,
        createdAt: '2022-12-10',
        education: 'Амурская государственная медицинская академия',
    },
    {
        id: 2,
        title: 'Звездочки',
        category: 'Проводников',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 19,
        createdAt: '2023-02-10',
        education: 'Амурский государственный университет',
    },
    {
        id: 3,
        title: 'Помощь рядом',
        category: 'Медицинские',
        desc: 'ССО',
        full: 'Студенческий строительный отряд',
        image: 'squad-logo.png',
        peoples: 5,
        createdAt: '2021-12-01',
        education: 'МГУ',
    },
    {
        id: 4,
        title: 'Мафия',
        category: 'Педагогические',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 8,
        createdAt: '2020-11-10',
        education: 'Университет имени Баумана',
    },
    {
        id: 5,
        title: 'Юмористы',
        category: 'Строительные',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 7,
        createdAt: '2021-02-12',
        education: 'Амурская государственная медицинская академия',
    },
    {
        id: 6,
        title: 'Сокол',
        category: 'Сервисные',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 14,
        createdAt: '2012-12-01',
        education: 'Амурский государственный университет',
    },
    {
        id: 7,
        title: 'Гиена',
        category: 'Сельскохозяйственные',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 12,
        createdAt: '2020-12-18',
        education: 'МГУ',
    },
    {
        id: 8,
        title: 'Санитары',
        category: 'Медицинские',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 22,
        createdAt: '2021-04-13',
        education: 'Университет имени Баумана',
    },
    {
        id: 9,
        title: 'Ежики',
        category: 'Педагогические',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 12,
        createdAt: '2022-12-10',
        education: 'Амурская государственная медицинская академия',
    },
    {
        id: 10,
        title: 'Бригада',
        category: 'Путинные',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 2,
        createdAt: '2022-12-10',
        education: 'Амурский государственный университет',
    },
    {
        id: 11,
        title: 'Юниоры',
        category: 'Сервисные',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 5,
        createdAt: '2022-12-10',
        education: 'МГУ',
    },
    {
        id: 12,
        title: 'Студенты МГИМО',
        category: 'Строительные',
        desc: 'ССО',
        full: 'Студенческий строительный отряд',
        image: 'squad-logo.png',
        peoples: 14,
        createdAt: '2022-12-10',
        education: 'Университет имени Баумана',
    },
    {
        id: 13,
        title: 'Барбарики',
        category: 'Проводников',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 22,
        createdAt: '2022-12-10',
        education: 'Амурская государственная медицинская академия',
    },
    {
        id: 14,
        title: 'Спортсмены МГУ',
        category: 'Медицинские',
        desc: 'ССО',
        full: 'Студенческий строительный отряд',
        image: 'squad-logo.png',
        peoples: 10,
        createdAt: '2022-12-10',
        education: 'Амурский государственный университет',
    },
    {
        id: 15,
        title: 'Ковбои',
        category: 'Педагогические',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 4,
        createdAt: '2022-12-10',
        education: 'МГУ',
    },
    {
        id: 16,
        title: 'Пришельцы',
        category: 'Сельскохозяйственные',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 6,
        createdAt: '2022-12-10',
        education: 'Университет имени Баумана',
    },
    {
        id: 17,
        title: 'Луч света',
        category: 'Сельскохозяйственные',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 25,
        createdAt: '2022-12-10',
        education: 'Амурская государственная медицинская академия',
    },
    {
        id: 18,
        title: 'Мираж',
        category: 'Сельскохозяйственные',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 11,
        createdAt: '2022-12-10',
        education: 'Амурский государственный университет',
    },
    {
        id: 19,
        title: 'Градусники',
        category: 'Медицинские',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 17,
        createdAt: '2022-12-10',
        education: 'МГУ',
    },
    {
        id: 20,
        title: 'Студенты РГСУ',
        category: 'Педагогические',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 15,
        createdAt: '2022-12-10',
        education: 'РГГУ',
    },
    {
        id: 21,
        title: 'Топ',
        category: 'Путинные',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 10,
        createdAt: '2022-12-10',
        education: 'Амурская государственная медицинская академия',
    },
    {
        id: 22,
        title: 'Белки',
        category: 'Сервисные',
        desc: 'СОП-1',
        full: 'Студенческий отряд проводников',
        image: 'squad-logo.png',
        peoples: 12,
        createdAt: '2022-12-10',
        education: 'Амурский государственный университет',
    },
];

export default squads