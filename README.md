# Myesa Academy 2025 - Landing Page

Landing page para el evento **Myesa Academy 2025** en World Trade Center CDMX.

## 🚀 Tecnologías

- **React 19** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS 3** - Framework de estilos utility-first
- **JavaScript (ES6+)** - Lógica de la aplicación

## 📋 Características

✅ Diseño 100% responsive (Mobile First)
✅ Formulario de registro con validación en tiempo real
✅ Carrusel infinito de marcas patrocinadoras
✅ Sección de video con overlay interactivo
✅ FAQ con acordeón interactivo
✅ Smooth scroll y animaciones fluidas
✅ Optimizado para SEO y accesibilidad

## 🛠️ Instalación y Uso

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Navegar al directorio del proyecto
cd myesa-academy

# Instalar dependencias (ya instaladas)
npm install
```

### Comandos disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build de producción
npm run preview
```

### Iniciar el proyecto

```bash
npm run dev
```

Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## 📁 Estructura del Proyecto

```
myesa-academy/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/        # Componentes React
│   │   ├── Hero.jsx       # Sección hero con CTA
│   │   ├── BrandCarousel.jsx  # Carrusel de marcas
│   │   ├── VideoSection.jsx   # Sección de video
│   │   ├── RegistrationForm.jsx  # Formulario de registro
│   │   ├── FAQ.jsx        # Preguntas frecuentes
│   │   └── Footer.jsx     # Footer con redes sociales
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales y Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Colores de Marca

```javascript
'myesa-orange': '#FF3A00',        // Naranja principal
'myesa-orange-light': '#FF9248',  // Naranja claro
'myesa-blue': '#0022FF',          // Azul principal
'myesa-black': '#1A1A1A',         // Negro
'myesa-gray-1': '#403B3A',        // Gris oscuro 1
'myesa-gray-2': '#626061',        // Gris oscuro 2
'myesa-gray-3': '#838078',        // Gris medio
'myesa-gray-4': '#A29E96',        // Gris claro
'myesa-white': '#E7E7E7',         // Blanco
'myesa-white-2': '#F5F5F5',       // Blanco 2
'myesa-bg': '#F1F1F1',            // Fondo
```

## 🔧 Funcionalidades del Formulario

### Validación en tiempo real
- Campos obligatorios
- Mínimo 2 caracteres
- No Cliente: solo alfanuméricos
- Mensajes de error específicos

### Estados
- Loading durante el envío
- Popup de confirmación al completar
- Reset del formulario tras envío exitoso

### Conexión con Backend

Para conectar el formulario con tu API, edita el archivo `src/components/RegistrationForm.jsx` en la línea ~80:

```javascript
const response = await fetch('/api/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

if (!response.ok) throw new Error('Error al registrar');
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

## 🚀 Deploy

### Netlify / Vercel

```bash
# Build del proyecto
npm run build

# La carpeta 'dist' contiene los archivos para producción
```

### Variables de entorno (opcional)

Crea un archivo `.env` en la raíz si necesitas configurar variables:

```env
VITE_API_URL=https://api.tudominio.com
```

Accede a ellas con `import.meta.env.VITE_API_URL`

## 📄 Licencia

© 2025 Motos y Equipos - Grupo Motomex

## 👨‍💻 Desarrollado con

- React 19
- Vite 6
- Tailwind CSS 3
- Diseño extraído de Figma via MCP

---

**Evento:** Myesa Academy 2025
**Fecha:** 21 de Noviembre 2025
**Lugar:** Salones Palenque y Montealbán, World Trade Center CDMX
