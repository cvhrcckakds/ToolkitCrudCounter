# Redux Toolkit

- Klasik Redux'a göre daha az kod içerir.

- Dahili olarak thunk gelir

- Devtoolks eklentisi sayesinde proje geliştirirken storu'u reducerları actionları izleyebilmemizi sağlar.

- Veri yönetimi daha kolay

# Kurulum (Kütüphanler)
- npm install @reduxjs/toolkit
- npm install react-redux

# Slice (Dilim)

- Redux Toolkit içinde yer alan ve reducer'ı ve aksiyonları bir araya getiren yapıdır.

- Klasik redux'ta aksiyonları ayrı reducer'ları ayrı dosyada tamamlanır. Toolkit ile birlikte slice yapılarında sadece aksiyonların görevleri yazırlır, bu yapı hem aksiyon objelerini hem de reducerları kendi oluşturur.

counterSlice yapısı oluştur, reducer yapısını stor oluşturmak için kullan storu main.jsx tanıt

# Project Gif
<img src="./public/ToolkitCrudCounter.gif">
