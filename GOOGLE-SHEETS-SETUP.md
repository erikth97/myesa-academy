# 📊 GOOGLE SHEETS - BASE DE DATOS MYESA ACADEMY 2025

## 🎯 Estructura de la Base de Datos

---

## 📋 PASO 1: CREAR GOOGLE SHEET

### **1. Crear nueva hoja de cálculo:**
1. Ir a: https://sheets.google.com
2. Click en "Nuevo" → "Hoja de cálculo en blanco"
3. Nombrarla: **"Myesa Academy 2025 - Registros"**

---

## 📑 PASO 2: CONFIGURAR COLUMNAS

### **Estructura de columnas (Fila 1 - Headers):**

| Columna | Nombre del Campo | Tipo de Dato | Descripción |
|---------|------------------|--------------|-------------|
| **A** | `ID` | Texto | ID único generado por n8n |
| **B** | `Numero_Cliente` | Texto | Número de cliente Myesa |
| **C** | `Nombre_Completo` | Texto | Nombre y apellidos completos |
| **D** | `Telefono` | Texto | Teléfono (10 dígitos sin código) |
| **E** | `Codigo_Pais` | Texto | Código de país (+52, +1) |
| **F** | `Email` | Email | Correo electrónico |
| **G** | `Nombre_Promotor` | Texto | Nombre del promotor (opcional) |
| **H** | `Numero_Invitados` | Número | Cantidad de invitados (0-4) |
| **I** | `Categorias_Interes` | Texto | Lista de categorías separadas por coma |
| **J** | `Fecha_Hora` | Texto | Formato: "24/10/2025 14:35:22" |

---

## 🎨 PASO 3: FORMATO RECOMENDADO

### **Aplicar a la Fila 1 (Headers):**

```
1. Seleccionar fila 1
2. Formato → Negrita
3. Formato → Color de fondo: #FF3A00 (naranja Myesa)
4. Formato → Color de texto: Blanco
5. Formato → Alineación: Centro
6. Ver → Inmovilizar → 1 fila
```

### **Formato de columnas:**

**Columna A (ID):**
- Formato → Texto sin formato (IDs generados por n8n)

**Columna B (Numero_Cliente):**
- Formato → Texto sin formato

**Columna D (Telefono):**
- Formato → Texto sin formato
- IMPORTANTE: Solo 10 dígitos sin código de país

**Columna E (Codigo_Pais):**
- Formato → Texto sin formato
- Valores esperados: +52, +1, etc.

**Columna F (Email):**
- Formato → Texto sin formato

**Columna H (Numero_Invitados):**
- Formato → Número → 0 decimales

**Columna J (Fecha_Hora):**
- Formato → Texto sin formato
- Formato esperado: "24/10/2025 14:35:22"

---

## 🔢 PASO 4: GENERAR ID EN N8N

### **El ID será generado automáticamente por n8n:**

**Opciones de generación:**
1. UUID único: `crypto.randomUUID()`
2. Timestamp + Random: `Date.now() + Math.random()`
3. Incremental desde contador externo

**Recomendado:** Usar timestamp para mantener orden cronológico:
```javascript
const id = `MA-${Date.now()}`;
// Ejemplo: MA-1729785322145
```

---

## 📅 PASO 5: FORMATO DE FECHA Y HORA

### **Formato unificado:**

El formulario enviará la fecha en formato:
```
"24/10/2025 14:35:22"
```

**Formato completo:**
- Fecha: DD/MM/YYYY
- Hora: HH:MM:SS
- Separador: Espacio simple

**Generación en n8n:**
```javascript
const timestamp = new Date().toLocaleString('es-MX', {
  timeZone: 'America/Mexico_City',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});
// Resultado: "24/10/2025 14:35:22"
```

---

## 🎯 EJEMPLO DE DATOS

| ID |              Numero_Cliente | Nombre_Completo   | Telefono   | Codigo_Pais | Email             | Nombre_Promotor | Numero_Invitados | Categorias_Interes | Fecha_Hora |
|----              |--------       |-----------------  |----------  |-------------                    |-------        |---|------------------    |-------------------  |------------|
| MA-1729785322145 | 123456        | Juan Pérez García | 5512345678 | +52         | juan@example.com  | Pedro López   | 2 | Llantas, Lubricantes | 24/10/2025 14:35:22 |
| MA-1729785400230 | 789012        | María González    | 5598765432 | +52         | maria@example.com | Ana Martínez  | 0 | Cascos, Protecciones | 24/10/2025 15:20:10 |

