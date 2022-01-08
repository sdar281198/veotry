export const Title = [
    {
        title:"Telemedicina, Monitoreo, Seguimiento, Análisis y Vigilancia Epidemiológica.",
        textoSmall:"La salud de las personas a tiempo real en tus manos.",
        img:"../pictures/laptop2.png"
    }
]

export const Why2 = [
    {
        title:"¿Por que Veo365?",
        description:"Veo365 es una plataforma digital de gestión clínica en tiempo real para telemedicina, vigilancia de enfermedades crónicas, análisis epidemiológico, educación y prevención para toda la población."
    }
]

export const Products = [
    {
        name:"Servicios de salud integrados multicanal:",
        description:"Provee funciones de teleconsulta, telemedicina, consulta domiciliaria y derivaciones a médicos particulares, centros de salud especializados o unidades de procedimientos de corta y larga estancia.  Todo esto con integración de equipamiento móvil portátil o wearables proveyendo la información que el médico necesita a tiempo real.",
        img:"../pictures/servsalmul.png"
    },
    {
        name:"Monitoreo y seguimiento de enfermedades y pacientes crónicos a tiempo real:",
        description:"Mediante procesos desarrollados por equipos de profesionales multidisciplinarios basado en diversas experiencias y normativas mundiales, se ofrece a pacientes de patologías crónicas o enfermedades de interés epidemiológico una opción en la app móvil que permite el monitoreo, control y seguimiento de su tratamiento que auxiliado mediante el uso de inteligencia artificial permite a los médicos anticipar eventos complejos en su salud y tomar acciones para estabilizarlos y mejorar su calidad de vida en tiempo real.  Permite la integración con equipos médicos caseros y wearables a tiempo real.",
        img:"../pictures/segpaccro.png"
    },
    {
        name:"Control y análisis epidemiológico a Tiempo Real:",
        description:"Mediante la información obtenida con la app móvil y la historia clínica del paciente, proveemos una herramientas para la vigilancia epidemiológica en tiempo real, permitiendo explotar la información en un ambiente de big data.",
        img:"../pictures/controlep.png"
    },
    {
        name:"Registro de datos múltiples:",
        description:"Mediante la app se permite el registro de diversos datos, muchos de ellos customizables para los usuarios.  Dicho registro de datos permite reforzar incluso reforzar tareas de educación, formación, protocolos y validaciones de actividades. Adicionalmente el registro puede estar asignado específicamente a grupos específicos también.",
        img:"../pictures/redistrodat.png"
    },
    {
        name:"Historia clínica electrónica integrada:",
        description:"Toda la información registrada en la plataforma de gestión clínica se registra en una base de datos basada en OpenEHR siguiendo todos los últimos estándares clínicos tales como: HL7, Loinc, FIHR, SNOMED, CIE10, DICOM, etc.  Así mismo permite la interoperabilidad hacia otros sistemas clínicos.  Los datos son asegurados siguiendo el estándar HIPAA compliant aprobado por el FDA para el aseguramiento de privacidad de la información y su auditoría por autoridades sanitarias.",
        img:"../pictures/servsalmul.png"
    },
    {
        name:"Arquitectura Escalable:",
        description:"Implementamos un cluster de microservicios  privado con bases de datos y red privada por grupo de adscripción, entidad, institución o empresa, garantizando una alta escalabilidad, continuidad de servicio y seguridad de la información.",
        img:"../pictures/arqescal.png"
    },
    {
        name:"Seguimiento de Pacientes Crónicos y Comorbilidades:",
        description:"Es una estrategia de identificación, seguimiento y evaluación periódica de pacientes crónicos o dolencias agudas, como también COVID-19. ",
        img:"../pictures/segpaccro.png"
    }
]
/*Phone */
export const appInfo = [
    {
        titleMain:"Nuestra app",
        titleDesc:"Es una aplicación móvil para Android, IOS y Web que permite el registro de información diversa por parte del usuario. Permite la generación de nuevos menús y contenidos configurables, así como recibir alertas y notificaciones según los requerimientos de la organización gestora",
        imgPhone:"../pictures/phoneveo.png"
    }

]

