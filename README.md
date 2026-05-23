# -DigitalQuran
أريد تسمية المستودع DigitalQuran
index.html
<h1>مرحبًا بكم في تطبيق DigitalQuran</h1>
5d34afa7b32d6b510d7e58e9b1c10121681f85bb
# -DigitalQuran
أريد تسمية المستودع DigitalQuran
index.html
<h1>مرحبًا بكم في تطبيق DigitalQuran</h1>
5d34afa7b32d6b510d7e58e9b1c10121681f85bb
index.html, style.css, script.js, quran.json).  
git clone https://github.com/اسم-المستخدم/DigitalQuran.git
# QuranApp
# QuranApp تطبيق مبسط لعرض القرآن الكريم مع واجهة سهلة الاستخدام، يهدف إلى تسهيل القراءة والبحث في السور والآيات.  ## المميزات - واجهة عربية واضحة وبسيطة. - إمكانية البحث عن السور والآيات. - دعم العمل على الهواتف والأجهزة اللوحية. - تحديثات مستمرة لإضافة مزايا جديدة.  ## الهدف توفير تجربة سلسة للمستخدمين لقراءة القرآن الكريم بدون تعقيد، مع إم
style.css
/* تنسيق واجهة تطبيق القرآن الكريم */
body {
  background-color: #f5f5f5;
  font-family: "Traditional Arabic", serif;
  font-size: 18px;
  color: #006400; /* الأخضر الداكن */
}
buttons.css
/* تنسيق الأزرار */
button {
  background-color: #006400; /* الأخضر الداكن */
  color: white;
  font-size: 16px;
  border-radius: 8px;
  padding: 10px 20px;
  border: none;
}
button:hover {
  background-color: #228B22; /* لون أخضر أفتح عند التمرير */
}

/* الألوان الأساسية */
:root {
  --primary: #006400;
  --secondary: #228B22;
  --background: #f5f5f5;
  --text: #000000;
}
{
  "primary": "#006400",
  "secondary": "#228B22",
  "background": "#f5f5f5",
  "text": "#000000"
}
{
  "primary": "#006400",
  "secondary": "#228B22",
  "background": "#f5f5f5",
  "text": "#000000"
}## واجهة المستخدم (UI)
ملفات التصميم والتنسيق موجودة في مجلد UI، وتشمل الألوان والأزرار والخطوط الخاصة بالتطبيق.<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>تطبيق القرآن الكريم</title>
  <!-- ربط ملف التنسيق -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>مرحبا بك في تطبيق القرآن الكريم</h1>
  <button>ابدأ الآن</button>
</body>
</html>
index.html
<div class="menu">
  <h2>اختر السورة التي تريد قراءتها:</h2>
  <ul>
    <li>الفاتحة</li>
    <li>البقرة</li>
    <li>آل عمران</li>
    <li>النساء</li>
  </ul>
</div>
.menu {
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 10px;
}
.menu ul {
  list-style-type: none;
  padding: 0;
}
.menu li {
  background-color: #006400;
  color: white;
  margin: 5px 0;
  padding: 10px;
  border-radius: 6px;
}
.menu li:hover {
  background-color: #228B22;
}
<script>
function showSurah(surahName) {
  alert("تم اختيار سورة " + surahName);
}
</script>
<button onclick="showSurah('الفاتحة')">الفاتحة</button>
<button onclick="showSurah('البقرة')">البقرة</button>
<button onclick="showSurah('عمران')">آل عمران</button>
quran.json
{
  "الفاتحة": [
    "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    "الرَّحْمَٰنِ الرَّحِيمِ",
    "مَالِكِ يَوْمِ الدِّينِ"
  ]
}
