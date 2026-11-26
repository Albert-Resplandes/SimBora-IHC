function renderBottomNav(activePage) {
  const nav = document.createElement('nav');
  nav.className = 'bottom-nav';
  const items = [
    { id: 'lugares', label: 'Lugares', icon: '🏠', href: 'descobrir.html' },
    { id: 'favoritos', label: 'Favoritos', icon: '🤍', href: 'favoritos.html' },
    { id: 'pesquisar', label: 'Pesquisar', icon: '🔍', href: 'pesquisar.html' },
    { id: 'perfil', label: 'Perfil', icon: '👤', href: 'perfil.html' }
  ];

  nav.innerHTML = items.map(item => `
    <a href="${item.href}" class="nav-item ${activePage === item.id ? 'active' : ''}">
      <span style="font-size:18px;">${item.icon}</span>
      <span>${item.label}</span>
    </a>
  `).join('');

  document.querySelector('.mobile-frame').appendChild(nav);
}

function showToast(texto) {
  const frame = document.querySelector('.mobile-frame');
  const old = frame.querySelector('.toast-msg');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.textContent = texto;
  frame.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}