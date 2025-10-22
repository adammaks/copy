#!/bin/bash

# Создаем папки для ресурсов
mkdir -p ysaria_site/{css,js,images,fonts}

# Функция для скачивания файла
download_file() {
    local url="$1"
    local filename=$(basename "$url")
    local extension="${filename##*.}"
    
    # Определяем папку назначения
    case "$extension" in
        css) folder="css" ;;
        js) folder="js" ;;
        png|jpg|jpeg|gif|svg) folder="images" ;;
        woff|woff2|ttf|eot) folder="fonts" ;;
        *) folder="." ;;
    esac
    
    echo "Скачиваем: $url -> ysaria_site/$folder/$filename"
    wget --user-agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" \
         --timeout=30 \
         --tries=3 \
         -O "ysaria_site/$folder/$filename" \
         "$url" || echo "Ошибка скачивания: $url"
}

# Скачиваем все ресурсы
while IFS= read -r url; do
    if [ -n "$url" ]; then
        download_file "$url"
    fi
done < resources.txt

echo "Скачивание завершено!"