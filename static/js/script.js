
// активный тест
let activeTest = 0;
// активный элемент теста
let activeTestItem = 0;

console.log(testOneItems);
console.log(testTwoItems);
console.log(testThreeItems);

// виды тестов
const testTypes = {
    radio: {
        maxAnswerSelectedCount: 1,
    },
    doubleCheckbox: {
        maxAnswerSelectedCount: 2,
    },
}

// вывод для заголовка рекомендации
const keyToString = {
    human: {
        "1": "Человек-природа",
        "2": "Человек-техника",
        "3": "Человек-человек",
        "4": "Человек-знаковая техника, знаковый образ",
        "5": "Человек-художественный образ",
    },
    social: {
        "B1": "Интеллект: конкретный",
        "B2": "Абстрактное мышление",
        "C1": "Эмоциональная неустойчивость",
        "C2": "Эмоциональная стабильность",
        "O1": "Спокойствие, уверенность в себе, жизнерадостность. Нервы не расшатаны",
        "O2": "Тревожность, депрессивность, тяготится дурными предчувствиями",
        "Q11": "Консерватизм, придерживается установившихся понятий, принимает их на веру",
        "Q12": "Радикализм, тяга к новому, экспериментирующий, критически настроенный, аналитически мыслящий",
        "Q31": "Недисциплинированность, плохой самоконтроль, подчинен собственным страстям",
        "Q32": "Высокий контроль своих эмоций и поведения, точность в выполнении социальных требований",
        "Q41": "Расслабленность, вялость, спокойствие, лень, низкое рабочее напряжение",
        "Q42": "Высокая активность, напряженность, деятельный, взвинченный, высокое рабочее напряжение",
    },
    motivation: {
        "1": "Очень высокий уровень мотивации",
        "2": "Высокий уровень мотивации",
        "3": "Средний уровень мотивации",
        "4": "Сниженный уровень мотивации",
        "5": "Низкий уровень мотивации",
    },
}

// среднее значение для групп (3 тест)
const avgPerGroups = {
    "B": 2,
    "C": 5,
    "O": 4,
    "Q1": 5,
    "Q3": 4,
    "Q4": 4,
}

// все тесты
const tests = [
    {
        title: "СПОСОБНОСТИ И ПРЕДПОЧТЕНИЯ (СКЛОННОСТИ К ОПРЕДЕЛЕННЫМ ТИПАМ ПРОФЕССИЙ ПО КЛИМОВУ)",
        tip: "Каждый вопрос имеет как бы две части, соединенные союзом «или». Выбери 1 вариант ответа.",
        testItems: JSON.parse(JSON.stringify(testOneItems)),  // копия из реальных данных, т.к требуется обнулять
        testType: "radio",
        result: null,
    },
    {
        title: "МЕТОДИКА ИЗУЧЕНИЯ МОТИВАЦИИ УЧЕНИЯ ПОДРОСТКОВ М.И. ЛУКЬЯНОВОЙ И Н.В. КАЛИНИНОЙ",
        tip: "Выбери 2 варианта ответов, которые совпадают с твоим собственным мнением.",
        testItems: JSON.parse(JSON.stringify(testTwoItems)),  // копия из реальных данных, т.к требуется обнулять
        testType: "doubleCheckbox",
        result: null,
    },
    {
        title: "ФИЗИОЛОГИЧЕСКИЕ ОСОБЕННОСТИ. СОКРАЩЕННЫЙ ВАРИАНТ ЛИЧНОСТНОГО ОПРОСНИКА Р. КЭТТЕЛЛА 13PF",
        tip: "Внимательно прочитай каждое неоконченное предложение и предлагаемый вариант ответа к нему.",
        testItems: JSON.parse(JSON.stringify(testThreeItems)),  // копия из реальных данных, т.к требуется обнулять
        testType: "radio",
        result: null,
    },
];
let testsResult;
// функция для рестарта(обнуление)
function testRestart(){
    activeTest = 0;
    activeTestItem = 0;

    document.body.classList.remove('_comleted');

    tests.forEach(item => item.result=null);

    tests[0].testItems = JSON.parse(JSON.stringify(testOneItems));
    tests[1].testItems = JSON.parse(JSON.stringify(testTwoItems));
    tests[2].testItems = JSON.parse(JSON.stringify(testThreeItems));
    console.log(tests);
}

// результаты первого теста
function testOneResulting(){
    // узнать какой тип встречается чаще
    const max = (array) => {
        let maxCount = 0;
        let maxValue = 0;
        
        array.forEach((x) => {
            const count = array.filter((value) => value === x).length;
            if (count > maxCount) {
                maxCount = count;
                maxValue = x;
            }
        });
        console.log(maxValue);
        return maxValue;
    };
    let testOneResults = tests[0].testItems.map(answerArray => answerArray.answers.filter(answer => answer.active).map(answer => answer.weight)[0] || 0);
    console.log(testOneResults);
    return max(testOneResults) + 1;
}

