cat tables.sql > aux.sql
cat inserts.sql >> aux.sql

mysql -u root -pLinux123... < aux.sql