export const appFunctions = [
    {
        title:"Declaración diaria",
        desc:"Es un test rápido que permite identificar una enfermedad a través de los signos y síntomas presentados por el paciente, su llenado es obligatorio y al final muestra un semáforo a partir de las valoraciones de los síntomas según las prioridades, dicho resultado se envía al cloud en formato numérico para su interpretación por el dashboard.  Actualmente está asociado a COVID19, puede ser otra patología."
    },
    {
        title:"Monitoreo Clínico",
        desc:"Registro de información clínica para pacientes crónicos.  Solo se visualizan los formularios a pacientes específicos con un diagnóstico definido y cada formulario es específico para cada usuario, incluyendo incluso dietas, medicinas, o en general cualquier información relevante que deba indicar o llenar diaria o semanalmente incluso."
    },
    {
        title:"Protocolos",
        desc:"Sirve para asegurar la capacitación diaria y cumplimiento de procesos en diversas situaciones generales. El cumplimiento de los protocolos queda registrado en el Dashboard a manera de declaración jurada por cada paciente, registro importante que puede ser controlado por las entidades supervisoras."
    },
    {
        title:"Informate",
        desc:"Es un tablón de noticias para los usuarios registrados en la app, usado como medio de comunicación entre la entidad de salud y los pacientes."
    },
    {
        title:"Perfil Personal",
        desc:"Permite el registro de información personal del usuario como datos personales, de su trabajo, datos clínicos, antecedentes familiares y hasta  contactos de emergencia inclusive."
    },
    {
        title:"Servicios Médicos Auxiliares ",
        desc:"Permite solicitar a demanda servicios de auxiliares a domicilio o programados exactamente en clínica."
    },
    {
        title:"Consulta Médica ",
        desc:"Permite la atención de pacientes mediante teleconsulta, telemedicina, solicitar citas en local o con especialistas a domicilio."
    },
    {
        title:"Ayuda al Diagnóstico y Resultados",
        desc:"Lista los pedidos históricos de exámenes médicos (laboratorio, radiología,etc.), así como sus resultados una vez realizados.  Si el paciente se hace los exámenes en algún centro médico externo no asociado debemos proveer un formulario para que adjunte el documento y llene datos básicos sobre el mismo."
    },
    {
        title:"Atenciones y Recetas",
        desc:"Lista de atenciones médicas con la información registrada por el médico, así como las recetas e indicaciones que se han dado en cada consulta"
    },
    {
        title:"SOS",
        desc:"Es un botón que permite una comunicación inmediata con un médico cuando se presione una vez y se confirme con un popup"
    },
    {
        title:"Pase Digital",
        desc:"Permite que el usuario comparta información que ha llenado de la app mediante un código QR que una organización usuaria del sistema requiera.  Básicamente se mostrará el código del último ingreso de Declaración Diaria o de algún control auxiliar que sea común a todos los usuarios de la app.  Esta información es un json que con un lector adecuado permite registrar la información del “invitado” a la organización"
    },
    {
        title:"Envío de Datos Clínicos ",
        desc:"Permite el envío de datos anónimos de contact tracing al cloud según un protocolo determinado, el  mismo que será manejado por el dashboard. Para esto, los usuarios tienen que tener habilitado el bluetooth en sus dispositivos.  <strong>No se requiere que esté activo ni funcionando hasta nuevo aviso.</strong>"
    },
    {
        title:"Historial Clínico DIgital",
        desc:"Comparte la información del historial clínico del paciente a través de blockchain siguiendo el protocolo HL7 a cualquier centro médico.  La funcionalidad queda aún por definir a nivel procedimental."
    },
    {
        title:"Declaración de Inicio de Labores",
        desc:"Debe desaparecer y meterse dentro de controles auxiliares"
    },
    {
        title:"Controles Auxiliares",
        desc:"Permite el registro de información diversa necesaria para una organización, grupo, empresa, etc.  Esta debe ser customizable por los administradores de las mismas y permite guardar la información en el panel de control respectivo.  La diferencia con Monitoreo Clínico es que no está asociado realmente a salud y no va necesitar un microservicio que analice los valores ingresados mediante IA.  Por ejemplo, se puede crear un registro de temperatura, medio de transporte, horario de ingreso, inicio de actividades, etc."
    },
    {
        title:"Cerrar Sesion",
        desc:"Sale de la sesión del usuario"
    }
]



