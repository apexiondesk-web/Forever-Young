'use strict';
const config = window.CLINIC_CONFIG || {};
if (config.instagramUrl && /^https:\/\/www\.instagram\.com\//.test(config.instagramUrl)) {
  document.querySelectorAll('.instagram-link').forEach(link => link.href = config.instagramUrl);
}
document.getElementById('year').textContent = new Date().getFullYear();
const header = document.querySelector('.header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30), {passive: true});
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() {mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false');menuButton.setAttribute('aria-label','Open navigation');}
menuButton.addEventListener('click', () => {const open = mobileNav.hidden;mobileNav.hidden = !open;menuButton.setAttribute('aria-expanded', String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
const dialog = document.getElementById('enquiry-dialog');
const firstName = document.getElementById('first-name');
const interest = document.getElementById('interest');
const preview = document.getElementById('message-preview');
const status = document.getElementById('copy-status');
function updateMessage() {
 const name = firstName.value.trim();
 preview.value = `Hello Forever Young Clinic! ${name ? `I'm ${name}. ` : ''}I'd like to enquire about ${interest.value.toLowerCase()}. Please share your consultation availability, fees and clinic location. Thank you!`;
 status.textContent = '';
}
firstName.addEventListener('input', updateMessage);interest.addEventListener('change',updateMessage);
document.querySelectorAll('[data-enquire]').forEach(button => button.addEventListener('click', () => {closeMenu();interest.value = button.dataset.interest || 'General consultation';updateMessage();dialog.showModal();document.body.classList.add('dialog-open');}));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.addEventListener('click', event => {const box=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom))dialog.close();});
document.addEventListener('keydown', event=>{if(event.key==='Escape')closeMenu();});
document.getElementById('enquiry-form').addEventListener('submit', event => event.preventDefault());
document.getElementById('copy-message').addEventListener('click', async () => {
 try {await navigator.clipboard.writeText(preview.value); status.textContent='Copied. Open Instagram, then paste and send your enquiry.';}
 catch {preview.focus();preview.select();status.textContent='Select and copy the message above, then paste it into Instagram.';}
});
updateMessage();

// Keep same-page navigation inside this website, including embedded previews.
document.querySelectorAll('a[href^="#"]').forEach(link => {
 link.addEventListener('click', event => {
  const targetId = link.getAttribute('href').slice(1) || 'main';
  const target = document.getElementById(targetId);
  if (!target) return;
  event.preventDefault();
  closeMenu();
  target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
 });
});
