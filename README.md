# mk-php
Tugas Matrikulasi PHP &amp; MySQL

    Hendy Irawan
    23214344
    TMDG 9 STEI ITB

## Requirements

Pastikan Composer terinstall:

    curl -sS https://getcomposer.org/installer | php
    
Lalu install vendors:

    php ~/composer.phar install

## Menjalankan

    app/console server:run

Lalu buka browser di http://localhost:8000/

## Install Bower Components

Edit `src/AppBundle/Resources/config/bower/bower.json`, lalu gunakan:

    app/console sp:bower:install

## Install Assets

Bila ada perubahan assets, lakukan `app/console assets:install web --symlink` :

    ceefour@amanah:~/git/mk-php > app/console assets:install web --symlink

    Trying to install assets as symbolic links.
    Installing assets for Symfony\Bundle\FrameworkBundle into web/bundles/framework
    The assets were installed using symbolic links.
    Installing assets for AppBundle into web/bundles/app
    The assets were installed using symbolic links.
    Installing assets for Sensio\Bundle\DistributionBundle into web/bundles/sensiodistribution
    The assets were installed using symbolic links.
