//import fs from "fs";
//import path from "path";

//const CSS_FILE = "./docs/assets/bundle.css";
//const IMAGES_DIR = "./docs/assets/images";
//const OUTPUT_FILE = "./dist/assets/bundle.css";

//let css = fs.readFileSync(CSS_FILE, "utf8");

//// Ищем background(-image) с url(...)
//const regex = /(background(?:-image)?\s*:\s*)([^;]+);/g;

//css = css.replace(regex, (match, prefix, value) => {
//	if (!/url\(/.test(value)) return match;

//	const layers = value.split(/\s*,\s*/);

//	const newLayers = layers.map(layer => {
//		const urlRegex = /url\(["']?([^"')]+)["']?\)/g;
//		let newLayer = layer;
//		let urlMatch;

//		while ((urlMatch = urlRegex.exec(layer)) !== null) {
//			const urlPath = urlMatch[1];
//			const filename = path.basename(urlPath);
//			const basename = filename.split(".")[0];
//			const ext = path.extname(filename);

//			// Ищем похожие файлы по имени и расширению
//			const files = fs.readdirSync(IMAGES_DIR)
//				.filter(f => f.startsWith(basename + "-") && f.endsWith(ext));

//			if (!files.length) {
//				// Если похожих файлов нет, оставляем исходный url
//				continue;
//			}

//			const sources = files.map(f => {
//				const sizeMatch = f.match(/-(\d+)x\d+/);
//				const width = sizeMatch ? sizeMatch[1] : null;
//				return width ? { file: f, width } : null;
//			}).filter(Boolean);

//			if (!sources.length) {
//				// Если нет файлов с указанием ширины, оставляем исходный url
//				continue;
//			}

//			sources.sort((a, b) => parseInt(a.width) - parseInt(b.width));

//			// Проверяем наличие форматов
//			const formats = ["avif", "webp", ext.slice(1)]; // avif, webp, оригинал
//			const imageSetLines = [];

//			for (const s of sources) {
//				for (const fmt of formats) {
//					const fileNameWithFmt = s.file.replace(ext, `.${fmt}`);
//					const filePath = path.join(IMAGES_DIR, fileNameWithFmt);
//					if (fs.existsSync(filePath)) {
//						imageSetLines.push(`    url("/assets/images/${fileNameWithFmt}") ${s.width}w`);
//					}
//				}
//			}

//			if (!imageSetLines.length) {
//				// Если подходящих файлов нет, оставляем исходный url
//				continue;
//			}

//			// Заменяем url на image-set
//			const imageSet = `image-set(\n${imageSetLines.join(",\n")}\n  )`;
//			newLayer = newLayer.replace(urlMatch[0], imageSet);
//		}

//		return newLayer;
//	});

//	return `${prefix}${newLayers.join(", ")};`;
//});

//fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
//fs.writeFileSync(OUTPUT_FILE, css, "utf8");

//console.log("✅ CSS обновлён:", OUTPUT_FILE);

import fs from "fs";
import path from "path";

const CSS_FILE = "./docs/assets/bundle.css";
const IMAGES_DIR = "./docs/assets/images";
const OUTPUT_FILE = "./dist/assets/bundle.css";

let css = fs.readFileSync(CSS_FILE, "utf8");

// Ищем background(-image) с url(...)
const regex = /(background(?:-image)?\s*:\s*)([^;]+);/g;

css = css.replace(regex, (match, prefix, value) => {
	if (!/url\(/.test(value)) return match;

	const layers = value.split(/\s*,\s*/);

	const newLayers = layers.map(layer => {
		const urlRegex = /url\(["']?([^"')]+)["']?\)/g;
		let newLayer = layer;
		let urlMatch;

		while ((urlMatch = urlRegex.exec(layer)) !== null) {
			const urlPath = urlMatch[1];
			const filename = path.basename(urlPath);
			const basename = filename.split(".")[0];
			const ext = path.extname(filename);

			// Ищем похожие файлы по имени и расширению
			const files = fs.readdirSync(IMAGES_DIR)
				.filter(f => f.startsWith(basename + "-") && f.endsWith(ext));

			if (!files.length) continue;

			const sources = files.map(f => {
				const sizeMatch = f.match(/-(\d+)x\d+/);
				const width = sizeMatch ? sizeMatch[1] : null;
				return width ? { file: f, width } : null;
			}).filter(Boolean);

			if (!sources.length) continue;

			sources.sort((a, b) => parseInt(a.width) - parseInt(b.width));

			const formats = ["avif", "webp", ext.slice(1)]; // avif, webp, оригинал
			const imageSetLines = [];

			for (const s of sources) {
				for (const fmt of formats) {
					const fileNameWithFmt = s.file.replace(ext, `.${fmt}`);
					const filePath = path.join(IMAGES_DIR, fileNameWithFmt);
					if (fs.existsSync(filePath)) {
						imageSetLines.push(`    url("/assets/images/${fileNameWithFmt}") ${s.width}w`);
					}
				}
			}

			// Добавляем оригинальный url как fallback
			imageSetLines.push(`    url("${urlPath}") 1x`);

			if (!imageSetLines.length) continue;

			const imageSet = `image-set(\n${imageSetLines.join(",\n")}\n  )`;
			newLayer = newLayer.replace(urlMatch[0], imageSet);
		}

		return newLayer;
	});

	return `${prefix}${newLayers.join(", ")};`;
});

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, css, "utf8");

console.log("✅ CSS обновлён:", OUTPUT_FILE);
