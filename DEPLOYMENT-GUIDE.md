# 🚀 GUÍA DE DESPLIEGUE - MYESA ACADEMY 2025
## Despliegue en Hostinger - Subdirectorio /expomoto

---

## 📋 LISTA DE TAREAS PRE-DEPLOYMENT

### ✅ COMPLETADO (Ya configurado)
- [x] Vite configurado para subdirectorio `/expomoto`
- [x] Terser instalado para minificación
- [x] .htaccess creado para SPA routing
- [x] .htaccess-root creado para redirección
- [x] Meta tags SEO y Open Graph agregados
- [x] Favicon configurado
- [x] robots.txt creado
- [x] Console.logs eliminados en producción
- [x] Webhook configurado con variables de entorno
- [x] Background del formulario optimizado
- [x] Código muerto eliminado (RotatingCube)

---

## 📝 TAREAS PENDIENTES (Hacer ANTES de subir)

### 1. ⚙️ CONFIGURAR VARIABLES DE ENTORNO

**Archivo:** `.env`

```bash
# Crear archivo .env en la raíz del proyecto
VITE_N8N_WEBHOOK_URL=https://tu-instancia-n8n.com/webhook/myesa-academy-registro
```

**⚠️ IMPORTANTE:** Reemplaza con tu URL real de n8n

---

### 2. 🖼️ CREAR IMAGEN OPEN GRAPH

**Requisitos:**
- **Nombre:** `og-image.jpg`
- **Ubicación:** `public/`
- **Dimensiones:** 1200x630 px
- **Formato:** JPG o PNG
- **Peso:** < 1MB

**Contenido sugerido:**
- Logo Myesa Academy
- Fecha: 21 de Noviembre 2025
- Ubicación: World Trade Center CDMX
- Colores: Naranja #FF3A00 y Azul #0022FF

---

### 3. 🏗️ GENERAR BUILD DE PRODUCCIÓN

```bash
# En la terminal, dentro de la carpeta del proyecto:
cd "C:\Users\erik.tamayo\OneDrive - Motomex\Documentos\myesa-academy"

# Generar build
npm run build
```

**Resultado esperado:**
```
✓ 150 modules transformed.
dist/index.html                   X.XX kB
dist/assets/index-XXXXX.css      XX.XX kB
dist/assets/index-XXXXX.js      XXX.XX kB
✓ built in XXs
```

**⚠️ Verificar:**
- [ ] Carpeta `dist/` creada
- [ ] Archivos dentro de `dist/`
- [ ] `.htaccess` dentro de `dist/`

---

## 📤 PROCESO DE SUBIDA A HOSTINGER

### OPCIÓN A: Subida Manual (Arrastrar y soltar)

#### **Paso 1: Conectar a Hostinger**

1. Ir a: https://hpanel.hostinger.com/
2. Login con tus credenciales
3. Click en "Administrador de archivos" o "File Manager"

#### **Paso 2: Preparar estructura**

```
public_html/
├── .htaccess                    ← Archivo RAÍZ (redirección)
├── wp-admin/                    ← WordPress existente (NO TOCAR)
├── wp-content/                  ← WordPress existente (NO TOCAR)
├── wp-includes/                 ← WordPress existente (NO TOCAR)
├── index.php                    ← WordPress existente (NO TOCAR)
└── expomoto/                    ← NUEVA CARPETA (nuestro proyecto)
    ├── index.html
    ├── .htaccess                ← Archivo para SPA routing
    ├── assets/
    │   ├── index-XXXXX.js
    │   ├── index-XXXXX.css
    │   └── [otros assets]
    └── [archivos del build]
```

#### **Paso 3: Subir .htaccess RAÍZ**

1. **Ubicación:** `public_html/`
2. **Archivo:** Copiar contenido de `.htaccess-root`
3. **Nombre final:** `.htaccess`

**IMPORTANTE:** Si ya existe un `.htaccess` de WordPress:
```apache
# AGREGAR ESTE BLOQUE AL INICIO del .htaccess existente:

<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    # Redirección a /expomoto
    RewriteCond %{REQUEST_URI} !^/expomoto/
    RewriteCond %{REQUEST_URI} !^/wp-admin/
    RewriteCond %{REQUEST_URI} !^/wp-content/
    RewriteCond %{REQUEST_URI} !^/wp-includes/
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ /expomoto/ [L,R=301]

    RewriteCond %{REQUEST_URI} ^/$
    RewriteRule ^$ /expomoto/ [L,R=301]
</IfModule>

# ... resto del código de WordPress ...
```

#### **Paso 4: Crear carpeta /expomoto**

1. En `public_html/`, crear carpeta: `expomoto`
2. Entrar a la carpeta `expomoto/`

#### **Paso 5: Subir archivos del build**

1. Abrir carpeta local: `dist/`
2. **Seleccionar TODO el contenido** de `dist/`
3. **Arrastrar y soltar** en `public_html/expomoto/`

