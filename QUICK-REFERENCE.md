# ⚡ QUICK REFERENCE - MYESA ACADEMY 2025

Referencia rápida de comandos, URLs y snippets para el proyecto.

---

## 🚀 COMANDOS NPM

```bash
# Desarrollo
npm run dev              # Inicia dev server (http://localhost:5173)

# Build
npm run build            # Genera build de producción en dist/

# Preview
npm run preview          # Preview del build (http://localhost:4173)

# Ver tamaño del build
du -sh dist/
```

---

## 🔗 URLs IMPORTANTES

### Producción
```
Landing:   https://myesaacademy.com/expomoto/
OG Image:  https://myesaacademy.com/expomoto/og-image.jpg
```

### n8n Webhook
```
POST https://n8n.srv977744.hstgr.cloud/webhook/db3ace62-a88f-4c17-ad00-a8aa4d0f7fa0
Content-Type: application/json
```

### Redes Sociales
```
Facebook:  https://www.facebook.com/MotoYEquip.SA
Instagram: https://www.instagram.com/motosyequipos/
YouTube:   https://www.youtube.com/@MotosYEquiposSA
```

### Otros
```
Google Maps: https://maps.app.goo.gl/AZuwCHWyjMNiE89w6
Grupo Motomex: https://www.grupomotomex.com.mx/
Motos y Equipos: https://www.motosyequipos.com/
```

---

## 📦 PAYLOAD DE PRUEBA

```json
{
  "numeroCliente": "12345",
  "nombreCompleto": "Juan Pérez García",
  "telefono": "5512345678",
  "codigoPais": "+52",
  "email": "juan.perez@example.com",
  "estado": "Ciudad de México",
  "nombrePromotor": "ALEJANDRO ROBERTO PIÑA GARCIA",
  "categoriasInteres": ["Llantas", "Lubricantes y Aditivos"],
  "fechaHora": "27/10/2025 14:30:45"
}
```

**Probar con cURL:**
```bash
curl -X POST https://n8n.srv977744.hstgr.cloud/webhook/db3ace62-a88f-4c17-ad00-a8aa4d0f7fa0 \
  -H "Content-Type: application/json" \
  -d '{
    "numeroCliente": "12345",
    "nombreCompleto": "Juan Pérez García",
    "telefono": "5512345678",
    "codigoPais": "+52",
    "email": "juan.perez@example.com",
    "estado": "Ciudad de México",
    "nombrePromotor": "ALEJANDRO ROBERTO PIÑA GARCIA",
    "categoriasInteres": ["Llantas", "Lubricantes y Aditivos"],
    "fechaHora": "27/10/2025 14:30:45"
  }'
```

---

## 🗄️ GOOGLE SHEETS - MAPEO RÁPIDO

```
A → ID                    (auto-generado por Sheets)
B → numeroCliente         (del payload)
C → nombreCompleto        (del payload)
D → telefono              (del payload, limpiado)
E → codigoPais            (del payload)
F → email                 (del payload) ⚠️ antes "correo"
G → estado                (del payload) ⚠️ NUEVO
H → nombrePromotor        (del payload)
I → categoriasInteres     (del payload, array→string)
J → fechaHora             (del payload)
```

**En n8n Google Sheets Node:**
```
Column B: {{ $json.numeroCliente }}
Column C: {{ $json.nombreCompleto }}
Column D: {{ $json.telefono }}
Column E: {{ $json.codigoPais }}
Column F: {{ $json.email }}
Column G: {{ $json.estado }}
Column H: {{ $json.nombrePromotor }}
Column I: {{ $json.categoriasInteres }}
Column J: {{ $json.fechaHora }}
```

---

## ⚙️ N8N CODE NODE (Copy/Paste)

