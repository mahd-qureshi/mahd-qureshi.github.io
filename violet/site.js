// Progressive enhancement: the first app view remains visible without JS.
const controls = document.querySelector('.gallery-controls');
const buttons = document.querySelectorAll('[data-screen]');
const screens = {
  home: document.getElementById('product-home'),
  today: document.getElementById('product-today'),
};
const captions = {
  home: 'LifeHub · Home view',
  today: 'LifeHub · Calendar and to-do drawer',
};
if (controls && screens.home && screens.today) {
  controls.hidden = false;
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const selected = button.dataset.screen;
      if (!screens[selected]) return;
      Object.entries(screens).forEach(([name, screen]) => { screen.hidden = name !== selected; });
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      document.querySelector('.gallery-caption').textContent = captions[selected];
      document.querySelector('.gallery-count').textContent = selected === 'home' ? '01 / 02' : '02 / 02';
    });
  });
}
