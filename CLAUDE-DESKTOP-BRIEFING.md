# 📋 BRIEFING PARA CLAUDE DESKTOP - MYESA ACADEMY 2025

**Proyecto:** Landing page registro evento Myesa Academy 2025
**Stack:** React 19 + Vite 6 + Tailwind + n8n + Google Sheets
**Cliente:** Motos y Equipos, S.A. - Grupo Motomex
**Deployment:** Hostinger → https://myesaacademy.com/expomoto/

---

## 🎯 OBJETIVO DEL PROYECTO

Landing page para registro de asistentes al evento **Myesa Academy 2025** (21 noviembre, WTC CDMX). Los usuarios llenan un formulario, los datos se envían a n8n, se guardan en Google Sheets, y reciben confirmación por WhatsApp.

---

## 🏗️ ARQUITECTURA

```
FRONTEND (React)          BACKEND (n8n)         DATABASE
   Formulario    →  POST /webhook  →  Google Sheets
   (9 campos)       Validación           (10 columnas)
                    WhatsApp ↓
                    Respuesta OK
```

---

## 📦 COMPONENTES FRONTEND (7)

1. **Hero.jsx** - Logo, fecha, ubicación, CTA "Regístrate ahora"
2. **BrandCarousel.jsx** - 21 marcas en carrusel infinito
3. **VideoSection.jsx** - Video YouTube con cover personalizado
4. **RegistrationForm.jsx** - Formulario principal (CORE)
5. **SuccessPopup.jsx** - Modal de confirmación
6. **FAQ.jsx** - 7 preguntas con accordion
7. **Footer.jsx** - Logos, redes sociales

---

## 📝 FORMULARIO - CAMPOS (9)

| Campo | Variable | Tipo | Validación | Obligatorio |
|-------|----------|------|------------|-------------|
| Número de Cliente | `clientNumber` | String | Solo dígitos | ✅ |
| Nombre Completo | `fullName` | String | Min 2 palabras | ✅ |
| Código País | `countryCode` | Select | +52 o +1 | ✅ |
| Teléfono (WhatsApp) | `phone` | String | 10 dígitos | ✅ |
| Email | `email` | String | Formato válido | ✅ |
| Estado | `state` | Select | 32 estados | ✅ |
| Nombre Promotor | `promoterName` | Select | 17 promotores | ✅ |
| Categorías Interés | `categories` | Multi-select | 8 opciones | ❌ |
| Aviso Privacidad | `privacyAccepted` | Checkbox | true | ✅ |

**Total:** 7 campos obligatorios + 1 opcional + 1 checkbox

---

## 🗄️ GOOGLE SHEETS - ESTRUCTURA

```
A: ID                    (auto)
B: Numero_Cliente        (formulario)
C: Nombre_Completo       (formulario)
D: Telefono              (formulario)
E: Codigo_Pais           (formulario)
F: Email                 (formulario) ⚠️ era "correo"
G: Estado                (formulario) ⚠️ NUEVO
H: Nombre_Promotor       (formulario)
I: Categorias_Interes    (formulario, array→string)
J: Fecha_Hora            (formulario, DD/MM/YYYY HH:mm:ss)
```

---

## ⚙️ N8N WORKFLOW (5 Nodos)

1. **Webhook** - Recibe POST del formulario
2. **Validation & Enrichment** (Code) - Valida + procesa datos
3. **Google Sheets** - Append row con 9 campos
4. **WhatsApp** - Envía confirmación
5. **Response** - Retorna success: true

---

## 🚨 CAMBIOS IMPORTANTES (STAKEHOLDERS)

### ✅ Implementados en Frontend:

1. **Estado agregado** - Dropdown con 32 estados de México (obligatorio)
2. **Promotor obligatorio** - Dropdown con 17 promotores (antes opcional)
3. **Email renombrado** - `correo` → `email`
4. **Invitados eliminados** - Campo `numeroInvitados` REMOVIDO
5. **Video cover** - Imagen personalizada (no thumbnail YouTube)
6. **Marcas actualizadas** - 21 logos (eliminado RK, agregado Riffel + Ipone)
7. **Footer rediseñado** - Motos y Equipos arriba, Motomex abajo
8. **CTA agrandado** - Botón 15% más grande

### ⚠️ PENDIENTES en n8n:

1. **Actualizar Code Node** - Cambiar `correo`→`email`, agregar validación de `estado`
2. **Actualizar Google Sheets** - Mapear columna G (Estado), cambiar F de `correo` a `email`
3. **Eliminar referencias** - Quitar `numeroInvitados` de todo el workflow
4. **Actualizar WhatsApp** - Usar `email` en template, agregar `estado` si se desea

