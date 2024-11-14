window.addEventListener('scroll', function() {
    // Dapatkan posisi scroll
    let scrollPosition = window.scrollY;

    // Deklarasi elemen yang sering digunakan di dalam fungsi
    let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountains_behind = document.getElementById('mountains_behind');
    let text = document.getElementById('text');
    let btn = document.getElementById('btn');
    let mountains_front = document.getElementById('mountains_front');

    // Efek parallax yang lebih halus
    stars.style.transform = `translateY(${scrollPosition * 0.8}px)`;  // Bintang lebih jauh
    moon.style.transform = `translateY(${scrollPosition * 0.6}px)`;   // Bulan lebih jauh

    // Gerakkan posisi elemen lainnya sesuai dengan scroll
    stars.style.left = `${scrollPosition * 0.25}px`;  // Sesuaikan pergerakan bintang
    moon.style.top = `${scrollPosition * 1.05}px`;    // Sesuaikan pergerakan bulan
    mountains_behind.style.top = `${scrollPosition * 0.2}px`;  // Gunung belakang
});
