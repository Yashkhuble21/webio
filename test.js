import path from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const abspath = path.join(__dirname,'page','App.css');
console.log(abspath)