---

## 📄 PAYLOAD JSON (Ejemplo)

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

**Webhook URL:**
```
POST https://n8n.srv977744.hstgr.cloud/webhook/db3ace62-a88f-4c17-ad00-a8aa4d0f7fa0
```

---

## 🛠️ CÓDIGO ACTUALIZADO PARA N8N (CODE NODE)

```javascript
// Datos del webhook
const body = $json.body || $json;

// Extraer campos
const numeroCliente = body.numeroCliente;
const nombreCompleto = body.nombreCompleto;
const telefono = body.telefono;
const codigoPais = body.codigoPais;
const email = body.email;                    // ⚠️ CAMBIO
const estado = body.estado;                  // ⚠️ NUEVO
const categoriasInteres = body.categoriasInteres;
const nombrePromotor = body.nombrePromotor;
const fechaHora = body.fechaHora;

// Validar 7 campos obligatorios
if (!numeroCliente || !nombreCompleto || !telefono || !email ||
    !codigoPais || !estado || !nombrePromotor) {
  throw new Error('Campos obligatorios faltantes');
}

// Validar fechaHora
if (!fechaHora) {
  throw new Error('Fecha y hora obligatorias');
}

// Limpiar teléfono
const telefonoClean = telefono.toString().replace(/\D/g, '');
if (telefonoClean.length !== 10) {
  throw new Error('Teléfono debe tener 10 dígitos');
}

// Validar email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  throw new Error('Email inválido');
}

// Validar código país
if (!['+52', '+1'].includes(codigoPais)) {
  throw new Error('Código país inválido');
}

// Validar estado (32 estados)
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

// Validar promotor (17 promotores)
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

// Formatear teléfono para WhatsApp
const telefonoWhatsApp = `${codigoPais}${telefonoClean}`;

// Convertir categorías array → string
const categoriasString = Array.isArray(categoriasInteres) && categoriasInteres.length > 0
  ? categoriasInteres.join(', ')
  : '';

// Dividir nombre
const nombreParts = nombreCompleto.split(' ');
const firstName = nombreParts[0] || nombreCompleto;
const lastName = nombreParts.slice(1).join(' ') || '';

// RETURN
return {
  // Para Google Sheets (sin ID)
  numeroCliente: numeroCliente,
  nombreCompleto: nombreCompleto,
  telefono: telefonoClean,
  codigoPais: codigoPais,
  email: email,                      // ⚠️ CAMBIO
  estado: estado,                    // ⚠️ NUEVO
  nombrePromotor: nombrePromotor,
  categoriasInteres: categoriasString,
  fechaHora: fechaHora,

  // Para WhatsApp
  telefonoWhatsApp: telefonoWhatsApp,
  firstName: firstName,
  lastName: lastName
};
```

---

## 🗺️ MAPEO GOOGLE SHEETS NODE

```
Column B: {{ $json.numeroCliente }}
Column C: {{ $json.nombreCompleto }}
Column D: {{ $json.telefono }}
Column E: {{ $json.codigoPais }}
Column F: {{ $json.email }}              ⚠️ era $json.correo
Column G: {{ $json.estado }}             ⚠️ NUEVO
Column H: {{ $json.nombrePromotor }}
Column I: {{ $json.categoriasInteres }}
Column J: {{ $json.fechaHora }}
```

**NO mapear:** Column A (ID es auto-generado por Google Sheets)

---

## 🚀 DEPLOYMENT

### Build de Producción
```bash
npm run build
```

**Resultado:**
- ✅ Build exitoso (0 errores)
- ✅ Total: 8.8 MB
- ✅ JS principal: 236 KB (minificado)
- ✅ Console.log eliminados
- ✅ Subdirectorio `/expomoto/` configurado

### Subir a Hostinger

**Copiar:** TODO el contenido de `dist/`
**Destino:** `/public_html/expomoto/`

**Estructura final:**
```
/public_html/expomoto/
├── index.html
├── og-image.jpg
├── robots.txt
└── assets/
    ├── [JS, CSS, imágenes, fuentes]
```

**URL:** https://myesaacademy.com/expomoto/

---

## ✅ CHECKLIST DE DEPLOYMENT

### Frontend
- [x] ✅ Build de producción generado
- [x] ✅ Formulario funcional (9 campos)
- [x] ✅ Validaciones implementadas
- [x] ✅ Webhook URL configurada
- [x] ✅ Código limpio (sin console.log)

