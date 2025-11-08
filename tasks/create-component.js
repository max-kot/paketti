import fs from "fs";
import path from "path";

const toKebabCase = (str) => {
	return Array.from(str).reduce((acc, s) => {
		acc += `${s === s.toLowerCase() ? '' : '-'}${s.toLowerCase()}`;
		return acc;
	}, '').slice(1);
}

// аргументы: путь и имя компонента
const __dirname = "src";
const targetDir = process.argv[2] || "components"; // например: src/components
const name = process.argv[3] || "Comp";      // например: Button

if (!targetDir || !name) {
	console.error("❌ Использование: node create-component.js <папка> <имя>");
	process.exit(1);
}

// итоговый путь до компонента
const dir = path.join(__dirname, targetDir, name);

// создаём папки рекурсивно
fs.mkdirSync(dir, { recursive: true });

// шаблон JSX function ${name}() 
const jsx = `import "./${toKebabCase(name)}.scss";

export default () => {
\treturn (
\t\t<>
\t\t</>
\t)
}
`;

// шаблон SCSS
const scss = `@use "@/scss/tools" as *;`;

fs.writeFileSync(path.join(dir, `${name}.jsx`), jsx);
fs.writeFileSync(path.join(dir, `${toKebabCase(name)}.scss`), scss);

console.log(`✅ Компонент ${name} создан в ${dir}`);
