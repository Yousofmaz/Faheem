// ==================== قائمة الـ 50 نصيحة ====================
const tipsList = [
  "لا تنسَ صلاتك؛ فهي نور حياتك وطريق نجاحك.",
  "املأ وقت فراغك بالاستغفار وذكر الله.",
  "ابتسم! فالابتسامة صدقة وتزيل الهموم.",
  "بر الوالدين مفتاح لكل أبواب الخير والتوفيق.",
  "احرص على قراءة صفحة من القرآن يومياً.",
  "الكلمة الطيبة أثرها يبقى للأبد.",
  "تذكر أن الوقت هو أثمن ما تملك، استثمره صح.",
  "صلي على النبي ﷺ لتفتح لك أبواب الرحمة.",
  "حافظ على أذكار الصباح والمساء لحمايتك.",
  "اجعل هدفك اليوم تقديم مساعدة لو لشخص واحد.",
  "الرضا بمكتوب الله يمنحك راحة بال لا تُقدّر بثمن.",
  "شربة ماء بانتظام تجدد طاقتك وتركيزك.",
  "لا تؤجل عمل اليوم إلى الغد.",
  "الرياضة خفيفة تبقيك نشيطاً طوال اليوم.",
  "كن إيجابياً وتفاءل بالخير تجده.",
  "سامح من أخطأ في حقك ليرتاح قلبك.",
  "القراءة تُغذي العقل وتفتح الآفاق.",
  "حافظ على ترتيب مكانك؛ فالنظام يجلب الهدوء.",
  "اختر أصدقاءك بعناية، فالمرء على دين خليله.",
  "قل شكراً لكل من يقدم لك معروفاً.",
  "تذكر أن الحلم والصبر يتغلبان على الغضب.",
  "لا تقارن نفسك بالآخرين، ركز على تطوير ذاتك.",
  "افصل عن الشاشات قليلاً واستمتع باللحظة.",
  "افعل الخير ولا تستصغر أي عمل صالح.",
  "دعوة الصائم لا تُرد، تذكرها دائماً.",
  "الهدوء أثناء النقاش يعكس قوة شخصيتك.",
  "المعرفة قوة، تعلم شيئاً جديداً كل يوم.",
  "حافظ على بيئتك ونظافة المكان حولك.",
  "لا تجعل أحلامك تقف عند مجرد التفكير، أقدم!",
  "الصداقة الحقيقية كنز، حافظ عليها.",
  "شكر النعم يزيدها، الحمد لله دائماً وأبداً.",
  "كن كالغيث إذا أقبل أستبشر الناس به.",
  "لا تحكم على الكتاب من غلافه ولا على الشخص من ظاهره.",
  "صدقة خفية تطفئ غضب الرب وتدفع البلاء.",
  "الاستماع الجيد فن لا يتقنه إلا الأذكياء.",
  "خصص وقتاً للجلوس مع عائلتك والاستمتاع معهم.",
  "النوم الباكر يوفر لك يوم هادئ ونشيط.",
  "العقل السليم في الجسم السليم.",
  "لا تترك يومك يمر دون أن تبتسم من قلبك.",
  "العمل الجماعي يحقق الإنجازات الكبيرة.",
  "تحدَّ نفسك اليوم لتكون أفضل من الأمس.",
  "التواضع يرفع قدرك بين الناس.",
  "الصبر مفتاح الفرج في كل الأمور.",
  "كن صادقاً مع نفسك ومع الآخرين دائماً.",
  "سافر بعقلك من خلال الكتب والتفكير العميق.",
  "كل دقيقة تقضيها في الغضب تفقد معها 60 ثانية من السعادة.",
  "استمتع بتفاصيل يومك الصغار.",
  "نظم وقتك تجد متسعاً لكل ما تحب.",
  "لا تيأس، فكل نهار جديد هو فرصة جديدة.",
  "ابتسم.. فالحياة أجمل مما تتوقع!"
];

