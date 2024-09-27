// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2 className="testimonials-title">Kullanıcı Yorumları</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>"Bu koşu bandı antrenman rutinimi tamamen değiştirdi. İnanılmaz derecede pürüzsüz ve hassas!"</p>
          <span>-Profesyonel Atlet </span>
        </div>
        <div className="testimonial">
          <p>"Bu özel koşu bandı antrenmanlarımı inanılmaz derecede keyifli hale getirdi. Ayarlanabilir hız ve eğim ayarları seanslarımı tam ihtiyaçlarıma göre uyarlamamı sağlıyor."</p>
          <span>-Rehabilitasyon Uzmanı</span>
        </div>
        <div className="testimonial">
          <p>"Bu koşu bandının yapım kalitesi olağanüstüdür. Sağlamdır ve tasarımı hem şık hem de işlevseldir. Günlük kullanıma dayanabileceğini bilerek onu klinik ortamımızda güvenle kullanabiliriz."</p>
          <span>-Fizyoterapist</span>
        </div>
        <div className="testimonial">
          <p>"Antrenmanlarım sırasında gerçek zamanlı veriler sağlayan yerleşik sensörleri seviyorum. Bu sayede performansımı takip ediyorum ve antrenmanlarımı buna göre ayarlıyorum."</p>
          <span>-Milli Sporcu</span>
        </div>
        <div className="testimonial">
          <p>"Bu özel yapım koşu bandı sayesinde fitness hedeflerime ulaşmak hiç bu kadar kolay olmamıştı. Kullanıcı dostu arayüz ve mükemmel özellikler beni motive ediyor ve yolda tutuyor."</p>
          <span>-Müşteri Yorumu</span>
        </div>
        <div className="testimonial">
          <p>"Güvenlik bizim için bir öncelikti ve bu koşu bandı bunu başarıyor. Sağlam korkulukları ve acil durdurma fonksiyonlarıyla egzersiz yaparken kendimi güvende hissediyorum."</p>
          <span>-Müşteri Yorumu</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;