module.exports = {
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        accent: '#f39200',
        neutral: '#f7f7fa',
        text: '#1a2530',
        background: '#ffffff'
      },
      fontFamily: {
        'primary': ['Inter, Helvetica Neue, Arial, sans-serif', 'sans-serif'],
        'secondary': ['Playfair Display, Georgia, serif', 'serif']
      }
    }
  },
  plugins: []
}