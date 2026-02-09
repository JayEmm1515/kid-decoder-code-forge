import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'nunito': ['Nunito', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Brand Colors
				teal: {
					dark: 'hsl(175 60% 35%)',
					DEFAULT: 'hsl(175 55% 45%)',
					light: 'hsl(175 50% 55%)'
				},
				purple: {
					dark: 'hsl(270 55% 45%)',
					DEFAULT: 'hsl(270 50% 55%)',
					light: 'hsl(270 45% 65%)'
				},
				// Gray scale
				gray: {
					50: 'hsl(220 20% 98%)',
					100: 'hsl(220 18% 96%)',
					200: 'hsl(220 15% 91%)',
					300: 'hsl(220 12% 84%)',
					400: 'hsl(220 10% 65%)',
					500: 'hsl(220 10% 50%)',
					600: 'hsl(220 12% 40%)',
					700: 'hsl(220 15% 28%)',
					800: 'hsl(220 18% 18%)',
					900: 'hsl(220 22% 10%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 4px)',
				sm: 'calc(var(--radius) - 8px)',
				xl: 'var(--radius-xl)',
				'2xl': '32px',
				'3xl': '40px',
				'pill': '9999px'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 4s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite'
			},
			boxShadow: {
				'glass': '0 8px 32px rgba(31, 38, 50, 0.12)',
				'glass-lg': '0 12px 40px rgba(31, 38, 50, 0.18)',
				'elevated': '0 16px 48px rgba(31, 38, 50, 0.20)',
				'glow-teal': '0 4px 24px rgba(45, 180, 170, 0.30)',
				'glow-purple': '0 4px 24px rgba(138, 92, 194, 0.30)',
				'glow-pink': '0 4px 24px rgba(219, 112, 147, 0.30)',
				'glow-mint': '0 4px 24px rgba(112, 193, 165, 0.30)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;