<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

# <p align="center">CLARAMENTIS TEST APPLICATION</p>

# Getting started

This is a single page application designed to demonstrate basic coding principles.  **LARAVEL**, a php framework & **Reactjs**, a javascript library are the technologies used
> **ProTip:**  Inertiajs adaptor is used

## Requirements
- php >= 7.4
- PHP extension **php_xml** enabled
- PHP extension **php_zip** enabled
- node >= 16


## Installation

Clone the repository

    git clone git@github.com:nyagoalex/claromentis.git

Switch to the repo folder

    cd claromentis

Install all the dependencies using composer

    composer install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate a new application key

    php artisan key:generate

Run the database migrations & seeders (**Set the database connection in .env before migrating**)

    php artisan migrate --seed

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000

**TL;DR command list**

    git clone git@github.com:nyagoalex/claromentis.git
    cd claromentis
    composer install
    cp .env.example .env
    php artisan key:generate

**Make sure you set the correct database connection information before running the migrations** [Environment variables](#environment-variables)

    php artisan migrate --seed
    php artisan serve

The web app can be accessed at [http://localhost:8000](http://localhost:8000)

----------
## Testing Application
Application follows test driven design, run the following command to test

    composer test

Thank you for considering my work
