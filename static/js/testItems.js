// элементы первого теста
/*  Индексы отличны от ключей, для заполнения кейсов, использовать нумерацию с 1 (1...5)
человек - природа = 0
человек - техника = 1
человек - человек = 2
человек - знаковая техника, знаковый образ = 3
человек - художественный образ = 4
*/
const testOneItems = [
    {
        "question": null,
        "answers": [
            {
                "content": "Ухаживать за животными",
                "weight": 0,
                "active": false
            },
            {
                "content": "Обслуживать машины, приборы (следить, регулировать)",
                "weight": 1,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Помогать больным людям, лечить их",
                "weight": 2,
                "active": false
            },
            {
                "content": "Составлять таблицы, схемы, программы для вычислительных машин",
                "weight": 3,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Следить за качеством книжных иллюстраций, плакатов, художественных открыток, грампластинок",
                "weight": 4,
                "active": false
            },
            {
                "content": "Следить за состоянием, развитием растений",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Обрабатывать материалы (дерево, ткань, пластмассу, металл и т.п.).",
                "weight": 1,
                "active": false
            },
            {
                "content": "Доводить товары до потребителя (рекламировать, продавать)",
                "weight": 2,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Обсуждать научно-популярные книги, статьи",
                "weight": 3,
                "active": false
            },
            {
                "content": "Обсуждать художественные книги (или пьесы, концерты)",
                "weight": 4,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Сообщать, разъяснять людям нужные им сведения (в справочном бюро, на экскурсии и т.д.)",
                "weight": 2,
                "active": false
            },
            {
                "content": "Художественно оформлять выставки, витрины (или участвовать в подготовке мероприятий, концертов)",
                "weight": 4,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Ремонтировать вещи, изделия (одежду, технику), жилище",
                "weight": 1,
                "active": false
            },
            {
                "content": "Искать и исправлять ошибки в текстах, таблицах, рисунках",
                "weight": 3,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Лечить животных",
                "weight": 0,
                "active": false
            },
            {
                "content": "Выполнять вычисления, расчеты",
                "weight": 3,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Выводить новые сорта растений",
                "weight": 0,
                "active": false
            },
            {
                "content": "Конструировать, проектировать новые виды промышленных изделий (машины или одежду, дома, продукты питания и т.п.)",
                "weight": 1,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Разбирать споры, ссоры между людьми, убеждать, разъяснять поощрять, наказывать",
                "weight": 2,
                "active": false
            },
            {
                "content": "Разбираться в чертежах, схемах, таблицах (проверять, уточнять, приводить в порядок)",
                "weight": 3,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Наблюдать, изучать работу кружков художественной самодеятельности",
                "weight": 4,
                "active": false
            },
            {
                "content": "Наблюдать, изучать жизнь микробов",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Обслуживать, налаживать медицинские приборы, аппараты",
                "weight": 1,
                "active": false
            },
            {
                "content": "Оказывать людям медицинскую помощь при ранениях, ушибах, ожогах и т.п.",
                "weight": 2,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Красить или расписывать стены помещений, поверхность изделий",
                "weight": 4,
                "active": false
            },
            {
                "content": "Осуществлять монтаж зданий или сборку машин, приборов",
                "weight": 1,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Организовывать культпоходы сверстников или младших в театры, музеи, экскурсии, туристические походы и т.п",
                "weight": 2,
                "active": false
            },
            {
                "content": "Играть на сцене, принимать участие в концертах",
                "weight": 4,
                "active": false
            }
        ]
    },
    {
        "question": null,
        "answers": [
            {
                "content": "Вести борьбу с болезнями растений, с вредителями леса, сада",
                "weight": 0,
                "active": false
            },
            {
                "content": "Работать на клавишных машинах",
                "weight": 3,
                "active": false
            }
        ]
    }
]
// элементы второго теста
const testTwoItems = [
    {
        "question": "Обучение в школе и знания необходимы мне для...",
        "answers": [
            {
                "content": "получения образования",
                "weight": 5,
                "active": false
            },
            {
                "content": "поступления в вуз",
                "weight": 4,
                "active": false
            },
            {
                "content": "будущей профессии",
                "weight": 4,
                "active": false
            },
            {
                "content": "ориентировки в жизни",
                "weight": 3,
                "active": false
            },
            {
                "content": "того, чтобы устроиться на работу",
                "weight": 4,
                "active": false
            }
        ]
    },
    {
        "question": "Я бы не учился, если бы...",
        "answers": [
            {
                "content": "не было школы",
                "weight": 0,
                "active": false
            },
            {
                "content": "не жил в России",
                "weight": 3,
                "active": false
            },
            {
                "content": "не воля родителей",
                "weight": 0,
                "active": false
            },
            {
                "content": "не получал знания",
                "weight": 5,
                "active": false
            },
            {
                "content": "не жил",
                "weight": 4,
                "active": false
            }
        ]
    },
    {
        "question": "Мне нравится, когда меня хвалят за...",
        "answers": [
            {
                "content": "хорошие отметки",
                "weight": 2,
                "active": false
            },
            {
                "content": "успехи в учебе",
                "weight": 2,
                "active": false
            },
            {
                "content": "приложенные усилия",
                "weight": 5,
                "active": false
            },
            {
                "content": "мои способности",
                "weight": 2,
                "active": false
            },
            {
                "content": "выполнение домашнего задания",
                "weight": 5,
                "active": false
            },
            {
                "content": "мои личные качества",
                "weight": 3,
                "active": false
            }
        ]
    },
    {
        "question": "Мне кажется, что цель моей жизни...",
        "answers": [
            {
                "content": "работать, жить и наслаждаться жизнью",
                "weight": 3,
                "active": false
            },
            {
                "content": "закончить школу",
                "weight": 0,
                "active": false
            },
            {
                "content": "доставлять пользу людям",
                "weight": 4,
                "active": false
            },
            {
                "content": "обучение",
                "weight": 5,
                "active": false
            }
        ]
    },
    {
        "question": "Моя цель на уроке...",
        "answers": [
            {
                "content": "усвоить что-то новое",
                "weight": 5,
                "active": false
            },
            {
                "content": "пообщаться с друзьями",
                "weight": 1,
                "active": false
            },
            {
                "content": "слушать учителя",
                "weight": 3,
                "active": false
            },
            {
                "content": "получить хорошую оценку",
                "weight": 2,
                "active": false
            },
            {
                "content": "никому не мешать",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "При планировании своей работы я...",
        "answers": [
            {
                "content": "тщательно обдумываю ее",
                "weight": 5,
                "active": false
            },
            {
                "content": "сравниваю ее с имеющимся у меня опытом",
                "weight": 3,
                "active": false
            },
            {
                "content": "сначала стараюсь понять ее суть",
                "weight": 5,
                "active": false
            },
            {
                "content": "стараюсь сделать это так, чтобы работа была полностью",
                "weight": 3,
                "active": false
            },
            {
                "content": "обращаюсь за помощью к старшим",
                "weight": 0,
                "active": false
            },
            {
                "content": "сначала отдыхаю",
                "weight": 1,
                "active": false
            }
        ]
    },
    {
        "question": "Самое интересное на уроке — это...",
        "answers": [
            {
                "content": "общение с друзьями",
                "weight": 1,
                "active": false
            },
            {
                "content": "общение с учителем",
                "weight": 3,
                "active": false
            },
            {
                "content": "изучение новой темы",
                "weight": 5,
                "active": false
            },
            {
                "content": "объяснения учителем нового материала",
                "weight": 4,
                "active": false
            },
            {
                "content": "получать хорошие отметки",
                "weight": 2,
                "active": false
            },
            {
                "content": "отвечать устно",
                "weight": 3,
                "active": false
            }
        ]
    },
    {
        "question": "Я изучаю материал добросовестно, если...",
        "answers": [
            {
                "content": "он для меня интересен",
                "weight": 3,
                "active": false
            },
            {
                "content": "у меня хорошее настроение",
                "weight": 1,
                "active": false
            },
            {
                "content": "меня заставляют",
                "weight": 0,
                "active": false
            },
            {
                "content": "мне не дают списать",
                "weight": 0,
                "active": false
            },
            {
                "content": "мне надо исправить плохую отметку",
                "weight": 2,
                "active": false
            },
            {
                "content": "я его хорошо понимаю",
                "weight": 5,
                "active": false
            }
        ]
    },
    {
        "question": "Мне нравится делать уроки, когда...",
        "answers": [
            {
                "content": "ничто меня не отвлекает",
                "weight": 0,
                "active": false
            },
            {
                "content": "они несложные",
                "weight": 3,
                "active": false
            },
            {
                "content": "остается много свободного времени, чтобы погулять",
                "weight": 1,
                "active": false
            },
            {
                "content": "я хорошо понимаю тему",
                "weight": 3,
                "active": false
            },
            {
                "content": "нет возможности списать",
                "weight": 0,
                "active": false
            },
            {
                "content": "всегда, так как это необходимо для глубоких знаний",
                "weight": 5,
                "active": false
            }
        ]
    },
    {
        "question": "Учиться лучше меня побуждает (побуждают)...",
        "answers": [
            {
                "content": "деньги, которые я заработаю в будущем",
                "weight": 0,
                "active": false
            },
            {
                "content": "родители и(или) учителя",
                "weight": 0,
                "active": false
            },
            {
                "content": "чувство долга",
                "weight": 0,
                "active": false
            },
            {
                "content": "низкие отметки",
                "weight": 0,
                "active": false
            },
            {
                "content": "желание получать знания",
                "weight": 0,
                "active": false
            },
            {
                "content": "общение",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Я более активно работаю на занятиях, если...",
        "answers": [
            {
                "content": "ожидаю одобрения окружающих",
                "weight": 0,
                "active": false
            },
            {
                "content": "мне интересна выполняемая работа",
                "weight": 0,
                "active": false
            },
            {
                "content": "мне нужна высокая отметка",
                "weight": 0,
                "active": false
            },
            {
                "content": "хочу больше узнать",
                "weight": 0,
                "active": false
            },
            {
                "content": "хочу, чтобы на меня обратили внимание",
                "weight": 0,
                "active": false
            },
            {
                "content": "изучаемый материал мне понадобится в дальнейшем",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "изучаемый материал мне понадобится в дальнейшем...",
        "answers": [
            {
                "content": "моей упорной работы",
                "weight": 0,
                "active": false
            },
            {
                "content": "заискивания перед учителем",
                "weight": 0,
                "active": false
            },
            {
                "content": "подготовленности и внимания на уроках",
                "weight": 0,
                "active": false
            },
            {
                "content": "моего везения",
                "weight": 0,
                "active": false
            },
            {
                "content": "получения качественных знаний",
                "weight": 0,
                "active": false
            },
            {
                "content": "помощи родителей или друзей",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Мой успех при выполнении заданий на уроке зависит от...",
        "answers": [
            {
                "content": "настроения",
                "weight": 0,
                "active": false
            },
            {
                "content": "трудности заданий",
                "weight": 0,
                "active": false
            },
            {
                "content": "моих способностей",
                "weight": 0,
                "active": false
            },
            {
                "content": "приложенных усилий и старания",
                "weight": 0,
                "active": false
            },
            {
                "content": "моего везения",
                "weight": 0,
                "active": false
            },
            {
                "content": "внимания к объяснению учебного материала учителем",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Я буду активным на уроке, если...",
        "answers": [
            {
                "content": "хорошо знаю тему и понимаю учебный материал",
                "weight": 0,
                "active": false
            },
            {
                "content": "смогу справиться с предлагаемыми учителем заданиями",
                "weight": 0,
                "active": false
            },
            {
                "content": "считаю нужным всегда так поступать",
                "weight": 0,
                "active": false
            },
            {
                "content": "меня не будут ругать за ошибку",
                "weight": 0,
                "active": false
            },
            {
                "content": "я уверен, что отвечу хорошо",
                "weight": 0,
                "active": false
            },
            {
                "content": "иногда мне так хочется",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Если учебный материал мне не понятен (труден для меня) я...",
        "answers": [
            {
                "content": "ничего не предпринимаю",
                "weight": 0,
                "active": false
            },
            {
                "content": "прибегаю к помощи товарищей",
                "weight": 0,
                "active": false
            },
            {
                "content": "мирюсь с ситуацией",
                "weight": 0,
                "active": false
            },
            {
                "content": "стараюсь разобраться во что бы то ни стало",
                "weight": 0,
                "active": false
            },
            {
                "content": "надеюсь, что разберусь потом",
                "weight": 0,
                "active": false
            },
            {
                "content": "вспоминаю объяснение учителя и просматриваю записи сделанные на уроке",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Ошибившись при выполнении задания, я...",
        "answers": [
            {
                "content": "Ошибившись при выполнении задания, я...",
                "weight": 0,
                "active": false
            },
            {
                "content": "теряюсь",
                "weight": 0,
                "active": false
            },
            {
                "content": "прошу помощи у товарищей",
                "weight": 0,
                "active": false
            },
            {
                "content": "нервничаю",
                "weight": 0,
                "active": false
            },
            {
                "content": "продолжаю думать над ним",
                "weight": 0,
                "active": false
            },
            {
                "content": "отказываюсь от его выполнения",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Если я не знаю, как выполнить учебное задание, то я...",
        "answers": [
            {
                "content": "обращаюсь за помощью к товарищам",
                "weight": 0,
                "active": false
            },
            {
                "content": "отказываюсь от его выполнения",
                "weight": 0,
                "active": false
            },
            {
                "content": "думаю и рассуждаю",
                "weight": 0,
                "active": false
            },
            {
                "content": "списываю у товарища",
                "weight": 0,
                "active": false
            },
            {
                "content": "обращаюсь к учебнику",
                "weight": 0,
                "active": false
            },
            {
                "content": "огорчаюсь",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Мне не нравится выполнять учебные задания, если они...",
        "answers": [
            {
                "content": "требуют большого умственного напряжения",
                "weight": 0,
                "active": false
            },
            {
                "content": "не требуют усилий",
                "weight": 0,
                "active": false
            },
            {
                "content": "письменные",
                "weight": 0,
                "active": false
            },
            {
                "content": "не требуют сообразительности",
                "weight": 0,
                "active": false
            },
            {
                "content": "сложные и большие",
                "weight": 0,
                "active": false
            },
            {
                "content": "однообразные и не требуют логического мышления",
                "weight": 0,
                "active": false
            }
        ]
    }
]
// элементы третьего теста
const testThreeItems = [
    {
        "question": "Если бы я сказал, что небо находится внизу, а зимой жарко, я должен был бы назвать преступника:",
        "group": "B",
        "answers": [
            {
                "content": "бандитом",
                "weight": 0,
                "active": false
            },
            {
                "content": "святым",
                "weight": 1,
                "active": false
            },
            {
                "content": "тучей",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Когда я ложусь спать, я:",
        "group": "C",
        "answers": [
            {
                "content": "засыпаю быстро",
                "weight": 2,
                "active": false
            },
            {
                "content": "нечто среднее",
                "weight": 1,
                "active": false
            },
            {
                "content": "засыпаю с трудом",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Если мне кто-нибудь нагрубит, я могу быстро забыть об этом:",
        "group": "O",
        "answers": [
            {
                "content": "верно",
                "weight": 0,
                "active": false
            },
            {
                "content": "не знаю",
                "weight": 1,
                "active": false
            },
            {
                "content": "неверно",
                "weight": 2,
                "active": false
            }
        ]
    },
    {
        "question": "Мне больше нравятся новые способы выполнения какой-либо работы, чем придерживаться испытанных приемов:",
        "group": "Q1",
        "answers": [
            {
                "content": "верно",
                "weight": 2,
                "active": false
            },
            {
                "content": "не знаю",
                "weight": 1,
                "active": false
            },
            {
                "content": "неверно",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Я думаю, что я менее чувствительный и менее возбудимый, чем большинство людей:",
        "group": "Q3",
        "answers": [
            {
                "content": "верно",
                "weight": 2,
                "active": false
            },
            {
                "content": "затрудняюсь сказать",
                "weight": 1,
                "active": false
            },
            {
                "content": "неверно",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Меня раздражают люди, которые не могут быстро принимать решения:",
        "group": "Q4",
        "answers": [
            {
                "content": "верно",
                "weight": 2,
                "active": false
            },
            {
                "content": "не знаю",
                "weight": 1,
                "active": false
            },
            {
                "content": "неверно",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Я думаю, что слово, противоположное по смыслу слову «неточный», - это:",
        "group": "B",
        "answers": [
            {
                "content": "небрежный",
                "weight": 0,
                "active": false
            },
            {
                "content": "тщательный",
                "weight": 0,
                "active": false
            },
            {
                "content": "приблизительный",
                "weight": 1,
                "active": false
            }
        ]
    },
    {
        "question": "У меня всегда хватает энергии, когда это мне необходимо:",
        "group": "C",
        "answers": [
            {
                "content": "да",
                "weight": 2,
                "active": false
            },
            {
                "content": "трудно сказать",
                "weight": 1,
                "active": false
            },
            {
                "content": "нет",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Меня волнуют мои прошлые поступки и ошибки:",
        "group": "O",
        "answers": [
            {
                "content": "да",
                "weight": 2,
                "active": false
            },
            {
                "content": "не знаю",
                "weight": 1,
                "active": false
            },
            {
                "content": "нет",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Какое слово не связано с другими словами:",
        "group": "B",
        "answers": [
            {
                "content": "кошка",
                "weight": 0,
                "active": false
            },
            {
                "content": "близко",
                "weight": 1,
                "active": false
            },
            {
                "content": "солнце",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Я никогда не чувствую себя таким несчастным, что хочется плакать:",
        "group": "O",
        "answers": [
            {
                "content": "верно",
                "weight": 0,
                "active": false
            },
            {
                "content": "не знаю",
                "weight": 1,
                "active": false
            },
            {
                "content": "неверно",
                "weight": 2,
                "active": false
            }
        ]
    },
    {
        "question": "Усилия, затраченные на составление планов:",
        "group": "Q3",
        "answers": [
            {
                "content": "никогда не лишние",
                "weight": 2,
                "active": false
            },
            {
                "content": "никогда не лишние",
                "weight": 1,
                "active": false
            },
            {
                "content": "не стоят этого",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Необдуманные поступки и высказывания моих приятелей в мой адрес не обижают и не огорчают меня:",
        "group": "Q4",
        "answers": [
            {
                "content": "верно",
                "weight": 0,
                "active": false
            },
            {
                "content": "верно",
                "weight": 1,
                "active": false
            },
            {
                "content": "неверно",
                "weight": 2,
                "active": false
            }
        ]
    },
    {
        "question": "То, что я делаю, у меня не получается:",
        "group": "C",
        "answers": [
            {
                "content": "редко",
                "weight": 2,
                "active": false
            },
            {
                "content": "иногда",
                "weight": 1,
                "active": false
            },
            {
                "content": "часто",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Если человек не отвечает сразу же после того, как я что-нибудь сказал ему, то я чувствую, что, должно быть, сказал какую-нибудь глупость:",
        "group": "O",
        "answers": [
            {
                "content": "верно",
                "weight": 2,
                "active": false
            },
            {
                "content": "не знаю",
                "weight": 1,
                "active": false
            },
            {
                "content": "неверно",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "В школьные годы я больше всего получаю знаний:",
        "group": "Q1",
        "answers": [
            {
                "content": "на уроках",
                "weight": 0,
                "active": false
            },
            {
                "content": "трудно сказать",
                "weight": 1,
                "active": false
            },
            {
                "content": "читая книги, из информации в Интернете и др.",
                "weight": 2,
                "active": false
            }
        ]
    },
    {
        "question": "У меня возникают сильные эмоции: тревога, гнев, приступы смеха и т. п., казалось бы, без всякой причины:",
        "group": "Q4",
        "answers": [
            {
                "content": "да",
                "weight": 2,
                "active": false
            },
            {
                "content": "иногда",
                "weight": 1,
                "active": false
            },
            {
                "content": "нет",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Все несчастья происходят из-за людей:",
        "group": "Q1",
        "answers": [
            {
                "content": "которые стараются во все внести изменения, хотя уже существуют удовлетворительные способы решения этих вопросов",
                "weight": 0,
                "active": false
            },
            {
                "content": "не знаю",
                "weight": 1,
                "active": false
            },
            {
                "content": "которые отвергают новые, многообещающие предложения",
                "weight": 2,
                "active": false
            }
        ]
    },
    {
        "question": "Аккуратные, требовательные люди не уживаются со мной:",
        "group": "Q3",
        "answers": [
            {
                "content": "верно",
                "weight": 0,
                "active": false
            },
            {
                "content": "иногда",
                "weight": 1,
                "active": false
            },
            {
                "content": "нет",
                "weight": 2,
                "active": false
            }
        ]
    },
    {
        "question": "Если стрелки часов встречаются ровно через каждые 65 минут, отмеренные по точным часам, то эти часы:",
        "group": "B",
        "answers": [
            {
                "content": "отстают",
                "weight": 0,
                "active": false
            },
            {
                "content": "идут правильно",
                "weight": 0,
                "active": false
            },
            {
                "content": "спешат",
                "weight": 1,
                "active": false
            }
        ]
    },
    {
        "question": "Мне бывает скучно:",
        "group": "C",
        "answers": [
            {
                "content": "часто",
                "weight": 0,
                "active": false
            },
            {
                "content": "иногда",
                "weight": 1,
                "active": false
            },
            {
                "content": "редко",
                "weight": 2,
                "active": false
            }
        ]
    },
    {
        "question": "Я люблю размышлять о том, как можно улучшить мир:",
        "group": "Q1",
        "answers": [
            {
                "content": "да",
                "weight": 2,
                "active": false
            },
            {
                "content": "трудно сказать",
                "weight": 1,
                "active": false
            },
            {
                "content": "нет",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Ночью мне снятся фантастические или нелепые сны:",
        "group": "Q3",
        "answers": [
            {
                "content": "да",
                "weight": 0,
                "active": false
            },
            {
                "content": "иногда",
                "weight": 1,
                "active": false
            },
            {
                "content": "нет",
                "weight": 2,
                "active": false
            }
        ]
    },
    {
        "question": "Если я остаюсь дома один, то через некоторое время ощущаю тревогу и страх:",
        "group": "Q4",
        "answers": [
            {
                "content": "да",
                "weight": 2,
                "active": false
            },
            {
                "content": "иногда",
                "weight": 1,
                "active": false
            },
            {
                "content": "нет",
                "weight": 0,
                "active": false
            }
        ]
    },
    {
        "question": "Если мать Марии является сестрой отца Александра, то кем является Александр по отношению к отцу Марии?",
        "group": "B",
        "answers": [
            {
                "content": "двоюродным братом",
                "weight": 0,
                "active": false
            },
            {
                "content": "племянником",
                "weight": 1,
                "active": false
            },
            {
                "content": "дядей",
                "weight": 0,
                "active": false
            }
        ]
    }
]