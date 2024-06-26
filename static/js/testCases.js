/*  

--- КЛЮЧИ ДЛЯ ТИПОВ ЧЕЛОВЕКА (1 тест)
человек-природа = 1
человек-техника = 2
человек-человек = 3
человек-знаковая техника, знаковый образ = 4
человек-художественный образ = 5


--- КЛЮЧИ ДЛЯ УРОВНЯ МОТИВАЦИИ (2 тест)
Очень высокий уровень мотивации = 1
Высокий уровень мотивации = 2
Средний уровень мотивации = 3
Сниженный уровень мотивации = 4
Сниженный уровень мотиваци = 5


--- КЛЮЧИ ДЛЯ КЭТТЕЛЛА (3 тест)
Интеллект: конкретный = B1
Абстрактное мышление = B2
Эмоциональная неустойчивость = C1
Эмоциональная стабильность = C2
Спокойствие, уверенность в себе, жизнерадостность. Нервы не расшатаны = O1
Тревожность, депрессивность, тяготится дурными предчувствиями = O2
Консерватизм, придерживается установившихся понятий, принимает их на веру = Q11
Радикализм, тяга к новому, экспериментирующий, критически настроенный, аналитически мыслящий = Q12
Недисциплинированность, плохой самоконтроль, подчинен собственным страстям = Q31
Высокий контроль своих эмоций и поведения, точность в выполнении социальных требований = Q32
Расслабленность, вялость, спокойствие, лень, низкое рабочее напряжение = Q41
Высокая активность, напряженность, деятельный, взвинченный, высокое рабочее напряжение = Q42


-- ПРИМЕР КЛЮЧА
Человек природа – Интеллект: конкретный – очень высокий уровень мотивации = "1-B1-1"


-- Советы
На всякий случай, текст лучше писать между `js` ковычками (аналог """python""")
1 значение всегда тип человека, последнее - уровень мотивации, все что между - коттелл. Например: (1-B2-O2-Q11-2)


*/

const humanCases = {
    "1": `Для учеников типа "Человек-природа" рекомендуется использовать природные образы и примеры при изучении учебного материала, а также проводить время на открытом воздухе для вдохновения и обновления энергии перед учебой.
    `,
    "2": ``,
    "3": `Для учеников типа «Человек-человек» рекомендуется активно взаимодействовать с учителями и одноклассниками, обсуждать материал, обмениваться идеями и опытом, а также использовать методы кооперативного обучения для получения новой информации и поддержки в учебе.
    `,
    "4": `Для типа профессии «Человек - знаковая техника, знаковый образ» следует обращать внимание на символические аспекты изучаемого материала и использовать методы ассоциации для связи знаний с образами и символами.
    `,
    "5": `Для учеников типа «Человек - художественный образ» рекомендуется изучать учебный материал с использованием художественных и креативных методов, таких как рисование, музыка, театральные постановки и т. д. Также стоит использовать метафоры и образы для лучшего запоминания информации и понимания ее смысла.
    `,
}
const motivationCases = {
    "1": `Учитывая очень высокий уровень мотивации к обучению, стоит использовать эту мотивацию для углубленного изучения предмета, проведения дополнительных исследований и участия в научных проектах или соревнованиях. Также можно рассмотреть возможность менторства одноклассников или участия в образовательных инициативах в своем сообществе.
    `,
    "2": `С учетом высокого уровня мотивации к обучению, активное участие в уроках и проявление интереса к изучаемому материалу являются важными. Также следует искать дополнительные материалы для изучения и обращаться за помощью к учителю или родителям для углубления знаний.
    `,
    "3": `Учитывая средний уровень мотивации к обучению, важно установить себе четкие цели и разработать план действий для их достижения. Это может включать распределение времени на учебу, создание списков задач или использование методов самомотивации. Также полезно обратиться за помощью к учителю или родителям, чтобы получить дополнительную поддержку и мотивацию.
    `,
    "4": `При сниженном уровне мотивации к обучению рекомендуется определить причины снижения мотивации и разработать стратегии для их преодоления. Установить небольшие и достижимые цели, найти вдохновение вне школьного контекста или обратиться за помощью к учителю или родителям. Изменить подход к учебе, поставив перед собой новые вызовы или переключившись на другие методы обучения.
    `,
    "5": `В случае низкого уровня мотивации, рекомендуется начать с самоанализа и определения причин своей низкой мотивации. Обратиться за помощью к учителю, родителям или школьному психологу, чтобы получить рекомендации и поддержку. Увеличивать мотивацию постепенно, устанавливая маленькие цели и поощряя себя за их достижение, а также находить интересные аспекты в изучаемом материале.
    `,
}