```javascript
const body = $json.body || $json;

const numeroCliente = body.numeroCliente;
const nombreCompleto = body.nombreCompleto;
const telefono = body.telefono;
const codigoPais = body.codigoPais;
const email = body.email;
const estado = body.estado;
const categoriasInteres = body.categoriasInteres;
const nombrePromotor = body.nombrePromotor;
const fechaHora = body.fechaHora;

if (!numeroCliente || !nombreCompleto || !telefono || !email ||
    !codigoPais || !estado || !nombrePromotor) {
  throw new Error('Campos obligatorios faltantes');
}

if (!fechaHora) {
  throw new Error('Fecha y hora obligatorias');
}

const telefonoClean = telefono.toString().replace(/\D/g, '');
if (telefonoClean.length !== 10) {
  throw new Error('Teléfono debe tener 10 dígitos');
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  throw new Error('Email inválido');
}

if (!['+52', '+1'].includes(codigoPais)) {
  throw new Error('Código país inválido');
}

const estadosValidos = [
  'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
  'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima',
  'Durango', 'Estado de México', 'Guanajuato', 'Guerrero', 'Hidalgo',
  'Jalisco', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca',
  'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa',
  'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán',
  'Zacatecas'
];
if (!estadosValidos.includes(estado)) {
  throw new Error('Estado inválido');
}

const promotoresValidos = [
  'ALEJANDRO ROBERTO PIÑA GARCIA',
  'SERGIO AARON CARDENAS GARCIA',
  'OCTAVIO NAVARRETE FERNANDEZ',
  'FRANCISCO JAVIER RENTERIA',
  'FRANCISCO JAVIER PEÑA',
  'RICARDO REBOLLEDO ORTIZ',
  'ULISES MARTIN VILLEGAS',
  'MIGUEL ANGEL GZZ VIDAL',
  'JOSE DANIEL RAMOS MARTÍNEZ',
  'JUAN CARLOS HERNANDEZ PACHECO',
  'IVÁN HERNÁNDEZ LEAL',
  'JORGE URTECHO REJON',
  'CHRISTIAN PAUL DAVIZON VILLEGAS',
  'LIBER HOMERO CABALLERO VILLA',
  'LUIS ANGEL FLORES ALMANZA',
  'JOSÉ ROGELIO PÉREZ SÁNCHEZ',
  'HECTOR CAMPOS'
];
if (!promotoresValidos.includes(nombrePromotor)) {
  throw new Error('Promotor inválido');
}

const telefonoWhatsApp = `${codigoPais}${telefonoClean}`;

const categoriasString = Array.isArray(categoriasInteres) && categoriasInteres.length > 0
  ? categoriasInteres.join(', ')
  : '';

const nombreParts = nombreCompleto.split(' ');
const firstName = nombreParts[0] || nombreCompleto;
const lastName = nombreParts.slice(1).join(' ') || '';

return {
  numeroCliente: numeroCliente,
  nombreCompleto: nombreCompleto,
  telefono: telefonoClean,
  codigoPais: codigoPais,
  email: email,
  estado: estado,
  nombrePromotor: nombrePromotor,
  categoriasInteres: categoriasString,
  fechaHora: fechaHora,
  telefonoWhatsApp: telefonoWhatsApp,
  firstName: firstName,
  lastName: lastName
};
```

---

## 📝 LISTAS DE VALORES

### 32 Estados
```
Aguascalientes
Baja California
Baja California Sur
Campeche
Chiapas
Chihuahua
Ciudad de México
Coahuila
Colima
Durango
Estado de México
Guanajuato
Guerrero
Hidalgo
Jalisco
Michoacán
Morelos
Nayarit
Nuevo León
Oaxaca
Puebla
Querétaro
Quintana Roo
San Luis Potosí
Sinaloa
Sonora
Tabasco
Tamaulipas
Tlaxcala
Veracruz
Yucatán
Zacatecas
```

### 17 Promotores
```
ALEJANDRO ROBERTO PIÑA GARCIA
SERGIO AARON CARDENAS GARCIA
OCTAVIO NAVARRETE FERNANDEZ
FRANCISCO JAVIER RENTERIA
FRANCISCO JAVIER PEÑA
RICARDO REBOLLEDO ORTIZ
ULISES MARTIN VILLEGAS
MIGUEL ANGEL GZZ VIDAL
JOSE DANIEL RAMOS MARTÍNEZ
JUAN CARLOS HERNANDEZ PACHECO
IVÁN HERNÁNDEZ LEAL
JORGE URTECHO REJON
CHRISTIAN PAUL DAVIZON VILLEGAS
LIBER HOMERO CABALLERO VILLA
LUIS ANGEL FLORES ALMANZA
JOSÉ ROGELIO PÉREZ SÁNCHEZ
HECTOR CAMPOS
```

### 8 Categorías
```
Llantas
Lubricantes y Aditivos
Partes y Refacciones
Baterías
Accesorios y Equipamiento
Cascos y Protecciones
Rencauchado
Todas las anteriores
```

---

## 🚀 DEPLOYMENT A HOSTINGER

### Via FTP/SFTP
```
Host: [Tu servidor Hostinger]
Port: 21 (FTP) o 22 (SFTP)
User: [Tu usuario]
Pass: [Tu contraseña]

Origen:  dist/
Destino: /public_html/expomoto/
```

