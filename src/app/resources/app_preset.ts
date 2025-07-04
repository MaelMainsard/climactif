import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import chroma from 'chroma-js';

export function createColorScheme(primary: string) {
  const primaryIsDark = chroma(primary).luminance() < 0.5;
  const inverseColor = primaryIsDark ? '#ffffff' : '#000000';
  const focusColor = primaryIsDark ? '#000000' : '#ffffff';
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
      focusColor,
      hoverColor,
      activeColor,
    },
    surface: {
      ground,
      card,
      tab: card,
      on: onSurface,
    },
  };
}

const ClimactifPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: createColorScheme('#553533'),
      dark: createColorScheme('#f2bd9e'),
    },
  },
});
export default ClimactifPreset;
