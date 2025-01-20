const bibleVerses = [
    {"verse": "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.", "ref": "1 Corinthians 15:58"},
    {"verse": "The Lord is my shepherd; I shall not want.", "ref": "Psalm 23:1"},
    {"verse": "I can do all things through him who strengthens me.", "ref": "Philippians 4:13"},
    {"verse":"And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", "ref": "Romans 8:28"},
    {"verse":"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.", "ref": "John 3:16"},
    {"verse":"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.", "ref": "Proverbs 3:5-6"},
    {"verse":"Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.", "ref": "Isaiah 41:10"},
    {"verse":"For we live by faith, not by sight.","ref":"2 Corinthians 5:7"},
    {"verse":"And our hope for you is firm, because we know that just as you share in our sufferings, so also you share in our comfort.","ref":"2 Corinthians 1:7"},
    {"verse":"The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds. We demolish arguments and every pretension that sets itself up against the knowledge of God, and we take captive every thought to make it obedient to Christ.","ref":"2 Corinthians 10:4-5"},
    {"verse":"Therefore, if anyone is in Christ, he is a new creation; the old has gone, the new has come!","ref":"2 Corinthians 5:17"},
    {"verse":"For God did not give us a spirit of timidity, but a spirit of power, of love and of self-discipline","ref":"2 Timothy 1:7"},
    {"verse":"This same Jesus, who has been taken from you into heaven, will come back in the same way you have seen him go into heaven.","ref":"Acts 1:11"},
    {"verse":"Everyone who believes in him receives forgiveness of sins through his name.","ref":"Acts 10:43"},
    {"verse":"Believe in the Lord Jesus, and you will be saved - you and your household.","ref":"Acts 16:31"},
    {"verse":"When Christ, who is your life, appears, then you also will appear with him in glory.","ref":"Colossians 3:4"},
    {"verse":"The Lord our God is merciful and forgiving, even though we have rebelled against him.","ref":"Daniel 9:9"},
    {"verse":"He is your praise; he is your God, who performed for you those great and awesome wonders you saw with your own eyes.","ref":"Deuteronomy 10:21"},
    {"verse":"For the Lord your God is the one who goes with you to fight for you against your enemies to give you victory.","ref":"Deuteronomy 20:4"},
    {"verse":"Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.","ref":"Deuteronomy 31:6"},
    {"verse":"The Lord himself goes before you and will be with you; he will never leave nor forsake you. Do not be afraid; do not be discouraged.","ref":"Deuteronomy 31:8"},
    {"verse":"The eternal God is your refuge, and underneath are the everlasting arms. He will drive out your enemy before you, saying, ‘Destroy him!’","ref":"Deuteronomy 33:27"},
    {"verse":"If you seek the Lord your God, you will find Him if you look for Him with all your heart and with all your soul.","ref":"Deuteronomy 4:29"},
    {"verse":"In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace.","ref":"Ephesians 1:7"},
    {"verse":"For you were once darkness, but now you are light in the Lord. Live as children of light","ref":"Ephesians 5:8"},
    {"verse":"God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can stand up under it.","ref":"1 Corinthians 10:13 "},
    {"verse":"You were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God.","ref":"1 Corinthians 6:11"},
    {"verse":"If we ask anything according to his will, he hears us. And if we know that he hears us - whatever we ask - we know that we have what we asked of him.","ref":"1 John 5:14-15"},
    {"verse":"The eyes of the Lord are on the righteous and His ears are attentive to their prayer.","ref":"1 Peter 3:12"},
    {"verse":"The Lord is faithful, and he will strengthen and protect you from the evil one.","ref":"1 Thessalonians 3:3"},
    
    // Add more verses as needed
    
];

function getDailyVerse() {
    const index = new Date().getDate() % bibleVerses.length;
    return bibleVerses[index];
}

document.addEventListener("DOMContentLoaded", () => {
    const dailyVerse = getDailyVerse();
    document.getElementById("daily-verse").innerText = `"${dailyVerse.verse}" — ${dailyVerse.ref}`;
});