import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    nombreNegocio: '',
    noCliente: '',
    nombrePromotor: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Validar campo individual
  const validateField = (name, value) => {
    if (!value.trim()) {
      return 'Este campo es obligatorio';
    }

    if (value.trim().length < 2) {
      return 'Debe tener al menos 2 caracteres';
    }

    if (name === 'noCliente' && !/^[a-zA-Z0-9]+$/.test(value)) {
      return 'Solo se permiten letras y números';
    }

    return '';
  };

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validar en tiempo real si el campo ya fue tocado
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  // Manejar blur (cuando el usuario sale del campo)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Manejar submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar todos los campos
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    // Marcar todos los campos como tocados
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Si hay errores, no enviar
    if (Object.keys(newErrors).some(key => newErrors[key])) {
      setErrors(newErrors);
      return;
    }

    // Simular envío
    setIsSubmitting(true);

    try {
      // Aquí conectarías con tu backend
      await new Promise(resolve => setTimeout(resolve, 1500));

      // En producción:
      /*
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Error al registrar');
      */

      // Resetear formulario
      setFormData({
        nombre: '',
        nombreNegocio: '',
        noCliente: '',
        nombrePromotor: ''
      });
      setErrors({});
      setTouched({});
      setShowSuccess(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Error al registrar. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="registro" className="bg-gradient-to-b from-[#070707] via-myesa-black to-myesa-gray-1 py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-11 h-11">
              <img
                src="https://www.figma.com/api/mcp/asset/4df7d091-fbcf-42d8-ad17-120955ba6803"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="font-sharp text-myesa-white-2 uppercase">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium">¡Regístrate!</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="relative bg-white bg-opacity-95 rounded-lg px-6 md:px-12 lg:px-16 py-10 md:py-12">
            {/* Imagen de fondo del formulario */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <img
                src="https://www.figma.com/api/mcp/asset/1ddce0e2-5142-4dbc-be81-824a5103092c"
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <form onSubmit={handleSubmit} className="relative space-y-6" noValidate>
              {/* Campo: Nombre */}
              <div className="flex flex-col">
                <label htmlFor="nombre" className="font-work font-semibold text-myesa-gray-1 text-base mb-3">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`bg-myesa-white rounded-sm h-9 px-4 text-myesa-black font-work transition-all duration-300 border-2 ${
                    errors.nombre && touched.nombre ? 'border-red-500' : 'border-transparent focus:border-myesa-orange'
                  }`}
                  required
                  aria-required="true"
                  aria-invalid={errors.nombre && touched.nombre ? 'true' : 'false'}
                />
                {errors.nombre && touched.nombre && (
                  <span className="text-red-600 font-work font-medium text-sm mt-1">{errors.nombre}</span>
                )}
              </div>

              {/* Campo: Nombre negocio */}
              <div className="flex flex-col">
                <label htmlFor="nombreNegocio" className="font-work font-semibold text-myesa-gray-1 text-base mb-3">
                  Nombre negocio
                </label>
                <input
                  type="text"
                  id="nombreNegocio"
                  name="nombreNegocio"
                  value={formData.nombreNegocio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`bg-myesa-white rounded-sm h-9 px-4 text-myesa-black font-work transition-all duration-300 border-2 ${
                    errors.nombreNegocio && touched.nombreNegocio ? 'border-red-500' : 'border-transparent focus:border-myesa-orange'
                  }`}
                  required
                  aria-required="true"
                  aria-invalid={errors.nombreNegocio && touched.nombreNegocio ? 'true' : 'false'}
                />
                {errors.nombreNegocio && touched.nombreNegocio && (
                  <span className="text-red-600 font-work font-medium text-sm mt-1">{errors.nombreNegocio}</span>
                )}
              </div>

              {/* Campo: No Cliente */}
              <div className="flex flex-col">
                <label htmlFor="noCliente" className="font-work font-semibold text-myesa-gray-1 text-base mb-3">
                  No Cliente
                </label>
                <input
                  type="text"
                  id="noCliente"
                  name="noCliente"
                  value={formData.noCliente}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`bg-myesa-white rounded-sm h-9 px-4 text-myesa-black font-work transition-all duration-300 border-2 ${
                    errors.noCliente && touched.noCliente ? 'border-red-500' : 'border-transparent focus:border-myesa-orange'
                  }`}
                  required
                  aria-required="true"
                  aria-invalid={errors.noCliente && touched.noCliente ? 'true' : 'false'}
                />
                {errors.noCliente && touched.noCliente && (
                  <span className="text-red-600 font-work font-medium text-sm mt-1">{errors.noCliente}</span>
                )}
              </div>

              {/* Campo: Nombre del promotor */}
              <div className="flex flex-col">
                <label htmlFor="nombrePromotor" className="font-work font-semibold text-myesa-gray-1 text-base mb-3">
                  Nombre del promotor
                </label>
                <input
                  type="text"
                  id="nombrePromotor"
                  name="nombrePromotor"
                  value={formData.nombrePromotor}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`bg-myesa-white rounded-sm h-9 px-4 text-myesa-black font-work transition-all duration-300 border-2 ${
                    errors.nombrePromotor && touched.nombrePromotor ? 'border-red-500' : 'border-transparent focus:border-myesa-orange'
                  }`}
                  required
                  aria-required="true"
                  aria-invalid={errors.nombrePromotor && touched.nombrePromotor ? 'true' : 'false'}
                />
                {errors.nombrePromotor && touched.nombrePromotor && (
                  <span className="text-red-600 font-work font-medium text-sm mt-1">{errors.nombrePromotor}</span>
                )}
              </div>

              {/* Nota */}
              <div className="pt-2">
                <p className="font-work font-medium text-myesa-gray-1 text-sm">
                  *Solo se permite 1 registro por persona
                </p>
              </div>
            </form>

            {/* Sombra decorativa */}
            <div className="mt-8 w-full h-10 opacity-30">
              <img
                src="https://www.figma.com/api/mcp/asset/50840f4c-7562-4c56-adaf-2f2522181b10"
                alt=""
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>

            {/* Botón Submit */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-myesa-orange border border-myesa-orange-light rounded-full px-8 py-4 flex items-center gap-3 hover:bg-myesa-orange-light transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="font-work font-semibold text-myesa-white uppercase text-base">
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </span>
                {isSubmitting ? (
                  <div className="spinner"></div>
                ) : (
                  <svg className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                    <path d="M0 10L20 10M20 10L10 0M20 10L10 20" stroke="#E7E7E7" strokeWidth="2"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup de éxito */}
      {showSuccess && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
            onClick={() => setShowSuccess(false)}
          ></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl shadow-2xl z-[1000] max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="font-sharp text-2xl font-bold text-myesa-black mb-2">¡Registro exitoso!</h3>
              <p className="font-work text-myesa-gray-1 mb-6">Gracias por registrarte a Myesa Academy 2025. Pronto recibirás un correo de confirmación.</p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-myesa-orange text-white px-6 py-2 rounded-full font-work font-semibold hover:bg-myesa-orange-light transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
