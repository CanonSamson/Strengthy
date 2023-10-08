/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#A1F65E',
        customBlue: '#524FF5',
        customGray: '#1D2229',
        customGray2: '#6A6A6A',
        customGray3: '#2C323A',
        customWhite: '#F0F0F0',
        customGray4: "#1B2129"
      },
      fontSize: {
        'xs': '0.75rem',  // Extra Small
        'sm': '0.875rem', // Small
        'base': '1rem',   // Base (default) font size
        'lg': '1.125rem', // Large
        'xl': '1.25rem',  // Extra Large
        '2xl': '1.5rem',  // 2x Large
        // Add more custom font sizes as needed
      },
      backgroundImage: {
        'footer-image': "url('/images/homepage/footer-image.png')", // Specify the path to your image
        'about-image': "url('/images/aboutpage/photo.png')", // Specify the path to your image
        'classes-image': "url('/images/classes/Background-Image.png')", // Specify the path to your image
      },
    },
  },
  plugins: [],
}