// результаты второго теста
function testTwoResulting(){
    // узнать сумму списка
    const sum = (array) => {
        let sumValue = 0;
        
        array.forEach((x) => {
            sumValue += x;
        });
        return sumValue;
    };
    let testTwoResults = tests[1].testItems.map(answerArray => sum(answerArray.answers.filter(answer => answer.active).map(answer => answer.weight)));

    let sumResult = sum(testTwoResults);
    let resKey;
    
    if (70 <= sumResult <= 80){
        resKey = 1;
    } else if (57 <= sumResult <= 69){
        resKey = 2;
    } else if (44 <= sumResult <= 56){
        resKey = 3;
    } else if (29 <= sumResult <= 43){
        resKey = 4;
    } else {
        resKey = 5;
    }

    return resKey;
}

// результаты третьего теста
function testThreeResulting(){
    // узнать сумму списка
    const sum = (array) => {
        console.log(array)
        let sumValue = 0;
        
        array.forEach((x) => {
            sumValue += x;
        });
        return sumValue;
    };

    const groupsArray = ["B", "C", "O", "Q1", "Q3", "Q4"];
    let resultGroups = [];

    groupsArray.forEach(group => {
        let scoreByGroup = sum(tests[2].testItems.filter(item => item.group === group).map(answerArray => answerArray.answers.filter(answer => answer.active).map(answer => answer.weight)[0] || 0));
        console.log(scoreByGroup);
        console.log(avgPerGroups[group]);
        if (scoreByGroup < avgPerGroups[group]){
            resultGroups.push(`${group}1`);
        } else if (scoreByGroup > avgPerGroups[group]){
            resultGroups.push(`${group}2`);
        }
    });

    console.log(resultGroups);

    // let scoreGroupB = tests[2].testItems.map(answerArray => sum(answerArray.filter(item => item.group === "B").answers.filter(answer => answer.active).map(answer => answer.weight)));
    // let scoreGroupC = tests[2].testItems.map(answerArray => sum(answerArray.filter(item => item.group === "C").answers.filter(answer => answer.active).map(answer => answer.weight)));
    // let scoreGroupO = tests[2].testItems.map(answerArray => sum(answerArray.filter(item => item.group === "O").answers.filter(answer => answer.active).map(answer => answer.weight)));
    // let scoreGroupQ1 = tests[2].testItems.map(answerArray => sum(answerArray.filter(item => item.group === "Q1").answers.filter(answer => answer.active).map(answer => answer.weight)));
    // let scoreGroupQ3 = tests[2].testItems.map(answerArray => sum(answerArray.filter(item => item.group === "Q3").answers.filter(answer => answer.active).map(answer => answer.weight)));
    // let scoreGroupQ4 = tests[2].testItems.map(answerArray => sum(answerArray.filter(item => item.group === "Q4").answers.filter(answer => answer.active).map(answer => answer.weight)));

    return resultGroups.join("-");
}

