const vocabularyData = [
  {
    "No.": 1,
    "語彙 (Từ vựng)": "かんたん",
    "漢字 (Chữ Hán)": "簡単",
    "意味 (Ý nghĩa)": "Đơn giản",
  },
  {
    "No.": 2,
    "語彙 (Từ vựng)": "きんだいてき",
    "漢字 (Chữ Hán)": "近代的",
    "意味 (Ý nghĩa)": "Hiện đại",
  },
  {
    "No.": 3,
    "語彙 (Từ vựng)": "きびしい",
    "漢字 (Chữ Hán)": "厳しい",
    "意味 (Ý nghĩa)": "Nghiêm khắc",
  },
  {
    "No.": 4,
    "語彙 (Từ vựng)": "あたまがいい",
    "漢字 (Chữ Hán)": "頭がいい",
    "意味 (Ý nghĩa)": "Thông minh",
  },
  {
    "No.": 5,
    "語彙 (Từ vựng)": "おなじ",
    "漢字 (Chữ Hán)": "同じ",
    "意味 (Ý nghĩa)": "Giống nhau",
  },
  {
    "No.": 6,
    "語彙 (Từ vựng)": "あかるい",
    "漢字 (Chữ Hán)": "明るい",
    "意味 (Ý nghĩa)": "Sáng sủa",
  },
  {
    "No.": 7,
    "語彙 (Từ vựng)": "くらい",
    "漢字 (Chữ Hán)": "暗い",
    "意味 (Ý nghĩa)": "Tối",
  },
  {
    "No.": 8,
    "語彙 (Từ vựng)": "げんき",
    "漢字 (Chữ Hán)": "元気",
    "意味 (Ý nghĩa)": "Khoẻ mạnh",
  },
  {
    "No.": 9,
    "語彙 (Từ vựng)": "まじめ",
    "漢字 (Chữ Hán)": "真面目",
    "意味 (Ý nghĩa)": "Chăm chỉ, nghiêm túc",
  },
  {
    "No.": 10,
    "語彙 (Từ vựng)": "あたたかい",
    "漢字 (Chữ Hán)": "暖かい",
    "意味 (Ý nghĩa)": "Ấm áp",
  },
  {
    "No.": 11,
    "語彙 (Từ vựng)": "あつい",
    "漢字 (Chữ Hán)": "暑い",
    "意味 (Ý nghĩa)": "Nóng",
  },
  {
    "No.": 12,
    "語彙 (Từ vựng)": "すずしい",
    "漢字 (Chữ Hán)": "涼しい",
    "意味 (Ý nghĩa)": "Mát mẻ",
  },
  {
    "No.": 13,
    "語彙 (Từ vựng)": "さむい",
    "漢字 (Chữ Hán)": "寒い",
    "意味 (Ý nghĩa)": "Lạnh",
  },
  {
    "No.": 14,
    "語彙 (Từ vựng)": "ひくい",
    "漢字 (Chữ Hán)": "低い",
    "意味 (Ý nghĩa)": "Thấp",
  },
  {
    "No.": 15,
    "語彙 (Từ vựng)": "たかい",
    "漢字 (Chữ Hán)": "高い",
    "意味 (Ý nghĩa)": "Cao, đắt",
  },
  {
    "No.": 16,
    "語彙 (Từ vựng)": "おそい",
    "漢字 (Chữ Hán)": "遅い",
    "意味 (Ý nghĩa)": "Chậm, muộn",
  },
  {
    "No.": 17,
    "語彙 (Từ vựng)": "あたらしい",
    "漢字 (Chữ Hán)": "新しい",
    "意味 (Ý nghĩa)": "Mới",
  },
  {
    "No.": 18,
    "語彙 (Từ vựng)": "だめ",
    "漢字 (Chữ Hán)": "ダメ",
    "意味 (Ý nghĩa)": "Không được",
  },
  {
    "No.": 19,
    "語彙 (Từ vựng)": "あぶない",
    "漢字 (Chữ Hán)": "危ない",
    "意味 (Ý nghĩa)": "Nguy hiểm",
  },
  {
    "No.": 20,
    "語彙 (Từ vựng)": "あんぜん",
    "漢字 (Chữ Hán)": "安全",
    "意味 (Ý nghĩa)": "An toàn",
  },
  {
    "No.": 21,
    "語彙 (Từ vựng)": "たいへん",
    "漢字 (Chữ Hán)": "大変",
    "意味 (Ý nghĩa)": "Vất vả, rất",
  },
  {
    "No.": 22,
    "語彙 (Từ vựng)": "いそがしい",
    "漢字 (Chữ Hán)": "忙しい",
    "意味 (Ý nghĩa)": "Bận rộn",
  },
  {
    "No.": 23,
    "語彙 (Từ vựng)": "むずかしい",
    "漢字 (Chữ Hán)": "難しい",
    "意味 (Ý nghĩa)": "Khó",
  },
  {
    "No.": 24,
    "語彙 (Từ vựng)": "ながい",
    "漢字 (Chữ Hán)": "長い",
    "意味 (Ý nghĩa)": "Dài",
  },
  {
    "No.": 25,
    "語彙 (Từ vựng)": "おだやか",
    "漢字 (Chữ Hán)": "穏やか",
    "意味 (Ý nghĩa)": "Yên bình, ôn hoà",
  },
  {
    "No.": 26,
    "語彙 (Từ vựng)": "つよい",
    "漢字 (Chữ Hán)": "強い",
    "意味 (Ý nghĩa)": "Mạnh",
  },
  {
    "No.": 27,
    "語彙 (Từ vựng)": "うるさい",
    "漢字 (Chữ Hán)": "うるさい",
    "意味 (Ý nghĩa)": "Ồn ào",
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
