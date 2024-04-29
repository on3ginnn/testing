
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
// все тесты
const tests = [
    {
        title: "СПОСОБНОСТИ И ПРЕДПОЧТЕНИЯ (СКЛОННОСТИ К ОПРЕДЕЛЕННЫМ ТИПАМ ПРОФЕССИЙ ПО КЛИМОВУ)",
        tip: "Каждый вопрос имеет как бы две части, соединенные союзом «или». Выбери 1 вариант ответа.",
        testItems: JSON.parse(JSON.stringify(testOneItems)),  // копия из реальных данных, т.к требуется обнулять
        testType: "radio",
    },
    {
        title: "МЕТОДИКА ИЗУЧЕНИЯ МОТИВАЦИИ УЧЕНИЯ ПОДРОСТКОВ М.И. ЛУКЬЯНОВОЙ И Н.В. КАЛИНИНОЙ",
        tip: "Выбери 2 варианта ответов, которые совпадают с твоим собственным мнением.",
        testItems: JSON.parse(JSON.stringify(testTwoItems)),  // копия из реальных данных, т.к требуется обнулять
        testType: "doubleCheckbox",
    },
    {
        title: "ФИЗИОЛОГИЧЕСКИЕ ОСОБЕННОСТИ. СОКРАЩЕННЫЙ ВАРИАНТ ЛИЧНОСТНОГО ОПРОСНИКА Р. КЭТТЕЛЛА 13PF",
        tip: "Внимательно прочитай каждое неоконченное предложение и предлагаемый вариант ответа к нему.",
        testItems: JSON.parse(JSON.stringify(testThreeItems)),  // копия из реальных данных, т.к требуется обнулять
        testType: "radio",
    },
];

// функция для рестарта(обнуление)
function testRestart(){
    activeTest = 0;
    activeTestItem = 0;

    document.body.classList.remove('_comleted');

    tests[0].testItems = JSON.parse(JSON.stringify(testOneItems));
    tests[1].testItems = JSON.parse(JSON.stringify(testTwoItems));
    tests[2].testItems = JSON.parse(JSON.stringify(testThreeItems));
}

// рендеринг тестов(при загрузке и клике на кнопки)
function testRender(){
    // когда activeTest больше чем всего тестов, тест пройден
    if (activeTest >= tests.length) {
        document.body.classList.add('_comleted');
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
    // TODO: нужна ли валидации на выбранный ответ(обязательно ли выбрать)
    // кноки переключения элементов теста
    if (event.target.closest('.test__btn')){
        const clickBtn = event.target.closest('.test__btn');
        
        if (clickBtn.id === "test_next"){
            // если это не последний элемент теста
            if (activeTestItem + 1 < tests[activeTest].testItems.length){
                activeTestItem++;
            } else {  // если последний, то переключаем на следующий тест
                activeTest++;
                activeTestItem = 0;
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

    // рендеринг изменений
    testRender();
}

document.addEventListener("DOMContentLoaded", testRender);
document.addEventListener("click", clickEvent);