---

## 🔐 PASO 6: PERMISOS DE COMPARTIR

### **Para conectar con n8n:**

1. Click en "Compartir" (esquina superior derecha)
2. En "Obtener enlace" → "Cualquier usuario con el enlace"
3. Cambiar a: **"Editor"** (para que n8n pueda escribir)
4. Copiar el ID de la hoja (está en la URL)

**URL de ejemplo:**
```
https://docs.google.com/spreadsheets/d/1ABC123xyz789DEF/edit

ID de la hoja: 1ABC123xyz789DEF
            ^^^^^^^^^^^^^^^^^^^
```

**⚠️ IMPORTANTE:** Guarda este ID, lo necesitarás en n8n.

---

## 📝 CAMPOS DEL FORMULARIO → COLUMNAS DE SHEETS

### **Mapeo de datos:**

| Campo Formulario | Columna Sheets | Procesamiento en n8n |
|------------------|----------------|---------------------|
| - | A (ID) | Generar UUID único |
| `numeroCliente` | B | Directo |
| `nombreCompleto` | C | Directo |
| `telefono` | D | Limpiar espacios/guiones, dejar 10 dígitos |
| `codigoPais` | E | Directo desde formulario |
| `correo` | F | Directo |
| `nombrePromotor` | G | Directo (puede ser null) |
| `numeroInvitados` | H | Directo (número) |
| `categoriasInteres` | I | Convertir array a string con comas |
| `fechaHora` | J | Generar en n8n con timezone México |

---

## 🚀 WORKFLOW N8N - ESQUEMA BÁSICO

### **Flujo recomendado:**

```
1. Webhook (Recibe datos del formulario)
   ↓
2. Code Node - Validation & Enrichment:
   - Validar campos obligatorios
   - Limpiar teléfono: quitar espacios, guiones → 10 dígitos
   - Generar ID único
   - Generar timestamp en formato México
   - Formatear teléfono para WhatsApp (+52 + 10 dígitos)
   - Convertir array categorías a string
   ↓
3. Google Sheets (Append Row - en paralelo)
   ↓
4. Respond.io - Create/Update Contact (en paralelo)
   ↓
5. Wait 2 seconds
   ↓
6. Respond.io - Send WhatsApp Template
   ↓
7. Respond to Webhook (return status)
```

---

## 💻 CÓDIGO N8N - VALIDATION & ENRICHMENT

### **Ejemplo de código JavaScript para el nodo de validación:**

```javascript
// Datos que vienen del webhook
const body = $json.body || $json;

// Validar campos obligatorios
const numeroCliente = body.numeroCliente;
const nombreCompleto = body.nombreCompleto;
const telefono = body.telefono;
const codigoPais = body.codigoPais;
const correo = body.correo;
const numeroInvitados = body.numeroInvitados;
const categoriasInteres = body.categoriasInteres;

if (!numeroCliente || !nombreCompleto || !telefono || !correo) {
  throw new Error(`Campos obligatorios faltantes`);
}

// Limpiar teléfono (quitar espacios, guiones, etc.)
const telefonoClean = telefono.toString().replace(/\D/g, '');

// Validar que tenga 10 dígitos
if (telefonoClean.length !== 10) {
  throw new Error(`Teléfono debe tener 10 dígitos. Recibido: ${telefonoClean}`);
}

// Generar ID único
const id = `MA-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

// Timestamp (hora de México)
const timestamp = new Date().toLocaleString('es-MX', {
  timeZone: 'America/Mexico_City',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});

// Formatear teléfono para WhatsApp
const telefonoWhatsApp = `${codigoPais}${telefonoClean}`;

// Convertir categorías de array a string
const categoriasString = Array.isArray(categoriasInteres)
  ? categoriasInteres.join(', ')
  : (categoriasInteres || 'No especificado');

// Dividir nombre para Respond.io
const nombreParts = nombreCompleto.split(' ');
const firstName = nombreParts[0] || nombreCompleto;
const lastName = nombreParts.slice(1).join(' ') || '';

