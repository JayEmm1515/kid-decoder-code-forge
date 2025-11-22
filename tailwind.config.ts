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
				clay: {
					'dark-teal': 'hsl(178 35% 28%)',
					teal: 'hsl(178 30% 45%)',
					mint: 'hsl(177 35% 65%)',
					'light-mint': 'hsl(176 40% 78%)',
					'pale-mint': 'hsl(175 45% 88%)',
					cream: 'hsl(174 35% 92%)',
					sage: 'hsl(175 28% 70%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'organic-morph': 'organic-morph 8s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-organic': 'var(--gradient-organic)',
				'gradient-coral': 'var(--gradient-coral)',
				'gradient-depth': 'var(--gradient-depth)',
				'texture-organic': 'var(--texture-organic)',
				'texture-depth': 'var(--texture-depth)',
				'coral-teal': 'linear-gradient(135deg, #FFDA6C 0%, #DCE3EC 50%, #0062B8 100%)',
				'teal-coral': 'linear-gradient(135deg, #0062B8 0%, #DCE3EC 50%, #FFDA6C 100%)',
				'coral-bottom': 'linear-gradient(180deg, #0062B8 0%, #DCE3EC 30%, #FFDA6C 70%, #FFDA6C 100%)',
				'teal-bottom': 'linear-gradient(180deg, #FFDA6C 0%, #DCE3EC 30%, #0062B8 70%, #002962 100%)',
				'soft-coral-teal': 'radial-gradient(1000px 800px at 25% 25%, rgba(255, 218, 108, 0.15) 0%, transparent 70%), radial-gradient(800px 600px at 75% 75%, rgba(0, 98, 184, 0.15) 0%, transparent 70%), linear-gradient(135deg, rgba(220, 227, 236, 0.1) 0%, rgba(0, 98, 184, 0.1) 50%, rgba(0, 41, 98, 0.1) 100%)'
			},
			boxShadow: {
				'clay-light': 'var(--clay-shadow-light)',
				'clay-medium': 'var(--clay-shadow-medium)',
				'clay-heavy': 'var(--clay-shadow-heavy)',
				'clay-inset': 'var(--clay-shadow-inset)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
