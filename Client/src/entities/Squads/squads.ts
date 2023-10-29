const squads = [
  {
    title: "Инвар",
    category: "Строительные",
    desc: "ССО",
    full: "Студенческий строительный отряд",
    image: "/static/images/logo/squad-logo.png",
    peoples: 12,
    createdAt: "2022-12-10",
    education: "Амурская государственная медицинская академия",
  },
  {
    title: "Звездочки",
    category: "Проводников",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 19,
    createdAt: "2023-02-10",
    education: "Амурский государственный университет",
  },
  {
    title: "Помощь рядом",
    category: "Медицинские",
    desc: "ССО",
    full: "Студенческий строительный отряд",
    image: "/static/images/logo/squad-logo.png",
    peoples: 5,
    createdAt: "2021-12-01",
    education: "МГУ",
  },
  {
    title: "Мафия",
    category: "Педагогические",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 8,
    createdAt: "2020-11-10",
    education: "Университет имени Баумана",
  },
  {
    title: "Юмористы",
    category: "Строительные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 7,
    createdAt: "2021-02-12",
    education: "Амурская государственная медицинская академия",
  },
  {
    title: "Сокол",
    category: "Сервисные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 14,
    createdAt: "2012-12-01",
    education: "Амурский государственный университет",
  },
  {
    title: "Гиена",
    category: "Сельскохозяйственные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 12,
    createdAt: "2020-12-18",
    education: "МГУ",
  },
  {
    title: "Санитары",
    category: "Медицинские",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 22,
    createdAt: "2021-04-13",
    education: "Университет имени Баумана",
  },
  {
    title: "Ежики",
    category: "Педагогические",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 12,
    createdAt: "2022-12-10",
    education: "Амурская государственная медицинская академия",
  },
  {
    title: "Бригада",
    category: "Путинные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 2,
    createdAt: "2022-12-10",
    education: "Амурский государственный университет",
  },
  {
    title: "Юниоры",
    category: "Сервисные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 5,
    createdAt: "2022-12-10",
    education: "МГУ",
  },
  {
    title: "Студенты МГИМО",
    category: "Строительные",
    desc: "ССО",
    full: "Студенческий строительный отряд",
    image: "/static/images/logo/squad-logo.png",
    peoples: 14,
    createdAt: "2022-12-10",
    education: "Университет имени Баумана",
  },
  {
    title: "Барбарики",
    category: "Проводников",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 22,
    createdAt: "2022-12-10",
    education: "Амурская государственная медицинская академия",
  },
  {
    title: "Спортсмены МГУ",
    category: "Медицинские",
    desc: "ССО",
    full: "Студенческий строительный отряд",
    image: "/static/images/logo/squad-logo.png",
    peoples: 10,
    createdAt: "2022-12-10",
    education: "Амурский государственный университет",
  },
  {
    title: "Ковбои",
    category: "Педагогические",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 4,
    createdAt: "2022-12-10",
    education: "МГУ",
  },
  {
    title: "Пришельцы",
    category: "Сельскохозяйственные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 6,
    createdAt: "2022-12-10",
    education: "Университет имени Баумана",
  },
  {
    title: "Луч света",
    category: "Сельскохозяйственные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 25,
    createdAt: "2022-12-10",
    education: "Амурская государственная медицинская академия",
  },
  {
    title: "Мираж",
    category: "Сельскохозяйственные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 11,
    createdAt: "2022-12-10",
    education: "Амурский государственный университет",
  },
  {
    title: "Градусники",
    category: "Медицинские",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 17,
    createdAt: "2022-12-10",
    education: "МГУ",
  },
  {
    title: "Студенты РГСУ",
    category: "Педагогические",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 15,
    createdAt: "2022-12-10",
    education: "РГГУ",
  },
  {
    title: "Топ",
    category: "Путинные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 10,
    createdAt: "2022-12-10",
    education: "Амурская государственная медицинская академия",
  },
  {
    title: "Белки",
    category: "Сервисные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 12,
    createdAt: "2022-12-10",
    education: "Амурский государственный университет",
  },
]