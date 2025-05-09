# Documentación de la API REST

## Descripción
Esta es una API REST diseñada para gestionar productos. Utiliza Node.js con Express como framework principal y Sequelize como ORM para la base de datos.

## Estructura de Carpetas

La estructura del proyecto es la siguiente:

```
Dokerfile
package.json
README.MD
server.js
sonar.project.properties
src/
    controllers/
        products.controller.js
    db/
        sequelize_conn.js
    models/
        product.model.js
    routes/
        v1/
            index.js
            products.route.js
    services/
        products.service.js
tests/
    products.test.js
```

### Descripción de Carpetas y Archivos

- **Dokerfile**: Archivo de configuración para Docker, utilizado para contenerizar la aplicación.
- **package.json**: Archivo de configuración del proyecto que incluye dependencias y scripts.
- **README.MD**: Documentación del proyecto.
- **server.js**: Punto de entrada principal de la aplicación.
- **sonar.project.properties**: Archivo de configuración para SonarQube, utilizado para análisis de calidad del código.

#### Carpeta `src`
- **controllers/**: Contiene los controladores de la aplicación.
  - `products.controller.js`: Controlador para manejar la lógica de los endpoints relacionados con productos.
- **db/**: Contiene la configuración de la conexión a la base de datos.
  - `sequelize_conn.js`: Configuración de Sequelize para conectarse a la base de datos.
- **models/**: Contiene los modelos de datos.
  - `product.model.js`: Modelo de datos para los productos.
- **routes/**: Contiene las rutas de la API.
  - `v1/`: Versión 1 de las rutas.
    - `index.js`: Archivo de entrada para las rutas de la versión 1.
    - `products.route.js`: Define las rutas relacionadas con productos.
- **services/**: Contiene la lógica de negocio.
  - `products.service.js`: Servicio para manejar la lógica de negocio de productos.

#### Carpeta `tests`
- **products.test.js**: Contiene pruebas unitarias para los endpoints relacionados con productos.

## Instalación

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Configura las variables de entorno necesarias.
4. Inicia la aplicación con `npm start`.

## Uso

La API expone endpoints para gestionar productos. Puedes consultar la documentación de los endpoints en el archivo `products.route.js` o utilizando herramientas como Postman o Swagger.

## Contribuciones

Si deseas contribuir, por favor abre un issue o envía un pull request. Asegúrate de seguir las guías de estilo y de incluir pruebas para tus cambios.

