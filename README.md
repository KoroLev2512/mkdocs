# MkDocs Custom Theme with CI/CD

Проект с кастомной темой на HTML/CSS/JS и автоматизированными пайплайнами для валидации, сборки и деплоя на GitHub Pages.

## 🚀 Быстрый старт

### Требования

- **Node.js** версии 16 или выше
- **Python** версии 3.8 или выше
- **npm** версии 8 или выше

### Установка и запуск

1. **Клонируйте репозиторий** (если еще не сделано):
   ```bash
   git clone <your-repo-url>
   cd mkdocs
   ```

2. **Установите Node.js зависимости**:
   ```bash
   npm install
   ```

3. **Установите Python зависимости**:
   ```bash
   python -m pip install --upgrade pip
   pip install mkdocs mkdocs-material
   ```

4. **Запустите локальный сервер разработки**:
   ```bash
   mkdocs serve
   ```

5. **Откройте в браузере**: http://127.0.0.1:8000

Сайт будет автоматически перезагружаться при изменении файлов.

### Альтернативные команды

**Проверка кода (валидация и линтинг)**:
```bash
npm run lint          # Все проверки
npm run lint:html     # Только HTML
npm run lint:css      # Только CSS
npm run lint:js       # Только JavaScript
```

**Улучшение типографики**:
```bash
npm run typograf      # Обработка Markdown и HTML файлов
```

**Сборка фронтенда**:
```bash
npm run build:css     # Сборка CSS через PostCSS
npm run minify:js     # Минификация JavaScript
npm run build:frontend # Полная сборка фронтенда
```

**Сборка MkDocs сайта**:
```bash
mkdocs build          # Создаст папку site/ со статическим сайтом
```

**Полная сборка (как в CI/CD)**:
```bash
npm run typograf      # Улучшение типографики
npm run build:frontend # Сборка фронтенда
mkdocs build          # Сборка MkDocs сайта
```

## Структура проекта

```
mkdocs/
├── .github/
│   └── workflows/
│       ├── lint.yml       # Валидация HTML, CSS, JS
│       ├── build.yml      # Сборка фронтенда и MkDocs
│       └── deploy.yml     # Деплой на GitHub Pages
├── docs/
│   ├── assets/
│   │   ├── styles.css     # Исходный CSS
│   │   └── script.js      # Исходный JS
│   ├── index.html         # Главная HTML страница
│   └── index.md           # Markdown документация
├── .htmlvalidate.json     # Настройки валидации HTML
├── .stylelintrc.json      # Настройки линтинга CSS
├── .eslintrc.json         # Настройки линтинга JS
├── postcss.config.js      # Конфигурация PostCSS
├── package.json           # Node.js зависимости и скрипты
└── mkdocs.yml             # Конфигурация MkDocs
```

## GitHub Actions Workflows

### 1. Lint Workflow (`.github/workflows/lint.yml`)

Выполняется при каждом PR и push в main/master:
- **lint-html**: Валидация HTML файлов через htmlvalidate
- **lint-css**: Линтинг CSS через stylelint
- **lint-js**: Линтинг JavaScript через ESLint

### 2. Build Workflow (`.github/workflows/build.yml`)

Выполняется при push и PR:
- **build-frontend**: 
  - Типографика контента через Typograf
  - Сборка CSS через PostCSS (autoprefixer, cssnano)
  - Минификация JavaScript через Terser
  - Минификация HTML файлов
- **build-mkdocs**: 
  - Интеграция минифицированных ассетов
  - Сборка MkDocs сайта

### 3. Deploy Workflow (`.github/workflows/deploy.yml`)

Выполняется при push в main/master:
- Валидация HTML
- Типографика контента через Typograf
- Сборка CSS через PostCSS
- Минификация JavaScript
- Замена ассетов на минифицированные версии
- Сборка MkDocs сайта
- Деплой на GitHub Pages

## Локальная разработка

### Установка зависимостей

```bash
npm install
```

### Валидация и линтинг

```bash
# Валидация HTML
npm run lint:html

# Линтинг CSS
npm run lint:css

# Линтинг JavaScript
npm run lint:js

# Все проверки
npm run lint
```

### Сборка фронтенда

```bash
# Сборка CSS через PostCSS
npm run build:css

# Минификация JavaScript
npm run minify:js

# Минификация HTML
npm run minify:html

# Полная сборка фронтенда
npm run build:frontend
```

### Разработка MkDocs

```bash
# Локальный сервер разработки
mkdocs serve

# Сборка сайта
mkdocs build
```

## Настройка GitHub Pages

1. Перейдите в Settings → Pages вашего репозитория
2. В разделе "Source" выберите "GitHub Actions"
3. Workflow `deploy.yml` автоматически настроит деплой при каждом push в main/master

### ⚠️ Важно: Обновите URL в метаданных

Перед деплоем обязательно обновите следующие файлы с вашим реальным URL:

1. **`docs/index.html`** — обновите мета-теги:
   - `og:url` — замените `https://yourusername.github.io/mkdocs/` на ваш реальный URL
   - `twitter:url` — замените на ваш реальный URL
   - `og:image` и `twitter:image` — укажите путь к изображению для соцсетей

2. **`mkdocs.yml`** — обновите:
   - `site_url` — замените `https://yourusername.github.io/mkdocs/` на ваш реальный URL

## Используемые инструменты

- **HTML Validation**: [htmlvalidate](https://github.com/html-validate/html-validate)
- **CSS Linting**: [stylelint](https://stylelint.io/)
- **JavaScript Linting**: [ESLint](https://eslint.org/)
- **CSS Processing**: [PostCSS](https://postcss.org/) с плагинами:
  - [autoprefixer](https://github.com/postcss/autoprefixer)
  - [cssnano](https://cssnano.co/)
- **Minification**:
  - HTML: [html-minifier-terser](https://github.com/terser/html-minifier-terser)
  - JS: [Terser](https://terser.org/)
- **Documentation**: [MkDocs](https://www.mkdocs.org/) с темой Material
- **Типографика**: [Typograf](https://github.com/typograf/typograf)

## Источники

- Структура пайплайнов основана на [nzhukov/deploy-ghactions](https://github.com/nzhukov/deploy-ghactions)

