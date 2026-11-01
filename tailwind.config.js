/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,html}'],
  darkMode: 'class',
  theme: { extend: { colors: { family_worship_interactive: { light: '##10b981', dark: '##34d399' } } } }
};
