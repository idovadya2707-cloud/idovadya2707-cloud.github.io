// CoachMind design system loader for this template.
// Consumers: point `base` at the bound _ds/<folder> tree relative to this page
// (e.g. '_ds/coachmind' at the project root, '../_ds/coachmind' one level down).
(() => {
  const base = '_ds/coachmind-design-system-c174fbbb-54a0-4922-a006-c8de6ec5e6a1';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
})();
