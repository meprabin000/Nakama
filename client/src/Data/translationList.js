const audioPath = "./phraseTranslationSounds/";
const translationList = [
    {
        englishPhrase: "Hello/Good Afternoon",
        japanesePhrase: "こんにちは",
        pronunciation: "Kon'nichiwa",
        audioLink: require(audioPath + "Hello.wav")
    },
    {
        englishPhrase: "Good Morning",
        japanesePhrase: "こんばんは",
        pronunciation: "Ohayōgozaimasu",
        audioLink: require(audioPath + "Good Morning.wav")
    },
    {
        englishPhrase: "Good Evening",
        japanesePhrase: "こんばんは",
        pronunciation: "konbanwa",
        audioLink: require(audioPath + "Good Evening.wav")
    },
    {
        englishPhrase: "See you later",
        japanesePhrase: "またね",
        pronunciation: "mata ne",
        audioLink: require(audioPath + "See You Later.wav")
    },
    {
        englishPhrase: "Goodbye",
        japanesePhrase: "さようなら",
        pronunciation: "Sayōnara",
        audioLink: require(audioPath + "Good Bye.wav")
    },
    {
        englishPhrase: "Please",
        japanesePhrase: "お願いします",
        pronunciation: "Onegaishimasu",
        audioLink: require(audioPath + "Please.wav")
    },
    {
        englishPhrase: "Thank You",
        japanesePhrase: "ありがとうございました",
        pronunciation: "Arigatogozaimasu",
        audioLink: require(audioPath + "Thank You.wav")
    },
    {
        englishPhrase: "You’re Welcome",
        japanesePhrase: "ありがとうございました",
        pronunciation: "doitashimashite",
        audioLink: require(audioPath + "You are Welcome.wav")
    },
    {
        englishPhrase: "Excuse Me",
        japanesePhrase: "すみません",
        pronunciation: "Sumimasen",
        audioLink: require(audioPath + "Excuse Me.wav")
    },
    {
        englishPhrase: "I am sorry",
        japanesePhrase: "ごめんなさい",
        pronunciation: "Gomennasai",
        audioLink: require(audioPath + "I am Sorry.wav")
    },
    {
        englishPhrase: "Yes",
        japanesePhrase: "はい",
        pronunciation: "Hai",
        audioLink: require(audioPath + "Yes.wav")
    },
    {
        englishPhrase: "No (polite)",
        japanesePhrase: "結構です",
        pronunciation: "kekkō desu",
        audioLink: require(audioPath + "No.wav")
    },
    {
        englishPhrase: "Do you speak English?",
        japanesePhrase: "えいごをはなせますか",
        pronunciation: "Eigo o hanasemasu ka",
        audioLink: require(audioPath + "Do You Speak English.wav")
    },
    {
        englishPhrase: "I don't understand",
        japanesePhrase: "わかりません",
        pronunciation: "Wakarimasen",
        audioLink: require(audioPath + "I do not Understand.wav")
    },
    {
        englishPhrase: "Where is the restroom?",
        japanesePhrase: "トイレはどこですか",
        pronunciation: "Toire wa doko desu ka",
        audioLink: require(audioPath + "Where is restroom.wav")
    },
    {
        englishPhrase: "Please tell me your name ",
        japanesePhrase: "お名前を教えてください ",
        pronunciation: "Onamae o oshietekudasai",
        audioLink: require(audioPath + "Please tell me your name.wav")
    },
    {
        englishPhrase: "My name is …",
        japanesePhrase: "わたしのなまえは ….です",
        pronunciation: "Watashi no namae wa (say your name) desu",
        audioLink: require(audioPath + "My Name Is.wav")
    },
    {
        englishPhrase: "That's all right.",
        japanesePhrase: "だいじょうぶです",
        pronunciation: "Dai jōbu desu.",
        audioLink: require(audioPath + "That is alright.wav")
    }
];

export default translationList;