const socialCases = {
    "B1": `Для развития «конкретного» интеллекта рекомендуется учиться на практике, через конкретные примеры и задачи, а также применять методики, предполагающие непосредственное взаимодействие с материалом, такие как практические занятия и лабораторные работы.
    `,
    "B2": `Для развития абстрактного мышления рекомендуется осваивать теоретические концепции и обобщения, а также использовать методы обучения, которые позволяют абстрагироваться от конкретных примеров и видеть общие закономерности.
    `,
    "C1": `При эмоциональной неустойчивости стоит практиковать методы релаксации и контроля эмоций, такие как дыхательные упражнения или медитация, а также обращаться за поддержкой к педагогу или школьному психологу для разработки стратегий управления эмоциями.
    `,
    "C2": `При эмоциональной стабильности следует использовать ее уверенность и систематичность для успешного обучения, а также для помощи одноклассникам и разрешения конфликтов в группе.
    `,
    "O1": `Для того, кто характеризуется спокойствием, уверенностью в себе и жизнерадостностью, следует воспользоваться своей уверенностью для активного участия в уроках и общении с учителем и одноклассниками, а также использовать жизнерадостность как стимул для поиска интересных и креативных подходов к учебе.
    `,
    "O2": `Для того, кто испытывает тревожность, депрессивность или тяготится дурными предчувствиями, важно обратиться за помощью к педагогу или школьному психологу для консультации и поддержки. Можно также использовать методы релаксации и психологические техники для снятия тревожности и депрессии. 
    `,
    "Q11": `Для преодоления консерватизма и придерживания установившихся понятий, рекомендуется попробовать новые подходы к изучению материала и искать новые источники информации для расширения кругозора. 
    `,
    "Q12": `Для развития радикализма, тяги к новому, экспериментирования и аналитического мышления рекомендуется активно исследовать новые темы и идеи, не боясь выходить за рамки установленных курсов, а также использовать критическое мышление для анализа информации и формирования собственного мнения.
    `,
    "Q31": `В случае недисциплинированности, плохого самоконтроля и подчиненности собственным страстям, рекомендуется разработать расписание и методы организации времени для эффективного выполнения заданий, а также использовать вспомогательные инструменты, такие как планировщики или техники саморегуляции, для улучшения самоконтроля.
    `,
    "Q32": `С высоким контролем эмоций и поведения ученика следует создавать спокойную и продуктивную обстановку вокруг себя и использовать точность в выполнении социальных требований для участия в групповых проектах и командной работе.
    `,
    "Q41": `Для преодоления расслабленности, вялости, спокойствия, лени и низкого рабочего напряжения рекомендуется находить способы активизировать себя и создавать подходящую обстановку для учебы. Также важно использовать перерывы и отдых для восстановления сил и энергии, но не забывать о выполнении учебных заданий. 
    `,
    "Q42": `Тем, кто характеризуется высокой активностью, напряженностью и высоким рабочим напряжением, следует научиться управлять своим энергетическим потенциалом и концентрировать его на решении задач. Используйте свою активность и напряженность для выполнения сложных заданий, и преодоления трудностей.
    `,
}