# Contact App

## Descripción

Contact App es una aplicación web para gestionar contactos, desarrollada con un backend en Django y un frontend en Vue.js. La aplicación permite a los usuarios agregar, editar, ver y eliminar contactos.

## Tecnologías

- **Frontend**: Vue.js
- **Backend**: Django
- **Base de Datos**: SQLite (por defecto en Django, puede ser cambiada a otro sistema de bases de datos)
- **API**: RESTful

## Estructura del Proyecto

El proyecto está dividido en dos ramas principales:

1. **Frontend**: Contiene la aplicación Vue.js.
2. **Backend**: Contiene el backend Django.

## Configuración del Backend (Django)

1. **Clonar el repositorio del backend**:

    ```bash
    git clone https://github.com/rolycore/contacts_backend
    cd contacts_backend
    ```

2. **Crear un entorno virtual**:

    ```bash
    python -m venv env
    source env/bin/activate  # En Windows: env\Scripts\activate
    ```

3. **Instalar las dependencias**:

    ```bash
    pip install -r requirements.txt
    ```

4. **Aplicar las migraciones**:

    ```bash
    python manage.py migrate
    ```

5. **Crear un superusuario** (opcional, para acceder al panel de administración de Django):

    ```bash
    python manage.py createsuperuser
    ```

6. **Iniciar el servidor**:

    ```bash
    python manage.py runserver
    ```

   El servidor estará disponible en `http://localhost:8000`.

## Configuración del Frontend (Vue.js)

1. **Clonar el repositorio del frontend**:

    ```bash
    git clone https://github.com/rolycore/contacts-app
    cd contacts-app
    ```

2. **Instalar las dependencias**:

    ```bash
    npm install
    ```

3. **Iniciar el servidor de desarrollo**:

    ```bash
    npm run serve
    ```

   La aplicación estará disponible en `http://localhost:8080`.

## Configuración de la API

El frontend se comunica con el backend a través de una API RESTful. Asegúrate de que las URLs de la API en el código del frontend apunten a la dirección correcta del backend.

### Archivos de Configuración

- **Frontend**: Revisa las configuraciones en `src/api/` para las URLs de la API.
- **Backend**: Configura los endpoints y modelos en `contact_app/`.

## Estructura de Archivos

- **Frontend**:
  - `src/components/`: Componentes de Vue.js.
  - `src/views/`: Vistas principales de la aplicación.
  - `src/api/`: Configuración para llamadas a la API.
  - `src/router/index.js`: Configuración de las rutas.

- **Backend**:
  - `contact_app/`: Aplicación principal de Django.
  - `contact_app/models.py`: Modelos para los contactos.
  - `contact_app/views.py`: Vistas para la API.
  - `contact_app/serializers.py`: Serializadores para la API.
  - `contact_app/urls.py`: URLs de la API.

## Contribución

Para contribuir al proyecto:

1. **Haz un fork** del repositorio.
2. **Crea una nueva rama** para tu característica o corrección.
3. **Realiza tus cambios** y realiza un commit.
4. **Envía un pull request** con una descripción clara de tus cambios.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para cualquier consulta o problema, puedes contactarme a través de [shalomsolutiontech@gmail.com](mailto:shalomsolutiontech@gmail.com).

