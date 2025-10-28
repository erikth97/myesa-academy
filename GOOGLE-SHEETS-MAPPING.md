# MAPEO DE DATOS: FORMULARIO → n8n → GOOGLE SHEETS

## Estructura de Columnas en Google Sheets

```
ID | Numero_Cliente | Nombre_Completo | Telefono | Codigo_Pais | Email | Estado | Nombre_Promotor | Categorias_Interes | Fecha_Hora
```

---

## Mapeo Completo de Campos

| # | Columna Google Sheets | Campo Payload (n8n) | Campo Formulario | Tipo | Requerido | Ejemplo |
|---|----------------------|---------------------|------------------|------|-----------|---------|
| 1 | **ID** | (auto-generado) | - | Number | ✅ Auto | 1, 2, 3... |
| 2 | **Numero_Cliente** | `numeroCliente` | `clientNumber` | String | ✅ Sí | "12345" |
| 3 | **Nombre_Completo** | `nombreCompleto` | `fullName` | String | ✅ Sí | "Juan Pérez García" |
| 4 | **Telefono** | `telefono` | `phone` | String | ✅ Sí | "5512345678" |
| 5 | **Codigo_Pais** | `codigoPais` | `countryCode` | String | ✅ Sí | "+52" o "+1" |
| 6 | **Email** | `email` | `email` | String | ✅ Sí | "juan@example.com" |
| 7 | **Estado** | `estado` | `state` | String | ✅ Sí | "Ciudad de México" |
| 8 | **Nombre_Promotor** | `nombrePromotor` | `promoterName` | String | ✅ Sí | "ALEJANDRO PIÑA" |
| 9 | **Categorias_Interes** | `categoriasInteres` | `categories` | Array/Null | ❌ No | ["Llantas", "Lubricantes"] o `null` |
| 10 | **Fecha_Hora** | `fechaHora` | (auto-generado) | String | ✅ Auto | "27/10/2025 14:30:45" |

---

## Payload JSON Enviado a n8n

### Ejemplo completo:
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

### Ejemplo sin categorías opcionales:
```json
{
  "numeroCliente": "67890",
  "nombreCompleto": "María López Martínez",
  "telefono": "5598765432",
  "codigoPais": "+52",
  "email": "maria.lopez@example.com",
  "estado": "Nuevo León",
  "nombrePromotor": "SERGIO AARON CARDENAS GARCIA",
  "categoriasInteres": null,
  "fechaHora": "27/10/2025 15:45:30"
}
```

---

## Validaciones de Campos

### Campos Requeridos (7):
1. **numeroCliente**: Solo dígitos
2. **nombreCompleto**: Mínimo 2 palabras (nombre + apellido)
3. **telefono**: Exactamente 10 dígitos
4. **email**: Formato válido de email
5. **estado**: Debe seleccionar uno de los 32 estados de México
6. **nombrePromotor**: Debe seleccionar uno de los 17 promotores predefinidos
7. **privacyAccepted**: Debe aceptar el aviso de privacidad

### Campos Opcionales (1):
8. **categoriasInteres**: Multi-select con 8 categorías (puede quedar vacío)

### Campos Auto-generados (2):
- **ID**: Generado por Google Sheets (auto-incremento)
- **fechaHora**: Generado en el momento del submit (formato: DD/MM/YYYY HH:mm:ss)

---

## Opciones de Campos

### Estado (32 opciones):
```
Aguascalientes, Baja California, Baja California Sur, Campeche, Chiapas,
Chihuahua, Ciudad de México, Coahuila, Colima, Durango, Estado de México,
Guanajuato, Guerrero, Hidalgo, Jalisco, Michoacán, Morelos, Nayarit,
Nuevo León, Oaxaca, Puebla, Querétaro, Quintana Roo, San Luis Potosí,
Sinaloa, Sonora, Tabasco, Tamaulipas, Tlaxcala, Veracruz, Yucatán, Zacatecas
```

### Código País (2 opciones):
```
+52 (México)
+1 (USA)
```

### Promotores (17 opciones):
```
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
```

### Categorías de Interés (8 opciones):
```
1. Llantas
2. Lubricantes y Aditivos
3. Partes y Refacciones
4. Baterías
5. Accesorios y Equipamiento
6. Cascos y Protecciones
7. Rencauchado
8. Todas las anteriores
```

---

## Configuración de n8n

### Webhook URL:
```
https://n8n.srv977744.hstgr.cloud/webhook/db3ace62-a88f-4c17-ad00-a8aa4d0f7fa0
```

### Método:
```
POST
```

### Headers:
```json
{
  "Content-Type": "application/json"
}
```

---

## Notas Importantes para n8n

### 1. Campos Null
- `categoriasInteres` puede ser `null` si el usuario no selecciona ninguna categoría
- n8n debe manejar estos casos y guardar celdas vacías en Google Sheets
- **IMPORTANTE:** `nombrePromotor` ahora es campo REQUERIDO, siempre tendrá un valor

### 2. Array de Categorías
- `categoriasInteres` es un array de strings: `["Llantas", "Lubricantes y Aditivos"]`
- Para Google Sheets, se recomienda convertir a string separado por comas:
  ```
  Array: ["Llantas", "Lubricantes y Aditivos"]
  → String: "Llantas, Lubricantes y Aditivos"
  ```

### 3. Formato de Fecha
- `fechaHora` viene en formato: `DD/MM/YYYY HH:mm:ss`
- Ejemplo: `27/10/2025 14:30:45`
- Usar zona horaria: America/Mexico_City (GMT-6)

### 4. Validación de Duplicados
- El formulario permite 1 registro por persona
- Se recomienda validar duplicados por:
  - `numeroCliente` + `email` (único por combinación)
  - O por `email` solamente

### 5. ID Auto-incrementado
- Google Sheets debe generar el ID automáticamente
- Puede ser una columna con fórmula: `=ROW()-1` (si la fila 1 es el header)

---

## Ejemplo de Fila en Google Sheets

```
| ID | Numero_Cliente | Nombre_Completo      | Telefono   | Codigo_Pais | Email              | Estado           | Nombre_Promotor            | Categorias_Interes              | Fecha_Hora          |
|----|----------------|----------------------|------------|-------------|--------------------|------------------|----------------------------|---------------------------------|---------------------|
| 1  | 12345          | Juan Pérez García    | 5512345678 | +52         | juan@example.com   | Ciudad de México | ALEJANDRO ROBERTO PIÑA     | Llantas, Lubricantes y Aditivos | 27/10/2025 14:30:45 |
| 2  | 67890          | María López Martínez | 5598765432 | +52         | maria@example.com  | Nuevo León       | SERGIO AARON CARDENAS      |                                 | 27/10/2025 15:45:30 |
```

---

## Troubleshooting

### Error: Campo faltante
- **Solución**: Verificar que todos los campos requeridos estén presentes en el payload
- Campos requeridos: `numeroCliente`, `nombreCompleto`, `telefono`, `codigoPais`, `email`, `estado`, `fechaHora`

### Error: Formato de categorías
- **Problema**: n8n recibe array `["Llantas", "Lubricantes"]`
- **Solución**: Convertir a string en n8n antes de guardar:
  ```javascript
  const categoriasString = categoriasInteres ? categoriasInteres.join(', ') : '';
  ```

### Error: Caracteres especiales
- **Problema**: Nombres con acentos o caracteres especiales
- **Solución**: El payload ya está en UTF-8, n8n debe preservar el encoding

---

## Última actualización
**Fecha**: 27/10/2025
**Versión**: 1.0
**Responsable**: Frontend - Myesa Academy 2025
