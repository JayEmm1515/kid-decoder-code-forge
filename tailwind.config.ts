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
				ecosystem: {
					navy: 'hsl(var(--ecosystem-navy))',
					teal: 'hsl(var(--ecosystem-teal))',
					coral: 'hsl(var(--ecosystem-coral))',
					aqua: 'hsl(var(--ecosystem-aqua))',
					purple: 'hsl(var(--ecosystem-purple))',
					sage: 'hsl(var(--ecosystem-sage))'
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
				'coral-teal': 'linear-gradient(135deg, #F97F84 0%, #F5A79A 25%, #B8D7D1 75%, #6EDCD7 100%)',
				'teal-coral': 'linear-gradient(135deg, #6EDCD7 0%, #B8D7D1 25%, #F5A79A 75%, #F97F84 100%)',
				'coral-bottom': 'linear-gradient(180deg, #6EDCD7 0%, #B8D7D1 30%, #F5A79A 70%, #F97F84 100%)',
				'teal-bottom': 'linear-gradient(180deg, #F97F84 0%, #F5A79A 30%, #B8D7D1 70%, #6EDCD7 100%)',
				'soft-coral-teal': 'radial-gradient(1000px 800px at 25% 25%, rgba(249, 127, 132, 0.15) 0%, transparent 70%), radial-gradient(800px 600px at 75% 75%, rgba(110, 220, 215, 0.15) 0%, transparent 70%), linear-gradient(135deg, rgba(245, 167, 154, 0.1) 0%, rgba(184, 215, 209, 0.1) 50%, rgba(110, 220, 215, 0.1) 100%)'
			},
			boxShadow: {
				'floating': 'var(--shadow-floating)',
				'deep': 'var(--shadow-deep)',
				'organic': 'var(--shadow-organic)',
				'glow': 'var(--shadow-glow)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
