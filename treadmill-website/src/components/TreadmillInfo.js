import React, { useEffect, useRef } from 'react';
import treadmillImage1 from '../images/treadmill1.jpg';
import treadmillImage2 from '../images/treadmill2.jpg';
import treadmillImage3 from '../images/treadmill3.jpg';

import './TreadmillInfo.css';

const galleryImages = [treadmillImage1, treadmillImage2, treadmillImage3];

function TreadmillInfo() {
  const galleryRef = useRef(null);
  let currentIndex = 0; // State management olmadan global bir değişken

  const updateImage = (index) => {
    const img = galleryRef.current.querySelector('img');
    img.src = galleryImages[index];

    const overlay = galleryRef.current.querySelector('.overlay h3');
    overlay.textContent = `SAĞLIKLI YAŞAM`;

    const description = galleryRef.current.querySelector('.overlay p');
    description.textContent = `MUTLU HAYAT`;
  };

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateImage(currentIndex);
  };

  const prevImage = () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateImage(currentIndex);
  };

  // Otomatik kaydırma
  useEffect(() => {
    updateImage(currentIndex); // Başlangıçtaki resmi ayarla
    const autoSlideInterval = setInterval(nextImage, 5000); // Her 5 saniyede bir sonraki resme geç

    return () => {
      clearInterval(autoSlideInterval); // Bileşen unmount olduğunda temizle
    };
  }, []);

  return (
    <section id="treadmill-info" className="treadmill-info">
      <div className="gallery" ref={galleryRef}>
        <div className="gallery-container">
          <div className="arrow arrow-left" onClick={prevImage}>
            &#8249;
          </div>
          <div className="gallery-item">
            <img
              src={galleryImages[currentIndex]}
              alt={`Treadmill ${currentIndex + 1}`}
            />
            <div className="overlay">
              <h3>Treadmill {currentIndex + 1}</h3>
              <p>Details about treadmill {currentIndex + 1}</p>
            </div>
          </div>
          <div className="arrow arrow-right" onClick={nextImage}>
            &#8250;
          </div>
        </div>
      </div>

      <div className="info-container2" id="info-container2">
        <h2>KOŞU BANDIMIZ HAKKINDA KISA BİLGİ</h2>
        <p>
          Özel Yapım Koşu Bandımızla Tanışın Her kullanıcının benzersiz ihtiyaçlarını karşılamak üzere tasarlanmış, özel olarak tasarlanmış koşu bandımızla bir sonraki fitness seviyesini deneyimleyin. Koşu bandımız en son teknolojiyi ergonomik tasarımla birleştirerek rahat ve etkili bir egzersiz sağlar. Temel Özellikler: <u><b>Gelişmiş Denge:</b></u> Sağlam bir çerçeveyle tasarlanan koşu bandımız, benzersiz bir denge sağlayarak onu tüm fitness seviyesindeki kullanıcılar için ideal kılar. <u><b>Kişiselleştirilmiş Ayarlar:</b></u> Antrenmanınızı, fitness hedeflerinize ve tercihlerinize uyacak şekilde ayarlanabilir hız, eğim ve direnç seviyeleriyle özelleştirin. <u><b>Akıllı Takip Teknolojisi:</b></u> Mesafe, hız ve yakılan kalori hakkında anında geri bildirim sağlayan entegre sensörlerle performansınızı gerçek zamanlı olarak izleyin. <u><b>Kullanıcı Dostu Arayüz:</b></u> Basitlik ve verimlilik için tasarlanmış şık bir dijital ekranla egzersiz programlarında kolayca gezinin. Her alan için mükemmel olan koşu bandımız, dayanıklılık veya performanstan ödün vermeden depolama için kolayca katlanır. İster bir maraton için antrenman yapıyor olun, ister sadece genel sağlığınızı iyileştirmek istiyor olun, özel yapım koşu bandımız fitness yolculuğunuzda mükemmel bir yol arkadaşıdır. Yeni nesil egzersiz ekipmanlarına geçin ve egzersiz deneyiminizi yeniden tanımlayın.
        </p>
      </div>
    </section>
  );
}

export default TreadmillInfo;