**Archivos a subir:**
```
✅ index.html
✅ .htaccess
✅ robots.txt
✅ og-image.jpg (si lo creaste)
✅ carpeta assets/ (completa)
✅ favicon.svg
✅ todos los assets
```

#### **Paso 6: Verificar permisos**

**En Hostinger File Manager:**
- Carpeta `expomoto/`: 755
- Archivos `.htaccess`: 644
- Archivos `.html`: 644
- Carpeta `assets/`: 755

---

### OPCIÓN B: Subida por FTP (Más rápido)

#### **Usando FileZilla:**

1. **Host:** ftp.myesaacademy.com
2. **Usuario:** Tu usuario FTP de Hostinger
3. **Contraseña:** Tu contraseña FTP
4. **Puerto:** 21

**Ruta remota:** `/public_html/expomoto/`

---

## 🧪 TESTING POST-DEPLOYMENT

### **1. Verificar redirección raíz**

```
https://myesaacademy.com/
→ Debe redirigir a: https://myesaacademy.com/expomoto/
```

### **2. Verificar carga del sitio**

```
https://myesaacademy.com/expomoto/
→ Debe cargar la landing page
```

### **3. Verificar assets**

```bash
# Abrir DevTools (F12) → Network tab
# Todos los assets deben cargar con código 200
```

**Revisar:**
- [ ] CSS carga correctamente
- [ ] JavaScript carga correctamente
- [ ] Imágenes cargan correctamente
- [ ] Fuentes cargan correctamente
- [ ] Favicon visible

### **4. Verificar formulario**

- [ ] Todos los campos se muestran
- [ ] Background del formulario visible
- [ ] Validaciones funcionan
- [ ] Envío a n8n funciona
- [ ] Popup de éxito aparece

### **5. Verificar responsive**

- [ ] Mobile (320px - 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (1024px+)

### **6. Verificar SEO**

```bash
# Abrir: https://myesaacademy.com/expomoto/
# Ver código fuente (Ctrl+U)
```

**Verificar que existan:**
- [ ] Meta description
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Favicon

### **7. Test de compartir en redes**

**Facebook Debugger:**
https://developers.facebook.com/tools/debug/

**Twitter Card Validator:**
https://cards-dev.twitter.com/validator

---

## 🐛 TROUBLESHOOTING

### Problema: "No se ve la página, solo WordPress"

**Solución:**
- Verificar que el `.htaccess` raíz tenga las reglas de redirección
- Limpiar caché del navegador (Ctrl + Shift + Del)
- Probar en modo incógnito

---

### Problema: "Error 404 en rutas internas"

**Solución:**
- Verificar que el `.htaccess` esté dentro de `/expomoto/`
- Verificar que `mod_rewrite` esté habilitado en Hostinger

---

### Problema: "Assets no cargan (404)"

**Solución:**
```bash
# Verificar que base en vite.config.js sea correcto:
base: '/expomoto/',

# Regenerar build:
npm run build
```

---

### Problema: "Formulario no envía datos"

**Solución:**
1. Verificar variable de entorno en `.env`
2. Verificar que n8n webhook esté activo
3. Ver Console del navegador (F12) para errores

---

### Problema: "Redirección en loop infinito"

**Solución:**
- Verificar condiciones en `.htaccess` raíz
- Asegurar que WordPress no interfiera

---

## 📊 CHECKLIST FINAL PRE-LANZAMIENTO

### Antes del build:
- [ ] `.env` configurado con webhook real
- [ ] `og-image.jpg` creado y en `public/`
- [ ] Todas las imágenes optimizadas
- [ ] URLs de producción correctas

### Durante el build:
- [ ] `npm run build` exitoso
- [ ] Carpeta `dist/` generada
- [ ] Sin errores en consola

### Durante la subida:
- [ ] `.htaccess` raíz configurado
- [ ] Carpeta `/expomoto/` creada
- [ ] Todos los archivos de `dist/` subidos
- [ ] Permisos correctos aplicados

### Post-deployment:
- [ ] Redirección funciona
- [ ] Sitio carga correctamente
- [ ] Formulario funciona
- [ ] Responsive OK
- [ ] SEO tags presentes
- [ ] Performance aceptable

---

## 🚀 COMANDOS ÚTILES

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Limpiar y rebuild
rm -rf dist && npm run build
```

---

## 📞 SOPORTE

**Si algo falla:**
1. Revisar Console del navegador (F12)
2. Revisar Network tab para errores 404/500
3. Verificar permisos en Hostinger
4. Contactar soporte de Hostinger si es problema del servidor

---

## 🎉 ¡LISTO PARA PRODUCCIÓN!

Una vez completados todos los pasos, tu sitio estará en:

**URL Principal:** https://myesaacademy.com/expomoto/

**Redirección automática:** https://myesaacademy.com/ → https://myesaacademy.com/expomoto/

---

**Desarrollado por:** Grupo Motomex
**Proyecto:** Myesa Academy 2025
**Fecha:** Octubre 2025
