# MkDocs Custom Theme

Современная кастомная тема для MkDocs на чистом HTML, CSS и JavaScript. Адаптивный дизайн, быстрая загрузка, типографика и минификация без внешних зависимостей.

## Основные возможности

### 🎨 Кастомная тема

- **Адаптивный дизайн**: Полностью адаптивный под все устройства
- **Тёмная тема**: Современный тёмный интерфейс с градиентами
- **Чистый код**: HTML, CSS и JavaScript без внешних зависимостей
- **Быстрая загрузка**: Оптимизация и минификация всех ресурсов

### 🛠 Технологии

- **HTML**: Семантическая разметка
- **CSS**: Современный CSS с Grid и Flexbox
- **JavaScript**: Нативный JavaScript без библиотек
- **PostCSS**: Автоматическая обработка CSS (autoprefixer, cssnano)
- **Typograf**: Автоматическая типографика контента
- **CI/CD**: Автоматическая сборка и деплой на GitHub Pages

### 📦 Особенности

#### Custom Header и Footer

Кастомные header и footer с современным дизайном:

- **Header**: Sticky-позиционирование с размытием, адаптивная навигация
- **Footer**: Многосекционная структура с навигацией, ресурсами и контактами
- **Responsive**: Полная адаптивность для мобильных устройств

#### Валидация и линтинг

Автоматическая проверка качества кода:

- **HTML**: Валидация через htmlvalidate
- **CSS**: Линтинг через stylelint
- **JavaScript**: Линтинг через ESLint

#### Оптимизация

Полная оптимизация для production:

- **CSS**: PostCSS с autoprefixer и cssnano
- **JavaScript**: Минификация через Terser
- **HTML**: Минификация через html-minifier-terser
- **Типографика**: Автоматическая обработка через Typograf

## Быстрый старт

### Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/KoroLev2512/mkdocs.git
   cd mkdocs
   ```

2. Установите зависимости:
   ```bash
   # Node.js зависимости
   npm install
   
   # Python зависимости
   pip install -r requirements.txt
   ```

3. Запустите локальный сервер:
   ```bash
   mkdocs serve
   ```

Откройте в браузере: http://127.0.0.1:8000

### Команды разработки

```bash
# Валидация и линтинг
npm run lint          # Все проверки
npm run lint:html     # HTML валидация
npm run lint:css      # CSS линтинг
npm run lint:js       # JavaScript линтинг

# Улучшение типографики
npm run typograf

# Сборка фронтенда
npm run build:css     # PostCSS
npm run minify:js     # Terser
npm run build:frontend # Полная сборка

# Сборка MkDocs сайта
mkdocs build
```

## Деплой на GitHub Pages

Проект автоматически деплоится на GitHub Pages при каждом push в main:

1. Настройте GitHub Pages: Settings → Pages → Source: "GitHub Actions"
2. Сделайте push в main
3. Workflow автоматически соберёт и задеплоит сайт

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
│   │   ├── styles.css     # Кастомные стили
│   │   └── script.js      # Кастомный JavaScript
│   └── index.md           # Главная страница документации
├── tools/
│   └── typograf.js        # Скрипт типографики
├── .github/workflows/     # GitHub Actions workflows
├── mkdocs.yml             # Конфигурация MkDocs
├── package.json           # Node.js зависимости
├── requirements.txt       # Python зависимости
└── README.md              # Документация проекта
```

## Инструменты

- **HTML Validation**: [htmlvalidate](https://github.com/html-validate/html-validate)
- **CSS Linting**: [stylelint](https://stylelint.io/)
- **JavaScript Linting**: [ESLint](https://eslint.org/)
- **PostCSS**: [PostCSS](https://postcss.org/) с [autoprefixer](https://github.com/postcss/autoprefixer) и [cssnano](https://cssnano.co/)
- **Minification**: [html-minifier-terser](https://github.com/terser/html-minifier-terser), [Terser](https://terser.org/)
- **Типографика**: [Typograf](https://github.com/typograf/typograf)
- **Documentation**: [MkDocs](https://www.mkdocs.org/) с темой [Material](https://squidfunk.github.io/mkdocs-material/)

## Лицензия

MIT License

## Автор

MkDocs Custom Theme Team

---

> Дизайн вдохновлен макетом: [Figma Projects](https://www.figma.com/design/fq2JhlHlCT1obHrqgijbi8/Projects?node-id=4567-27349&m=dev)
