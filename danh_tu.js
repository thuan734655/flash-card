const vocabularyData = [
  {
    "No.": 1,
    "語彙 (Từ vựng)": "まち",
    "漢字 (Chữ Hán)": "町",
    "意味 (Ý nghĩa)": "Thành phố, thị trấn",
  },
  {
    "No.": 2,
    "語彙 (Từ vựng)": "はる",
    "漢字 (Chữ Hán)": "春",
    "意味 (Ý nghĩa)": "Mùa xuân",
  },
  {
    "No.": 3,
    "語彙 (Từ vựng)": "なつ",
    "漢字 (Chữ Hán)": "夏",
    "意味 (Ý nghĩa)": "Mùa hè",
  },
  {
    "No.": 4,
    "語彙 (Từ vựng)": "あき",
    "漢字 (Chữ Hán)": "秋",
    "意味 (Ý nghĩa)": "Mùa thu",
  },
  {
    "No.": 5,
    "語彙 (Từ vựng)": "ふゆ",
    "漢字 (Chữ Hán)": "冬",
    "意味 (Ý nghĩa)": "Mùa đông",
  },
  {
    "No.": 6,
    "語彙 (Từ vựng)": "しごと",
    "漢字 (Chữ Hán)": "仕事",
    "意味 (Ý nghĩa)": "Công việc",
  },
  {
    "No.": 7,
    "語彙 (Từ vựng)": "きんじょ",
    "漢字 (Chữ Hán)": "近所",
    "意味 (Ý nghĩa)": "Hàng xóm, khu vực lân cận",
  },
  {
    "No.": 8,
    "語彙 (Từ vựng)": "くすり",
    "漢字 (Chữ Hán)": "薬",
    "意味 (Ý nghĩa)": "Thuốc",
  },
  {
    "No.": 9,
    "語彙 (Từ vựng)": "がいこくご",
    "漢字 (Chữ Hán)": "外国語",
    "意味 (Ý nghĩa)": "Ngoại ngữ",
  },
  {
    "No.": 10,
    "語彙 (Từ vựng)": "はな",
    "漢字 (Chữ Hán)": "花",
    "意味 (Ý nghĩa)": "Hoa",
  },
  {
    "No.": 11,
    "語彙 (Từ vựng)": "やまのぼり",
    "漢字 (Chữ Hán)": "山登り",
    "意味 (Ý nghĩa)": "Leo núi",
  },
  {
    "No.": 12,
    "語彙 (Từ vựng)": "がいこく",
    "漢字 (Chữ Hán)": "外国",
    "意味 (Ý nghĩa)": "Nước ngoài",
  },
  {
    "No.": 13,
    "語彙 (Từ vựng)": "どくしん",
    "漢字 (Chữ Hán)": "独身",
    "意味 (Ý nghĩa)": "Độc thân",
  },
  {
    "No.": 14,
    "語彙 (Từ vựng)": "きせつ",
    "漢字 (Chữ Hán)": "季節",
    "意味 (Ý nghĩa)": "Mùa, thời vụ",
  },
  {
    "No.": 15,
    "語彙 (Từ vựng)": "なつやすみ",
    "漢字 (Chữ Hán)": "夏休み",
    "意味 (Ý nghĩa)": "Kỳ nghỉ hè",
  },
  {
    "No.": 16,
    "語彙 (Từ vựng)": "れんきゅう",
    "漢字 (Chữ Hán)": "連休",
    "意味 (Ý nghĩa)": "Kỳ nghỉ dài",
  },
  {
    "No.": 17,
    "語彙 (Từ vựng)": "うた",
    "漢字 (Chữ Hán)": "歌",
    "意味 (Ý nghĩa)": "Bài hát",
  },
  {
    "No.": 18,
    "語彙 (Từ vựng)": "ゆき",
    "漢字 (Chữ Hán)": "雪",
    "意味 (Ý nghĩa)": "Tuyết",
  },
  {
    "No.": 19,
    "語彙 (Từ vựng)": "なまて",
    "漢字 (Chữ Hán)": "生で",
    "意味 (Ý nghĩa)": "Tươi sống",
  },
  {
    "No.": 20,
    "語彙 (Từ vựng)": "おかし",
    "漢字 (Chữ Hán)": "お菓子",
    "意味 (Ý nghĩa)": "Bánh kẹo",
  },
  {
    "No.": 21,
    "語彙 (Từ vựng)": "しゃしん",
    "漢字 (Chữ Hán)": "写真",
    "意味 (Ý nghĩa)": "Ảnh",
  },
  {
    "No.": 22,
    "語彙 (Từ vựng)": "じぶんの",
    "漢字 (Chữ Hán)": "自分の",
    "意味 (Ý nghĩa)": "Của bản thân mình",
  },
  {
    "No.": 23,
    "語彙 (Từ vựng)": "ことば",
    "漢字 (Chữ Hán)": "言葉",
    "意味 (Ý nghĩa)": "Từ ngữ, ngôn ngữ",
  },
  {
    "No.": 24,
    "語彙 (Từ vựng)": "て",
    "漢字 (Chữ Hán)": "手",
    "意味 (Ý nghĩa)": "Tay",
  },
  {
    "No.": 25,
    "語彙 (Từ vựng)": "こえ",
    "漢字 (Chữ Hán)": "声",
    "意味 (Ý nghĩa)": "Giọng nói",
  },
  {
    "No.": 26,
    "語彙 (Từ vựng)": "まど",
    "漢字 (Chữ Hán)": "窓",
    "意味 (Ý nghĩa)": "Cửa sổ",
  },
  {
    "No.": 27,
    "語彙 (Từ vựng)": "でんき",
    "漢字 (Chữ Hán)": "電気",
    "意味 (Ý nghĩa)": "Điện",
  },
  {
    "No.": 28,
    "語彙 (Từ vựng)": "かばん",
    "漢字 (Chữ Hán)": "鞄",
    "意味 (Ý nghĩa)": "Cái cặp, túi xách",
  },
  {
    "No.": 29,
    "語彙 (Từ vựng)": "しお",
    "漢字 (Chữ Hán)": "塩",
    "意味 (Ý nghĩa)": "Muối",
  },
  {
    "No.": 30,
    "語彙 (Từ vựng)": "せいかつ",
    "漢字 (Chữ Hán)": "生活",
    "意味 (Ý nghĩa)": "Cuộc sống, sinh hoạt",
  },
  {
    "No.": 31,
    "語彙 (Từ vựng)": "しょうゆ",
    "漢字 (Chữ Hán)": "醤油",
    "意味 (Ý nghĩa)": "Nước tương",
  },
  {
    "No.": 32,
    "語彙 (Từ vựng)": "せっけん",
    "漢字 (Chữ Hán)": "石鹸",
    "意味 (Ý nghĩa)": "Xà phòng",
  },
  {
    "No.": 33,
    "語彙 (Từ vựng)": "けいたいでんわ",
    "漢字 (Chữ Hán)": "携帯電話",
    "意味 (Ý nghĩa)": "Điện thoại di động",
  },
  {
    "No.": 34,
    "語彙 (Từ vựng)": "かもく",
    "漢字 (Chữ Hán)": "科目",
    "意味 (Ý nghĩa)": "Môn học",
  },
  {
    "No.": 35,
    "語彙 (Từ vựng)": "きょうかしょ",
    "漢字 (Chữ Hán)": "教科書",
    "意味 (Ý nghĩa)": "Sách giáo khoa",
  },
  {
    "No.": 36,
    "語彙 (Từ vựng)": "そと",
    "漢字 (Chữ Hán)": "外",
    "意味 (Ý nghĩa)": "Bên ngoài",
  },
  {
    "No.": 37,
    "語彙 (Từ vựng)": "たいふう",
    "漢字 (Chữ Hán)": "台風",
    "意味 (Ý nghĩa)": "Bão",
  },
  {
    "No.": 38,
    "語彙 (Từ vựng)": "かぜ",
    "漢字 (Chữ Hán)": "風",
    "意味 (Ý nghĩa)": "Gió",
  },
  {
    "No.": 39,
    "語彙 (Từ vựng)": "あめ",
    "漢字 (Chữ Hán)": "雨",
    "意味 (Ý nghĩa)": "Mưa",
  },
  {
    "No.": 40,
    "語彙 (Từ vựng)": "かさ",
    "漢字 (Chữ Hán)": "傘",
    "意味 (Ý nghĩa)": "Ô (dù)",
  },
  {
    "No.": 41,
    "語彙 (Từ vựng)": "てんきよほう",
    "漢字 (Chữ Hán)": "天気予報",
    "意味 (Ý nghĩa)": "Dự báo thời tiết",
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
