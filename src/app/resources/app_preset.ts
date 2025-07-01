import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import chroma from 'chroma-js';

export function createColorScheme(primary: string) {
  const primaryIsDark = chroma(primary).luminance() < 0.5;
  const inverseColor = primaryIsDark ? '#ffffff' : '#000000';
  const hoverColor = primaryIsDark ? chroma(primary).brighten(0.5).hex() : chroma(primary).darken(0.5).hex();
  const activeColor = primaryIsDark ? chroma(primary).darken(1).hex() : chroma(primary).brighten(1).hex();

  // For ground and card, adjust lightness
  const ground = chroma(primary)
    .set('hsl.l', primaryIsDark ? 0.96 : 0.05)
    .hex();
  const card = chroma(primary)
    .set('hsl.l', primaryIsDark ? 0.96 : 0.05)
    .hex();
  const onSurface = primaryIsDark ? '#000000' : '#ffffff';

  return {
    primary: {
      color: primary,
      inverseColor,
      focusColor: primary,
      hoverColor,
      activeColor,
    },
    surface: {
      ground,
      card,
      on: onSurface,
    },
  };
}

const ClimactifPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: createColorScheme('#553533'),
      dark: createColorScheme('#f2bd9e'),
      //       {
      //     primary: {
      //       color: 'var(--color-primary-light)',
      //       inverseColor: '#ffffff',
      //       hoverColor: 'var(--color-primary-light-hover)',
      //       activeColor: 'var(--color-primary-light-active)',
      //       background: 'var(--color-background-light)',
      //     },
      //     surface: {
      //       ground: 'var(--color-background-light)',
      //       card: 'var(--color-background-light)',
      //     },
      //   },
      //   dark: {
      //     primary: {
      //       color: 'var(--color-primary-dark)',
      //       inverseColor: '#000000',
      //       hoverColor: 'var(--color-primary-dark-hover)',
      //       activeColor: 'var(--color-primary-dark-active)',
      //       background: 'var(--color-background-dark)',
      //     },
      //     surface: {
      //       ground: 'var(--color-background-dark)',
      //       card: 'var(--color-background-dark)',
      //     },
      //   },
    },
  },
});
export default ClimactifPreset;
