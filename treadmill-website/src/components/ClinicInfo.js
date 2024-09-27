// src/components/ClinicInfo.js
import React from 'react';
import './ClinicInfo.css';

function ClinicInfo() {
  return (
    <section id="clinic-info" className="clinic-info">
      <div className="upper-container"> {/* Üst konteyner eklendi */}
        <div className="video-container">
          <video width="100%" height="auto" loop muted autoPlay>
            <source src={require('../images/Klinik No 1 Klinik Tanıtım Videosu .mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='info-container3'>
          <h2>Hoş geldiniz!</h2> <br></br>
          <p>
            Sağlığınıza ve refahınıza adanmış bir dünya.  Burada, tıbbi bilgi ile sıcak bir dokunuşu bir araya getirerek, kendinizi evinizde hissedeceğiniz bir ortam sunuyoruz.<br></br> <br></br>
            Gelişmiş teknolojilerle donatılmış kliniğimizde, uzman hekimlerimiz ve deneyimli sağlık ekibimiz, sizin ihtiyaçlarınıza uygun kişiselleştirilmiş tedavi planları oluşturuyor. Sağlığınız bizim önceliğimizdir; bu yüzden her muayenede ve her tedavi sürecinde sizi dinliyor, anlamaya çalışıyoruz. Amacımız, size en iyi sağlık hizmetini sunarak yaşam kalitenizi artırmaktır.  Bizimle geçirdiğiniz her an, sağlıklı bir geleceğe doğru atılmış önemli bir adımdır.


          </p>
        </div>
      </div> {/* Üst konteyner kapandı */}

      <div className="info-container">
        <h2>KLİNİĞİMİZ HAKKINDA</h2>
        <p>
          Kliniğimize Hoş Geldiniz
          Kliniğimizde hastalarımızın benzersiz ihtiyaçlarını karşılamak üzere özel olarak tasarlanmış olağanüstü sağlık hizmetleri sunmaya kendimizi adadık. Deneyimli profesyonellerden oluşan bir ekip ve son teknolojiye sahip tesislerle, her hastanın en yüksek kalitede bakım almasını sağlıyoruz.
          Temel Özellikler: <br />
          <u><b>Kapsamlı Hizmetler:</b></u> Bütünsel sağlık yönetimi sağlayan, önleyici bakım, teşhis ve özel tedaviler de dahil olmak üzere çok çeşitli tıbbi hizmetler sunuyoruz. <br /><br />
          <u><b>İleri Teknoloji:</b></u> Kliniğimiz, doğru teşhis ve etkili tedavilerin yapılabilmesine olanak sağlayan en son tıbbi teknolojiyle donatılmıştır. Mümkün olan en iyi bakımı sağlamak için yeniliklerle güncel kalıyoruz. <br /><br />
          <u><b>Hasta Odaklı Yaklaşım:</b></u> Hastalarımızın ihtiyaç ve tercihlerini ön planda tutuyor, güven ve açık iletişim ortamını güçlendiriyoruz. Şefkatli personelimiz sağlık yolculuğunuzun her adımında size rehberlik etmek için burada. <br /><br />

          Kliniğimizde sağlığınız önceliğimizdir. Sizi, şefkatin uzmanlıkla buluştuğu yeni bir sağlık standardını deneyimlemeye davet ediyoruz. Randevu almak ve daha sağlıklı bir yaşam için ilk adımı atmak için bugün bizimle iletişime geçin! <br />
        </p>
        <b>
          Deneyimli profesyonellerden oluşan bir ekiple, bireysel ihtiyaçlarınızı karşılayan olağanüstü sağlık hizmetleri sunmaya kararlıyız.
        </b>
      </div>
    </section>
  );
}

export default ClinicInfo;
