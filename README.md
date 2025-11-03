# 🧪 Rick and Morty App - Ionic

Aplicación móvil que consume la API de Rick and Morty para mostrar información de los personajes de la serie.

![Ionic](https://img.shields.io/badge/Ionic-7-blue)
![Angular](https://img.shields.io/badge/Angular-17-red)

## 📱 Características

- Listado de personajes con imágenes
- Consumo de API REST
- Diseño responsivo
- Indicador de carga
- Manejo de errores
- Compatible con Android

## 🚀 Instalación

### Prerequisitos

- Node.js (v14+)
- npm
- Ionic CLI
```bash
npm install -g @ionic/cli
```

### Pasos

1. **Clonar el repositorio:**
```bash
git clone https://github.com/TU_USUARIO/rick-morty-app.git
cd rick-morty-app
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Ejecutar la aplicación:**
```bash
ionic serve
```

La app se abrirá en `http://localhost:8100`

## 📱 Android
```bash
# Agregar plataforma
ionic capacitor add android

# Compilar
ionic build

# Sincronizar
ionic cap sync android

# Abrir en Android Studio
ionic cap open android
```

## 🛠️ Tecnologías

- Ionic Framework 7
- Angular 17
- TypeScript
- Capacitor
- Rick and Morty API

## 📂 Estructura
```
src/app/
├── models/
│   └── character.model.ts    # Interfaces
├── services/
│   └── rickmorty.service.ts  # Servicio HTTP
└── home/
    ├── home.page.ts          # Lógica
    ├── home.page.html        # Vista
    └── home.page.scss        # Estilos
```

## 🌐 API

**Endpoint:** `https://rickandmortyapi.com/api/character`

Documentación: https://rickandmortyapi.com/documentation

⭐ Desarrollado con Ionic Framework
