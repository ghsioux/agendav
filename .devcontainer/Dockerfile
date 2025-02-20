# Use an official PHP image with Node.js installed (for npm build tasks)
FROM mcr.microsoft.com/devcontainers/php:8.0

RUN apt-get update && apt-get install -y \
    libzip-dev libcurl4-openssl-dev libxml2-dev \
    && docker-php-ext-install \
    mysqli \
    pdo \
    pdo_mysql \
    mbstring \
    curl \
    ctype \
    tokenizer \
    xml \
    xmlreader \
    xmlwriter \
    && docker-php-ext-enable \
    mysqli \
    pdo \
    pdo_mysql