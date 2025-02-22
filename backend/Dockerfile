# Use official PHP image with necessary extensions
FROM php:8.2-fpm

# Setting working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy application files
COPY . .

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions
RUN chmod -R 777 storage bootstrap/cache

# Expose port
EXPOSE 8000

# Running Laravel server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
