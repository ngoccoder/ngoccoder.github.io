
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  // Tạo hạt bụi ngẫu nhiên
const messageElement = document.querySelector('.womens-day-message');
const particleCount = 30; // Số lượng hạt bụi

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    messageElement.appendChild(particle);

    // Đặt vị trí ngẫu nhiên cho hạt bụi
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Tạo hiệu ứng di chuyển cho hạt bụi
    setTimeout(() => {
        particle.style.opacity = 1; // Hiện hạt bụi
        particle.animate([
            { transform: 'translateY(0)' },
            { transform: `translateY(${Math.random() * 100 - 50}px)` }, // Di chuyển ngẫu nhiên
            { transform: 'translateY(0)' }
        ], {
            duration: Math.random() * 3000 + 2000, // Thời gian di chuyển ngẫu nhiên
            iterations: Infinity // Lặp lại mãi mãi
        });
    }, Math.random() * 1000); // Thời gian trễ ngẫu nhiên khi xuất hiện
};

  