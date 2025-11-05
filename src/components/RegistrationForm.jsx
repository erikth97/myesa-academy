import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import bgForm from '../assets/form_section/FormularioFondo1.png';
import arrowSubtitle from '../assets/arrow_subtitle.svg';
import sendIcon from '../assets/form_section/send_icon.svg';
import SuccessPopup from './SuccessPopup';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    clientNumber: '',
    fullName: '',
    countryCode: '+52',
    phone: '',
    email: '',
    state: '',
    promoterName: '',
    categories: [],
    privacyAccepted: false
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const estados = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Ciudad de México',
    'Coahuila',
    'Colima',
    'Durango',
    'Estado de México',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'Michoacán',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosí',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas'
  ];

  const promotores = [
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

  const categories = [
    'Llantas',
    'Lubricantes y Aditivos',
    'Partes y Refacciones',
    'Baterías',
    'Accesorios y Equipamiento',
    'Cascos',
    'Iluminacion',
    'Todas las anteriores'
  ];

  // Validation patterns
  const patterns = {
    clientNumber: /^\d+$/,
    fullName: /^[A-Za-zÀ-ÿ\s]+\s+[A-Za-zÀ-ÿ\s]+$/,
    phone: /^\d{10}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  };

  // Validation messages
  const validationMessages = {
    clientNumber: 'El número de cliente debe contener solo dígitos',
    fullName: 'Debe contener nombre y apellido completo',
    phone: 'El teléfono debe tener exactamente 10 dígitos',
    email: 'El formato de correo electrónico no es válido',
    state: 'Debes seleccionar un estado',
    promoterName: 'Debes seleccionar un promotor',
    privacyAccepted: 'Debes aceptar el aviso de privacidad'
  };

  // Validate individual field
  const validateField = (name, value) => {
    if (name === 'clientNumber' || name === 'fullName' || name === 'phone' || name === 'email' || name === 'state' || name === 'promoterName') {
      if (!value) {
        return validationMessages[name] || 'Este campo es requerido';
      }
      if (patterns[name] && !patterns[name].test(value)) {
        return validationMessages[name];
      }
    }

    if (name === 'privacyAccepted' && !value) {
      return validationMessages.privacyAccepted;
    }

    return '';
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, fieldValue);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  // Handle blur
  const handleBlur = (name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Handle category selection
  const handleCategoryToggle = (category) => {
    if (category === 'Todas las anteriores') {
      setFormData(prev => ({
        ...prev,
        categories: prev.categories.length === categories.length ? [] : [...categories]
      }));
    } else {
      setFormData(prev => {
        const newCategories = prev.categories.includes(category)
          ? prev.categories.filter(c => c !== category && c !== 'Todas las anteriores')
          : [...prev.categories.filter(c => c !== 'Todas las anteriores'), category];
        return { ...prev, categories: newCategories };
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields
    const newErrors = {};
    ['clientNumber', 'fullName', 'phone', 'email', 'state', 'promoterName', 'privacyAccepted'].forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    // Mark all fields as touched
    setTouched({
      clientNumber: true,
      fullName: true,
      phone: true,
      email: true,
      state: true,
      promoterName: true,
      privacyAccepted: true
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Crear fecha y hora formateada para n8n
      const now = new Date();
      const formatoFecha = now.toLocaleDateString('es-MX', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      const formatoHora = now.toLocaleTimeString('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      const fechaHora = `${formatoFecha} ${formatoHora}`;

      // Construir payload para n8n (mapea a columnas de Google Sheets)
      const payload = {
        numeroCliente: formData.clientNumber,
        nombreCompleto: formData.fullName,
        telefono: formData.phone,
        codigoPais: formData.countryCode,
        email: formData.email,
        estado: formData.state,
        nombrePromotor: formData.promoterName,
        categoriasInteres: formData.categories.length > 0 ? formData.categories : null,
        fechaHora
      };

      // PRODUCCIÓN: Enviar a n8n webhook
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL || 'YOUR_N8N_WEBHOOK_URL';

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      // Si llegamos aquí, el envío fue exitoso
      setSubmitStatus('success');
      setShowSuccessPopup(true);

      // Reset form
      setFormData({
        clientNumber: '',
        fullName: '',
        countryCode: '+52',
        phone: '',
        email: '',
        state: '',
        promoterName: '',
        categories: [],
        privacyAccepted: false
      });
      setTouched({});
      setErrors({});

    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Manejar cierre del popup
  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setSubmitStatus(null);
  };

  return (
    <section
      className="relative overflow-hidden py-16 md:py-[70px] lg:py-[70px] px-4 md:px-8 lg:px-[95px]"
      style={{
        background: 'linear-gradient(180deg, #070707 0%, #0f0f0f 15%, #1A1A1A 30%, #403B3A 100%)'
      }}
    >
      <div className="relative z-10 flex flex-col items-center gap-10 lg:gap-[55px]" style={{ maxWidth: '1090px', margin: '0 auto' }}>

        {/* Title */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-10 lg:w-11 lg:h-11 animate-float-arrow">
            <img
              src={arrowSubtitle}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="font-sharp text-myesa-white-2 uppercase text-center text-2xl md:text-2xl lg:text-4xl" style={{ fontWeight: 500, lineHeight: 'normal', letterSpacing: '-0.72px' }}>
            ¡Regístrate!
          </h2>
        </div>

        {/* Disclaimer */}
        <div className="flex items-center justify-center -mt-6 lg:-mt-8">
          <p className="font-work text-myesa-white-2 text-center text-sm md:text-base lg:text-lg" style={{ fontWeight: 600 }}>
            Kit de bienvenida limitado a los primeros <span className="text-myesa-orange">265</span> registrados
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full" style={{ maxWidth: '765px' }}>
          <form
            onSubmit={handleSubmit}
            className="relative bg-white rounded-2xl border border-myesa-gray-5 p-6 md:p-8 lg:p-12 overflow-hidden"
            style={{
              boxShadow: '0 20px 20px 0 rgba(0, 0, 0, 0.04), 0 4px 3.25px 0 rgba(0, 0, 0, 0.02)'
            }}
          >
            {/* Background Image inside form */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                backgroundImage: `url(${bgForm})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.65,
                zIndex: 0
              }}
            />
            {/* Form Title */}
            <h3 className="relative font-work font-semibold text-myesa-black text-center mb-4" style={{ fontSize: '22px', lineHeight: '32px', zIndex: 1 }}>
              Llena los siguientes campos
            </h3>

            <div className="relative h-px bg-myesa-gray-5 mb-6" style={{ zIndex: 1 }}></div>

            {/* Form Fields Container */}
            <div className="relative max-w-[520px] mx-auto" style={{ zIndex: 1 }}>

          {/* Client Number */}
          <div className="mb-6">
            <label htmlFor="clientNumber" className="block font-work text-myesa-black mb-2" style={{ fontSize: '14px', fontWeight: 600 }}>
              No. de Cliente
            </label>
            <input
              type="text"
              id="clientNumber"
              name="clientNumber"
              value={formData.clientNumber}
              onChange={handleChange}
              onBlur={() => handleBlur('clientNumber')}
              placeholder="Ingresa tu número de cliente"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.clientNumber && touched.clientNumber
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-myesa-gray-5 focus:border-myesa-orange'
              } focus:outline-none transition-colors font-work text-[16px]`}
            />
            {errors.clientNumber && touched.clientNumber && (
              <p className="text-red-500 text-sm mt-1 font-work">{errors.clientNumber}</p>
            )}
          </div>

          {/* Full Name */}
          <div className="mb-6">
            <label htmlFor="fullName" className="block font-work text-myesa-black mb-2" style={{ fontSize: '14px', fontWeight: 600 }}>
              Nombre Completo
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={() => handleBlur('fullName')}
              placeholder="Nombre y apellido"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.fullName && touched.fullName
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-myesa-gray-5 focus:border-myesa-orange'
              } focus:outline-none transition-colors font-work text-[16px]`}
            />
            {errors.fullName && touched.fullName && (
              <p className="text-red-500 text-sm mt-1 font-work">{errors.fullName}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="phone" className="block font-work text-myesa-black mb-2" style={{ fontSize: '14px', fontWeight: 600 }}>
              Número de teléfono (WhatsApp)
            </label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-myesa-gray-5 focus:border-myesa-orange focus:outline-none font-work text-[16px] bg-white"
              >
                <option value="+52">🇲🇽 +52</option>
                <option value="+1">🇺🇸 +1</option>
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur('phone')}
                placeholder="10 dígitos"
                maxLength="10"
                className={`flex-1 px-4 py-3 rounded-lg border ${
                  errors.phone && touched.phone
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-myesa-gray-5 focus:border-myesa-orange'
                } focus:outline-none transition-colors font-work text-[16px]`}
              />
            </div>
            {errors.phone && touched.phone && (
              <p className="text-red-500 text-sm mt-1 font-work">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block font-work text-myesa-black mb-2" style={{ fontSize: '14px', fontWeight: 600 }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              placeholder="tu@correo.com"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email && touched.email
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-myesa-gray-5 focus:border-myesa-orange'
              } focus:outline-none transition-colors font-work text-[16px]`}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-1 font-work">{errors.email}</p>
            )}
          </div>

          {/* Estado */}
          <div className="mb-6">
            <label htmlFor="state" className="block font-work text-myesa-black mb-2" style={{ fontSize: '14px', fontWeight: 600 }}>
              Estado
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              onBlur={() => handleBlur('state')}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.state && touched.state
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-myesa-gray-5 focus:border-myesa-orange'
              } focus:outline-none transition-colors font-work text-[16px] bg-white`}
            >
              <option value="">Selecciona tu estado</option>
              {estados.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
            {errors.state && touched.state && (
              <p className="text-red-500 text-sm mt-1 font-work">{errors.state}</p>
            )}
          </div>

          {/* Promoter Name */}
          <div className="mb-6">
            <label htmlFor="promoterName" className="block font-work text-myesa-black mb-2" style={{ fontSize: '14px', fontWeight: 600 }}>
              Nombre de tu promotor
            </label>
            <select
              id="promoterName"
              name="promoterName"
              value={formData.promoterName}
              onChange={handleChange}
              onBlur={() => handleBlur('promoterName')}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.promoterName && touched.promoterName
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-myesa-gray-5 focus:border-myesa-orange'
              } focus:outline-none transition-colors font-work text-[16px] bg-white`}
            >
              <option value="">Selecciona tu promotor MYESA</option>
              {promotores.map((promotor) => (
                <option key={promotor} value={promotor}>
                  {promotor}
                </option>
              ))}
            </select>
            {errors.promoterName && touched.promoterName && (
              <p className="text-red-500 text-sm mt-1 font-work">{errors.promoterName}</p>
            )}
          </div>

          {/* Categories Multi-Select */}
          <div className="mb-6">
            <label className="block font-work text-myesa-black mb-2" style={{ fontSize: '14px', fontWeight: 600 }}>
              Categorías de Interés (Opcional)
            </label>
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full px-4 py-3 rounded-lg border border-myesa-gray-5 focus:border-myesa-orange focus:outline-none transition-colors font-work text-[16px] text-left flex items-center justify-between bg-white"
              >
                <span className={formData.categories.length > 0 ? 'text-myesa-black' : 'text-myesa-gray-2'}>
                  {formData.categories.length > 0
                    ? `${formData.categories.length} categoría${formData.categories.length > 1 ? 's' : ''} seleccionada${formData.categories.length > 1 ? 's' : ''}`
                    : 'Selecciona categorías'}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-myesa-black transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute z-50 w-full mt-2 bg-white border border-myesa-gray-5 rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] max-h-[156px] overflow-y-auto scrollbar-thin">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-myesa-bg cursor-pointer transition-colors border-b border-myesa-gray-5 last:border-b-0"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryToggle(category);
                      }}
                    >
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={formData.categories.includes(category)}
                          onChange={() => {}}
                          onClick={(e) => e.stopPropagation()}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          formData.categories.includes(category)
                            ? 'bg-myesa-orange border-myesa-orange'
                            : 'border-myesa-gray-5'
                        }`}>
                          {formData.categories.includes(category) && (
                            <Check size={14} className="text-white" strokeWidth={3} />
                          )}
                        </div>
                      </div>
                      <span className="font-work text-myesa-black text-[14px]">{category}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Descripción importante */}
          <div className="mb-6">
            <p className="font-work text-myesa-black text-center text-[14px]">
              *Solo se permite 1 registro por persona. Si vienes con acompañantes, regístralos por separado usando el mismo No. de Cliente
            </p>
          </div>

          {/* Privacy Checkbox */}
          <div className="mb-8">
            <div className="flex flex-col items-center gap-3">
              {/* Texto centrado con checkbox a la derecha */}
              <div className="font-work text-center text-[16px] leading-relaxed">
                <label htmlFor="privacyAccepted" className="cursor-pointer inline-flex items-center gap-2">
                  <span className="text-myesa-black">
                    He leído y acepto el{' '}
                    <a
                      href="https://www.motosyequipos.com/Nosotros/proteccion-datos.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#0094FF] underline hover:text-[#0077CC] transition-colors"
                    >
                      aviso de privacidad
                    </a>
                  </span>

                  {/* Checkbox inline a la derecha */}
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      id="privacyAccepted"
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleChange}
                      onBlur={() => handleBlur('privacyAccepted')}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      formData.privacyAccepted
                        ? 'bg-myesa-orange border-myesa-orange'
                        : errors.privacyAccepted && touched.privacyAccepted
                        ? 'border-red-500'
                        : 'border-myesa-gray-5'
                    }`}>
                      {formData.privacyAccepted && (
                        <Check size={14} className="text-white" strokeWidth={3} />
                      )}
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {errors.privacyAccepted && touched.privacyAccepted && (
              <p className="text-red-500 text-sm mt-1 text-center font-work">{errors.privacyAccepted}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:border-[1.5px] hover:border-[#FF9248] active:bg-[#A52700]"
              style={{
                width: '320px',
                padding: '8px',
                gap: '10px',
                borderRadius: '20px',
                background: '#FF3A00',
                boxShadow: '0 4px 8px 0 rgba(255, 58, 0, 0.25)'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = '#D93201';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = '#FF3A00';
                }
              }}
            >
              <span className="font-work font-semibold text-white uppercase text-base">
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </span>
              {!isSubmitting && (
                <img src={sendIcon} alt="" className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Error Message (solo error, success ahora es popup) */}
          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-work text-center">
                Hubo un error al procesar tu registro. Por favor, intenta nuevamente.
              </p>
            </div>
          )}

            </div>
            {/* End Form Fields Container */}
          </form>
        </div>
      </div>

      {/* Success Popup */}
      <SuccessPopup isOpen={showSuccessPopup} onClose={handleClosePopup} />
    </section>
  );
}
