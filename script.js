// =====================================================================
// 場景數據定義
// =====================================================================
// 按摩師 Rene 的場景數據
const reneScenes = [
    // 第一次交易
    { text: "沈予然：今天比較早下班，剛好有空來放鬆一下。", choices: [
        { text: "我剛也正好準備好妳習慣的精油。", affection: 1 },
        { text: "這麼晚還來，其實是想我了吧？", affection: 2 },
        { text: "今天可能會有點累，手勁不一定夠哦。", affection: 0 }
    ]},
    { text: "沈予然：這個部位之前沒這麼緊……", choices: [
        { text: "妳最近應該是睡不好。", affection: 1 },
        { text: "可能坐太久了，我會多處理一下。", affection: 2 },
        { text: "或許是妳變懶了，活動量太低。", affection: -1 }
    ]},
    { text: "沈予然：妳今天的手好像特別溫。", choices: [
        { text: "只有對熟悉的客人才會這樣。", affection: 1 },
        { text: "可能是我也有點緊張。", affection: 2 },
        { text: "氣溫高吧，天氣熱而已。", affection: 0 }
    ]},
    { text: "沈予然：氣味有變？今天不是上次那瓶。", choices: [
        { text: "這款我挑給妳的，記得妳說過喜歡木質調。", affection: 2 },
        { text: "剛好那瓶用完了。", affection: 0 },
        { text: "這瓶比較便宜，經濟實惠。", affection: -1 }
    ]},
    { text: "沈予然：……今天好像比之前更放鬆了一點。", choices: [
        { text: "因為今天的我，比之前更靠近妳一點。", affection: 1 },
        { text: "那就表示我有進步。", affection: 2 },
        { text: "是嗎？我感覺還好耶。", affection: 0 }
    ]},

    // 第二次交易
    { text: "沈予然：妳還記得我上次坐哪邊嗎？", choices: [
        { text: "記得，很清楚。這邊請。", affection: 2 },
        { text: "大概是靠右的床位？", affection: 1 },
        { text: "妳不說我還真忘了。", affection: 0 }
    ]},
    { text: "沈予然：上次聊到一半妳就轉開話題了。", choices: [
        { text: "那話題……太像在談感情了。", affection: 1 },
        { text: "我怕越聊越不該說出口。", affection: 2 },
        { text: "我哪有？是妳自己話太多了吧。", affection: -1 }
    ]},
    { text: "沈予然：這動作……我記得妳以前不會用的。", choices: [
        { text: "是想讓妳感覺更舒服才去學的。", affection: 2 },
        { text: "最近有特別練過。", affection: 0 },
        { text: "亂試的，不知道有沒有用。", affection: 1 }
    ]},
    { text: "沈予然：妳看起來，比我還冷靜。", choices: [
        { text: "如果我不冷靜，就會直接吻妳了。", affection: 1 },
        { text: "我習慣了控制情緒。", affection: 2 },
        { text: "還好啦，我只是累了。", affection: 0 }
    ]},
    { text: "沈予然（低語）：妳知道我不是沒有感覺。", choices: [
        { text: "那妳願意再往前一點嗎？", affection: 1 },
        { text: "我知道，但我不會逼妳。", affection: 2 },
        { text: "我不想知道太多，怕自己捲進去。", affection: -1 }
    ]},

    // 第三次交易
    { text: "沈予然：今天如果我不說話，妳會怎麼做？", choices: [
        { text: "用觸覺慢慢讀懂妳的語言。", affection: 2 },
        { text: "專心工作，不越線。", affection: 0 },
        { text: "早點下班吧，省得彼此尷尬。", affection: -1 }
    ]},
    { text: "沈予然：我夢過一次這裡的味道。", choices: [
        { text: "那是我記得最清楚的部分。", affection: 2 },
        { text: "夢裡妳在這裡做什麼？", affection: 0 },
        { text: "夢這種東西，不準的啦。", affection: 1 }
    ]},
    { text: "沈予然：我以為妳今天不會接我預約。", choices: [
        { text: "我不想錯過任何一個與妳相處的機會。", affection: 1 },
        { text: "其實我也掙扎過。", affection: 2 },
        { text: "錢還是要賺的。", affection: 0 }
    ]},
    { text: "沈予然：這樣下去真的好嗎？", choices: [
        { text: "如果妳說不好，我就停下來。", affection: 2 },
        { text: "我不知道，但我不想放開。", affection: 1 },
        { text: "我們本來就不是什麼好人。", affection: 0 }
    ]},
    { text: "沈予然（低聲）：如果今天再進一步，妳會怎麼做？", choices: [
        { text: "讓妳知道我不是說說而已。", affection: 2 },
        { text: "輕輕碰妳，然後停下來。", affection: 1 },
        { text: "我會逃。對不起。", affection: -1 }
    ]}
];

