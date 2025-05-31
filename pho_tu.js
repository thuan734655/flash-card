const vocabularyData = [
  {
    "No.": 1,
    "語彙 (Từ vựng)": "さいきん",
    "漢字 (Chữ Hán)": "最近",
    "意味 (Ý nghĩa)": "Gần đây",
  },
  {
    "No.": 2,
    "語彙 (Từ vựng)": "じつは",
    "漢字 (Chữ Hán)": "実は",
    "意味 (Ý nghĩa)": "Thật ra thì",
  },
  {
    "No.": 3,
    "語彙 (Từ vựng)": "ずっと",
    "漢字 (Chữ Hán)": "ずっと",
    "意味 (Ý nghĩa)": "Suốt / Hơn hẳn",
  },
  {
    "No.": 4,
    "語彙 (Từ vựng)": "まえは",
    "漢字 (Chữ Hán)": "前は",
    "意味 (Ý nghĩa)": "Trước đây",
  },
  {
    "No.": 5,
    "語彙 (Từ vựng)": "いまでも",
    "漢字 (Chữ Hán)": "今でも",
    "意味 (Ý nghĩa)": "Ngay cả bây giờ",
  },
  {
    "No.": 6,
    "語彙 (Từ vựng)": "まだ",
    "漢字 (Chữ Hán)": "まだ",
    "意味 (Ý nghĩa)": "Vẫn (vẫn còn / vẫn chưa)",
  },
  {
    "No.": 7,
    "語彙 (Từ vựng)": "そのとき",
    "漢字 (Chữ Hán)": "その時",
    "意味 (Ý nghĩa)": "Khi đó",
  },
  {
    "No.": 8,
    "語彙 (Từ vựng)": "いつか",
    "漢字 (Chữ Hán)": "いつか",
    "意味 (Ý nghĩa)": "Một lúc nào đó",
  },
  {
    "No.": 9,
    "語彙 (Từ vựng)": "かならず",
    "漢字 (Chữ Hán)": "必ず",
    "意味 (Ý nghĩa)": "Nhất định",
  },
  {
    "No.": 10,
    "語彙 (Từ vựng)": "また",
    "漢字 (Chữ Hán)": "また",
    "意味 (Ý nghĩa)": "Lại, Hơn nữa",
  },
  {
    "No.": 11,
    "語彙 (Từ vựng)": "できるだけ",
    "漢字 (Chữ Hán)": "できるだけ",
    "意味 (Ý nghĩa)": "Trong khả năng có thể",
  },
  {
    "No.": 12,
    "語彙 (Từ vựng)": "ほか",
    "漢字 (Chữ Hán)": "他",
    "意味 (Ý nghĩa)": "Khác",
  },
  {
    "No.": 13,
    "語彙 (Từ vựng)": "ゆっくり",
    "漢字 (Chữ Hán)": "ゆっくり",
    "意味 (Ý nghĩa)": "Chậm rãi, thong thả",
  },
  {
    "No.": 14,
    "語彙 (Từ vựng)": "じぶんで",
    "漢字 (Chữ Hán)": "自分で",
    "意味 (Ý nghĩa)": "Tự mình",
  },
  {
    "No.": 15,
    "語彙 (Từ vựng)": "なかなか",
    "漢字 (Chữ Hán)": "なかなか",
    "意味 (Ý nghĩa)": "Mãi mà (không)",
  },
  {
    "No.": 16,
    "語彙 (Từ vựng)": "はやく",
    "漢字 (Chữ Hán)": "早く",
    "意味 (Ý nghĩa)": "Nhanh chóng",
  },
  {
    "No.": 17,
    "語彙 (Từ vựng)": "ぜんぶ",
    "漢字 (Chữ Hán)": "全部",
    "意味 (Ý nghĩa)": "Toàn bộ",
  },
  {
    "No.": 18,
    "語彙 (Từ vựng)": "すぐに",
    "漢字 (Chữ Hán)": "すぐに",
    "意味 (Ý nghĩa)": "Ngay lập tức",
  },
];

// Process the data for use in the application
function processVocabularyData() {
  return vocabularyData.map((item) => {
    return {
      id: item["No."] || 0,
      vocabulary: item["語彙 (Từ vựng)"] || "",
      kanji: item["漢字 (Chữ Hán)"] || "",
      meaning: item["意味 (Ý nghĩa)"] || "",
    };
  });
}

// Make the processed data available to the main script
const flashcardData = processVocabularyData();
