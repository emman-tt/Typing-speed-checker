 Typing Speed Checker
A modern, interactive web application that helps you test and improve your typing speed. Built with vanilla HTML, CSS, and JavaScript, this application provides real-time typing speed measurement with a beautiful, responsive interface.

## 🚀 Features

- **Real-time Speed Testing**: Measure your typing speed in words per second and words per minute
- **Dynamic Word Generation**: Generate new random sentences for practice
- **Visual Feedback**: Beautiful UI with smooth animations and modern design
- **Instant Results**: Get immediate feedback on your typing performance
- **Responsive Design**: Works seamlessly across different screen sizes
- **No Dependencies**: Pure vanilla JavaScript - no external libraries required

## 🎯 How to Use

1. **Start Testing**: Click on the input field to begin your typing test
2. **Type the Text**: Copy the displayed text exactly as shown
3. **Submit**: Press Enter or click the Enter button to finish
4. **View Results**: See your typing speed displayed in both WPS (words per second) and WPM (words per minute)
5. **Generate New**: Click "Generate new word" to get a new sentence for practice

## 📁 Project Structure

```
Typing Speed Checker/
├── index.html          # Main HTML structure
├── styyle.css          # Styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox, animations, and responsive design
- **Vanilla JavaScript**: DOM manipulation and event handling

### Key Features Implementation
- **Timer System**: Uses `Date.now()` for precise timing
- **Word Counting**: Calculates typing speed based on word count and time
- **Event Handling**: Keyboard and mouse event listeners for user interaction
- **Animation**: CSS keyframes for smooth UI transitions
- **Modal Display**: Results shown in an animated overlay

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🎨 Design Features

- **Modern UI**: Clean, minimalist design with dark theme
- **Smooth Animations**: CSS transitions and keyframe animations
- **Responsive Layout**: Flexbox-based responsive design
- **Visual Feedback**: Color-coded results and intuitive interface
- **Accessibility**: Proper contrast ratios and readable fonts

## 🚀 Getting Started

1. **Clone or Download**: Get the project files
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Start Typing**: No installation or setup required!

## 📊 How Speed is Calculated

The application calculates typing speed using the following formula:
- **Words per Second (WPS)**: Total words typed ÷ time in seconds
- **Words per Minute (WPM)**: WPS × 60

## 🔧 Customization

### Adding New Sentences
Edit the `data` array in `script.js` to add your own practice sentences:

```javascript
let data = [
    "Your custom sentence here",
    "Another practice sentence",
    // Add more sentences...
]
```

### Styling Changes
Modify `styyle.css` to customize colors, fonts, and layout to match your preferences.

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding new features
- Improving the UI/UX
- Fixing bugs
- Adding more practice sentences
- Enhancing accessibility

## 📝 License

This project is open source and available under the MIT License.

## 🎯 Future Enhancements

- [ ] User accounts and progress tracking
- [ ] Different difficulty levels
- [ ] Statistics and analytics
- [ ] Custom text input option
- [ ] Multi-language support
- [ ] Sound effects and haptic feedback

---

**Happy Typing!** 🎉