// 客戶 沈予然 的場景數據
const shengScenes = [
  // 第一次交易
  {
    text: "Rene：今天的妳，看起來比上次更累了一點，是不是工作太拚了？",
    choices: [
      { text: "妳管得還真多。", affection: 0 },
      { text: "……我昨晚其實沒睡好，但你看得出來啊？", affection: 2 },
      { text: "只是例行加班，不礙事。", affection: 1 }
    ]
  },
  {
    text: "Rene：如果我突然說很想念妳，妳會怎麼回？",
    choices: [
      { text: "我大概會笑一笑，然後問你想做什麼。", affection: 1 },
      { text: "我會當作你在開玩笑。", affection: 0 },
      { text: "我會說，你怎麼現在才說。", affection: 2 }
    ]
  },
  {
    text: "Rene：妳總是這麼冷靜，真的從不被人影響嗎？",
    choices: [
      { text: "你想試著影響我看看嗎？", affection: 1 },
      { text: "這樣不好嗎？", affection: 0 },
      { text: "我也會動搖，只是不習慣表現出來。", affection: 2 }
    ]
  },
  {
    text: "Rene：我一直很想知道，妳第一次來這裡，是為了逃避什麼嗎？",
    choices: [
      { text: "為什麼你要問這個？", affection: 0 },
      { text: "也許吧，但後來就只是為了你了。", affection: 2 },
      { text: "一開始只是想找個安靜的地方。", affection: 1 }
    ]
  },
  {
    text: "Rene：妳覺得，像我們這樣的關係，有可能更進一步嗎？",
    choices: [
      { text: "我還不確定……但我沒有排斥。", affection: 1 },
      { text: "我們現在這樣就好，不是嗎？", affection: 0 },
      { text: "如果你願意跨一步，我也會。", affection: 2 }
    ]
  },

  // 第二次交易
  {
    text: "Rene：妳記得我第一次幫妳服務的時候，我緊張到手都在抖嗎？",
    choices: [
      { text: "有嗎？我倒是沒注意。", affection: 0 },
      { text: "我記得。那次之後我就決定要一直找你。", affection: 2 },
      { text: "有點印象，但你現在好多了。", affection: 1 }
    ]
  },
  {
    text: "Rene：每次妳來我都很期待，但又怕期待太多，妳懂那種感覺嗎？",
    choices: [
      { text: "我懂。我也常常這樣想。", affection: 2 },
      { text: "你應該把重心放在工作上。", affection: 0 },
      { text: "你可以期待我沒關係啊。", affection: 1 }
    ]
  },
  {
    text: "Rene：如果有一天我不在這裡了，妳還會記得我嗎？",
    choices: [
      { text: "會吧，只是可能沒辦法常常想起來。", affection: 1 },
      { text: "你以為你這麼容易被忘記嗎？", affection: 2 },
      { text: "應該很快就會有新人取代你了。", affection: 0 }
    ]
  },
  {
    text: "Rene：妳是不是有意在試探我，每次都只說一半的話。",
    choices: [
      { text: "那是因為我不知道你能承受多少。", affection: 2 },
      { text: "想太多了，我說的就是全部。", affection: 0 },
      { text: "你有發現啊？那代表你很在意。", affection: 1 }
    ]
  },
  {
    text: "Rene：如果我現在說，我不想只是按摩師，妳會怎麼做？",
    choices: [
      { text: "我會問你，那你想成為什麼？", affection: 2 },
      { text: "那你最好想清楚自己在說什麼。", affection: 0 },
      { text: "我會說，我早就看出來了。", affection: 1 }
    ]
  },

  // 第三次交易
  {
    text: "Rene：今天只是單純來按摩而已，還是妳有別的期待？",
    choices: [
      { text: "我只是想見你，這樣可以嗎？", affection: 1 },
      { text: "我有期待，但我想讓你主動。", affection: 2 },
      { text: "不要想太多，我只是剛好有空。", affection: 0 }
    ]
  },
  {
    text: "Rene：如果我今天吻妳，妳會退開嗎？",
    choices: [
      { text: "不會。除非你後悔。", affection: 2 },
      { text: "我會退開。", affection: 0 },
      { text: "我可能會躲一下……但不是真的拒絕。", affection: 1 }
    ]
  },
  {
    text: "Rene：我有時候很怕自己會陷太深，妳會拉我一把嗎？",
    choices: [
      { text: "最好你學會自己爬上來。", affection: 0 },
      { text: "我不會拉你，我會陪你一起跳下去。", affection: 2 },
      { text: "會吧，如果你真的需要的話。", affection: 1 }
    ]
  },
  {
    text: "Rene：我們這段關係，妳覺得有名字嗎？",
    choices: [
      { text: "也許沒有，但我知道那是真的。", affection: 2 },
      { text: "名字？這不就是消遣嗎？", affection: 0 },
      { text: "關係不重要，我更在意當下。", affection: 1 }
    ]
  },

  {
    text: "Rene：……最後一題。妳是真的動心了嗎？",
    choices: [
      { text: "也許吧，但我還不敢承認。", affection: 1 },
      { text: "我不知道，也許只是習慣了你。", affection: 0 },
      { text: "你還看不出來嗎？", affection: 2 }
    ]
  }
];


