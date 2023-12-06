docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ivayyva-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t ivayyva-java/app ../../..
