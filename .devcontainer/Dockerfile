FROM mcr.microsoft.com/devcontainers/base:debian

USER root

ENV PHP_VERSION=7.2

RUN apt update && \
    apt install -y apache2 mariadb-server apt-transport-https lsb-release ca-certificates wget && \
    wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg && \
    echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list && \
    apt update && \
    apt install -y php$PHP_VERSION php$PHP_VERSION-gd php$PHP_VERSION-mbstring php$PHP_VERSION-xml php$PHP_VERSION-cli php$PHP_VERSION-json php$PHP_VERSION php$PHP_VERSION-mysql libapache2-mod-php$PHP_VERSION php$PHP_VERSION-cli php$PHP_VERSION-fpm php$PHP_VERSION-mbstring php$PHP_VERSION-curl php$PHP_VERSION-ctype php$PHP_VERSION-mcrypt php$PHP_VERSION-tokenizer php$PHP_VERSION-xml php$PHP_VERSION-xmlreader php$PHP_VERSION-xmlwriter && \
    apt clean && \
    rm -rf /var/lib/apt/lists/*