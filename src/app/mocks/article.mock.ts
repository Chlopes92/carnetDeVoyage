export interface IArticle {
    id: number;   
    country: string;
    city: string;
    startDate: Date;
    returnDate: Date;
    mainPicture: string;
    secondPicture: string[];
    travelText: string;
    goodPoint: string[];
    negativePoint: string[];
    advice: string[];
    summary: string;
    topOfPage: boolean;
}

// export interface IGallery{
//         title: string;
//         img: string;
// }

export const ARTICLE: IArticle[] = [
    {
    id: 1,   
    country: "Albanie",
    city: "Tirana",
    startDate: new Date('2022-04-14'),
    returnDate: new Date('2022-05-17') ,
    mainPicture: "assets/img/albanie-tirana.png",
    secondPicture: Array(8).fill("assets/img/albanie-tirana.png"),
    travelText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    goodPoint: [
                "Un pays très simple à sillonner, sans embrouilles ni complexité,", 
                "Des habitants gentils, spontanés et qui cherchent le contact,",
                "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques."
                ],
    negativePoint: [
                    "Le climat torride en juillet-août, sauf en montagne,",
                    "La côte très fréquentée l’été et de plus en plus bétonnée."
                    ],
    advice: [
             "Prenez une paire de tong !"
            ],
    summary: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
    topOfPage: true,
    },
    {
        id: 2,   
        country: "Grèce",
        city: "Athène",
        startDate: new Date('2022-04-14'),
        returnDate: new Date('2022-05-17') ,
        mainPicture: "assets/img/grece-athene.png",
        secondPicture: Array(8).fill("assets/img/grece-athene.png"),
        travelText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
        goodPoint: [
                    "Un pays très simple à sillonner, sans embrouilles ni complexité", 
                    "Des habitants gentils, spontanés et qui cherchent le contact",
                    "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
                    ],
        negativePoint: [
                        "Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l’été et de plus en plus bétonnée"
                        ],
        advice: [
                "Prenez une paire de tong !"
                ],
        summary: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
        topOfPage: false,
        },
        {
            id: 3,   
            country: "Guatemala",
            city: "Monterrico",
            startDate: new Date('2022-04-14'),
            returnDate: new Date('2022-05-17') ,
            mainPicture: "assets/img/guatemala-monterrico.png",
            secondPicture: Array(8).fill("assets/img/guatemala-monterrico.png"),
            travelText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
            goodPoint: [
                        "Un pays très simple à sillonner, sans embrouilles ni complexité", 
                        "Des habitants gentils, spontanés et qui cherchent le contact",
                        "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
                        ],
            negativePoint: [
                            "Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l’été et de plus en plus bétonnée"
                            ],
            advice: [
                    "Prenez une paire de tong !"
                    ],
            summary: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
            topOfPage: false,
            },
            {
                id: 4,   
                country: "Tunisie",
                city: "Tunis",
                startDate: new Date('2022-04-14'),
                returnDate: new Date('2022-05-17') ,
                mainPicture: "assets/img/tunisie-tunis.png",
                secondPicture: Array(8).fill("assets/img/tunisie-tunis.png"),
                travelText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
                goodPoint: [
                            "Un pays très simple à sillonner, sans embrouilles ni complexité", 
                            "Des habitants gentils, spontanés et qui cherchent le contact",
                            "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
                            ],
                negativePoint: [
                                "Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l’été et de plus en plus bétonnée"
                                ],
                advice: [
                        "Prenez une paire de tong !"
                        ],
                summary: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
                topOfPage: false,
                },
                {
                    id: 5,   
                    country: "Tunisie",
                    city: "El Jem",
                    startDate: new Date('2022-04-14'),
                    returnDate: new Date('2022-05-17') ,
                    mainPicture: "assets/img/tunisie-elJem.png",
                    secondPicture: Array(8).fill("assets/img/tunisie-elJem.png"),
                    travelText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
                    goodPoint: [
                                "Un pays très simple à sillonner, sans embrouilles ni complexité", 
                                "Des habitants gentils, spontanés et qui cherchent le contact",
                                "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
                                ],
                    negativePoint: [
                                    "Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l’été et de plus en plus bétonnée"
                                    ],
                    advice: [
                            "Prenez une paire de tong !"
                            ],
                    summary: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
                    topOfPage: false,
                    }
]

