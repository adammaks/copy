#!/usr/bin/env python3
import re
import os

def update_html_links():
    # Читаем исходный HTML файл
    with open('index_uncompressed.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Создаем словарь для замены ссылок
    replacements = {
        # CSS файлы
        'https://static.tildacdn.com/css/tilda-grid-3.0.min.css': 'css/tilda-grid-3.0.min.css',
        'https://static.tildacdn.com/ws/project13647243/tilda-blocks-page70748199.min.css': 'css/tilda-blocks-page70748199.min.css',
        'https://static.tildacdn.com/css/tilda-animation-2.0.min.css': 'css/tilda-animation-2.0.min.css',
        'https://static.tildacdn.com/css/tilda-popup-1.1.min.css': 'css/tilda-popup-1.1.min.css',
        
        # JS файлы
        'https://neo.tildacdn.com/js/tilda-fallback-1.0.min.js': 'js/tilda-fallback-1.0.min.js',
        'https://static.tildacdn.com/js/jquery-1.10.2.min.js': 'js/jquery-1.10.2.min.js',
        'https://static.tildacdn.com/js/tilda-scripts-3.0.min.js': 'js/tilda-scripts-3.0.min.js',
        'https://static.tildacdn.com/ws/project13647243/tilda-blocks-page70748199.min.js': 'js/tilda-blocks-page70748199.min.js',
        'https://static.tildacdn.com/js/tilda-lazyload-1.0.min.js': 'js/tilda-lazyload-1.0.min.js',
        'https://static.tildacdn.com/js/tilda-animation-2.0.min.js': 'js/tilda-animation-2.0.min.js',
        'https://static.tildacdn.com/js/tilda-zero-1.1.min.js': 'js/tilda-zero-1.1.min.js',
        'https://static.tildacdn.com/js/tilda-faq-1.0.min.js': 'js/tilda-faq-1.0.min.js',
        'https://static.tildacdn.com/js/tilda-popup-1.0.min.js': 'js/tilda-popup-1.0.min.js',
        'https://static.tildacdn.com/js/tilda-menu-1.0.min.js': 'js/tilda-menu-1.0.min.js',
        'https://static.tildacdn.com/js/tilda-animation-sbs-1.0.min.js': 'js/tilda-animation-sbs-1.0.min.js',
        'https://static.tildacdn.com/js/tilda-zero-scale-1.0.min.js': 'js/tilda-zero-scale-1.0.min.js',
        'https://static.tildacdn.com/js/tilda-zero-fixed-1.0.min.js': 'js/tilda-zero-fixed-1.0.min.js',
        'https://static.tildacdn.com/js/tilda-skiplink-1.0.min.js': 'js/tilda-skiplink-1.0.min.js',
        'https://static.tildacdn.com/js/tilda-events-1.0.min.js': 'js/tilda-events-1.0.min.js',
        'https://static.tildacdn.com/js/tilda-polyfill-1.0.min.js': 'js/tilda-polyfill-1.0.min.js',
        
        # CDN файлы
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js': 'js/gsap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js': 'js/ScrollTrigger.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js': 'js/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js': 'js/SmoothScroll.min.js',
    }
    
    # Заменяем ссылки
    for old_url, new_url in replacements.items():
        content = content.replace(old_url, new_url)
    
    # Заменяем изображения
    image_pattern = r'https://static\.tildacdn\.com/tild[^"]*\.(jpg|jpeg|png|gif|svg)'
    def replace_image(match):
        url = match.group(0)
        filename = os.path.basename(url)
        return f'images/{filename}'
    
    content = re.sub(image_pattern, replace_image, content)
    
    # Заменяем favicon
    content = content.replace('https://static.tildacdn.com/tild6161-3665-4232-b739-393062633533/faviconico_2.png', 'images/faviconico_2.png')
    content = content.replace('https://static.tildacdn.com/tild3537-3638-4163-b265-366466323230/faviconico.png', 'images/faviconico.png')
    content = content.replace('https://static.tildacdn.com/tild3439-3330-4630-b638-643037616263/_4.png', 'images/_4.png')
    
    # Заменяем шрифты
    font_pattern = r'https://fonts\.googleapis\.com/css2\?[^"]*'
    content = re.sub(font_pattern, 'https://fonts.googleapis.com/css2?family=Prosto+One:wght@400&family=Inter+Tight:wght@300;400;500;600;700', content)
    
    # Сохраняем обновленный HTML
    with open('ysaria_site/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("HTML файл обновлен с локальными ссылками!")

if __name__ == "__main__":
    update_html_links()