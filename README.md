# GSBWifi Login
GSB wifiye otomatik bağlanmak için bir script dosyaysı.

## UYARI
*Kodu çalıştırdığınızda konsola bir yazı gelmeyecek çünkü eklemedim .d Kod bozuk değil.*

## Bat Dosyası
`wifi.bat` dosyası çalışmazsa dosya içindeki `index.js` yerine tam dosya konumu girmeyi deneyim.
Daha sonra bu bat dosyasını masaüstüne kısayol olarak atıp görselini ve ismini değiştirerek estetiklik kazandırıp kullanabilirsiniz.

## Nasıl Çalışır?
İlk olarak site çerezlerini almak için siteye istek attık.
Çerezlerden asıl ihtiyacımız olan CSRF token'di. Bu gerçek bir kullanıcı olduğunuzu doğruluyor, form işlemlerinde botları engellemek sıklıkla kullanılan bir yöntemdir.

Aynı zamanda formdaki input alanında gizlenmiş bir veri daha alındığı için o veriyide tarayıcıdan çekmemiz gerekti:
```javascript
<input type="hidden" name="javax.faces.ViewState">
```
Daha sonra form verilerini hazırlayıp gerekli sayfaya gönderdik. Gerisini zaten GSB Wifi'nin sitesi hallediyor :)

Aklınıza takılan konuları ve yaşadığınız sorunları issues kısmından sorabilirsiniz, düzenlemelere açığız.
