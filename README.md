# Post Management Backend
## Requisitos previos
- Node.js v14+ y npm instalados.
- PostgreSQL instalado
## Instalación
git clone https://github.com/hansNeckel/pruebaTCIT-backend.git
- cd pruebaTCIT-backend
- npm install
# Crear BD en PostgreSQL con PGAdmin 4
- Expandir servers
- Segundo click en "Databases"
- Create > Database
- Nombre "posts_app"
# Crear tabla y sus campos correspondientes
- Ejecutar el siguiente comando en:
- Segundo click en la nueva BD posts_app > Query tool
- Ejecutar el siguiente comando:
- "CREATE TABLE "Posts" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);"
- SACARLE LAS COMAS DOBLES!
- Darle click al boton de play y con eso se ejecutara correctamente
# Parte final!
- Es importante ver el archivo config.js en esta parte en especifico:
- {
  "development": {
    "username": "postgres",
    "password": "12345",
    "database": "posts_app",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }, "
- es importante poner el username y password que hayan configurado previamente y la database que creamos
- Una vez teniendo todo eso ejecutar node index.js
- Y correra!
