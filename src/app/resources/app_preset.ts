import { definePreset, palette } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const ClimactifPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                primary: {
                    color: 'var(--color-primary-light)',
                    colorMap: palette('#553533'),
                    inverseColor: '#ffffff',
                    hoverColor: 'var(--color-primary-light-hover)',
                    activeColor: 'var(--color-primary-light-active)',
                    background: 'var(--color-background-light)',
                },
                surface: {
                    ground: 'var(--color-background-light)',
                    card: 'var(--color-background-light)',
                },
            },
            dark: {
                primary: {
                    color: 'var(--color-primary-dark)',
                    colorMap: palette('#f2bd9e'),
                    inverseColor: '#000000',
                    hoverColor: 'var(--color-primary-dark-hover)',
                    activeColor: 'var(--color-primary-dark-active)',
                    background: 'var(--color-background-dark)',
                },
                surface: {
                    ground: 'var(--color-background-dark)',
                    card: 'var(--color-background-dark)',
                },
            },
        },
    },
});
export default ClimactifPreset;