// рендеринг тестов(при загрузке и клике на кнопки)
function testRender(){
    // когда activeTest больше чем всего тестов, тест пройден
    if (activeTest >= tests.length) {
        document.body.classList.add('_comleted');
        // подсчет результатов тестов

        const testOneResult = testOneResulting();
        const testTwoResult = testTwoResulting();
        const testThreeResult = testThreeResulting();

        const testsResultTitle = document.querySelector('.result__title');
        const testsResultStr = `${keyToString.human[testOneResult] || ""} – ${testThreeResult.split("-").map(socialKey => keyToString.social[socialKey]).join(" – ")} – ${keyToString.motivation[testTwoResult] || ""}`
        testsResultTitle.innerHTML = testsResultStr;
        
        let testsResultKey = `${testOneResult}-${testThreeResult}-${testTwoResult}`;  // ключ для получения рекомендации
        console.log(testsResultKey);
        // testsResultKey = "1-B1-1";

        console.log(testCases[testsResultKey]);
        const testsResultText = document.querySelector('.result__text');
        testsResultText.innerHTML = testCases[testsResultKey];

        // TODO: из tests[...].result получить результаты и вывести их в читаемом формате

    } else {
        const testNum = document.querySelector('.test_num');
        const testTitle = document.querySelector('.test_title');
        const testTip = document.querySelector('.test_tip');
        const testQuestion = document.querySelector('.test_question');
        const testAnwerItems = document.querySelector('.anwer_items');
        const testItemCurrent = document.querySelector('.test_current');
        const testItemTotal = document.querySelector('.test_total');

        testNum.innerHTML = activeTest + 1;
        testTitle.innerHTML = tests[activeTest].title;
        testTip.innerHTML = tests[activeTest].tip;

        if (tests[activeTest].testItems[activeTestItem].question){
            testQuestion.innerHTML = tests[activeTest].testItems[activeTestItem].question;
        } else {
            testQuestion.innerHTML = "Предположим, что после соответствующего обучения ты сможешь выполнять любую работу. Однако, если бы тебе пришлось выбирать только из двух возможностей, что ты предпочтешь?"
        }
        
        testAnwerItems.setAttribute('data-test-type', tests[activeTest].testType);
        testAnwerItems.innerHTML = "";
        let testItemAnswers = tests[activeTest].testItems[activeTestItem].answers;

        for (let answer in testItemAnswers){
            const answerItem = document.createElement("li");

            // для неактивных - disabled
            let disable = false;
            let activeAnswerCount = tests[activeTest].testItems[activeTestItem].answers.filter(item => item.active).length;
            if (activeAnswerCount === testTypes[tests[activeTest].testType].maxAnswerSelectedCount){
                disable = true;
            }

            answerItem.className = `answer__item item answer ${testItemAnswers[answer].active ? "_active" : disable ? "_disable" : ""}`;
            answerItem.setAttribute("data-index", answer);
            answerItem.innerHTML = testItemAnswers[answer].content;
            testAnwerItems.insertAdjacentElement("beforeend", answerItem);
        }

        testItemCurrent.innerHTML = activeTestItem + 1;
        testItemTotal.innerHTML = tests[activeTest].testItems.length;

        let prevBtn = document.querySelector('.test_prev');
        if (activeTest === 0 && activeTestItem === 0){
            prevBtn.classList.add("_disable");
        } else if (prevBtn.className.includes("_disable")) {
            prevBtn.classList.remove("_disable");
        }
    }
}

// события клика
function clickEvent(event){
    // кноки переключения элементов теста
    if (event.target.closest('.test__btn')){
        const clickBtn = event.target.closest('.test__btn');
        
        if (clickBtn.id === "test_next"){
            // проверка на обязательный выбор ответа, во 2 - 2 ответа обязательно
            let activeAnswerCount = tests[activeTest].testItems[activeTestItem].answers.filter(item => item.active).length;
            if (activeAnswerCount == testTypes[tests[activeTest].testType].maxAnswerSelectedCount) {
                // если это не последний элемент теста
                if (activeTestItem + 1 < tests[activeTest].testItems.length){
                    activeTestItem++;
                } else {  // если последний, то переключаем на следующий тест
                    activeTest++;
                    activeTestItem = 0;
                }
            }
        } else if (clickBtn.id === "test_prev"){
            // если не последний элемент теста

            if (activeTestItem - 1 >= 0){
                activeTestItem--;
            } else if (activeTest - 1 >= 0){  //если последний и не первый тест, то переключаем на предыдущий тест
                activeTest--;
                activeTestItem = tests[activeTest].testItems.length - 1;
            }
        }


    }
    // при рестарте
    if (event.target.closest('.restart_btn')){
        testRestart();
    }
    // при клике на вариант ответа, закрашивать
    if (event.target.closest('.answer')){
        let answerItem = event.target.closest('.answer');
        let activeAnswerCount = tests[activeTest].testItems[activeTestItem].answers.filter(item => item.active).length;
        let clickAnswerIsActive = tests[activeTest].testItems[activeTestItem].answers[answerItem.dataset.index].active;
        if (clickAnswerIsActive){
            tests[activeTest].testItems[activeTestItem].answers[answerItem.dataset.index].active = false;
        } else {
            if (activeAnswerCount < testTypes[tests[activeTest].testType].maxAnswerSelectedCount){
                tests[activeTest].testItems[activeTestItem].answers[answerItem.dataset.index].active = true;
            }
        }

    }
    // чит кнопка на конец тестов
    // TODO: убрать
    if (event.target.closest('.cheat_btn')){
        activeTest = 3;
    }
    if (event.target.closest('.cheat_btn#test1')){
        activeTest = 0;
        activeTestItem = 0;
    }
    if (event.target.closest('.cheat_btn#test2')){
        activeTest = 1;
        activeTestItem = 0;
    }
    if (event.target.closest('.cheat_btn#test3')){
        activeTest = 2;
        activeTestItem = 0;
    }
    // рендеринг изменений
    testRender();
}

document.addEventListener("DOMContentLoaded", testRender);
document.addEventListener("click", clickEvent);