### Backend (n8n)
- [ ] ⚠️ Code Node actualizado con nuevo JavaScript
- [ ] ⚠️ Google Sheets mapeo actualizado (email, estado)
- [ ] ⚠️ WhatsApp template actualizado
- [ ] ⚠️ Workflow probado con payload de prueba

### Database
- [x] ✅ Google Sheets estructura verificada (10 columnas A-J)
- [x] ✅ Columna G "Estado" existe
- [x] ✅ Documentación completa

### Hosting
- [ ] ⚠️ Archivos subidos a `/public_html/expomoto/`
- [ ] ⚠️ URL https://myesaacademy.com/expomoto/ accesible
- [ ] ⚠️ og-image.jpg accesible

### Testing
- [ ] ⚠️ Registro de prueba completado
- [ ] ⚠️ Datos en Google Sheets verificados
- [ ] ⚠️ WhatsApp recibido
- [ ] ⚠️ Open Graph funcionando (share en redes)

---

## 📊 DATOS CLAVE

**32 Estados:**
Aguascalientes, Baja California, Baja California Sur, Campeche, Chiapas, Chihuahua, Ciudad de México, Coahuila, Colima, Durango, Estado de México, Guanajuato, Guerrero, Hidalgo, Jalisco, Michoacán, Morelos, Nayarit, Nuevo León, Oaxaca, Puebla, Querétaro, Quintana Roo, San Luis Potosí, Sinaloa, Sonora, Tabasco, Tamaulipas, Tlaxcala, Veracruz, Yucatán, Zacatecas

**17 Promotores:**
1. ALEJANDRO ROBERTO PIÑA GARCIA
2. SERGIO AARON CARDENAS GARCIA
3. OCTAVIO NAVARRETE FERNANDEZ
4. FRANCISCO JAVIER RENTERIA
5. FRANCISCO JAVIER PEÑA
6. RICARDO REBOLLEDO ORTIZ
7. ULISES MARTIN VILLEGAS
8. MIGUEL ANGEL GZZ VIDAL
9. JOSE DANIEL RAMOS MARTÍNEZ
10. JUAN CARLOS HERNANDEZ PACHECO
11. IVÁN HERNÁNDEZ LEAL
12. JORGE URTECHO REJON
13. CHRISTIAN PAUL DAVIZON VILLEGAS
14. LIBER HOMERO CABALLERO VILLA
15. LUIS ANGEL FLORES ALMANZA
16. JOSÉ ROGELIO PÉREZ SÁNCHEZ
17. HECTOR CAMPOS

**8 Categorías:**
Llantas, Lubricantes y Aditivos, Partes y Refacciones, Baterías, Accesorios y Equipamiento, Cascos y Protecciones, Rencauchado, Todas las anteriores

---

## 📁 ARCHIVOS DE DOCUMENTACIÓN

- `PROJECT-SUMMARY.md` - Resumen técnico completo
- `GOOGLE-SHEETS-MAPPING.md` - Mapeo detallado campos → columnas
- `DEPLOYMENT-GUIDE.md` - Guía de deployment a Hostinger
- `.env.example` - Template de variables de entorno
- `README.md` - Documentación general

---

## 🔗 URLs Y ENDPOINTS

**Producción:**
- Landing: https://myesaacademy.com/expomoto/
- OG Image: https://myesaacademy.com/expomoto/og-image.jpg

**n8n:**
- Webhook: https://n8n.srv977744.hstgr.cloud/webhook/db3ace62-a88f-4c17-ad00-a8aa4d0f7fa0

**Redes Sociales:**
- Facebook: https://www.facebook.com/MotoYEquip.SA
- Instagram: https://www.instagram.com/motosyequipos/
- YouTube: https://www.youtube.com/@MotosYEquiposSA

**Ubicación Evento:**
- Google Maps: https://maps.app.goo.gl/AZuwCHWyjMNiE89w6

---

## 🎯 PRÓXIMOS PASOS INMEDIATOS

1. **Actualizar n8n** (30 min)
   - Copiar/pegar código JavaScript en Code Node
   - Actualizar mapeo Google Sheets
   - Probar con payload de prueba

2. **Subir a Hostinger** (15 min)
   - FTP: Copiar dist/ → /public_html/expomoto/
   - Verificar acceso a URL

3. **Testing Completo** (30 min)
   - Registro de prueba end-to-end
   - Verificar Google Sheets
   - Confirmar WhatsApp

---

**Última actualización:** 28 Octubre 2025
**Status:** ✅ Frontend listo | ⚠️ n8n pendiente | ⚠️ Deployment pendiente