// =====================================================================
// 全局變量和 DOM 元素獲取
// =====================================================================
let currentScenes = []; // 動態儲存當前選中的場景數據
let current = 0;
let score = 0;
let currentPlayer = ''; // 儲存當前玩家選擇的角色 ('rene' 或 'sheng')

const startPageDiv = document.getElementById('start-page'); // 新增：開始頁面 div
const beginGameBtn = document.getElementById('begin-game-btn'); // 新增：開始遊戲按鈕

const characterSelectionDiv = document.getElementById('character-selection');
const selectReneBtn = document.getElementById('select-rene');
const selectShengBtn = document.getElementById('select-sheng');

const sceneDiv = document.getElementById('scene');
const choicesDiv = document.getElementById('choices');
const resultDiv = document.getElementById('result');
// startBtn 現在只用於「重玩一次」，並在 showResult 內動態創建和管理
const characterLeft = document.getElementById('character-img');
const characterRight = document.getElementById('character-img-right');
const transitionDiv = document.getElementById('transition');
const gameContainer = document.querySelector('.game-container');

// 根據遊戲流程定義插入的圖片路徑
const inserts = [
    'images/Shoulder.png',
    'images/Message.png',
    'images/Kiss.png',
];

// 定義結局圖片路徑
const endingImages = [
    'images/Ending1.png', // score >= 26 的結局
    'images/Ending2.png', // score >= 18 的結局
    'images/Ending3.png', // 其他情況的結局
];

