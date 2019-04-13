
#### user setup for migration in mysql

CREATE USER 'rizwan'@'localhost' IDENTIFIED BY 'rizwan';

grant all privileges on masjid.* to 'rizwan'@'localhost';
