import { 
  Image, FileText, Calculator, Type, Code, Ruler, Lock, Search, Share2, 
  Plus, Heart, Music, QrCode, Palette, Zap, Shield, 
  Settings, Hash, Terminal, Globe, Cpu, Smartphone, Mail, Database,
  Eye, FileCode, FileJson, FileType, Layers, Layout, List, 
  Maximize, Minimize, Move, PenTool, RefreshCw, Scissors, 
  Trash2, Wand2, Watch, Wifi, Activity, BarChart, 
  BookOpen, Camera, CheckCircle, Clock, Cloud, 
  Compass, CreditCard, Download, Edit, ExternalLink, 
  Filter, Gift, HardDrive, HelpCircle, Home, Info, 
  Key, Link, Map, MessageSquare, Mic, Moon, 
  MoreHorizontal, Package, Paperclip, Phone, Play, 
  Printer, Save, Send, ShoppingCart, Star, Sun, 
  Tag, ThumbsUp, User, Video, Volume2, XCircle,
  RotateCw, Languages, Binary, Percent, Square, 
  TrendingUp, Activity as Health, Droplets, 
  Stethoscope, Thermometer, Wind, Zap as Power,
  Wrench, Hammer, Box, Archive, FileArchive,
  Youtube, Instagram, Hash as Hashtag,
  DollarSign, PieChart, LineChart,
  Table, FileSpreadsheet, Presentation,
  Lock as LockIcon, Unlock as UnlockIcon,
  Pen, Signature, Image as ImageIcon,
  FileAudio, FileVideo, Book,
  Search as SeoIcon, Globe as WebIcon,
  FastForward, Scale, Gauge, Zap as EnergyIcon,
  Battery, HardDrive as StorageIcon
} from 'lucide-react';

export interface Tool {
  id: string;
  cat: string;
  icon: any;
  name: string;
  desc: string;
  demo: string | null;
}

export const categories = [
  { id: 'all', name: 'All', icon: Zap, fullName: 'All Tools' },
  { id: 'image', name: 'Image', icon: Image, fullName: 'Image Tools' },
  { id: 'document', name: 'Document', icon: FileText, fullName: 'Document Tools' },
  { id: 'text', name: 'Text', icon: Type, fullName: 'Text Tools' },
  { id: 'calculator', name: 'Calculator', icon: Calculator, fullName: 'Calculator Tools' },
  { id: 'password', name: 'Security', icon: Lock, fullName: 'Security & Password Tools' },
  { id: 'qr', name: 'QR', icon: QrCode, fullName: 'QR Code Tools' },
  { id: 'color', name: 'Color', icon: Palette, fullName: 'Color Tools' },
  { id: 'unit', name: 'Unit', icon: Ruler, fullName: 'Unit Converter Tools' },
  { id: 'dev', name: 'Dev', icon: Code, fullName: 'Developer Tools' },
  { id: 'seo', name: 'SEO', icon: Search, fullName: 'SEO & Webmaster Tools' },
  { id: 'math', name: 'Math', icon: Plus, fullName: 'Math Tools' },
  { id: 'health', name: 'Health', icon: Heart, fullName: 'Health & Fitness Tools' },
  { id: 'file', name: 'File', icon: Music, fullName: 'File Converter Tools' },
  { id: 'social', name: 'Social', icon: Share2, fullName: 'Social Media Tools' },
];