// 預加載圖片
const preloadImages = (urls) => {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

// 預加載所有共用圖片，角色圖片會在選擇後單獨預加載
preloadImages([
    'images/ReneHouse.png',
    'images/background.jpg', // 預加載背景圖
    ...inserts,
    'images/hand.png',
    'images/turn.png',
    'images/BE.png',
    ...endingImages,
    'images/Rene_profile.webp', // 更新為 .webp
    'images/Sheng_profile.webp' // 更新為 .webp
]);


// =====================================================================
// 遊戲啟動和角色選擇邏輯
// =====================================================================

// 初始事件監聽器：點擊「開始遊戲」按鈕
beginGameBtn.addEventListener('click', showCharacterSelection);

function showCharacterSelection() {
    startPageDiv.classList.add('hidden'); // 隱藏開始頁面
    characterSelectionDiv.classList.remove('hidden'); // 顯示角色選擇介面
}

// 角色選擇按鈕的事件監聽器
selectReneBtn.addEventListener('click', () => selectCharacter('rene'));
selectShengBtn.addEventListener('click', () => selectCharacter('sheng'));

function selectCharacter(character) {
    currentPlayer = character;
    characterSelectionDiv.classList.add('hidden'); // 隱藏角色選擇介面
    gameContainer.classList.remove('hidden'); // 顯示遊戲容器

    // 根據角色設定主、副角色圖片
    if (currentPlayer === 'rene') {
        currentScenes = reneScenes;
        characterLeft.src = 'images/Rene.png'; // 左側是玩家角色 Rene
        characterRight.src = 'images/Sheng.png'; // 右側是客戶 Sheng
    } else if (currentPlayer === 'sheng') {
        currentScenes = shengScenes;
        characterLeft.src = 'images/Sheng.png'; // 左側是玩家角色 Sheng
        characterRight.src = 'images/Rene.png'; // 右側是按摩師 Rene
    }

    startGame(); // 選擇角色後啟動遊戲
}

function startGame() {
    current = 0;
    score = 0;
    // resultDiv 和 startBtn 不需要在這裡隱藏，它們由 showResult 函數管理
    showScene();
}

// =====================================================================
// 場景顯示和互動邏輯
// =====================================================================
function showScene() {
    if (current >= currentScenes.length) {
        showResult();
        return;
    }

    // 每 5 個場景顯示一次轉場
    if (current % 5 === 0) {
        const turn = current / 5;
        showTransition(turn);
        return;
    }

    // 特定場景顯示插圖
    const insertTriggers = [2, 7, 12]; // 這些索引是在各自 `scenes` 陣列中的位置
    if (insertTriggers.includes(current)) {
        const insertIndex = insertTriggers.indexOf(current);
        if (insertIndex < inserts.length) {
            showInsertImage(insertIndex);
            return;
        }
    }

    displaySceneContent();
}

function selectChoice(index) {
    const scene = currentScenes[current]; // 使用 currentScenes
    score += scene.choices[index].affection;
    current++;
    showScene();
}

function displaySceneContent() {
    const scene = currentScenes[current]; // 使用 currentScenes

    sceneDiv.textContent = scene.text;
    choicesDiv.innerHTML = '';

    gameContainer.classList.remove('hidden');

    characterLeft.style.display = 'block';
    characterRight.style.display = current >= 2 ? 'block' : 'none';

    scene.choices.forEach((choice, choiceIndex) => {
        const btn = document.createElement('button');
        btn.textContent = choice.text;
        btn.addEventListener('click', () => selectChoice(choiceIndex));
        choicesDiv.appendChild(btn);
    });
}

// =====================================================================
// 轉場、插圖和結局顯示邏輯
// =====================================================================

/**
 * 顯示轉場動畫（帶淡入淡出）
 * @param {number} turn 當前是第幾次交易 (從 0 開始)
 */
function showTransition(turn) {
    gameContainer.classList.add('hidden');
    sceneDiv.textContent = '';
    choicesDiv.innerHTML = '';
    characterLeft.style.display = 'none';
    characterRight.style.display = 'none';

    transitionDiv.innerHTML = `
        <img src="images/ReneHouse.png" alt="轉場背景" class="transition-insert">
        <div class="transition-text">第 ${turn + 1} 次交易</div>
    `;

    transitionDiv.classList.remove('hidden');
    void transitionDiv.offsetWidth; // 觸發重繪
    transitionDiv.classList.add('visible');

    const displayDuration = 2000;
    const fadeDuration = 1000;

    // 由於我們放棄了動態調整大小和位置，這裡不再需要更新 CSS 變數的程式碼
    // if (turn < characterSizes.length) {
    //     root.style.setProperty('--character-size', `${characterSizes[turn]}px`);
    //     root.style.setProperty('--container-max-width', `${containerWidths[turn]}px`);
    //     root.style.setProperty('--character-left-pos', characterLeftPositions[turn]);
    //     root.style.setProperty('--character-right-pos', characterRightPositions[turn]);
    // }

    setTimeout(() => {
        transitionDiv.classList.remove('visible');
        setTimeout(() => {
            transitionDiv.classList.add('hidden');
            transitionDiv.innerHTML = '';
            displaySceneContent();
        }, fadeDuration);
    }, displayDuration);
}

/**
 * 顯示插圖（帶淡入淡出）
 * @param {number} insertIndex inserts 陣列的索引
 */
function showInsertImage(insertIndex) {
    gameContainer.classList.add('hidden');
    sceneDiv.textContent = '';
    choicesDiv.innerHTML = '';
    characterLeft.style.display = 'none';
    characterRight.style.display = 'none';

    const img = new Image();
    img.src = inserts[insertIndex];
    img.classList.add("transition-insert");

    img.onload = () => {
        transitionDiv.innerHTML = "";
        transitionDiv.appendChild(img);

        transitionDiv.classList.remove("hidden");
        void transitionDiv.offsetWidth; // 觸發重繪
        transitionDiv.classList.add("visible");

        const displayDuration = 2000;
        const fadeDuration = 1000;

        setTimeout(() => {
            transitionDiv.classList.remove("visible");
            setTimeout(() => {
                transitionDiv.classList.add("hidden");
                transitionDiv.innerHTML = "";
                displaySceneContent();
            }, fadeDuration);
        }, displayDuration);
    };
}

/**
 * 實現打字機效果
 * @param {HTMLElement} element 要顯示文本的 DOM 元素
 * @param {string} text 要顯示的文本
 * @param {number} speed 打字速度 (毫秒/字)
 * @returns {Promise<void>} 返回一個 Promise，在打字完成後解析
 */
function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = ''; // 清空內容
    element.classList.add('typing-cursor'); // Add typing cursor class
    return new Promise(resolve => {
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                element.classList.remove('typing-cursor'); // Remove cursor after typing
                resolve(); // 打字完成
            }
        }
        type();
    });
}

