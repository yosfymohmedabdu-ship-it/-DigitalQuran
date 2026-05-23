
async function showSurahAndTafsir(surahName) {
  // تحميل الآيات
  const quranResponse = await fetch('quran.json');
  const quranData = await quranResponse.json();
  const verses = quranData[surahName];

  // تحميل التفسير
  const tafsirResponse = await fetch('tafsir.json');
  const tafsirData = await tafsirResponse.json();
  const tafsir = tafsirData[surahName];

  // عرض الآيات
  const display = document.getElementById('surahDisplay');
  display.innerHTML = `<h2>${surahName}</h2>`;
  verses.forEach((verse, index) => {
    display.innerHTML += `<p>${verse}</p>`;
    // عرض التفسير بجانب كل آية
    if (tafsir && tafsir[index]) {
      display.innerHTML += `<p style="color:gray;">${tafsir[index]}</p>`;
    }
  });
}