// ==================== بيانات المجموعات والأسئلة ====================
const categoriesDatabase = [
  {
    id: "tech",
    name: "تقنية وتكنولوجيا",
    icon: "💻",
    questions: {
      100: { q: "ما هي أكبر شركة منتجة لنظام أندرويد؟", a: "جوجل (Google)" },
      200: { q: "ماذا تعني اختصار 'CPU' في الكمبيوتر؟", a: "وحدة المعالجة المركزية (Central Processing Unit)" },
      300: { q: "ما هي أسرع لغة برمجة في التنفيذ المباشر؟", a: "لغة C / C++" },
      500: { q: "في أي عام تم إطلاق أول هاتف أيفون؟", a: "عام 2007" }
    }
  },
  {
    id: "sports",
    name: "رياضة وكرة قدم",
    icon: "⚽",
    questions: {
      100: { q: "كم عدد لاعبين فريق كرة القدم داخل الملعب؟", a: "11 لاعب" },
      200: { q: "ما هي الدولة الأكثر فوزاً بكأس العالم؟", a: "البرازيل (5 ألقاب)" },
      300: { q: "من الفائز بكأس العالم 2022؟", a: "الأرجنتين" },
      500: { q: "كم مدة شوط المباراة الإضافي في كرة القدم؟", a: "15 دقيقة" }
    }
  },
  {
    id: "geography",
    name: "جغرافيا ودول",
    icon: "🌍",
    questions: {
      100: { q: "ما هي عاصمة المملكة العربية السعودية؟", a: "الرياض" },
      200: { q: "ما هي أكبر دولة في العالم من حيث المساحة؟", a: "روسيا" },
      300: { q: "أين يقع نهر النيل؟", a: "قارة إفريقيا (مصر والسودان دول المصب)" },
      500: { q: "ما هي عاصمة أستراليا الرسمية؟", a: "كانبرا (Canberra)" }
    }
  },
  {
    id: "history",
    name: "تاريخ وحضارات",
    icon: "🏛️",
    questions: {
      100: { q: "أين تقع أهرامات الجيزة؟", a: "في مصر" },
      200: { q: "من هو مؤسس المملكة العربية السعودية؟", a: "الملك عبد العزيز آل سعود" },
      300: { q: "في أي عام انتهت الحرب العالمية الثانية؟", a: "عام 1945" },
      500: { q: "ما هي الحضارة التي بنيت مدرج الكولوسيوم؟", a: "الحضارة الرومانية" }
    }
  },
  {
    id: "cars",
    name: "عالم السيارات",
    icon: "🚗",
    questions: {
      100: { q: "ما هي الدولة المصنعة لسيارات تويوتا؟", a: "اليابان" },
      200: { q: "ماذا تعني علامة الـ 4 حلقات المتقاطعة؟", a: "شركة أودي (Audi)" },
      300: { q: "ما هو المحرك المكون من 8 اسطوانات على شكل V؟", a: "محرك V8" },
      500: { q: "ما هي أسرع سيارة إنتاجية في العالم؟", a: "بوغاتي شيرون / هينيسي فينوم" }
    }
  },
  {
    id: "anime",
    name: "أنمي وكرتون",
    icon: "🎬",
    questions: {
      100: { q: "ما اسم الشخصية الرئيسية في أنمي وون بيس؟", a: "مونكي دي لوفي" },
      200: { q: "ما هو اسم القرية التي ينتمي إليها ناروتو؟", a: "قرية كونوها (الورقة المخفية)" },
      300: { q: "ما اسم النينجا الذي يرتدي قناعاً على وجهه ومدرس ناروتو؟", a: "كاكاشي هاتاكي" },
      500: { q: "ما هي الكرة ذات الأرقام البحث عنها في دراغون بول؟", a: "كرات التنين (Dragon Balls)" }
    }
  },
  {
    id: "general",
    name: "معلومات عامة",
    icon: "🧠",
    questions: {
      100: { q: "ما هو أطول حيوان في العالم؟", a: "الزرافة" },
      200: { q: "ما هو أثقل كوكب في المجموعة الشمسية؟", a: "كوكب المشتري" },
      300: { q: "ما العنصر الكيميائي الذي رمزه 'O'؟", a: "الأكسجين" },
      500: { q: "كم عدد قلوب الأخطبوط؟", a: "3 قلوب" }
    }
  },
  {
    id: "islamic",
    name: "ثقافة إسلامية",
    icon: "🌙",
    questions: {
      100: { q: "ما هي أطول سورة في القرآن الكريم؟", a: "سورة البقرة" },
      200: { q: "من هو أول خلفاء الراشدين؟", a: "أبو بكر الصديق رضي الله عنه" },
      300: { q: "كم عدد سور القرآن الكريم؟", a: "114 سورة" },
      500: { q: "في أي سنة هجرية كانت غزوة بدر الكبرى؟", a: "السنة الثانية للهجرة" }
    }
  }
];

// ==================== متغيرات حالة اللعبة ====================
let gameState = {
  team1: "الفريق الأول",
  team2: "الفريق الثاني",
  score1: 0,
  score2: 0,
  currentTurn: 1, // 1 or 2
  groupsCount: 6,
  primaryTime: 30,
  secondaryTime: 15,
  allowDouble: true,
  allowPass: true,
  selectedCategories: [],
  isAudioMuted: false,
  activeQuestion: null
};

let activeTimerInterval = null;

// ==================== التهيئة والدوال الأساسية ====================