/**
 * 顯示結局（圖片與文字同時顯示，帶打字機效果，並持續顯示直到重玩）
 */
async function showResult() { // Make this an async function
    // 隱藏遊戲容器和角色圖片
    gameContainer.classList.add('hidden');
    sceneDiv.textContent = '';
    choicesDiv.innerHTML = '';
    characterLeft.style.display = 'none';
    characterRight.style.display = 'none';

    // 根據分數判斷結局文字和圖片
    let ending = '';
    let endingImage = '';
    if (score >= 26) {
        ending = "在Rene手停下的那一瞬，沈予然沒有退開。只輕聲問了一句：\"妳確定嗎？\" 然後，把Rene拉了下來。";
        endingImage = endingImages[0];
    } else if (score >= 18) {
        ending = "沈予然輕聲道別，卻在出門前回頭望了Rene一眼。眼神裡，有話沒說完，也許永遠不會說了。";
        endingImage = endingImages[1];
    } else {
        ending = "Rene送沈予然到門口，沈點頭致謝，步伐俐落，離開得很快。Rene沒追，知道也不該追。";
        endingImage = endingImages[2];
    }

    // 創建結局圖片元素
    const img = new Image();
    img.src = endingImage;
    img.classList.add("ending-image");

    // 清空 transitionDiv 內容，準備放置結局內容
    transitionDiv.innerHTML = "";

    // 創建結局內容的包裝器
    const endingContentWrapper = document.createElement('div');
    endingContentWrapper.classList.add('ending-content-wrapper');

    // 創建結局文字元素
    const endingTextElement = document.createElement('p');
    endingTextElement.classList.add('ending-text');

    // 創建重玩按鈕
    const restartButton = document.createElement('button');
    restartButton.id = 'start-btn';
    restartButton.textContent = '是否要重新試試這次能否擁有她？';
    restartButton.classList.add('hidden'); // 初始隱藏按鈕

    // 創建重玩按鈕的包裝器
    const restartButtonWrapper = document.createElement('div');
    restartButtonWrapper.classList.add('restart-button-wrapper');
    restartButtonWrapper.appendChild(restartButton);

    // 將所有元素添加到 endingContentWrapper 中
    endingContentWrapper.appendChild(img);
    endingContentWrapper.appendChild(endingTextElement);
    endingContentWrapper.appendChild(restartButtonWrapper);

    // 將 endingContentWrapper 添加到 transitionDiv 中
    transitionDiv.appendChild(endingContentWrapper);

    // 確保 transitionDiv 可見並觸發 CSS 過渡效果（淡入）
    transitionDiv.classList.remove('hidden');
    void transitionDiv.offsetWidth; // 觸發重繪
    transitionDiv.classList.add('visible');

    // 等待圖片載入完成
    await new Promise(resolve => {
        img.onload = resolve;
        img.onerror = () => {
            console.error("Error loading ending image:", img.src);
            resolve(); // 即使載入失敗也繼續執行，避免卡住
        };
        // 如果圖片已經載入完成（例如從緩存），立即解析
        if (img.complete && img.naturalHeight !== 0) {
            resolve();
        }
    });

    // 圖片載入完成後，稍作延遲再開始打字
    await new Promise(resolve => setTimeout(resolve, 500)); // 打字前延遲 0.5 秒

    // 執行打字機效果，並等待其完成
    await typeWriter(endingTextElement, ending, 50); // 每字 50 毫秒

    // 打字完成後，顯示重新開始按鈕
    restartButton.classList.remove('hidden');

    // 為動態創建的按鈕添加事件監聽器
    restartButton.addEventListener('click', () => {
        location.reload(); // 重新載入頁面，回到最初的「開始遊戲」頁面
    });

    // *** 移除此處的 setTimeout，結局畫面將不再自動淡出 ***
    // const totalDisplayDuration = 5000;
    // const fadeDuration = 1000;
    // setTimeout(() => {
    //     transitionDiv.classList.remove('visible');
    //     setTimeout(() => {
    //         transitionDiv.classList.add('hidden');
    //         transitionDiv.innerHTML = '';
    //     }, fadeDuration);
    // }, totalDisplayDuration);
}