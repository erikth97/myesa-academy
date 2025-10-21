import { useState } from 'react';
import arrowSubtitle from '../assets/arrow_subtitle.svg';
import bgForm from '../assets/form_section/Bg-form.png';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    noCliente: '',
    nombre: '',
    telefono: '',
    email: '',
    nombrePromotor: '',
    invitados: '',
    categorias: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Validar campo individual
  const validateField = (name, value) => {
    if (name === 'categorias' || name === 'invitados') {
      return ''; // Opcional
    }

    if (!value.trim()) {
      return 'Este campo es obligatorio';
    }

    if (value.trim().length < 2) {
      return 'Debe tener al menos 2 caracteres';
    }

    if (name === 'noCliente' && !/^[a-zA-Z0-9]+$/.test(value)) {
      return 'Solo se permiten letras y números';
    }

    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Email inválido';
    }

    if (name === 'telefono' && !/^[0-9]{10}$/.test(value.replace(/\s/g, ''))) {
      return 'Teléfono debe tener 10 dígitos';
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
        noCliente: '',
        nombre: '',
        telefono: '',
        email: '',
        nombrePromotor: '',
        invitados: '',
        categorias: ''
      });
      setErrors({});
      setTouched({});
      setAcceptedTerms(false);
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
      <section id="registro" className="bg-gradient-to-b from-[#070707] via-[24%] via-myesa-black to-myesa-gray-1 py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-24">
        <div className="max-w-2xl mx-auto">
          {/* Título */}
          <div className="flex items-center justify-center gap-4 mb-12 lg:mb-14">
            <div className="w-10 h-10 lg:w-11 lg:h-11">
              <img
                src={arrowSubtitle}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="font-sharp text-myesa-white-2 uppercase">
              <p className="text-xl md:text-2xl lg:text-4xl font-medium leading-none">¡Regístrate!</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="relative bg-white bg-opacity-95 rounded-2xl border border-myesa-gray-4 px-6 md:px-10 py-8 md:py-10">
            {/* Imagen de fondo del formulario */}
            <div className="absolute inset-0 opacity-5 pointer-events-none rounded-2xl">
              <img
                src={bgForm}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Título del formulario */}
            <h3 className="relative font-work font-semibold text-myesa-gray-1 text-lg md:text-2xl mb-4 text-center">
              Llena los siguientes campos
            </h3>

            <div className="relative h-px bg-myesa-gray-4 mb-6"></div>

            <form onSubmit={handleSubmit} className="relative space-y-4 md:space-y-5" noValidate>
              {/* Campo: No. de Cliente */}
              <div className="flex flex-col">
                <label htmlFor="noCliente" className="font-work font-medium text-myesa-gray-2 text-xs mb-1">
                  No. de Cliente
                </label>
                <input
                  type="text"
                  id="noCliente"
                  name="noCliente"
                  value={formData.noCliente}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="403001"
                  className={`bg-white border rounded-md h-10 px-2 text-myesa-gray-1 font-work text-sm transition-all duration-300 ${
                    errors.noCliente && touched.noCliente ? 'border-red-500' : 'border-myesa-gray-4 focus:border-myesa-orange focus:outline-none'
                  }`}
                  required
                  aria-required="true"
                  aria-invalid={errors.noCliente && touched.noCliente ? 'true' : 'false'}
                />
                {errors.noCliente && touched.noCliente && (
                  <span className="text-red-600 font-work font-medium text-xs mt-1">{errors.noCliente}</span>
                )}
              </div>

              {/* Campo: Nombre Completo */}
              <div className="flex flex-col">
                <label htmlFor="nombre" className="font-work font-medium text-myesa-gray-2 text-xs mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Eunice Perez"
                  className={`bg-white border rounded-md h-10 px-2 text-myesa-gray-1 font-work text-sm transition-all duration-300 ${
                    errors.nombre && touched.nombre ? 'border-red-500' : 'border-myesa-gray-4 focus:border-myesa-orange focus:outline-none'
                  }`}
                  required
                  aria-required="true"
                  aria-invalid={errors.nombre && touched.nombre ? 'true' : 'false'}
                />
                {errors.nombre && touched.nombre && (
                  <span className="text-red-600 font-work font-medium text-xs mt-1">{errors.nombre}</span>
                )}
              </div>

              {/* Campo: Número de teléfono (Obligatorio) */}
              <div className="flex flex-col">
                <label htmlFor="telefono" className="font-work font-medium text-myesa-gray-2 text-xs mb-1">
                  Número de teléfono (Obligatorio)
                </label>
                <div className="flex gap-1">
                  <input
                    type="text"
                    value="+91"
                    disabled
                    className="bg-white border border-myesa-gray-4 rounded-md h-10 px-2 text-myesa-gray-1 font-work text-sm w-12 text-center"
                  />
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="9876543210"
                    className={`flex-1 bg-white border rounded-md h-10 px-2 text-myesa-gray-1 font-work text-sm transition-all duration-300 ${
                      errors.telefono && touched.telefono ? 'border-red-500' : 'border-myesa-gray-4 focus:border-myesa-orange focus:outline-none'
                    }`}
                    required
                    aria-required="true"
                    aria-invalid={errors.telefono && touched.telefono ? 'true' : 'false'}
                  />
                </div>
                {errors.telefono && touched.telefono && (
                  <span className="text-red-600 font-work font-medium text-xs mt-1">{errors.telefono}</span>
                )}
              </div>

              {/* Campo: Email (Obligatorio) */}
              <div className="flex flex-col">
                <label htmlFor="email" className="font-work font-medium text-myesa-gray-2 text-xs mb-1">
                  Email (Obligatorio)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="eunice.refacciones@email.com"
                  className={`bg-white border rounded-md h-10 px-2 text-myesa-gray-1 font-work text-sm transition-all duration-300 ${
                    errors.email && touched.email ? 'border-red-500' : 'border-myesa-gray-4 focus:border-myesa-orange focus:outline-none'
                  }`}
                  required
                  aria-required="true"
                  aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                />
                {errors.email && touched.email && (
                  <span className="text-red-600 font-work font-medium text-xs mt-1">{errors.email}</span>
                )}
              </div>

              {/* Campo: Nombre de tu promotor */}
              <div className="flex flex-col">
                <label htmlFor="nombrePromotor" className="font-work font-medium text-myesa-gray-2 text-xs mb-1">
                  Nombre de tu promotor
                </label>
                <input
                  type="text"
                  id="nombrePromotor"
                  name="nombrePromotor"
                  value={formData.nombrePromotor}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Lia Refacciones"
                  className={`bg-white border rounded-md h-10 px-2 text-myesa-gray-1 font-work text-sm transition-all duration-300 ${
                    errors.nombrePromotor && touched.nombrePromotor ? 'border-red-500' : 'border-myesa-gray-4 focus:border-myesa-orange focus:outline-none'
                  }`}
                  required
                  aria-required="true"
                  aria-invalid={errors.nombrePromotor && touched.nombrePromotor ? 'true' : 'false'}
                />
                {errors.nombrePromotor && touched.nombrePromotor && (
                  <span className="text-red-600 font-work font-medium text-xs mt-1">{errors.nombrePromotor}</span>
                )}
              </div>

              {/* Campo: ¿Cuántos invitados llevarás? (0-4) */}
              <div className="flex flex-col">
                <label htmlFor="invitados" className="font-work font-medium text-myesa-gray-2 text-xs mb-1">
                  ¿Cuántos invitados llevarás? (0-4)
                </label>
                <input
                  type="number"
                  id="invitados"
                  name="invitados"
                  value={formData.invitados}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="2"
                  min="0"
                  max="4"
                  className="bg-white border border-myesa-gray-4 rounded-md h-10 px-2 text-myesa-gray-1 font-work text-sm focus:border-myesa-orange focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Campo: ¿Qué categorias te interesan? (opcional) */}
              <div className="flex flex-col">
                <label htmlFor="categorias" className="font-work font-medium text-myesa-gray-2 text-xs mb-1">
                  ¿Qué categorias te interesan? (opcional)
                </label>
                <select
                  id="categorias"
                  name="categorias"
                  value={formData.categorias}
                  onChange={handleChange}
                  className="bg-white border border-myesa-gray-4 rounded-md h-10 px-2 text-myesa-gray-1 font-work text-sm focus:border-myesa-orange focus:outline-none transition-all duration-300"
                >
                  <option value="">Refacciones</option>
                  <option value="neumaticos">Neumáticos</option>
                  <option value="accesorios">Accesorios</option>
                  <option value="cascos">Cascos</option>
                  <option value="lubricantes">Lubricantes</option>
                </select>
              </div>

              {/* Nota */}
              <div className="pt-2 pb-3">
                <p className="font-work font-medium text-myesa-gray-2 text-xs">
                  *Solo se permite 1 registro por persona
                </p>
              </div>

              {/* Checkbox de términos */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="acceptedTerms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="w-4 h-4 accent-myesa-blue cursor-pointer"
                />
                <label htmlFor="acceptedTerms" className="font-work font-medium text-myesa-gray-1 text-sm cursor-pointer">
                  He leído y acepto el <a href="#" className="text-blue-500 hover:underline">aviso de privacidad</a>
                </label>
              </div>
            </form>

            {/* Botón Submit */}
            <div className="relative flex justify-center mt-6">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting || !acceptedTerms}
                className="bg-myesa-orange rounded-[20px] px-8 py-2 flex items-center gap-2 hover:bg-myesa-orange-light transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed w-full max-w-xs"
              >
                <span className="flex-1 font-work font-semibold text-white uppercase text-base text-center">
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </span>
                {!isSubmitting && (
                  <svg className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                    <path d="M0 10L20 10M20 10L10 0M20 10L10 20" stroke="#ffffff" strokeWidth="2"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup de éxito - Según diseño de Figma */}
      {showSuccess && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
            onClick={() => setShowSuccess(false)}
          ></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-[1000] max-w-md w-full mx-4 overflow-hidden">
            {/* Fondo naranja con patrón de cajas */}
            <div className="relative bg-myesa-orange p-16 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-myesa-orange-light to-myesa-orange"></div>
              {/* Icono de check */}
              <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-myesa-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>

            {/* Contenido del popup */}
            <div className="bg-white px-8 py-8 text-center">
              <h3 className="font-work font-semibold text-myesa-black text-xl mb-3">
                Tus respuestas se han enviado correctamente
              </h3>
              <p className="font-work text-myesa-gray-2 text-sm mb-6">
                En breve se te enviará un WhatsApp para confirmar tu registro
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-myesa-orange text-white px-12 py-2 rounded-[20px] font-work font-semibold hover:bg-myesa-orange-light transition-colors uppercase text-sm"
              >
                Continuar
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
