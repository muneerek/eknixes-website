const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open menu'); }
menu.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); } });
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { document.querySelector('#service').value = link.dataset.service; }));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#brief-form').addEventListener('submit', event => { event.preventDefault(); const data = new FormData(event.currentTarget); const brief = `EKNIXES — PROJECT BRIEF\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || 'Not specified'}\nService: ${data.get('service')}\n\nProject overview\n${data.get('message')}\n\nPrepared on ${new Date().toLocaleDateString()}\n`; const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' })); const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'eknixes-project-brief.txt'; document.body.appendChild(anchor); anchor.click(); anchor.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); document.querySelector('#form-status').textContent = 'Your project brief is ready. Save it and share it with the Eknixes team.'; });
