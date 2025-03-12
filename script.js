document.addEventListener('DOMContentLoaded', () => {
    const factText = document.getElementById('fact-text');
    const newFactBtn = document.getElementById('new-fact-btn');
    let facts = [];
    let currentFactIndex = -1;

    // JSON dosyasından bilgileri yükle
    async function loadFacts() {
        try {
            const response = await fetch('facts.json');
            if (!response.ok) {
                throw new Error('JSON dosyası yüklenemedi!');
            }
            const data = await response.json();
            facts = data.facts;
            
            // Sayfa yüklendiğinde rastgele bir bilgi göster
            showRandomFact();
        } catch (error) {
            console.error('Hata:', error);
            factText.textContent = 'Bilgiler yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.';
        }
    }

    // Rastgele bir bilgi göster (öncekinden farklı olacak şekilde)
    function showRandomFact() {
        if (facts.length > 0) {
            let randomIndex;
            
            // Eğer birden fazla bilgi varsa, öncekinden farklı bir bilgi seç
            if (facts.length > 1) {
                do {
                    randomIndex = Math.floor(Math.random() * facts.length);
                } while (randomIndex === currentFactIndex);
            } else {
                randomIndex = 0;
            }
            
            currentFactIndex = randomIndex;
            
            // Bilgi değiştiğinde animasyon ekle
            factText.classList.add('fade');
            
            // Animasyon tamamlandıktan sonra metni değiştir
            setTimeout(() => {
                factText.textContent = facts[randomIndex];
                
                // Metni değiştirdikten sonra animasyonu kaldır
                setTimeout(() => {
                    factText.classList.remove('fade');
                }, 50);
            }, 400);
        }
    }

    // Butona tıklandığında yeni bilgi göster
    newFactBtn.addEventListener('click', () => {
        // Buton tıklandığında animasyon ekle
        newFactBtn.classList.add('clicked');
        setTimeout(() => {
            newFactBtn.classList.remove('clicked');
        }, 300);
        
        showRandomFact();
    });

    // Bilgileri yükle
    loadFacts();
}); 