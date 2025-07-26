// bubble.js
document.addEventListener('DOMContentLoaded', () => {
  const colors = [
    'rgba(198, 231, 255,0.5))', 
    'rgba(255, 90, 189, 0.34)', 
    'rgba(255, 234, 79, 0.5)', 
    'rgba(216, 190, 237, 0.5)', 
    'rgba(227, 240, 212, 0.5)'  
  ];

  for (let i = 0; i < 30; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    // ขนาด
    const size = Math.random() * 40 + 10;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    // ตำแหน่งและความเร็ว
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = 5 + Math.random() * 5 + 's';

    // สีสุ่ม
    const color = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.backgroundColor = color;

    // เมื่อคลิก => แตก
    bubble.addEventListener('click', () => {
      bubble.classList.add('pop');
      setTimeout(() => bubble.remove(), 300); // ลบออกจาก DOM
    });

    document.body.appendChild(bubble);
  }
});
