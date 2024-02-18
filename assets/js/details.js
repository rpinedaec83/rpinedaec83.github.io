const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());


let arrProyectos = [
    {
        id: 1,
        nombre: "LucyCRM®",
        Category: "App Web",
        Client: "Inlearning Institutos",
        ProjectDate: "Septiembre 2021",
        img: ["portfolio-details-1.jpg", "portfolio-details-2.jpg", "portfolio-details-3.jpg"],
        ProjectURL: "https://inlearninginstitutos.edu.pe",
        Detalles: `<h2>Información del Proyecto</h2><br>
        <p>LucyCRM® es un CRM comercial, o Customer Relationship Management, es una herramienta diseñada para ayudar a las empresas a gestionar y mejorar sus relaciones con los clientes. Permite almacenar información detallada sobre los clientes, como sus datos de contacto, historial de compras, interacciones pasadas y preferencias.
        Además de almacenar información, un CRM comercial también puede ayudar a las empresas a realizar un seguimiento de las interacciones con los clientes, como llamadas telefónicas, correos electrónicos y reuniones. Esto permite a las empresas ofrecer un servicio más personalizado y eficiente a sus clientes, lo que puede conducir a una mayor satisfacción y lealtad del cliente.        
        En resumen, un CRM comercial es una herramienta esencial para cualquier empresa que busque gestionar de manera efectiva sus relaciones con los clientes y mejorar su rendimiento en ventas y marketing.</p>`
    },
    {
        id: 2,
        nombre: "FerCRM®",
        Category: "App Web",
        Client: "Inlearning Institutos",
        ProjectDate: "Febrero 2020",
        img: ["portfolio-details-1.jpg", "portfolio-details-2.jpg", "portfolio-details-3.jpg"],
        ProjectURL: "https://inlearninginstitutos.edu.pe",
        Detalles: `<h2>Información del Proyecto</h2><br>
        <p>FerCRM® es un CRM financiero educativo es una herramienta diseñada específicamente para instituciones educativas, que desean gestionar eficazmente las relaciones con sus estudiantes, exalumnos, padres y personal académico y administrativo.
        Este tipo de CRM permite a las instituciones educativas mantener un registro detallado de la información de contacto de los estudiantes y exalumnos, así como de su historial académico, actividades extracurriculares, logros y cualquier otra información relevante. Además, puede ayudar a realizar un seguimiento de la comunicación con los estudiantes y exalumnos, como correos electrónicos, llamadas telefónicas y reuniones, lo que permite una interacción más personalizada y efectiva.
        Un CRM financiero educativo también puede incluir funcionalidades específicas para la gestión de matrículas, pagos, becas y ayudas financieras, lo que ayuda a las instituciones educativas a gestionar mejor sus recursos financieros y a ofrecer un mejor servicio a sus estudiantes y familias.
        En resumen, un CRM financiero educativo es una herramienta poderosa para las instituciones educativas que desean mejorar la gestión de sus relaciones con los diferentes actores involucrados y ofrecer una experiencia educativa de alta calidad.</p>`
    },
    {
        id: 3,
        nombre: "APITeams",
        Category: "Aplicacón",
        Client: "Inlearning Institutos",
        ProjectDate: "Abril 2021",
        img: ["apiTeams-1.jpg", "apiTeams-2.jpg", "apiTeams-3.jpg"],
        ProjectURL: "https://inlearninginstitutos.edu.pe",
        Detalles: `<h2>Información del Proyecto</h2><br>
        <p>FerCRM® es un CRM financiero educativo es una herramienta diseñada específicamente para instituciones educativas, que desean gestionar eficazmente las relaciones con sus estudiantes, exalumnos, padres y personal académico y administrativo.
        Este tipo de CRM permite a las instituciones educativas mantener un registro detallado de la información de contacto de los estudiantes y exalumnos, así como de su historial académico, actividades extracurriculares, logros y cualquier otra información relevante. Además, puede ayudar a realizar un seguimiento de la comunicación con los estudiantes y exalumnos, como correos electrónicos, llamadas telefónicas y reuniones, lo que permite una interacción más personalizada y efectiva.
        Un CRM financiero educativo también puede incluir funcionalidades específicas para la gestión de matrículas, pagos, becas y ayudas financieras, lo que ayuda a las instituciones educativas a gestionar mejor sus recursos financieros y a ofrecer un mejor servicio a sus estudiantes y familias.
        En resumen, un CRM financiero educativo es una herramienta poderosa para las instituciones educativas que desean mejorar la gestión de sus relaciones con los diferentes actores involucrados y ofrecer una experiencia educativa de alta calidad.</p>`
    },
    {
        id: 4,
        nombre: "FerCRM®",
        Category: "App Web",
        Client: "Inlearning Institutos",
        ProjectDate: "Febrero 2020",
        img: ["portfolio-details-1.jpg", "portfolio-details-2.jpg", "portfolio-details-3.jpg"],
        ProjectURL: "https://www.zegel.edu.pe",
        Detalles: `<h2>Información del Proyecto</h2><br>
        <p>FerCRM® es un CRM financiero educativo es una herramienta diseñada específicamente para instituciones educativas, que desean gestionar eficazmente las relaciones con sus estudiantes, exalumnos, padres y personal académico y administrativo.
        Este tipo de CRM permite a las instituciones educativas mantener un registro detallado de la información de contacto de los estudiantes y exalumnos, así como de su historial académico, actividades extracurriculares, logros y cualquier otra información relevante. Además, puede ayudar a realizar un seguimiento de la comunicación con los estudiantes y exalumnos, como correos electrónicos, llamadas telefónicas y reuniones, lo que permite una interacción más personalizada y efectiva.
        Un CRM financiero educativo también puede incluir funcionalidades específicas para la gestión de matrículas, pagos, becas y ayudas financieras, lo que ayuda a las instituciones educativas a gestionar mejor sus recursos financieros y a ofrecer un mejor servicio a sus estudiantes y familias.
        En resumen, un CRM financiero educativo es una herramienta poderosa para las instituciones educativas que desean mejorar la gestión de sus relaciones con los diferentes actores involucrados y ofrecer una experiencia educativa de alta calidad.</p>`
    },
    {
        id: 5,
        nombre: "FerCRM®",
        Category: "App Web",
        Client: "Inlearning Institutos",
        ProjectDate: "Febrero 2020",
        img: ["portfolio-details-1.jpg", "portfolio-details-2.jpg", "portfolio-details-3.jpg"],
        ProjectURL: "https://www.zegel.edu.pe",
        Detalles: `<h2>Información del Proyecto</h2><br>
        <p>FerCRM® es un CRM financiero educativo es una herramienta diseñada específicamente para instituciones educativas, que desean gestionar eficazmente las relaciones con sus estudiantes, exalumnos, padres y personal académico y administrativo.
        Este tipo de CRM permite a las instituciones educativas mantener un registro detallado de la información de contacto de los estudiantes y exalumnos, así como de su historial académico, actividades extracurriculares, logros y cualquier otra información relevante. Además, puede ayudar a realizar un seguimiento de la comunicación con los estudiantes y exalumnos, como correos electrónicos, llamadas telefónicas y reuniones, lo que permite una interacción más personalizada y efectiva.
        Un CRM financiero educativo también puede incluir funcionalidades específicas para la gestión de matrículas, pagos, becas y ayudas financieras, lo que ayuda a las instituciones educativas a gestionar mejor sus recursos financieros y a ofrecer un mejor servicio a sus estudiantes y familias.
        En resumen, un CRM financiero educativo es una herramienta poderosa para las instituciones educativas que desean mejorar la gestión de sus relaciones con los diferentes actores involucrados y ofrecer una experiencia educativa de alta calidad.</p>`
    },
    {
        id: 6,
        nombre: "FerCRM®",
        Category: "App Web",
        Client: "Inlearning Institutos",
        ProjectDate: "Febrero 2020",
        img: ["portfolio-details-1.jpg", "portfolio-details-2.jpg", "portfolio-details-3.jpg"],
        ProjectURL: "https://www.zegel.edu.pe",
        Detalles: `<h2>Información del Proyecto</h2><br>
        <p>FerCRM® es un CRM financiero educativo es una herramienta diseñada específicamente para instituciones educativas, que desean gestionar eficazmente las relaciones con sus estudiantes, exalumnos, padres y personal académico y administrativo.
        Este tipo de CRM permite a las instituciones educativas mantener un registro detallado de la información de contacto de los estudiantes y exalumnos, así como de su historial académico, actividades extracurriculares, logros y cualquier otra información relevante. Además, puede ayudar a realizar un seguimiento de la comunicación con los estudiantes y exalumnos, como correos electrónicos, llamadas telefónicas y reuniones, lo que permite una interacción más personalizada y efectiva.
        Un CRM financiero educativo también puede incluir funcionalidades específicas para la gestión de matrículas, pagos, becas y ayudas financieras, lo que ayuda a las instituciones educativas a gestionar mejor sus recursos financieros y a ofrecer un mejor servicio a sus estudiantes y familias.
        En resumen, un CRM financiero educativo es una herramienta poderosa para las instituciones educativas que desean mejorar la gestión de sus relaciones con los diferentes actores involucrados y ofrecer una experiencia educativa de alta calidad.</p>`
    }
];

function cargar() {
    let id = params.id
    let objDatos = arrProyectos.find(x => x.id == id);
    console.log(objDatos);
    let Category = document.getElementById("Category");
    Category.innerText = objDatos.Category;

    let nombre = document.getElementById("nombre");
    nombre.innerText = objDatos.nombre;

    let Client = document.getElementById("Client");
    Client.innerText = objDatos.Client;

    let ProjectDate = document.getElementById("ProjectDate");
    ProjectDate.innerText = objDatos.ProjectDate;

    let ProjectURL = document.getElementById("ProjectURL");
    ProjectURL.innerText = objDatos.ProjectURL;

    let Detalles = document.getElementById("Detalles");
    Detalles.innerHTML = objDatos.Detalles;
    let strHtml = ``;
    objDatos.img.forEach(element => {
        console.log(element)
        strHtml += `<div class="swiper-slide">
        <img src="assets/img/portfolio/${element}" alt="">
      </div>`;
    });
    let imgs = document.getElementById("imgs");
    imgs.innerHTML = strHtml;
}

document.addEventListener("DOMContentLoaded", cargar);
