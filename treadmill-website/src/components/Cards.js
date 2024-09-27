import React, { useEffect } from 'react';
import './Cards.css';
import treadmillImage from '../images/resim.jpg'; // Resmi import ediyoruz

function Cards() {
    const numberData = [
        { id: 1, top: '93.5%', left: '66.4%', info: 'Bilgi 1: Bu koşu bandı benzersizdir.' },
        { id: 1.1, top: '94%', left: '47%', info: 'Bilgi 1.1: Yüksek performans sağlar.' },
        { id: 2, top: '16.5%', left: '72.3%', info: 'Bilgi 2: Yeni teknoloji sensörleri içerir.' },
        { id: 2.1, top: '58%', left: '72.7%', info: 'Bilgi 2.1: Yeni teknoloji sensörleri içerir.' },
        { id: 2.1, top: '32%', left: '19.5%', info: 'Bilgi 2.1: Konfor ve güvenliği ön planda tutar.' },
        { id: 2.2, top: '-7%', left: '55.5%', info: 'Bilgi 2.2: Klinik kullanımına uygundur.' },
        { id: 2.3, top: '-5%', left: '45%', info: 'Bilgi 2.3: Klinik kullanımına uygundur.' },
        { id: 3, top: '5%', left: '62%', info: 'Bilgi 3: Klinik kullanımına uygundur.' },
        { id: 3.1, top: '44%', left: '61.5%', info: 'Bilgi 3.1: Çok çeşitli hız ve eğim seçenekleri sunar.' },
        { id: 3.2, top: '48%', left: '34.5%', info: 'Bilgi 3.2: Tüm ihtiyaçlara göre özelleştirilebilir.' },
        { id: 3.3, top: '24%', left: '33.5%', info: 'Bilgi 3.3: Mekanik klavye.' },
        { id: 3.4, top: '19.5%', left: '61.5%', info: 'Bilgi 3.4: Klinik kullanımına uygundur.' },
        { id: 3.5, top: '11%', left: '34.5%', info: 'Bilgi 3.5: Mekanik klavye.' },
        { id: 3.6, top: '36.5%', left: '46.5%', info: 'Bilgi 3.6: Tüm ihtiyaçlara göre özelleştirilebilir.' },
        { id: 3.8, top: '41%', left: '25.5%', info: 'Bilgi 3.7: Güvenlik özellikleri gelişmiştir.' },
    ];

    useEffect(() => {
        // Sayfadaki boş bir yere tıklandığında kartları kapatan işlev
        const handleClickOutside = (event) => {
            const cards = document.querySelectorAll('.info-card');
            cards.forEach(card => {
                card.style.opacity = '0'; // Kartları gizle
                card.style.pointerEvents = 'none';
            });
        };

        // Tıklama olayını dinleyiciye ekliyoruz
        document.addEventListener('click', handleClickOutside);

        // Cleanup: Sayfa kapandığında dinleyiciyi kaldırıyoruz
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleCardClick = (event, id) => {
        event.stopPropagation(); // Kart dışındaki tıklamaların açmayı engellememesi için
        const card = document.querySelector(`.info-card[data-id="${id}"]`);
        // Kart açma/kapatma işlevi
        if (card.style.opacity === '1') {
            card.style.opacity = '0';
            card.style.pointerEvents = 'none';
        } else {
            const cards = document.querySelectorAll('.info-card');
            cards.forEach(c => {
                c.style.opacity = '0'; // Diğer kartları kapat
                c.style.pointerEvents = 'none';
            });
            card.style.opacity = '1'; // Seçilen kartı aç
            card.style.pointerEvents = 'all';
        }
    };

    return (
        <div className="cards-container" id='cards-container'>
            <img src={treadmillImage} alt="Koşu Bandı" className="background-image" />
            {numberData.map((num) => (
                <div
                    key={num.id}
                    className="number-container"
                    style={{ top: num.top, left: num.left }}
                    onClick={(event) => handleCardClick(event, num.id)}
                >
                    <div className="number" data-number={num.id}>
                        {num.id}
                    </div>
                    <div className="info-card" data-id={num.id}>
                        {num.info}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;