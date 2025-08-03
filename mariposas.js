window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('.mariposa').forEach((el, i) => {
    const speed = 0.2 + i * 0.1;
    el.style.transform = `translateY(${scrollY * speed}px)`;
  });
});