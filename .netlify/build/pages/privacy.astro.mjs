/* empty css                                 */
import { a as createComponent, r as renderComponent, g as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Mz-ejFHJ.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_qrsCvOZ_.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Pol\xEDtica de Privacidad";
  const pageDescription = "Pol\xEDtica de privacidad para la aplicaci\xF3n Estimator y servicios asociados.";
  const pageTags = ["legal", "privacy", "estimator"];
  const pageIcon = "beach";
  const publicationDate = /* @__PURE__ */ new Date("2025-05-05");
  const appName = "Estimator";
  const effectiveDateString = "5 de Mayo de 2025";
  const contactEmail = "ca.alberto.p@gmail.com";
  const firebasePrivacyPolicyLink = "https://policies.google.com/privacy";
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": pageTitle, "description": pageDescription, "pubDate": publicationDate, "tags": pageTags, "icon": pageIcon, "heroImage": "/src/assets/fran.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="font-family: Arial, sans-serif; line-height: 1.6;"> <section> <p style="margin-bottom: 1.5em;"> <strong>Fecha de Entrada en Vigor:</strong> ${effectiveDateString} </p> <p style="margin-bottom: 1em;">
Bienvenido a ${appName}. Tu privacidad es importante para nosotros. Esta
        Política de Privacidad explica cómo recopilamos, usamos, divulgamos y
        protegemos tu información cuando utilizas nuestra aplicación móvil ${appName}. Por favor, lee esta política detenidamente. Si no estás de acuerdo
        con los términos de esta política de privacidad, por favor no accedas ni
        utilices la aplicación.
</p> </section> <section style="margin-top: 30px;"> <h2>1. Información que Recopilamos</h2> <p style="margin-bottom: 1em;">
Recopilamos información necesaria para proporcionarte la funcionalidad
        de la aplicación. Esto incluye:
</p> <h3 style="margin-top: 1.5em; margin-bottom: 0.5em;">
Datos Proporcionados Directamente por el Usuario
</h3> <ul style="list-style: disc; margin-left: 20px; margin-bottom: 1em;"> <li> <strong>Información de Cuenta:</strong> Para crear y gestionar tu cuenta,
          recopilamos tu dirección de correo electrónico y procesamos tu contraseña
          de forma segura a través de nuestro proveedor de autenticación (Firebase
          Authentication). También se genera y almacena un Identificador de Usuario
          único (UID) asociado a tu cuenta.
</li> <li> <strong>Datos de Encuestas y Votos:</strong> Cuando creas una encuesta,
          recopilamos la descripción de la tarea que proporcionas. Cuando votas,
          recopilamos tus puntuaciones para los factores de estimación (Cantidad
          de trabajo, Complejidad, Incertidumbre, Experiencia), la puntuación total
          y la talla de camiseta calculadas para ese voto, junto con la fecha/hora
          (timestamp).
</li> <li> <strong>Datos para Historial:</strong> Para mostrar tu historial, asociamos
          tu UID con las encuestas que creas y un registro de las encuestas en las
          que participas (incluyendo ID de encuesta, descripción y fecha del voto).
</li> </ul> <h3 style="margin-top: 1.5em; margin-bottom: 0.5em;">
Datos Recopilados Automáticamente
</h3> <p style="margin-bottom: 1em;">
Podemos recopilar información básica y generalmente anónima o agregada
        sobre el uso de la aplicación y diagnósticos de errores a través de las
        herramientas estándar proporcionadas por nuestros proveedores de
        servicios (como Firebase y Expo) con el fin de mantener y mejorar el
        funcionamiento de la aplicación. No recopilamos activamente datos
        detallados del dispositivo o de uso para seguimiento individual.
</p> </section> <section style="margin-top: 30px;"> <h2>2. Cómo Usamos Tu Información</h2> <p style="margin-bottom: 1em;">
Utilizamos la información recopilada para:
</p> <ul style="list-style: disc; margin-left: 20px; margin-bottom: 1em;"> <li>Crear y gestionar tu cuenta de usuario.</li> <li>Autenticar tu identidad y proteger tu cuenta.</li> <li>
Proporcionar la funcionalidad principal de la aplicación: permitir
          crear, unirse y votar en encuestas de estimación.
</li> <li>Almacenar las encuestas que creas y los votos que emites.</li> <li>
Calcular y mostrar los resultados agregados (distribución de tallas,
          total de votos) a los participantes de una encuesta específica.
</li> <li>
Mostrar tu historial personal de encuestas creadas y participadas.
</li> <li>
Diagnosticar y solucionar problemas técnicos (basado en reportes de
          errores agregados si aplica).
</li> <li>Mejorar la eficiencia y operación de la Aplicación.</li> <li>Cumplir con requisitos legales y regulatorios.</li> </ul> </section> <section style="margin-top: 30px;"> <h2>3. Divulgación de Tu Información</h2> <p style="margin-bottom: 1em;">
No vendemos ni alquilamos tu información personal. Podemos compartir
        información en las siguientes circunstancias:
</p> <ul style="list-style: disc; margin-left: 20px; margin-bottom: 1em;"> <li> <strong>Proveedores de Servicios (Esenciales):</strong> Dependemos de servicios
          de terceros para operar la aplicación. Específicamente:
<ul style="list-style: circle; margin-left: 20px; margin-top: 0.5em;"> <li> <strong>Firebase (Google):</strong> Utilizamos Firebase Authentication
              para la gestión segura de usuarios (email, contraseña, UID) y Firebase
              Firestore como nuestra base de datos en la nube donde se almacenan
              todos los datos de encuestas, votos e historial. El uso de estos servicios
              está sujeto a las políticas de Google. Puedes consultar la <a${addAttribute(firebasePrivacyPolicyLink, "href")} target="_blank" rel="noopener noreferrer">Política de Privacidad de Google</a>.
</li> <li> <strong>Expo (Expo Team):</strong> Podemos utilizar Expo Application
              Services (EAS) para compilar, distribuir y actualizar la aplicación.
</li> </ul>
Estos proveedores solo tienen acceso a la información necesaria para realizar
          sus funciones y están obligados a protegerla.
</li> <li> <strong>Dentro de una Encuesta Específica:</strong> La descripción de la
          tarea de una encuesta y los resultados agregados de la votación (distribución
          de tallas, número total de votos) son visibles para todos los participantes
          que se unen válidamente a esa encuesta específica mediante su código. Las
          estimaciones individuales o quién votó qué talla no se muestran explícitamente
          a otros participantes.
</li> <li> <strong>Por Ley o para Proteger Derechos:</strong> Si creemos que la divulgación
          es necesaria para responder a procesos legales, investigar posibles violaciones
          de nuestras políticas, o proteger los derechos, propiedad y seguridad de
          nosotros mismos u otros, podemos compartir tu información según lo permita
          o exija la ley.
</li> </ul> </section> <section style="margin-top: 30px;"> <h2>4. Seguridad de Tu Información</h2> <p style="margin-bottom: 1em;">
Utilizamos servicios backend seguros (Firebase) y tomamos medidas
        administrativas, técnicas y físicas razonables para ayudar a proteger tu
        información personal almacenada en nuestros sistemas. Sin embargo, ten
        en cuenta que ninguna medida de seguridad es perfecta y la transmisión
        de datos por Internet nunca es completamente segura. No podemos
        garantizar la seguridad absoluta de tu información.
</p> </section> <section style="margin-top: 30px;"> <h2>5. Almacenamiento Local (Persistencia de Sesión)</h2> <p style="margin-bottom: 1em;">
Para tu comodidad, la aplicación utiliza el almacenamiento seguro local
        de tu dispositivo (gestionado a través de AsyncStorage en React Native)
        para guardar un token que te permite mantener tu sesión iniciada entre
        usos de la aplicación, evitando que tengas que iniciar sesión cada vez.
        Esta información de sesión local se elimina si cierras sesión o
        desinstalas la aplicación.
</p> </section> <section style="margin-top: 30px;"> <h2>6. Retención de Datos</h2> <p style="margin-bottom: 1em;">
Conservamos la información de tu cuenta (email, UID) y tu historial de
        participación mientras tu cuenta permanezca activa en ${appName}. Si
        eliminas tu cuenta [Nota: si no ofreces eliminación directa en la app,
        cambia esto por: "Si solicitas la eliminación de tu cuenta
        contactándonos"], procederemos a eliminar tu información personal de
        nuestros sistemas activos según lo permitan nuestras capacidades
        técnicas y obligaciones legales. Los datos de las encuestas y los votos
        asociados a ellas se conservan mientras la cuenta del creador de la
        encuesta esté activa [Nota: o añade "o hasta que la encuesta sea
        eliminada" si implementas esa función].
</p> </section> <section style="margin-top: 30px;"> <h2>7. Tus Derechos de Privacidad</h2> <p style="margin-bottom: 1em;">
Tienes derecho a acceder, rectificar o solicitar la eliminación de tu
        información personal (como tu cuenta de email y UID) asociada a tu
        cuenta y almacenada en nuestros servidores en la nube (Firebase). Para
        ejercer estos derechos, por favor contáctanos utilizando la información
        de contacto proporcionada más abajo en la sección "Contáctanos". Ten en
        cuenta que eliminar la aplicación de tu dispositivo no elimina
        automáticamente tus datos almacenados en nuestros servidores.
</p> </section> <section style="margin-top: 30px;"> <h2>8. Uso del Portapapeles</h2> <p style="margin-bottom: 1em;">
La función "Compartir" en la pantalla del Dashboard te permite copiar un
        mensaje de texto que incluye un enlace a la encuesta actual en el
        portapapeles de tu dispositivo. Esta acción la realizas tú manualmente y
        la aplicación no accede al portapapeles para ningún otro propósito.
</p> </section> <section style="margin-top: 30px;"> <h2>9. Política para Niños</h2> <p style="margin-bottom: 1em;">
Nuestra aplicación no está dirigida a niños menores de 13 años (o la
        edad mínima aplicable en tu jurisdicción). No recopilamos
        intencionalmente información de identificación personal de niños. Si
        eres padre o tutor y crees que tu hijo nos ha proporcionado información
        personal, por favor contáctanos para que podamos tomar las medidas
        necesarias.
</p> </section> <section style="margin-top: 30px;"> <h2>10. Cambios a Esta Política de Privacidad</h2> <p style="margin-bottom: 1em;">
Podemos actualizar esta Política de Privacidad ocasionalmente. La
        versión actualizada será indicada por una fecha actualizada de "Fecha de
        Entrada en Vigor" y la versión actualizada estará disponible a través de
        la aplicación o nuestro sitio web. Te recomendamos revisar esta política
        periódicamente.
</p> </section> <section style="margin-top: 30px;"> <h2>11. Contáctanos</h2> <p style="margin-bottom: 1em;">
Si tienes preguntas o comentarios sobre esta Política de Privacidad, por
        favor contáctanos en:
</p> <p style="font-weight: bold;"> ${contactEmail} </p> </section> </div> ` })}`;
}, "/Users/carlospetit/Documents/Develop/portfolio/src/pages/privacy.astro", void 0);

const $$file = "/Users/carlospetit/Documents/Develop/portfolio/src/pages/privacy.astro";
const $$url = "/portfolio/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
