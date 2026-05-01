# 01. Configuración inicial de Angular

*Carolina Fortmann*

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.9.

## 1.- Pasos importantes para la configuración:

Antes de comenzar, es necesario contar con las siguientes herramientas instaladas en el sistema:

- **Node.js:** Motor de ejecución para JavaScript. Fue descargado en: [nodejs.org](https://nodejs.org/).
- **pnpm:** Gestor de paquetes eficiente. Se instala mediante el comando dentro del cmd:
    ```bash
    npm install -g pnpm
    ```
- **Angular CLI (v21+):** Interfaz de línea de comandos de Angular. Instalado en el cmd:
    ```bash
    pnpm add -g @angular/cli
    ```

### 2.- Creación del proyecto en VSC:

Se emplearon los siguientes comandos dentro del terminal de una carpeta previamente creada:
```bash
ng new ppw-angular-21 --routing --style=scss --ssr=false
cd ppw-angular-21
pnpm install
pnpm start
```
Esto nos retorna una página web del navegador: `http://localhost:4200/`. La aplicación se encarga de actualizar automáticamente esta página cada vez que se modifica algún archivo.

## 3.- Capturas:

### 1. Salida de ```ng version``` en el terminal:
![Versión de Angular](evidencias/assets/01-ng-version.png)

**Descripción:** Se verifica la versión actual de Angular que fue previamente instalado.


### 2. Proceso de creación del proyecto con Angular CLI:
![Creación del proyecto en CLI](evidencias/assets/01-ng-new.png)

**Descripción:** Se ejecuta el comando de creación del proyecto.

### 3. Página de bienvenida de Angular antes de modificar:
![Página de bienvenida de Angular](evidencias/assets/01-app-inicio.png)

**Descripción:** Página inicial de bienvenida en localhost:42000.


### 4. HomePage funcionando en ```localhost:4200```:
![Home page nueva](evidencias/assets/01-home-page.png)

**Descripción:** Página después de los ajustes en las clases.

# 02. Fundamentos de Angular

## 1.- Descripción de la práctica:

El objetivo fue extender la aplicación base para implementar una funcionalidad real, en este caso un Perfil de Usuario. Se utilizan las herramientas de Angular: Signals y Control Flow.

- ```signal()```: Crea variables (nombre, edad, habilidades) que notifican a la aplicación cuando cambian.

- ```set()```: Método usado en el botón para actualizar la información (de Juan a Ana).

- ```computed()```: Crea valores que dependen de otros, como el *fullName* o *ageCategory*.

- ```@if```: Para mostrar la lista de habilidades solo si hay datos.

- ```@for```: Para recorrer el arreglo de habilidades y generar la lista automáticamente.

- ```@switch```: Para clasificar al usuario según su edad.

## 2.- Navegación entre páginas:

Se configura la ruta para tener dos estados:

- La página de inicio (/).

- La página de perfil (/profile).

Ambas se conectan mediante enlaces ```(<a>)``` para permitir que el usuario navegue.

## 3.- Capturas:

### 1. Nueva ruta - Juan:
![Versión de Juan](evidencias/assets/02-profile-page.png)


### 2. Actualización de datos - Ana:
![Versión de Ana](evidencias/assets/02-profile-page2.png)

