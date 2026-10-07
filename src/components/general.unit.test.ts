import { describe, expect, it } from 'vitest';
import { filterATags, findAncestor } from './utils/utils';

describe('findAncestor', () => {
  it('finds a matching ancestor', () => {
    const parent = document.createElement('ul');
    const child = document.createElement('a');
    parent.appendChild(child);

    expect(findAncestor(child, 'ul')).toBe(parent);
  });
});

describe('filterATags', () => {
  it('converts the aria marker to an accessible label', () => {
    const link = document.createElement('a');
    link.setAttribute('aria', '');
    link.textContent = 'Accessibility';

    filterATags(link);

    expect(link.getAttribute('aria-label')).toBe('Accessibility');
    expect(link.getAttribute('aria')).toBeNull();
  });
});
