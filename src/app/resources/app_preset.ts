import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import chroma from 'chroma-js';

export function createColorScheme(primary: string, dark: boolean) {
  const inverseColor = dark ? '#000000' : '#ffffff';
  const hoverColor = dark ? chroma(primary).darken(0.5).hex() : chroma(primary).brighten(0.5).hex();
  const activeColor = dark ? chroma(primary).darken(1).hex() : chroma(primary).brighten(1).hex();

  // For ground and card, adjust lightness
  const ground = chroma(primary)
    .set('hsl.l', dark ? 0.05 : 0.96)
    .hex();
  const card = chroma(primary)
    .set('hsl.l', dark ? 0.05 : 0.96)
    .hex();

  return {
    primary: {
      color: primary,
      inverseColor,
      hoverColor,
      activeColor,
    },
    surface: {
      ground,
      card,
    },
  };
}

const ClimactifPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: createColorScheme('#553533', false),
      dark: createColorScheme('#f2bd9e', true),
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