// RETURN: Datos procesados
return {
  // Para Google Sheets
  id: id,
  numeroCliente: numeroCliente,
  nombreCompleto: nombreCompleto,
  telefono: telefonoClean,
  codigoPais: codigoPais,
  correo: correo,
  nombrePromotor: body.nombrePromotor || 'No especificado',
  numeroInvitados: numeroInvitados,
  categoriasInteres: categoriasString,
  fechaHora: timestamp,

  // Para WhatsApp y Respond.io
  telefonoWhatsApp: telefonoWhatsApp,
  firstName: firstName,
  lastName: lastName
};
```

---

## 📊 CONFIGURACIÓN DEL NODO GOOGLE SHEETS

### **Append Row - Mapeo de columnas:**

```javascript
{
  "ID": "={{ $json.id }}",
  "Numero_Cliente": "={{ $json.numeroCliente }}",
  "Nombre_Completo": "={{ $json.nombreCompleto }}",
  "Telefono": "={{ $json.telefono }}",
  "Codigo_Pais": "={{ $json.codigoPais }}",
  "Email": "={{ $json.correo }}",
  "Nombre_Promotor": "={{ $json.nombrePromotor }}",
  "Numero_Invitados": "={{ $json.numeroInvitados }}",
  "Categorias_Interes": "={{ $json.categoriasInteres }}",
  "Fecha_Hora": "={{ $json.fechaHora }}"
}
```

---

## 💡 VALIDACIONES ADICIONALES

### **Para evitar duplicados por número de cliente:**

**Columna K (Validación):**
```
=COUNTIF($B$2:B2, B2)
```

Si el resultado es > 1, hay un número de cliente duplicado.

**Formato condicional:**
```
Si K2 > 1 → Color rojo (alerta de duplicado)
```

---

## 📊 VISTA PREVIA DE LA HOJA

```
┌──────────────────┬────────────────┬─────────────────┬────────────┬─────────────┐
│ ID               │ Numero_Cliente │ Nombre_Completo │ Telefono   │ Codigo_Pais │
├──────────────────┼────────────────┼─────────────────┼────────────┼─────────────┤
│ MA-1729785322145 │ 123456         │ Juan Pérez      │ 5512345678 │ +52         │
│ MA-1729785400230 │ 789012         │ María González  │ 5598765432 │ +52         │
└──────────────────┴────────────────┴─────────────────┴────────────┴─────────────┘

┌──────────────────┬──────────────────┬──────────────────┬──────────────────────┐
│ Email            │ Nombre_Promotor  │ Numero_Invitados │ Categorias_Interes   │
├──────────────────┼──────────────────┼──────────────────┼──────────────────────┤
│ juan@example.com │ Pedro López      │ 2                │ Llantas, Lubricantes │
│ maria@example.com│ Ana Martínez     │ 0                │ Cascos, Protecciones │
└──────────────────┴──────────────────┴──────────────────┴──────────────────────┘

┌─────────────────────┐
│ Fecha_Hora          │
├─────────────────────┤
│ 24/10/2025 14:35:22 │
│ 24/10/2025 15:20:10 │
└─────────────────────┘
```

---

## ✅ CHECKLIST DE CONFIGURACIÓN

- [ ] Google Sheet creada
- [ ] Nombre correcto: "Myesa Academy 2025 - Registros"
- [ ] Pestaña "Registros" creada
- [ ] 10 columnas configuradas (A-J)
- [ ] Headers formateados (fila 1)
- [ ] Fila 1 inmovilizada
- [ ] Formatos aplicados a columnas
- [ ] Permisos de "Editor" habilitados
- [ ] ID de la hoja copiado y guardado
- [ ] (Opcional) Columna de validación de duplicados agregada

---

## 🎯 SIGUIENTE PASO: CONFIGURAR N8N

Una vez que tengas Google Sheets configurado:

1. Importar workflow de referencia en n8n
2. Actualizar webhook URL
3. Conectar Google Sheets credential
4. Actualizar ID de la hoja de cálculo
5. Conectar Respond.io credential
6. Probar con datos de prueba
7. Activar workflow

---

## 📞 SOPORTE

**Documentación de Google Sheets:**
https://support.google.com/docs/answer/6000292

**Documentación de n8n con Google Sheets:**
https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/

**Documentación de Respond.io:**
https://docs.respond.io/

---

**Creado para:** Myesa Academy 2025
**Proyecto:** Landing Page con formulario de registro
**Fecha:** Octubre 2025
