
  function openOrderModal(paket, harga) {
    const nomorWA = "+6281336515079"; // ganti dengan nomor WA kamu
    const pesan = `Halo, saya ingin memesan:\n\n${paket}\nHarga: ${harga}\n\nApakah masih tersedia?`;
    
    // Encode pesan agar bisa dibaca URL
    const encodedPesan = encodeURIComponent(pesan);

    // Buat link WhatsApp
    const waLink = `https://wa.me/${nomorWA}?text=${encodedPesan}`;

    // Buka WhatsApp di tab baru
    window.open(waLink, '_blank');
  }
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    // Optional: auto slide
    setInterval(() => {
        plusSlides(1);
    }, 4000); // Ganti slide tiap 4 detik