export const toolsData: Tool[] = [
  // 🖼️ Image Tools (14)
  { id: 'img-conv', cat: 'image', icon: RefreshCw, name: 'Image Converter Tool', desc: 'Convert images between PNG, JPG, WEBP, and more.', demo: null },
  { id: 'img-comp', cat: 'image', icon: Minimize, name: 'Image Compressor Tool', desc: 'Reduce image file size without losing quality.', demo: null },
  { id: 'img-res', cat: 'image', icon: Maximize, name: 'Image Resizer Tool', desc: 'Resize images to specific dimensions or percentages.', demo: null },
  { id: 'img-crop', cat: 'image', icon: Scissors, name: 'Image Cropper Tool', desc: 'Crop images to any aspect ratio or size.', demo: null },
  { id: 'img-ocr', cat: 'image', icon: FileType, name: 'Image to Text (OCR) Tool', desc: 'Extract text from images using OCR technology.', demo: 'ocr' },
  { id: 'img-rot', cat: 'image', icon: RotateCw, name: 'Image Rotator Tool', desc: 'Rotate images clockwise or counter-clockwise.', demo: null },
  { id: 'bg-rem', cat: 'image', icon: Trash2, name: 'Background Remover Tool', desc: 'Remove backgrounds from images automatically.', demo: null },
  { id: 'img-enh', cat: 'image', icon: Wand2, name: 'Image Enhancer Tool', desc: 'Improve image quality and sharpness.', demo: null },
  { id: 'img-pdf', cat: 'image', icon: FileText, name: 'Image to PDF Tool', desc: 'Convert one or more images into a PDF document.', demo: null },
  { id: 'img-filt', cat: 'image', icon: Filter, name: 'Image Filter Tool', desc: 'Apply artistic filters to your photos.', demo: null },
  { id: 'img-meta', cat: 'image', icon: Info, name: 'Metadata Remover Tool', desc: 'Remove EXIF data and metadata from images.', demo: null },
  { id: 'img-icon', cat: 'image', icon: ImageIcon, name: 'Image to Icon Tool', desc: 'Convert images to ICO or ICNS icon formats.', demo: null },
  { id: 'img-b64', cat: 'image', icon: Binary, name: 'Image to Base64 Tool', desc: 'Convert image files to Base64 strings.', demo: null },
  { id: 'img-col', cat: 'image', icon: Palette, name: 'Image Color Picker Tool', desc: 'Extract colors directly from an image.', demo: 'color' },

  // 📄 Document Tools (12)
  { id: 'pdf-merge', cat: 'document', icon: Layers, name: 'Merge PDF Tool', desc: 'Combine multiple PDF files into one document.', demo: 'pdf-merge' },
  { id: 'pdf-split', cat: 'document', icon: Scissors, name: 'Split PDF Tool', desc: 'Split a PDF file into multiple documents.', demo: null },
  { id: 'pdf-comp', cat: 'document', icon: Minimize, name: 'Compress PDF Tool', desc: 'Compress PDF files to reduce size.', demo: null },
  { id: 'pdf-word', cat: 'document', icon: FileText, name: 'PDF to Word Tool', desc: 'Convert PDF documents to editable Word files.', demo: null },
  { id: 'pdf-ppt', cat: 'document', icon: Presentation, name: 'PDF to PowerPoint Tool', desc: 'Convert PDF files to PPTX presentations.', demo: null },
  { id: 'doc-conv', cat: 'document', icon: RefreshCw, name: 'Document Converter Tool', desc: 'Convert between various document formats.', demo: null },
  { id: 'pdf-lock', cat: 'document', icon: LockIcon, name: 'PDF Lock/Unlock Tool', desc: 'Add or remove password protection from PDFs.', demo: null },
  { id: 'pdf-sign', cat: 'document', icon: Signature, name: 'eSign PDF Tool', desc: 'Digitally sign your PDF documents.', demo: null },
  { id: 'pdf-jpg', cat: 'document', icon: ImageIcon, name: 'PDF to JPG Tool', desc: 'Convert PDF pages into high-quality images.', demo: null },
  { id: 'pdf-excel', cat: 'document', icon: FileSpreadsheet, name: 'PDF to Excel Tool', desc: 'Extract tables from PDF to Excel spreadsheets.', demo: null },
  { id: 'pdf-pptx', cat: 'document', icon: Presentation, name: 'PDF to PPT Tool', desc: 'Convert PDF to PowerPoint slides.', demo: null },
  { id: 'pdf-rot', cat: 'document', icon: RotateCw, name: 'PDF Rotator Tool', desc: 'Rotate PDF pages to the correct orientation.', demo: null },

  // 📝 Text Tools (10)
  { id: 'case-conv', cat: 'text', icon: Type, name: 'Case Converter Tool', desc: 'Convert text to UPPERCASE, lowercase, Title Case, etc.', demo: 'case' },
  { id: 'word-count', cat: 'text', icon: List, name: 'Word Counter Tool', desc: 'Count words, characters, and sentences in your text.', demo: null },
  { id: 'text-rev', cat: 'text', icon: RefreshCw, name: 'Reverse Text Tool', desc: 'Reverse your text or flip it upside down.', demo: null },
  { id: 'text-tts', cat: 'text', icon: Volume2, name: 'Text to Speech Tool', desc: 'Convert written text into spoken audio.', demo: null },
  { id: 'lorem-gen', cat: 'text', icon: Type, name: 'Lorem Ipsum Tool', desc: 'Generate placeholder text for your designs.', demo: null },
  { id: 'pal-chk', cat: 'text', icon: RefreshCw, name: 'Palindrome Checker Tool', desc: 'Check if a word or phrase is a palindrome.', demo: null },
  { id: 'text-diff', cat: 'text', icon: FileCode, name: 'Text Diff Checker Tool', desc: 'Compare two texts to find differences.', demo: null },
  { id: 'morse-conv', cat: 'text', icon: Hash, name: 'Morse Code Converter Tool', desc: 'Convert text to Morse code and vice versa.', demo: null },
  { id: 'slug-gen', cat: 'text', icon: Link, name: 'Slug Generator Tool', desc: 'Convert text into SEO-friendly URL slugs.', demo: null },
  { id: 'uni-conv', cat: 'text', icon: Hash, name: 'Unicode Converter Tool', desc: 'Convert text to Unicode characters.', demo: null },

  // 🧮 Calculator Tools (6)
  { id: 'sci-calc', cat: 'calculator', icon: Calculator, name: 'Scientific Calculator Tool', desc: 'Perform complex mathematical calculations.', demo: null },
  { id: 'age-calc', cat: 'calculator', icon: Clock, name: 'Age Calculator Tool', desc: 'Calculate your exact age in years, months, and days.', demo: 'age' },
  { id: 'bmi-calc', cat: 'calculator', icon: Health, name: 'BMI Calculator Tool', desc: 'Calculate your Body Mass Index and health status.', demo: 'bmi' },
  { id: 'loan-emi', cat: 'calculator', icon: CreditCard, name: 'Loan EMI Calculator Tool', desc: 'Calculate monthly loan payments and interest.', demo: null },
  { id: 'gst-calc', cat: 'calculator', icon: Calculator, name: 'GST Calculator Tool', desc: 'Calculate GST amounts for your products.', demo: null },
  { id: 'curr-conv', cat: 'calculator', icon: RefreshCw, name: 'Currency Converter Tool', desc: 'Convert between different world currencies.', demo: null },

  // 🔐 Password & Security (4)
  { id: 'pass-gen', cat: 'password', icon: Lock, name: 'Password Generator Tool', desc: 'Create secure, random passwords instantly.', demo: 'password' },
  { id: 'pass-str', cat: 'password', icon: Shield, name: 'Strength Checker Tool', desc: 'Check how secure your password is.', demo: null },
  { id: 'md5-gen', cat: 'password', icon: Hash, name: 'MD5 Generator Tool', desc: 'Generate MD5 cryptographic hashes.', demo: null },
  { id: 'sha-gen', cat: 'password', icon: Hash, name: 'SHA Generator Tool', desc: 'Generate SHA-1, SHA-256, and SHA-512 hashes.', demo: null },

  // 📲 QR Code Tools (3)
  { id: 'qr-gen', cat: 'qr', icon: QrCode, name: 'QR Generator Tool', desc: 'Generate custom QR codes for any text or URL.', demo: 'qr' },
  { id: 'wifi-qr', cat: 'qr', icon: Wifi, name: 'WiFi QR Tool', desc: 'Generate QR codes to share WiFi credentials.', demo: null },
  { id: 'vcard-qr', cat: 'qr', icon: User, name: 'vCard QR Tool', desc: 'Generate QR codes for contact information.', demo: null },

  // 🎨 Color Tools (8)
  { id: 'color-pick', cat: 'color', icon: Palette, name: 'Color Picker Tool', desc: 'Select colors and get Hex, RGB, and HSL values.', demo: 'color' },
  { id: 'hex-rgb', cat: 'color', icon: RefreshCw, name: 'HEX to RGB Tool', desc: 'Convert HEX color codes to RGB format.', demo: null },
  { id: 'cont-chk', cat: 'color', icon: Eye, name: 'Contrast Checker Tool', desc: 'Check color contrast for accessibility.', demo: null },
  { id: 'rgb-hex', cat: 'color', icon: RefreshCw, name: 'RGB to HEX Tool', desc: 'Convert RGB color values to HEX format.', demo: null },
  { id: 'cb-sim', cat: 'color', icon: Eye, name: 'Color Blind Sim Tool', desc: 'Simulate how colors look to color-blind users.', demo: null },
  { id: 'pal-gen', cat: 'color', icon: Palette, name: 'Palette Generator Tool', desc: 'Generate beautiful color palettes.', demo: null },
  { id: 'img-col-ana', cat: 'color', icon: BarChart, name: 'Image Color Analyzer Tool', desc: 'Analyze colors present in an image.', demo: null },
  { id: 'grad-gen', cat: 'color', icon: Wand2, name: 'Gradient Generator Tool', desc: 'Create beautiful CSS gradients.', demo: null },

  // 📏 Unit Converters (10)
  { id: 'len-conv', cat: 'unit', icon: Ruler, name: 'Length Converter Tool', desc: 'Convert between meters, feet, inches, etc.', demo: null },
  { id: 'weight-conv', cat: 'unit', icon: Scale, name: 'Weight Converter Tool', desc: 'Convert between kg, lbs, ounces, etc.', demo: null },
  { id: 'temp-conv', cat: 'unit', icon: Thermometer, name: 'Temperature Converter Tool', desc: 'Convert Celsius, Fahrenheit, and Kelvin.', demo: null },
  { id: 'area-conv', cat: 'unit', icon: Maximize, name: 'Area Converter Tool', desc: 'Convert square meters, acres, etc.', demo: null },
  { id: 'vol-conv', cat: 'unit', icon: Droplets, name: 'Volume Converter Tool', desc: 'Convert liters, gallons, cubic meters, etc.', demo: null },
  { id: 'speed-conv', cat: 'unit', icon: FastForward, name: 'Speed Converter Tool', desc: 'Convert km/h, mph, knots, etc.', demo: null },
  { id: 'pres-conv', cat: 'unit', icon: Gauge, name: 'Pressure Converter Tool', desc: 'Convert Pascal, Bar, PSI, etc.', demo: null },
  { id: 'ener-conv', cat: 'unit', icon: EnergyIcon, name: 'Energy Converter Tool', desc: 'Convert Joules, Calories, etc.', demo: null },
  { id: 'pow-conv', cat: 'unit', icon: Battery, name: 'Power Converter Tool', desc: 'Convert Watts, Horsepower, etc.', demo: null },
  { id: 'data-stor', cat: 'unit', icon: StorageIcon, name: 'Data Storage Tool', desc: 'Convert between Bytes, KB, MB, GB, TB.', demo: null },

  // 👨💻 Developer Tools (10)
  { id: 'json-fmt', cat: 'dev', icon: FileJson, name: 'JSON Formatter Tool', desc: 'Prettify and validate your JSON data.', demo: null },
  { id: 'html-min', cat: 'dev', icon: Code, name: 'HTML Minifier Tool', desc: 'Minify your HTML code to reduce size.', demo: null },
  { id: 'css-min', cat: 'dev', icon: Code, name: 'CSS Minifier Tool', desc: 'Minify your CSS code to reduce size.', demo: null },
  { id: 'js-min', cat: 'dev', icon: Code, name: 'JS Minifier Tool', desc: 'Minify your JavaScript code.', demo: null },
  { id: 'b64-enc-dec', cat: 'dev', icon: Binary, name: 'Base64 Encode/Decode Tool', desc: 'Encode or decode text to Base64.', demo: null },
  { id: 'jwt-dec', cat: 'dev', icon: Shield, name: 'JWT Decoder Tool', desc: 'Decode and inspect JSON Web Tokens.', demo: null },
  { id: 'url-pars', cat: 'dev', icon: WebIcon, name: 'URL Parser Tool', desc: 'Parse and analyze URL components.', demo: null },
  { id: 'regex-test', cat: 'dev', icon: Terminal, name: 'Regex Tester Tool', desc: 'Test and debug regular expressions.', demo: null },
  { id: 'sql-fmt', cat: 'dev', icon: Database, name: 'SQL Formatter Tool', desc: 'Format your SQL queries for readability.', demo: null },
  { id: 'diff-chk', cat: 'dev', icon: FileCode, name: 'Diff Checker Tool', desc: 'Compare two files or code snippets.', demo: null },

  // 📈 SEO & Webmaster (8)
  { id: 'meta-gen', cat: 'seo', icon: SeoIcon, name: 'Meta Tag Generator Tool', desc: 'Create SEO-friendly meta tags for your website.', demo: null },
  { id: 'key-dens', cat: 'seo', icon: BarChart, name: 'Keyword Density Tool', desc: 'Check keyword density in your content.', demo: null },
  { id: 'rob-gen', cat: 'seo', icon: FileCode, name: 'Robots.txt Generator Tool', desc: 'Generate robots.txt files for search engines.', demo: null },
  { id: 'xml-site', cat: 'seo', icon: WebIcon, name: 'XML Sitemap Tool', desc: 'Generate XML sitemaps for your website.', demo: null },
  { id: 'serp-sim', cat: 'seo', icon: Layout, name: 'SERP Simulator Tool', desc: 'Preview how your site looks in search results.', demo: null },
  { id: 'back-chk', cat: 'seo', icon: Link, name: 'Backlink Checker Tool', desc: 'Check backlinks pointing to your website.', demo: null },
  { id: 'page-size', cat: 'seo', icon: Minimize, name: 'Page Size Checker Tool', desc: 'Check the total size of your web page.', demo: null },
  { id: 'http-head', cat: 'seo', icon: Info, name: 'HTTP Header Checker Tool', desc: 'Inspect HTTP headers of any URL.', demo: null },

  // ➕ Math Tools (8)
  { id: 'perc-calc', cat: 'math', icon: Percent, name: 'Percentage Calculator Tool', desc: 'Calculate percentages, increases, and decreases.', demo: null },
  { id: 'sq-root', cat: 'math', icon: Square, name: 'Square Root Tool', desc: 'Calculate the square root of a number.', demo: null },
  { id: 'exp-calc', cat: 'math', icon: Plus, name: 'Exponent Calculator Tool', desc: 'Calculate powers and exponents.', demo: null },
  { id: 'frac-calc', cat: 'math', icon: Plus, name: 'Fraction Calculator Tool', desc: 'Perform operations with fractions.', demo: null },
  { id: 'prime-chk', cat: 'math', icon: CheckCircle, name: 'Prime Checker Tool', desc: 'Check if a number is prime.', demo: null },
  { id: 'fib-calc', cat: 'math', icon: TrendingUp, name: 'Fibonacci Tool', desc: 'Generate Fibonacci sequence numbers.', demo: null },
  { id: 'gcd-lcm', cat: 'math', icon: Plus, name: 'GCD/LCM Tool', desc: 'Find greatest common divisor and least common multiple.', demo: null },
  { id: 'rand-num', cat: 'math', icon: RefreshCw, name: 'Random Number Tool', desc: 'Generate random numbers within a range.', demo: null },

  // ❤️ Health & Fitness (8)
  { id: 'cal-calc', cat: 'health', icon: Health, name: 'Calorie Calculator Tool', desc: 'Estimate your daily calorie needs.', demo: null },
  { id: 'bmi-calc-h', cat: 'health', icon: Health, name: 'BMI Calculator Tool', desc: 'Calculate your Body Mass Index.', demo: 'bmi' },
  { id: 'sleep-calc', cat: 'health', icon: Clock, name: 'Sleep Calculator Tool', desc: 'Calculate the best time to wake up.', demo: null },
  { id: 'body-fat', cat: 'health', icon: Health, name: 'Body Fat Tool', desc: 'Estimate your body fat percentage.', demo: null },
  { id: 'ideal-weight', cat: 'health', icon: Health, name: 'Ideal Weight Tool', desc: 'Calculate your ideal body weight.', demo: null },
  { id: 'bmr-calc', cat: 'health', icon: Health, name: 'BMR Calculator Tool', desc: 'Calculate your Basal Metabolic Rate.', demo: null },
  { id: 'preg-calc', cat: 'health', icon: Heart, name: 'Pregnancy Tool', desc: 'Calculate your due date and pregnancy progress.', demo: null },
  { id: 'bac-calc', cat: 'health', icon: Health, name: 'BAC Calculator Tool', desc: 'Estimate Blood Alcohol Content.', demo: null },

  // 🎵 File Converter Tools (8)
  { id: 'mp3-conv', cat: 'file', icon: FileAudio, name: 'MP3 Converter Tool', desc: 'Convert audio files to MP3 format.', demo: null },
  { id: 'mp4-conv', cat: 'file', icon: FileVideo, name: 'MP4 Converter Tool', desc: 'Convert video files to MP4 format.', demo: null },
  { id: 'zip-ext', cat: 'file', icon: FileArchive, name: 'ZIP Extractor Tool', desc: 'Extract files from ZIP archives online.', demo: null },
  { id: 'epub-pdf', cat: 'file', icon: Book, name: 'EPUB to PDF Tool', desc: 'Convert EPUB ebooks to PDF format.', demo: null },
  { id: 'mobi-pdf', cat: 'file', icon: Book, name: 'MOBI to PDF Tool', desc: 'Convert MOBI ebooks to PDF format.', demo: null },
  { id: 'pdf-epub', cat: 'file', icon: Book, name: 'PDF to EPUB Tool', desc: 'Convert PDF documents to EPUB format.', demo: null },
  { id: 'aud-conv', cat: 'file', icon: Volume2, name: 'Audio Converter Tool', desc: 'Convert between various audio formats.', demo: null },
  { id: 'vid-gif', cat: 'file', icon: ImageIcon, name: 'Video to GIF Tool', desc: 'Convert short video clips into animated GIFs.', demo: null },

  // 📱 Social Media Tools (3)
  { id: 'yt-thumb', cat: 'social', icon: Youtube, name: 'YT Thumbnail Tool', desc: 'Download thumbnails from any YouTube video.', demo: null },
  { id: 'ig-vid', cat: 'social', icon: Instagram, name: 'IG Video Download Tool', desc: 'Download videos from Instagram posts.', demo: null },
  { id: 'hash-gen-s', cat: 'social', icon: Hashtag, name: 'Hashtag Generator Tool', desc: 'Generate trending hashtags for social media.', demo: null },
];

export const allTools = toolsData;
