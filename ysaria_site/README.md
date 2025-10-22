# Копия сайта ysaria.ru

Это полная локальная копия сайта https://ysaria.ru/

## Структура файлов

```
ysaria_site/
├── index.html          # Главная страница
├── css/               # CSS файлы
├── js/                # JavaScript файлы
├── images/            # Изображения и иконки
├── fonts/             # Шрифты (если есть)
├── start_server.py    # Скрипт для запуска локального сервера
└── README.md          # Этот файл
```

## Как запустить

### Вариант 1: Python HTTP сервер
```bash
cd ysaria_site
python3 start_server.py
```
Затем откройте браузер и перейдите по адресу: http://localhost:8000

### Вариант 2: Простой HTTP сервер
```bash
cd ysaria_site
python3 -m http.server 8000
```

### Вариант 3: Node.js сервер (если установлен)
```bash
cd ysaria_site
npx http-server -p 8000
```

## Особенности

- Все внешние ресурсы (CSS, JS, изображения) скачаны локально
- Ссылки обновлены для работы в офлайн режиме
- Сохранена оригинальная структура и функциональность сайта
- Сайт создан на платформе Tilda

## Автор оригинала

Юлия Саратник - Графический дизайнер
- Instagram: @ysariaaa
- Telegram: @yusaratnik
- VK: ysaria
- Behance: 974e62ab

## Дата копирования

22 октября 2025 года