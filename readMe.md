# 📸 Image Renamer

A modern, browser-based React application for batch renaming image files with custom prefixes and suffixes. Upload multiple images, set your naming convention, and download them as a ZIP archive.

## 🚀 Features

- **Drag & Drop Upload** - Intuitive file upload with visual feedback
- **Batch Renaming** - Add custom prefixes and suffixes to multiple files
- **Live Preview** - See new filenames in real-time as you type
- **Download Options**:
  - Download as ZIP archive
- **Smart Extension Handling** - Preserves original file extensions correctly
- **Image Validation** - Only accepts image file formats
- **Modern UI** - Clean, responsive design with Tailwind CSS

## 🛠️ Technology Stack

- **React 18** - Modern React with Hooks
- **Tailwind CSS** - Utility-first CSS framework
- **JSZip** - Client-side ZIP file generation
- **File API** - Browser-native file handling

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/314otrek/image-renamer.git
   cd image-renamer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎯 Usage

1. **Upload Images**

   - Click the upload area or drag & drop image files
   - Multiple file selection supported
   - Only image formats accepted (JPEG, PNG, GIF, WebP, etc.)

2. **Set Naming Convention**

   - Enter desired **prefix** (e.g., "IMG*", "photo*")
   - Enter desired **suffix** (e.g., "\_edited", "\_resized")
   - Preview shows real-time filename changes

3. **Download Options**
   - **ZIP Archive**: Download all files in a single ZIP

## 💡 Example

**Original files:**

- `vacation1.jpg`
- `vacation2.jpg`

**With prefix "SUMMER\_" and suffix "\_2024":**

- `SUMMER_vacation1_2024.jpg`
- `SUMMER_vacation2_2024.jpg`

## 🏗️ Project Structure

```
src/
├── App.js              # Main application component
├── App.css            # Additional styles
├── index.js           # React entry point
├── index.css          # Global styles + Tailwind
└── ...
```

## 🔧 Key React Concepts Used

- **useState** - Managing component state (files, prefix, suffix, drag state)
- **useRef** - Direct DOM access for hidden file input
- **Controlled Components** - Form inputs controlled by React state
- **Event Handling** - File uploads, drag & drop, downloads
- **Conditional Rendering** - Dynamic UI based on application state
- **Array Methods** - File processing with map, filter, forEach

## 📚 Dependencies

```json
{
  "react": "^18.0.0",
  "jszip": "^3.10.1",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.3.0"
}
```

## 🌟 Features Breakdown

### File Upload System

- Native HTML5 File API
- Multiple file selection
- Drag and drop functionality
- File type validation
- Visual drag feedback

### Naming Logic

- Smart extension preservation
- Real-time preview updates
- Template string interpolation
- Edge case handling (files without extensions)

### Download System

- ZIP archive creation
- Programmatic link clicking
- Memory management with URL cleanup

## 🔒 Privacy & Security

- **100% Client-Side** - No files uploaded to servers
- **Local Processing** - All operations performed in browser
- **Memory Safe** - Proper cleanup of object URLs
- **No Data Storage** - Files cleared on page refresh

## 🎨 UI/UX Features

- **Responsive Design** - Works on desktop and mobile
- **Visual Feedback** - Drag states, hover effects, transitions
- **Intuitive Controls** - Clear labeling and logical flow
- **Progressive Enhancement** - Works with JavaScript disabled for basic functionality

## 🚀 Performance Optimizations

- **Lazy Loading** - Components render only when needed
- **Memory Management** - Cleanup of blob URLs
- **Efficient Re-renders** - Optimized state updates
- **File Streaming** - Large file handling without memory issues

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS approach
- **JSZip** - For client-side ZIP functionality

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🛣️ Future Enhancements

- [ ] Image thumbnail previews
- [ ] Batch resize functionality
- [ ] Custom naming patterns (date, sequence numbers)
- [ ] Undo/Redo functionality
- [ ] Folder structure preservation
- [ ] Progress indicators for large batches
- [ ] Image format conversion