function toggleAudio() {
  gameState.isAudioMuted = !gameState.isAudioMuted;
  document.getElementById('audio-toggle-btn').innerText = gameState.isAudioMuted ? "🔇" : "🔊";
}

function getRandomTip() {
  const index = Math.floor(Math.random() * tipsList.length);
  return tipsList[index];
}

// دالة التنقل بين الشاشات
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// أزرار الاختيار للإعدادات
function selectGroupsCount(count, btn) {
  gameState.groupsCount = count;
  btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectPrimaryTime(time, btn) {
  gameState.primaryTime = time;
  btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectSecondaryTime(time, btn) {
  gameState.secondaryTime = time;
  btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ==================== الانتقال 1: الشاشة الأولى -> التحميل -> اختيار المجموعات ====================

function startLoadingToCategories() {
  // حفظ قيم المدخلات
  gameState.team1 = document.getElementById('team1-name').value.trim() || "الفريق الأول";
  gameState.team2 = document.getElementById('team2-name').value.trim() || "الفريق الثاني";
  gameState.allowDouble = document.getElementById('help-double').checked;
  gameState.allowPass = document.getElementById('help-pass').checked;

  showScreen('screen-loading-1');
  document.getElementById('tip-text-1').innerText = getRandomTip();

  let progress = 0;
  const fill = document.getElementById('progress-fill-1');
  const duration = 7000; // 7 ثواني
  const intervalTime = 100;
  const increment = (intervalTime / duration) * 100;

  const timer = setInterval(() => {
    progress += increment;
    fill.style.width = Math.min(progress, 100) + '%';
    
    if (progress >= 100) {
      clearInterval(timer);
      renderCategorySelection();
      showScreen('screen-category-select');
    }
  }, intervalTime);
}

// ==================== الشاشة 3: اختيار المجموعات ====================

function renderCategorySelection() {
  const grid = document.getElementById('categories-grid-selection');
  grid.innerHTML = '';
  gameState.selectedCategories = [];

  document.getElementById('category-select-instruction').innerText = 
    `يرجى تحديد ${gameState.groupsCount} مجموعات للمباراة`;

  categoriesDatabase.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card-select';
    card.innerHTML = `
      <span class="category-icon">${cat.icon}</span>
      <h3>${cat.name}</h3>
    `;
    card.onclick = () => toggleCategorySelect(cat, card);
    grid.appendChild(card);
  });

  document.getElementById('btn-confirm-categories').disabled = true;
}

function toggleCategorySelect(cat, element) {
  const index = gameState.selectedCategories.findIndex(c => c.id === cat.id);
  
  if (index > -1) {
    gameState.selectedCategories.splice(index, 1);
    element.classList.remove('selected');
  } else {
    if (gameState.selectedCategories.length < gameState.groupsCount) {
      gameState.selectedCategories.push(cat);
      element.classList.add('selected');
    }
  }

  const btn = document.getElementById('btn-confirm-categories');
  if (gameState.selectedCategories.length === gameState.groupsCount) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

// ==================== الانتقال 2: اختيار المجموعات -> تحميل ثاني -> شبكة اللعبة ====================

function confirmCategorySelection() {
  showScreen('screen-loading-2');
  document.getElementById('tip-text-2').innerText = getRandomTip();

  let progress = 0;
  const fill = document.getElementById('progress-fill-2');
  const duration = 7000;
  const intervalTime = 100;
  const increment = (intervalTime / duration) * 100;

  const timer = setInterval(() => {
    progress += increment;
    fill.style.width = Math.min(progress, 100) + '%';
    
    if (progress >= 100) {
      clearInterval(timer);
      buildGameBoard();
      showScreen('screen-gameboard');
    }
  }, intervalTime);
}

// ==================== بناء لوحة اللعبة الرئيسية ====================

function buildGameBoard() {
  // تحديث أسماء الفرق في اللوحة
  document.getElementById('display-team1-name').innerText = gameState.team1;
  document.getElementById('display-team2-name').innerText = gameState.team2;
  document.getElementById('display-team1-score').innerText = gameState.score1;
  document.getElementById('display-team2-score').innerText = gameState.score2;
  updateTurnUI();

  const gridContainer = document.getElementById('game-grid-container');
  gridContainer.style.gridTemplateColumns = `repeat(${gameState.groupsCount}, 1fr)`;
  gridContainer.innerHTML = '';

  const pointLevels = [500, 300, 200, 100]; // الترتيب من الأعلى للأسرع/الأسهل بالأسفل

  gameState.selectedCategories.forEach(cat => {
    const col = document.createElement('div');
    col.className = 'grid-col';

    // عنوان المجموعة
    const header = document.createElement('div');
    header.className = 'category-header-cell';
    header.innerHTML = `${cat.icon}<br>${cat.name}`;
    col.appendChild(header);

    // بطاقات الأسئلة 500, 300, 200, 100
    pointLevels.forEach(points => {
      const card = document.createElement('div');
      card.className = 'question-card';
      card.innerText = points;
      card.onclick = () => openQuestionModal(cat, points, card);
      col.appendChild(card);
    });

    gridContainer.appendChild(col);
  });
}

function updateTurnUI() {
  const currentName = gameState.currentTurn === 1 ? gameState.team1 : gameState.team2;
  document.getElementById('turn-indicator').innerText = `دور: ${currentName}`;

  if (gameState.currentTurn === 1) {
    document.getElementById('team1-card').classList.add('active-turn');
    document.getElementById('team2-card').classList.remove('active-turn');
  } else {
    document.getElementById('team2-card').classList.add('active-turn');
    document.getElementById('team1-card').classList.remove('active-turn');
  }
}

// ==================== نظام السؤال والمؤقت ====================

function openQuestionModal(category, points, cardElement) {
  if (cardElement.classList.contains('disabled')) return;

  const qData = category.questions[points];
  gameState.activeQuestion = {
    category: category.name,
    points: points,
    question: qData.q,
    answer: qData.a,
    cardElement: cardElement,
    isSecondaryTurn: false
  };

  // إعداد عناصر المودال
  document.getElementById('modal-category-name').innerText = category.name;
  document.getElementById('modal-points').innerText = `${points} نقطة`;
  document.getElementById('modal-question-text').innerText = qData.q;
  document.getElementById('modal-answer-text').innerText = qData.a;

  document.getElementById('answer-box').classList.add('hidden');
  document.getElementById('btn-show-answer').classList.remove('hidden');

  document.getElementById('question-modal').classList.add('active');

  // بدء المؤقت
  startTimer(gameState.primaryTime);
}

function startTimer(seconds) {
  clearInterval(activeTimerInterval);
  let timeLeft = seconds;
  const display = document.getElementById('timer-display');
  display.innerText = timeLeft;

  activeTimerInterval = setInterval(() => {
    timeLeft--;
    display.innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(activeTimerInterval);
      handleTimeOut();
    }
  }, 1000);
}

function handleTimeOut() {
  if (!gameState.activeQuestion.isSecondaryTurn) {
    // انتهى وقت الفريق الأول -> تحويل للخصم
    gameState.activeQuestion.isSecondaryTurn = true;
    const otherTeamName = gameState.currentTurn === 1 ? gameState.team2 : gameState.team1;
    alert(`انتهى الوقت! تحول الفرصة لـ (${otherTeamName}) بـ ${gameState.secondaryTime} ثانية.`);
    startTimer(gameState.secondaryTime);
  } else {
    // انتهى وقت الفريق الثاني أيضاً
    alert("انتهى الوقت للحديث مع الفريقين!");
    revealAnswer();
  }
}

function revealAnswer() {
  clearInterval(activeTimerInterval);
  document.getElementById('answer-box').classList.remove('hidden');
  document.getElementById('btn-show-answer').classList.add('hidden');
}

function awardPoints(isCorrect) {
  const q = gameState.activeQuestion;

  if (isCorrect) {
    let winningTeam = gameState.currentTurn;
    if (q.isSecondaryTurn) {
      winningTeam = gameState.currentTurn === 1 ? 2 : 1;
    }

    if (winningTeam === 1) {
      gameState.score1 += q.points;
    } else {
      gameState.score2 += q.points;
    }
  }

  // تعطيل الكرت
  q.cardElement.classList.add('disabled');

  // إغلاق المودال وتبديل الدور
  document.getElementById('question-modal').classList.remove('active');
  gameState.currentTurn = gameState.currentTurn === 1 ? 2 : 1;
  updateTurnUI();

  // تحديث نقاط الشاشة
  document.getElementById('display-team1-score').innerText = gameState.score1;
  document.getElementById('display-team2-score').innerText = gameState.score2;
}

// ==================== إنهاء اللعبة ====================

function endGame() {
  let winnerText = "";
  if (gameState.score1 > gameState.score2) {
    winnerText = `🎉 ألف مبروك فوز ${gameState.team1}!`;
  } else if (gameState.score2 > gameState.score1) {
    winnerText = `🎉 ألف مبروك فوز ${gameState.team2}!`;
  } else {
    winnerText = "🤝 تعادل متعادل بين الفريقين!";
  }

  document.getElementById('winner-text').innerText = winnerText;
  document.getElementById('final-team1-score').innerText = `${gameState.team1}: ${gameState.score1} نقطة`;
  document.getElementById('final-team2-score').innerText = `${gameState.team2}: ${gameState.score2} نقطة`;

  document.getElementById('winner-modal').classList.add('active');
}
