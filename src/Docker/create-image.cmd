docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ivayyva/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t ivayyva/app ../..
