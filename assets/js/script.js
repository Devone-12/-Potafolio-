 document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = (clientX - centerX) / 50;
        const moveY = (clientY - centerY) / 50;

        const blob1 = document.getElementById('blob1');
        const blob2 = document.getElementById('blob2');

        if (blob1 && blob2) {
            blob1.style.transform = `translate(${moveX}px, ${moveY}px)`;
            blob2.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        }
    });

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const content = document.querySelector('.content');
        if (content) {
            content.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    function toggleNav() {
document.querySelector('.nav-container').classList.toggle('active');
}

