# Rastgele İlginç Bilgi Üretici

Bu basit web uygulaması, kullanıcılara rastgele ilginç bilgiler sunar. Kullanıcı bir butona tıkladığında, uygulama JSON dosyasından rastgele bir ilginç bilgi seçer ve ekranda gösterir.

## Özellikler

- Rastgele ilginç bilgiler gösterme
- Modern ve duyarlı (responsive) tasarım
- Bilgi değişiminde animasyon efekti

## Dosyalar

- `index.html`: Ana HTML yapısı
- `style.css`: Stil ve tasarım
- `script.js`: JavaScript fonksiyonları
- `facts.json`: İlginç bilgilerin bulunduğu JSON dosyası

## Nasıl Çalıştırılır

1. Tüm dosyaları aynı dizine indirin.
2. `index.html` dosyasını bir web tarayıcısında açın.

**Not:** Bu uygulama, yerel bir web sunucusu üzerinde çalıştırılmalıdır. Aksi takdirde, tarayıcıların güvenlik politikaları nedeniyle JSON dosyası yüklenemeyebilir. Aşağıdaki yöntemlerden birini kullanabilirsiniz:

### 1. Visual Studio Code ile Live Server Kullanımı

1. [Visual Studio Code](https://code.visualstudio.com/) yükleyin.
2. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) eklentisini yükleyin.
3. Proje klasörünü VS Code'da açın.
4. `index.html` dosyasını açın ve sağ tıklayıp "Live Server ile Aç" seçeneğini seçin.

### 2. Python ile Basit HTTP Sunucusu

Terminal veya komut istemcisinde proje dizinine gidin ve şu komutu çalıştırın:

```
# Python 3 için
python -m http.server

# Python 2 için
python -m SimpleHTTPServer
```

Ardından tarayıcınızda `http://localhost:8000` adresine gidin.

### 3. Node.js ile HTTP Sunucusu

1. [Node.js](https://nodejs.org/) yükleyin.
2. Terminal veya komut istemcisinde şu komutu çalıştırın:

```
npx http-server
```

Ardından tarayıcınızda `http://localhost:8080` adresine gidin.

## Özelleştirme

`facts.json` dosyasını düzenleyerek kendi ilginç bilgilerinizi ekleyebilirsiniz. Dosya şu formatta olmalıdır:

```json
{
  "facts": [
    "İlginç bilgi 1",
    "İlginç bilgi 2",
    "..."
  ]
}
``` 