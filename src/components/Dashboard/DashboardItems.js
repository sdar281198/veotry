export const dashDatos = [
    {
        item:"Tablero",
        desc:'Debe mostrar información relevante al usuario que accede al sistema, así por ejemplo: sus citas, sus alertas, notificaciones, etc. ',
        img:"../pictures/dash1.png"
    },
    {
        item:"Historial Clínico",
        desc:'Relación de pacientes y toda su información clínica generada a través de formularios diversos, desde los de ingreso hasta las consultas clínicas, pasando por los monitoreos.',
        img:"../pictures/dash2.png"
    },
    {
        item:"Consulta Clínica",
        desc:"Se encuentra dividida en 2 partes: atención general o especializada En cualquiera de los casos, se genera una vista que consta de 4 componentes: \n \n 1. Formulario de atención (con campos según en tipo de atención, incluyendo exámenes auxiliares y medicamentos) \n 2. Ventana de video consulta. \n 3. LIsta de widgets con datos clínicos (provenientes de equipos médicos remotos) \n4. Acceso a Historial Clínico del paciente mediante un popup",
        img:"../pictures/dash4.png"
    },
    {
        item:"Monitoreo de Crónicos",
        desc:"Funciona igual a seguimiento (Monitoreo Clínico) pero permite mostrar todas las patologías que controlamos, aunque separadas por sub menús que muestran exclusivamente la información de dicha enfermedad.  Debido a que vamos a llegar a controlar más de 50, en términos de usabilidad no podemos mostrar todas, sino solo algunas con un buscador y el usuario debe encontrarla, seleccionarla y marcarla como preferidas de visualización.  La información también es alimentada a tiempo real pero con el criterio de primero en recibido primero en ser mostrado, lo que se mantendrá hasta que un operador tome el caso y en ese caso pasa al final de la cola.  La información se genera desde la app, pero se detiene necesariamente por un servicio que evalúa y valora los datos empleando IA para generar las alertas en  la vista de la patología (verde, ámbar y rojo).  Debe mantener diversas opciones de filtrado, algunos predeterminados.  Es importante recordar que los monitoreos son específicos a grupos de usuarios.",
        img:"../pictures/dash5.png"
    },
    {
        item:"Controles Auxiliares",
        desc:"Al igual que con monitoreo clínico permite visualizar la información proveniente de la App según los formularios que el grupo, empresa, organización, región, país, etc. ha definido y configurado previamente desde el panel de control.  La recepción de la información puede o no ser a tiempo real (se determina en la configuración).  La información llega sin procesamiento, es decir, directamente lo que ingresa el usuario a la vista del panel. Mantiene algunos niveles de filtrado básicos.  La analítica que se genere de esta información se va desarrollar a través de Biprix / Metabase. Los controles pueden ser generales o para grupos específicos.",
        img:"../pictures/dash1.png"
    },
    {
        item:"Protocolos",
        desc:"Permite la visualización de los protocolos definidos por la organización y creados a través del panel de control.  Estos protocolos pueden estar asociados a cualquier materia, desde salud hasta operatividad laboral.  No requiere que se alimente a tiempo real (websockets) y la analítica de esta información recae también en Briprix / Metabase. Los controles pueden ser generales o para grupos específicos.",
        img:"../pictures/dash5.png"
    },
    {
        item:"Mapa Situacional",
        desc:"Vistas gráficas que permiten identificar el estado de salud de los usuarios en dos formas: \n\n 1. Empleando un mapa de local de la organización \n 2. Empleando un mapa geográfico",
        img:"../pictures/dashmap3.png"
    },
    {
        item:"Exámenes auxiliares",
        desc:"Permite el registro de exámenes de laboratorio, imagenología entre otros que se hayan generado desde los formularios de atención médica.  Se pueden llenar por el personal de Veo365, desde proveedores externos o incluso desde la misma App del paciente cuando haya preferido hacerlo en un centro médico cualquiera. Es posible que determinados resultados puedan ser llenados externamente empleando un URL fuera del dashboard, con un usuario y clave temporal que finalmente alimentará la información del paciente",
        img:"../pictures/dash4.png"
    }
]
    export const dashText = [
        {
            title:"Dashboard Empresarial",
            desc:"Analítica de la información generada por la app para un análisis y seguimiento epidemiológico de los empleados, muestra gráficos y reportes para toma de decisiones preventivas o reactivas en tiempo real, complementando las estrategias de vigilancia médica de las empresas; incluye:"
        }
]