### Via FileZilla
1. Conectar a Hostinger
2. Navegar a `/public_html/`
3. Crear carpeta `expomoto` (si no existe)
4. Subir TODO el contenido de `dist/` a `expomoto/`

### Via Panel Hostinger
1. Login → File Manager
2. Ir a `/public_html/`
3. Upload → Seleccionar archivos de `dist/`

---

## 🧪 TESTING CHECKLIST

```bash
# 1. Frontend local
npm run dev
# → Abrir http://localhost:5173
# → Llenar y enviar formulario de prueba

# 2. Build local
npm run build
npm run preview
# → Abrir http://localhost:4173
# → Verificar que todo funciona igual

# 3. Producción
# → Abrir https://myesaacademy.com/expomoto/
# → Llenar formulario con datos reales
# → Verificar:
#   ✓ Popup de éxito aparece
#   ✓ Datos en Google Sheets
#   ✓ WhatsApp recibido
#   ✓ Share en Facebook/LinkedIn (Open Graph)
```

---

## 📊 BUILD INFO

```
Total size:    8.8 MB
JS bundle:     236 KB (minified + gzip)
CSS:           Incluido en bundle
Largest:       Video-Cover.png (3.96 MB)
Modules:       1722 transformados
Errors:        0
Warnings:      0
```

**Archivos más pesados:**
```
Video-Cover.png      3.96 MB
Pleca.gif            1.84 MB
BG-Noise.webp        936 KB
Fuentes Sharp (~5)   ~270 KB
```

---

## 🔧 TROUBLESHOOTING

### Formulario no envía
```bash
# 1. Verificar .env
cat .env
# → Debe tener VITE_N8N_WEBHOOK_URL=...

# 2. Regenerar build
npm run build

# 3. Verificar que n8n esté activo
curl -I https://n8n.srv977744.hstgr.cloud/webhook/db3ace62-a88f-4c17-ad00-a8aa4d0f7fa0
# → Debe retornar 200 o 405 (Method Not Allowed es OK para GET)
```

### Styles no cargan
```bash
# 1. Verificar base en vite.config.js
cat vite.config.js
# → base: '/expomoto/'

# 2. Verificar estructura en servidor
/public_html/expomoto/index.html
/public_html/expomoto/assets/...
```

### Open Graph no funciona
```bash
# 1. Verificar og-image.jpg existe
ls public/og-image.jpg

# 2. Verificar accesible en producción
curl -I https://myesaacademy.com/expomoto/og-image.jpg
# → Debe retornar 200

# 3. Validar con Facebook Debugger
https://developers.facebook.com/tools/debug/
```

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
myesa-academy/
├── dist/                          # Build de producción
│   ├── index.html                 # HTML principal
│   └── assets/                    # JS, CSS, imágenes, fuentes
│
├── public/                        # Assets estáticos
│   ├── og-image.jpg              # Open Graph
│   └── robots.txt                # SEO
│
├── src/
│   ├── components/               # 7 componentes React
│   ├── assets/                   # Imágenes, logos, fuentes
│   ├── App.jsx                   # Layout principal
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Estilos + animaciones
│
├── .env                          # Variables de entorno (NO subir)
├── .env.example                  # Template
├── vite.config.js               # Config Vite
├── tailwind.config.js           # Config Tailwind
├── package.json                 # Dependencias
│
└── [Documentación]
    ├── PROJECT-SUMMARY.md       # Resumen completo
    ├── CLAUDE-DESKTOP-BRIEFING.md  # Briefing ejecutivo
    ├── QUICK-REFERENCE.md       # Esta guía
    ├── GOOGLE-SHEETS-MAPPING.md # Mapeo BD
    └── DEPLOYMENT-GUIDE.md      # Guía deployment
```

---

## 🎯 VALIDACIONES RÁPIDAS

```javascript
// Email
/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

// Teléfono (10 dígitos)
/^\d{10}$/.test(phone)

// Nombre completo (min 2 palabras)
fullName.trim().split(/\s+/).length >= 2

// Código país
['+52', '+1'].includes(countryCode)
```

---

## 💾 BACKUP

```bash
# Antes de cambios importantes
tar -czf myesa-academy-backup-$(date +%Y%m%d).tar.gz \
  src/ public/ vite.config.js tailwind.config.js package.json .env

# Restaurar
tar -xzf myesa-academy-backup-YYYYMMDD.tar.gz
```

---

**Última actualización:** 28 Octubre 2025
