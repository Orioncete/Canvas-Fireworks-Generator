// PRIMERO, DEFINIMOS LOS OBJETOS QUE USAREMOS EN LA APP

// Creamos una serie de objetos Json para definir los diferentes tipos de
// cohetes, cada uno contiene los cuatro colores de la estela y la imagen de la palmera.

var set1 = {
    estela1: "red",
    estela2: "coral",
    estela3: "lightcoral",
    estela4: "pink",
    blast: "imagenes/firework1-min.png"
};

var set2 = {
    estela1: "#B8B67E",
    estela2: "#C4C17B",
    estela3: "#F1EEB3",
    estela4: "#F8F9E0",
    blast: "imagenes/firework2-min.png"
};

var set3 = {
    estela1: "#195827",
    estela2: "#578858",
    estela3: "#98C9B6",
    estela4: "#DCF3EB",
    blast: "imagenes/firework3-min.png"
};

var set4 = {
    estela1: "#750B26",
    estela2: "#8C2839",
    estela3: "#D22E40",
    estela4: "#EC626A",
    blast: "imagenes/firework4-min.png"
};

var set5 = {
    estela1: "#162B6A",
    estela2: "#2B468E",
    estela3: "#4C65B0",
    estela4: "#9BACD7",
    blast: "imagenes/firework5-min.png"
};

var set6 = {
    estela1: "#12473D",
    estela2: "#447D70",
    estela3: "#75A89D",
    estela4: "#B7E4D9",
    blast: "imagenes/firework6-min.png"
};

var set7 = {
    estela1: "#1C0F64",
    estela2: "#3D2F7D",
    estela3: "#685AAA",
    estela4: "#A99EE9",
    blast: "imagenes/firework7-min.png"
};

var set8 = {
    estela1: "#831500",
    estela2: "#AB3A04",
    estela3: "#EB5E03",
    estela4: "#EF861A",
    blast: "imagenes/firework8-min.png"
};

var set9 = {
    estela1: "#630429",
    estela2: "#871B4E",
    estela3: "#943E60",
    estela4: "#C57996",
    blast: "imagenes/firework9-min.png"
};

// Agrupamos los objetos Json en un arrary para poder acceder a ellos por indice.

var fwSets = [set1, set2, set3, set4, set5, set6, set7, set8, set9];

// Creamos dos objetos Json más; uno que contiene la configuración general de la app
// Y otro para definir los filtros gráficos a la hora de aplicarlos.

var config = {
    color: "trasparent",
    fondo: "imagenes/paris-min.jpg",
    vista: "lateral",
    blaster: "manual",
    set: fwSets[3],
    legalconsent: ""
};

var filter = {
    color: "",
    effect: ""
};

// Paquetes de idioma ----------------------------------------------------

// Español

var spnsh = {
    saveLabel1: "Nombre del archivo: ",
    saveLabel2: "Tamaño de la imagen: ",
    okText: "Ok",
    waterMark: "Creado con Fireworks Generator © 2016 Pedro Pablo Gonzalo",
    bgColLabel: "Color de fondo: ",
    bgImgLabel: "Imagen de fondo: ",
    bgWarn1: "Esta operación reiniciará por completo el dibujo realizado.",
    bgWarn2: "¿Desea continuar?",
    yesText: "Si",
    noText: "No",
    fltWarn1: "¿Está satisfecho con el resultado y desea mantener los cambios efectuados por el filtro?",
    fltWarn2: "(Los cambios no podrán deshacerse más adelante)",
    fltInf1: "Filtros disponibles",
    fltNeg: " Invertir colores",
    fltBaW: " Blanco y negro",
    fltTaint: " Teñido",
    colorText: "Color: ",
    fltMars: " Marciano",
    fltNight: " Nocturno",
    fltDay: " Diurno",
    topView: "Vista: cenital",
    sideView: "Vista: lateral",
    blastText: "Palmeras",
    rdmText: "Aleatorio",
    contWarn1: "Esta aplicación está diseñada para funcionar exclusivamente en posición horizontal. Por favor, gire su dispositivo 90º y reiníciela.",
    contWarn2: "Esta aplicación está diseñada para funcionar exclusivamente en dispositivos con una resolución mínima de 800px de ancho. Por favor, recárgela en otro dispositivo con las características mínimas requeridas.",
    confirmText: "Entendido",
    fltBttnText: "Aplicar filtro",
    bgBttnText: "Fondo",
    clrBttnText: "Limpiar lienzo",
    saveBttnText: "Guardar imagen",
    blastHelp: 'Elija uno de los diseños disponibles para reproducirlo en la imagen al hacer click o seleccione "Aleatorio" para reproducir uno al azar en cada pulsación.',
    viewHelp: 'Seleccione el origen de los cohetes; Si elije la vista cenital, los cohetes partirán del centro de la imagen. Con la vista lateral, partirán de la parte inferior.',
    fltHelp: 'Seleccione un filtro para aplicarlo a la imagen, algunos filtros necesitan que seleccione también un color para funcionar.',
    bgHelp: 'Seleccione una imagen o un color para el fondo de la imagen.<br>Tenga en cuenta que esta operación reiniciará por completo el trabajo que ya haya realizado en la imagen.<br>Se recomiendan imágenes con la misma relación de aspecto que su pantalla <br>(p.ej. 16:9, 4:3, etc.)',
    clrHelp: 'Reinicia la escena por completo, manteniendo la imagen o color que haya seleccionado para el fondo.',
    saveHelp: 'Guarda su imagen en formato .jpg dentro de su equipo, para compartirla donde desee o emplearla en futuras sesiones de edición.<br>Podrá elegir un nombre para su fichero y un tamaño entre cuatro (se recomienda el tamaño máximo ofrecido para futuras sesiones con este software).',
    legalWarn: 'Este programa recoge contenido generado por el usuario con fines publicitarios y de presentación.<br>Bajo ningún concepto se publicará contenido que pueda contener datos personales del usuario (caras, matrículas, etc.).<br><br>¿Desea que la aplicación recoja contenido generado por usted durante su uso?</p>',
    legalWarnTitle: "Importante:",
    noCanvas: 'Su navegador actual no soporta la API WebGL.<br>Por favor, actualize los drivers de su tarjeta gráfica o instale un navegador de este siglo y recargue la aplicación.',
    dwldText: 'Descargar',
    noIE: 'Este navegador no soporta la función de guardado.<br>Si desea disfrutar del total de funciones de esta aplicación considere instalar un navegador decente como Chrome o Firefox.'
}

// Inglés

var nglsh = {
    saveLabel1: "File name: ",
    saveLabel2: "Picture size: ",
    okText: "Ok",
    waterMark: "Powered by Fireworks Generator © 2016 Pedro Pablo Gonzalo",
    bgColLabel: "Background color: ",
    bgImgLabel: "Background image: ",
    bgWarn1: "This will reset current image completely.",
    bgWarn2: "¿Do you want to proceed?",
    yesText: "Yes",
    noText: "No",
    fltWarn1: "¿Are you satisfied with results, do you want to keep changes?",
    fltWarn2: "(Changes cannot be undone past this point)",
    fltInf1: "Available filters",
    fltNeg: " Reverse colors",
    fltBaW: " Black & white",
    fltTaint: " Tainted",
    colorText: "Color: ",
    fltMars: " Martian",
    fltNight: " Nightime",
    fltDay: " Daylight",
    topView: "Top view",
    sideView: "Side view",
    blastText: "\xa0\xa0\xa0Blasts\xa0\xa0\xa0\xa0",
    rdmText: "Random",
    contWarn1: "This software is designed to work exclusively on landscape orientation. Please, turn your device around 90º and reload it.",
    contWarn2: "This software is designed to work exclusively on devices with 800 pixels minimun resolution. Please, use a devide featuring minimun required specs.",
    confirmText: "Got it!",
    fltBttnText: "Use filter",
    bgBttnText: "Background",
    clrBttnText: "Reset image",
    saveBttnText: "Save picture",
    blastHelp: 'Choose one of the available displayed designs to apply it on screen when you click on it or select "Random" to apply one at random on each click.',
    viewHelp: 'Choose the origin of rockets; If you pick top view, rockets depart from the center, pick side view to get them depart from the bottom of picture.',
    fltHelp: 'Choose an optical filter to apply to the picture, some filters also require you too choose a color for proper function.',
    bgHelp: 'Pick a picture or color to use it as your image background<br>Keep in mind that this function will completely reset any previous work on the current picture.<br>Pictures matching your screen aspect ratio are recommended <br>(e.g. 16:9, 4:3, etc.)',
    clrHelp: 'Completely resets your picture maintaining the image or color you chose as background.',
    saveHelp: "Saves your work on .jpg format into your computer so you can share it or keep it for further work with this software.<br>You'll be asked to pick a file name and size amongst four (I strongly recommend the biggest available size if you plan to re-use the file again on this software).",
    legalWarn: "This software gathers user's generated content for advertising and broadcasting pourposes.<br>On no account we'll broadcast any content containing user's personal data (like faces, car plates, etc.)<br><br>Do you want to allow this software to gather generated content during use?",
    legalWarnTitle: "Attention:",
    noCanvas: "Your browser doesn´t support WebGL API.<br>Please, update your GPU drivers or install a current century browser and reload this app.",
    dwldText: 'Download',
    noIE: "This browser doesn't allow save function, sorry.<br>If you want to fully enjoy this software functionality, please consider installing a decent browser like Chrome or Firefox."
}

// Asignación de idioma inicial

var userLang = navigator.language || navigator.userLanguage;
if (userLang.indexOf("es") != -1 || userLang == undefined) {
    var idioma = spnsh;
}
else {
    var idioma = nglsh;
}


// Asignación de un coeficiente gráfico según el navegador usado para corregir la deteción del cursor

if (navigator.userAgent.indexOf("Chrome") != -1 || navigator.userAgent.indexOf("Trident") != -1) {
    var adjustment = 0.99;
}
if (navigator.userAgent.indexOf("Firefox") != -1) {
    var adjustment = 1;
}

// COMENZAMOS CON LAS FUNCIONES QUE DEFINIRAN EL COMPORTAMIENTO DE LA APP (BOTONES DE OPCIONES)
//______________________________________________________________________________________________

// Funciones para definir y usar un cohete de ascenso radial (desde el centro del lienzo)

// Función que define y dibuja la estela

function estelaCentr(evento) {
    var lienzo = document.getElementById("lienzo1");
    var contexto = lienzo.getContext("2d");
    var radio1 = Math.sqrt(Math.pow(Math.abs(((evento.clientX * adjustment)  -  lienzo.offsetLeft) - (lienzo.width / 2)), 2) + Math.pow(Math.abs((evento.clientY - lienzo.offsetTop) - (lienzo.height / 2)), 2));
    var degradado1 = contexto.createRadialGradient((lienzo.width / 2), (lienzo.height / 2), 0, (evento.clientX * adjustment) - lienzo.offsetLeft, evento.clientY - lienzo.offsetTop, radio1 * 0.1);
    contexto.beginPath();
    contexto.moveTo((lienzo.width / 2), (lienzo.height / 2));
    contexto.lineTo((evento.clientX * adjustment) - lienzo.offsetLeft, evento.clientY - lienzo.offsetTop);
    contexto.lineWidth = (radio1 / (lienzo.width / 2)) * 8;
    degradado1.addColorStop(0, "transparent");
    degradado1.addColorStop(0.45, config.set.estela1);
    degradado1.addColorStop(0.6, config.set.estela2);
    degradado1.addColorStop(0.75, config.set.estela3);
    degradado1.addColorStop(0.9, config.set.estela4);
    contexto.strokeStyle = degradado1;
    contexto.setLineDash([(radio1 / (lienzo.width / 2)) * 38, 25, (radio1 / (lienzo.width / 2)) * 28, 25, (radio1 / (lienzo.width / 2)) * 18, 20, (radio1 / (lienzo.width / 2)) * 15, 15, (radio1 / (lienzo.width / 2)) * 13, 15, (radio1 / (lienzo.width / 2)) * 10, 25]);
    contexto.lineCap = "round";
    contexto.shadowColor = config.color;
    contexto.shadowBlur = (radio1 / (lienzo.width / 2)) * 2.5;
    contexto.stroke();
    contexto.closePath();
}

// Función que define y dibuja la palmera

function boomCentr(evento) {
    var lienzo = document.getElementById("lienzo1");
    var contexto = lienzo.getContext("2d");
    var imagen = new Image();
    var hptns = Math.sqrt(Math.pow(Math.abs(((evento.clientX * adjustment)  -  lienzo.offsetLeft) - (lienzo.width / 2)), 2) + Math.pow(Math.abs((evento.clientY - lienzo.offsetTop) - (lienzo.height / 2)), 2));
    var seno = Math.abs(((evento.clientX * adjustment)  -  lienzo.offsetLeft) - (lienzo.width / 2)) / hptns;
    var coseno = Math.abs((evento.clientY - lienzo.offsetTop) - (lienzo.height / 2)) / hptns;
    if ((evento.clientX * adjustment) - lienzo.offsetLeft > lienzo.width / 2 && evento.clientY - lienzo.offsetTop < lienzo.height / 2) {
        var angulo = Math.asin(seno);
    }
    if ((evento.clientX * adjustment) - lienzo.offsetLeft > lienzo.width / 2 && evento.clientY - lienzo.offsetTop > lienzo.height / 2) {
        var angulo = -1 * ((Math.asin(seno) * 180 / Math.PI) + 180) * Math.PI / 180;
    }
    if ((evento.clientX * adjustment) - lienzo.offsetLeft < lienzo.width / 2 && evento.clientY - lienzo.offsetTop > lienzo.height / 2) {
        var angulo = ((Math.asin(seno) * 180 / Math.PI) + 180) * Math.PI / 180;
    }
    if ((evento.clientX * adjustment) - lienzo.offsetLeft < lienzo.width / 2 && evento.clientY - lienzo.offsetTop < lienzo.height / 2) {
        var angulo = -1 * Math.asin(seno);
    }
    imagen.src = config.set.blast;
    imagen.onload = function() {
        var anchoEscala = imagen.width * (Math.abs(hptns) / (lienzo.width / 2));
        var altoEscala = imagen.height * (Math.abs(hptns) / (lienzo.width / 2));
        contexto.save();
        contexto.translate(((evento.clientX * adjustment) - lienzo.offsetLeft), (evento.clientY - lienzo.offsetTop));
        contexto.rotate(angulo);
        contexto.drawImage(imagen, 0 - anchoEscala / 2, 0 - altoEscala / 2, anchoEscala, altoEscala);
        contexto.restore();
    }
}

// Funciones para definir y usar un cohete de ascenso vertical (desde el suelo)

// Función que define y dibuja la estela

function estelaVert(evento) {
    var lienzo = document.getElementById("lienzo1");
    var contexto = lienzo.getContext("2d");
    var altura = evento.clientY - lienzo.offsetTop;
    var degradado1 = contexto.createLinearGradient((evento.clientX * adjustment), lienzo.height, (evento.clientX * adjustment), evento.clientY);
    contexto.beginPath();
    contexto.moveTo((evento.clientX * adjustment) - lienzo.offsetLeft, lienzo.height);
    contexto.lineTo((evento.clientX * adjustment) - lienzo.offsetLeft, evento.clientY - lienzo.offsetTop);
    contexto.lineWidth = 1 + (altura / lienzo.height) * 5;
    degradado1.addColorStop(0, "transparent");
    degradado1.addColorStop(0.45, config.set.estela1);
    degradado1.addColorStop(0.6, config.set.estela2);
    degradado1.addColorStop(0.75, config.set.estela3);
    degradado1.addColorStop(0.9, config.set.estela4);
    contexto.strokeStyle = degradado1;
    contexto.setLineDash([(lienzo.height / altura) * 0.5 * 33, 20, (lienzo.height / altura) * 0.5 * 23, 20, (lienzo.height / altura) * 0.5 * 13, 15, (lienzo.height / altura) * 0.5 * 10, 10, (lienzo.height / altura) * 0.5 * 8, 10, (lienzo.height / altura) * 0.5 * 5, 20]);
    contexto.lineCap = "round";
    contexto.shadowColor = config.color;
    contexto.shadowBlur = 1 + (altura / lienzo.height) * 3;
    contexto.stroke();
    contexto.closePath();
}

// Función que define y dibuja la palmera

function boomVert(evento) {
    var lienzo = document.getElementById("lienzo1");
    var contexto = lienzo.getContext("2d");
    var altura = lienzo.height - evento.clientY - lienzo.offsetTop;
    var imagen = new Image();
    imagen.src = config.set.blast;
    var escala = ((altura * 3) + lienzo.height) / (lienzo.height * 4);
    imagen.onload = function() {
        var anchoEscala = imagen.width * escala;
        var altoEscala = imagen.height * escala;
        contexto.drawImage(imagen, (((evento.clientX * adjustment) - lienzo.offsetLeft) - (anchoEscala / 2)), ((evento.clientY - lienzo.offsetTop) - (altoEscala / 2)), anchoEscala, altoEscala);
    }
}

// Función para el borrado o reinicio del lienzo

function canvasReset() {
    var lienzo = document.getElementById("lienzo1");
    var contexto = lienzo.getContext("2d");
    contexto.clearRect(0, 0, lienzo.width, lienzo.height);
    backgrColSetter();
    backgrImgSetter();
}

// Función para el pintado de la imagen de fondo (empleada tanto durante el reinicio
// del lienzo, como en la selección de fondo)

function backgrImgSetter() {
    if (config.fondo != "") {
        var lienzo = document.getElementById("lienzo1");
        var contexto = lienzo.getContext("2d");
        contexto.globalCompositeOperation = "destination-over";
        var fondoLienzo = new Image();
        fondoLienzo.src = config.fondo;
        fondoLienzo.onload = function() {
            contexto.drawImage(fondoLienzo, 0, 0, Math.abs(lienzo.width), Math.abs(lienzo.height));
        };
        contexto.globalCompositeOperation = "source-over";
    }
}

// Función para el pintado de un color de fondo (empleada tanto durante el reinicio
// del lienzo, como en la selección de fondo)

function backgrColSetter() {
    var lienzo = document.getElementById("lienzo1");
    var contexto = lienzo.getContext("2d");
    contexto.fillStyle = config.color;
    contexto.fillRect(0, 0, lienzo.width, lienzo.height);
    contexto.globalCompositeOperation = "source-over";
}

// Función para la descarga y guardado de la imagen creada en un archivo .jpg
// (Se ha optado por este formato dada su menor extensión y los errores que generan
// los .png de gran tamaño durante la descarga en algunos equipos).
// También genera la ventana de selección de tamaño y nombre de archivo (incluido uno por defecto),
// y añade una marca de agua a la imagen. Además, si el usuario ha dado su consentimiento, el
// contenido guardado se almacenará tambien en el Storage de Firebase.

function saveCanvas() {
    if (navigator.userAgent.indexOf("Trident") == -1) {
        var lienzo = document.getElementById("lienzo1");
        var contexto = lienzo.getContext("2d");
        var lienzoFoto = document.createElement("canvas");
        var contextoFoto = lienzoFoto.getContext("2d");
        var ventana = document.getElementById("dialogOptions");
        var mainWindCont = '<label for="nombreArchivo">' + idioma.saveLabel1 + '</label><input type="text" id="nombreArchivo" placeholder="firework"><br><br><label for="dimensiones">' + idioma.saveLabel2 + '</label><select id="dimensiones"><option class="tamanos" value="1">' + parseInt(lienzo.width) + " X " + parseInt(lienzo.height) + '</option><option class="tamanos" value="2" selected>' + parseInt(lienzo.width / 2) + " X " + parseInt(lienzo.height / 2) + '</option><option class="tamanos" value="3">' + parseInt(lienzo.width / 3) + " X " + parseInt(lienzo.height / 3) + '</option><option class="tamanos" value="4">' + parseInt(lienzo.width / 4) + " X " + parseInt(lienzo.height / 4) + '</option></select><br><br><button type="button" id="saveOk">' + idioma.okText + '</button><img src="imagenes/iconos/white_closer-min.png" id="closeSaver">';
        ventana.innerHTML = mainWindCont;
        ventana.style.top = "40%"
        ventana.style.display = "block";
        document.getElementById("closeSaver").addEventListener("click", function(){
            ventana.style.display = "none";
        });
        document.getElementById("saveOk").addEventListener("click", function() {
            var tama = document.getElementsByClassName("tamanos");
            for (i = 0; i < tama.length; i++) {
                if (tama[i].selected == true) {
                    var saveSize = tama[i].value;
                }
            }
            var fileName = document.getElementById("nombreArchivo").value;
            lienzoFoto.width = lienzo.width / saveSize;
            lienzoFoto.height = lienzo.height / saveSize;
            contextoFoto.drawImage(lienzo, 0, 0, lienzoFoto.width, lienzoFoto.height);
            contextoFoto.globalCompositeOperation = "luminosity";
            if (saveSize < 2) {
                contextoFoto.font = "16px Comic Sans MS";
                var centrado = 1.1;
            }
            else {
                contextoFoto.font = "12px Comic Sans MS";
                var centrado = .8;
            }
            contextoFoto.shadowColor = "#000000";
            contextoFoto.shadowOffsetX = -3;
            contextoFoto.shadowOffsetY = 3;
            contextoFoto.shadowBlur = 2;
            contextoFoto.fillStyle = "#ffffff";
            contextoFoto.fillText(idioma.waterMark, lienzoFoto.width - ((lienzo.width / 4) * centrado), lienzoFoto.height - (16 - (saveSize * 2)));
            contextoFoto.globalCompositeOperation = "source-over";
            var imgToSave = new Image();
            imgToSave.src = lienzoFoto.toDataURL("image/jpeg");
            var descarga = document.createElement("a");
            descarga.href = imgToSave.src;
            descarga.type = "image/jpeg";
            descarga.download = fileName || "Fireworks-Generator © 2016 Pedro Pablo Gonzalo";
            descarga.target = "_blank";
            if (config.legalconsent == "true") { // Si el usuario ha dado consentimiento para compartir el contenido...
                lienzoFoto.toBlob(function(blob){ // Generamos un 'blob' para enviarlo a Firebase como contenido
                    var archivo = new Image();
                    archivo.src = blob;
                    archivo.type = "image/jpeg";
                    var storageRef = firebase.storage().ref("User_pictures/" + (fileName || "Fireworks-Generator © 2016 Pedro Pablo Gonzalo") + ".jpg"); // Asocimos la referencia del storage de Firebase
                    storageRef.put(blob); // Con 'put()' enviamos el archivo al storage de Firebase
                });
            }
            if (navigator.userAgent.indexOf("Chrome") != -1) {
                descarga.click();
                ventana.style.display = "none";
            }
            else { // Work-around para Firefox
                descarga.innerHTML = idioma.dwldText;
                descarga.setAttribute("id", "dwldBtn");
                descarga.download += ".jpg";
                document.getElementById("saveOk").parentNode.appendChild(descarga);
                document.getElementById("saveOk").parentNode.removeChild(document.getElementById("saveOk"));
                descarga.onclick = function() {
                    ventana.style.display = "none";
                };
            }
        });
    }

    // Anulamos la función en IE ya que este navegador no soporta el método "toBlob" ni puede
    // trabajar con imágenes en Base64 de mas de 32kb...

    else {
        var ventana = document.getElementById("dialogOptions");
        var mainWindCont = '<h4>' + idioma.noIE + '</h4><br><button type="button" id="understood">' + idioma.confirmText + '</button>';
        ventana.innerHTML = mainWindCont;
        ventana.style.display = "block";
        ventana.style.top = "30%";
        var boton = document.getElementById("understood");
        boton.style.fontSize = "1.5rem";
        boton.style.width = "30%";
        document.getElementById("understood").addEventListener("click", function() {
            ventana.style.display = "none";
        });
    }
}

// Función para la selección de fondo, permite tanto elegir imágenes del equipo usuario
// como colores personalizados mediante el selector del navegador cliente.
// También genera ventanas de selección y confirmación de datos.

function backgroundSelector() {
    var ventana = document.getElementById("dialogOptions");
    var confirmacion = document.getElementById("dialogConfirm");
    var mainWindCont = '<label for="colorin">' + idioma.bgColLabel + '</label><input id="colorin" name="colorin" type="color"><br><br><label for="fotico">' + idioma.bgImgLabel + '</label><input id="fotico" name="fotico" type="file" accept="image/*"><img src="imagenes/iconos/white_closer-min.png" id="closeIcon">';
    ventana.innerHTML = mainWindCont;
    ventana.style.top = "40%"
    ventana.style.display = "block";
    document.getElementById("closeIcon").addEventListener("click", function() {
        ventana.style.display = "none";
    });
    document.getElementById("fotico").addEventListener("change", function() {
        var mainWindCont = '<h3>Advertencia:</h3><p>' + idioma.bgWarn1 + '</p><h3>' + idioma.bgWarn2 + '</h3><br><section id="snBtns"><button type="button" id="confirm" class="choiceBtn">' + idioma.yesText + '</button><button type="button" id="deny" class="choiceBtn">' + idioma.noText + '</button></section>';
        confirmacion.innerHTML = mainWindCont;
        confirmacion.style.top = "40%";
        confirmacion.style.display = "block";
        ventana.style.display = "none";
        document.getElementById("confirm").addEventListener("click", function(){
            var reader = new FileReader();
            reader.readAsDataURL(document.getElementById("fotico").files[0]);
            reader.onload = function(e) {
                config.fondo = e.target.result;
                backgrImgSetter();
            }
            ventana.style.display = "none";
            confirmacion.style.display = "none";
        });
        document.getElementById("deny").addEventListener("click", function(){
            ventana.style.display = "none";
            confirmacion.style.display = "none";
        });
    });
    document.getElementById("colorin").addEventListener("change", function() {
        var mainWindCont = '<h3>Advertencia:</h3><p>Esta operación reiniciará por completo el dibujo realizado.</p><br><h3>¿Desea continuar?</h3><br><section id="snBtns"><button type="button" id="confirm" class="choiceBtn">Si</button><button type="button" id="deny" class="choiceBtn">No</button></section>';
        confirmacion.innerHTML = mainWindCont;
        confirmacion.style.top = "40%";
        confirmacion.style.display = "block";
        ventana.style.display = "none";
        document.getElementById("confirm").addEventListener("click", function(){
            config.color = document.getElementById("colorin").value;
            config.fondo = "";
            backgrColSetter();
            ventana.style.display = "none";
            confirmacion.style.display = "none";
        });
        document.getElementById("deny").addEventListener("click", function(){
            ventana.style.display = "none";
            confirmacion.style.display = "none";
        });
    });
}

// Función auxiliar para la aplicación de tranparencia a los colores necesarios mediante la conversión
// de notacion RGB hexadecimar a RGBA decimal. Se le suministran como argumentos el color
// en notación hexadecimal y el valor de transparencia. P.ej. -> "transparencyAdder('#f3d2a0', 0.7);"

function transparencyAdder(valor, transp) {
    var hex = valor.replace("#", "");
    var longit = hex.length;
    var rgbNumber = "rgba(";
    for (i = 0; i < (longit / 2); i++) {
        rgbNumber += parseInt(hex.slice(i * 2, 2 + (i * 2)), 16) + ", ";
    }
    rgbNumber += transp + ")";
    return rgbNumber;
}

// Función para la aplicación de filtros, genera una ventana de confirmación de datos
// y permite un retorno al estado previo tras aplicar los cambios y ser rechazados.

function filterSetter() {
    if (filter.color != "" && filter.effect != "") {
        var lienzo = document.getElementById("lienzo1");
        var contexto = lienzo.getContext("2d");
        var lienzoBackup = new Image();
        lienzoBackup.src = lienzo.toDataURL();
        contexto.globalCompositeOperation = filter.effect;
        contexto.fillStyle = filter.color;
        contexto.fillRect(0, 0, lienzo.width, lienzo.height);
        contexto.globalCompositeOperation = "source-over";
        var ventana = document.getElementById("dialogConfirm");
        var mainWindCont = '<h4>' + idioma.fltWarn1 + '</h4><p>' + idioma.fltWarn2 + '</p><br><button type="button" id="confirm" class="choiceBtn">' + idioma.yesText + '</button><button type="button" id="deny" class="choiceBtn">' + idioma.noText + '</button>';
        ventana.innerHTML = mainWindCont;
        ventana.style.top = "40%";
        ventana.style.display = "block";
        document.getElementById("confirm").addEventListener("click", function() {
            ventana.style.display = "none";
        });
        document.getElementById("deny").addEventListener("click", function() {
            contexto.drawImage(lienzoBackup, 0, 0, lienzo.width, lienzo.height);
            ventana.style.display = "none";
        });
    }
    else {
        return;
    }
}

// Función para la selección de filtros que aplicar a la imagen actual. Genera una ventana de selección
// e introducción de datos donde sea necesario (algunos filtros están completamente definidos...)
// Genera una ventana de selección y modifica el objeto Json pertinente además de llamar a la función
// anterior.

function filterChoose() {
    filter.color = "";
    filter.effect = "";
    var ventana = document.getElementById("dialogOptions");
    var mainWindCont = '<h3>' + idioma.fltInf1 + '</h3><section id="listaFiltros"><input type="radio" name="filtro" id="negativo" value="negativo"><label for="negativo">' + idioma.fltNeg + '</label><hr><input type="radio" name="filtro" id="b&w" value="b&w"><label for="b&w">' + idioma.fltBaW + '</label><hr><input type="radio" name="filtro" id="taint" value="taint"><label for="taint">' + idioma.fltTaint + '</label><span><label for="taintCol">' + idioma.colorText + '</label><input type="color" id="taintCol"></span><hr><input type="radio" name="filtro" id="mart" value="mart"><label for="mart">' + idioma.fltMars + '</label><span><label for="martCol">' + idioma.colorText + '</label><input type="color" id="martCol"></span><hr><input type="radio" name="filtro" id="nighty" value="nighty"><label for="nighty">' + idioma.fltNight + '</label><hr><input type="radio" name="filtro" id="dayly" value="dayly"><label for="dayly">' + idioma.fltDay + '</label><span><label for="dayCol">' + idioma.colorText + '</label><input type="color" id="dayCol"></span></section><br><button type="button" id="filtroOk">' + idioma.okText + '</button><img src="imagenes/iconos/white_closer-min.png" id="closingIcon">';
    ventana.innerHTML = mainWindCont;
    ventana.style.top = "30%";
    ventana.style.display = "block";
    document.getElementById("closingIcon").addEventListener("click", function() {
        ventana.style.display = "none";
    });
    document.getElementById("filtroOk").addEventListener("click", function() {
        var filtros = document.getElementsByName("filtro");
        for (i = 0; i < filtros.length; i++) {
            if (filtros[i].checked == true) {
                var usedFilter = filtros[i].value;
            }
        }
        switch (usedFilter) {
            case "negativo":
                filter.color = transparencyAdder("#ffffff", 1);
                filter.effect = "exclusion";
                break;
            case "b&w":
                filter.color = transparencyAdder("#ffffff", 1);
                filter.effect = "hue";
                break;
            case "taint":
                filter.color = transparencyAdder(document.getElementById("taintCol").value, 1);
                filter.effect = "color";
                break;
            case "mart":
                filter.color = transparencyAdder(document.getElementById("martCol").value, 1);
                filter.effect = "color-dodge";
                break;
            case "nighty":
                filter.color = transparencyAdder("#666666", 1);
                filter.effect = "overlay";
                break;
            case "dayly":
                filter.color = transparencyAdder(document.getElementById("dayCol").value, 0.4);
                filter.effect = "lighten";
                break;
        }
        filterSetter();
        ventana.style.display = "none";
    });
}

// Función para la selección de vista de usuario (o trayectoria de los cohetes), lateral
// o cenital (vertical o central si se prefiere...)

function viewSelect(){
    if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Trident") != -1) {
        var botonText = document.getElementById("viewpoint");
        if (config.vista == "lateral" && botonText.innerHTML == idioma.topView) {
            config.vista = "cenital";
            botonText.innerHTML = idioma.sideView;
            return;
        }
        if (config.vista == "cenital" && botonText.innerHTML == idioma.sideView) {
            config.vista = "lateral";
            botonText.innerHTML = idioma.topView;
            return;
        }
    }
    else {
        var botonText = document.getElementById("viewpoint");
        if (config.vista == "lateral" && botonText.innerHTML == idioma.topView + '<span class="info">?</span>') {
            config.vista = "cenital";
            botonText.innerHTML = idioma.sideView + '<span class="info">?</span>';
            return;
        }
        if (config.vista == "cenital" && botonText.innerHTML == idioma.sideView + '<span class="info">?</span>') {
            config.vista = "lateral";
            botonText.innerHTML = idioma.topView + '<span class="info">?</span>';
            return;
        }
    }
}

// Función para la selección del tipo de cohete; genera una ventana lateral con efecto "Slide-in-out"
// (definido mediante clases CSS + transitions), para seleccionar el tipo de cohete o un aleatorizador
// del tipo en cada pulsación y modifica el objeto Json pertinente.

function blastSetter() {
    var lienzo = document.getElementById("lienzo1");
    var ventana = document.getElementById("blastChooser");
    var mainWindCont = '<h3>' + idioma.blastText + '</h3>';
    for (i = 0; i < fwSets.length; i++) {
        mainWindCont += '<img src="' + fwSets[i].blast + '" class="thumbs" id="imgLink' + i + '" width="' + lienzo.height * .085 + '" height="' + lienzo.height * .085 + '" onclick="config.set=fwSets[' + i + ']"><br>';
    };
    mainWindCont += '<br><button type="button" id="randomize">' + idioma.rdmText + '</button>'
    ventana.innerHTML = mainWindCont;
    ventana.style.display = "block";
    var desvanecer = setTimeout(function() {
        ventana.style.display = "none";
    }, 2000);
    clearTimeout(desvanecer);
    ventana.classList.remove("blastChooserHidden");
    ventana.classList.add("blastChooserShown");
    for (i = 0; i < fwSets.length; i++) {
        document.getElementById("imgLink" + i).addEventListener("click", function() {
            config.blaster = "manual";
            ventana.classList.remove("blastChooserShown");
            ventana.classList.add("blastChooserHidden");
            desvanecer;
        });
        document.getElementById("randomize").addEventListener("click", function() {
            config.blaster = "random";
            ventana.classList.remove("blastChooserShown");
            ventana.classList.add("blastChooserHidden");
            desvanecer;
        });
    };
    setTimeout(function() {
        ventana.classList.remove("blastChooserShown");
            ventana.classList.add("blastChooserHidden");
            desvanecer;
    }, 8000);
}

// Función para añadir sonido a los cohetes (ascenso y explosión).

var lista = {}; // Aqui se genera la colección dinámica de sonidos que se esten usando (cola de reproducción)
var sonidos = { // Esta es la lista de sonidos prefijados que usaremos
    subida: "sounds/ascenso.mp3",
    explosion: "sounds/explosion.mp3"
}
function toca(sonido) {
    var indice, numerador;
    numerador = new Date(); // Usamos un objeto Date para obtener numeradores correlativos
    indice = sonido + numerador.getTime(); // y generamos un indice correlativo en cola de reproducción
    lista[indice] = new Audio(sonidos[sonido]); // Generamos un nuevo sonido en cola de reproduccion con el sonido solicitado a la función.
    lista[indice].onended = function () {
        delete lista[indice]; // Y lo eliminaremos cuando termine de reproducirse para desaturar memoria
    };
    lista[indice].play(); // A continuación lo reproducimos.
}

// FUNCIONES PARA EL PROPIO FUNCIONAMIENTO  INTERNO DE LA APP
//___________________________________________________________

// Función para la ejecución del proposito principal (disparar los fuegos correctamente)
// Realiza comprobaciones del objeto Json de configuración y realiza llamadas a distintas
// funciones según dichos parámetros, también incluye el aleatorizador de cohetes (linea 713)

function blastRenderer(evento) {
    if (config.blaster == "random") {
        var indice = Math.round(Math.ceil(Math.random() * (fwSets.length - 1)));
        config.set = fwSets[indice];
    }
    if (config.vista == "lateral") {
        toca("subida");
        estelaVert(evento);
        setTimeout(function() {
            toca("explosion");
            boomVert(evento);
        }, 500);
        return;
    }
    if (config.vista == "cenital") {
        toca("subida");
        estelaCentr(evento);
        setTimeout(function() {
            toca("explosion");
            boomCentr(evento);
        }, 500);
        return;
    }
}

// Función para emplear el atributo name de los botones como texto de la ventana de ayuda en Firefox
// e Internet Explorer

function firefoxButtons() {

    // Eliminamos los botones de ayuda ya que usaremos el evento 'onmouseover'

    var spans = document.getElementsByTagName("span");
    var spanlist = spans.length;
    for (i = 0; i < spanlist; i++) {
        if (navigator.userAgent.indexOf("Trident") != -1) {
            spans[0].parentNode.removeChild(spans[0]);
        }
        else {
            spans[0].remove();
        }
    };

    // Generamos el atributo name y su contenido y el evento 'onmouseover' de los botones

    var botones = document.getElementsByTagName("button");
    for (i = 0; i < botones.length; i++) {
        switch (botones[i].getAttribute("id")) {
        case "blasts":
            botones[i].setAttribute("name", idioma.blastHelp.replace(/<br>/g, "\r"));
            botones[i].addEventListener("mouseover", function() {
                firefoxHelp(this, 1);
            });
            break;
        case "viewpoint":
            botones[i].setAttribute("name", idioma.viewHelp.replace(/<br>/g, "\r"));
            botones[i].addEventListener("mouseover", function() {
                firefoxHelp(this, 2);
            });
            break;
        case "filtro":
            botones[i].setAttribute("name", idioma.fltHelp.replace(/<br>/g, "\r"));
            botones[i].addEventListener("mouseover", function() {
                firefoxHelp(this, 3);
            });
            break;
        case "background":
            botones[i].setAttribute("name", idioma.bgHelp.replace(/<br>/g, "\r"));
            botones[i].addEventListener("mouseover", function() {
                firefoxHelp(this, 4);
            });
            break;
        case "clear":
            botones[i].setAttribute("name", idioma.clrHelp.replace(/<br>/g, "\r"));
            botones[i].addEventListener("mouseover", function() {
                firefoxHelp(this, 5);
            });
            break;
        case "save":
            botones[i].setAttribute("name", idioma.saveHelp.replace(/<br>/g, "\r"));
            botones[i].addEventListener("mouseover", function() {
                firefoxHelp(this, 6);
            });
        }
    }
    return;
}

// Función para dimensionar y mostrar las pseudo-ventanas de ayuda en Firefox

function firefoxHelp(origen, hijo) {
    var posicion = origen.getBoundingClientRect();
    document.styleSheets[0].insertRule('#botonera button[name]:nth-child(' + hijo + '):hover:before {content: attr(name); position: absolute; font-size: .9rem; text-align: left; margin-top: -14%; left: ' + (posicion.left + 8) + 'px; width: ' + posicion.width * 0.72 + 'px; background-color: rgba(0, 0, 0, 0.6); color: white; padding: 1em 2em; border-radius: 1em; text-shadow: -1px 1px 3px black; z-index: 10; }', 0);
    return;
}

// Función para generar y mostrar las ventanas de ayuda de cada botón

function displayHelp(origen) {
    var ventana = document.getElementById("dialogHelp");
    var parentId = origen.parentElement.getAttribute("id");
    var posicion = origen.parentElement.getBoundingClientRect();
    switch (parentId) {
        case "blasts":
            var mainWindCont = '<p>' + idioma.blastHelp + '</p>';
            break;
        case "viewpoint":
            var mainWindCont = '<p>' + idioma.viewHelp + '</p>';
            break;
        case "filtro":
            var mainWindCont = '<p>' + idioma.fltHelp + '</p>';
            break;
        case "background":
            var mainWindCont = '<p>' + idioma.bgHelp + '</p>';
            break;
        case "clear":
            var mainWindCont = '<p>' + idioma.clrHelp + '</p>';
            break;
        case "save":
            var mainWindCont = '<p>' + idioma.saveHelp + '</p>';
    }
    ventana.innerHTML = mainWindCont;
    ventana.style.display = "block";
    ventana.style.position = "absolute";
    ventana.style.left = posicion.left + "px";
    ventana.style.width = (posicion.width * 0.72) + "px";
    ventana.style.top = (posicion.top - ventana.getBoundingClientRect().height - posicion.height) + "px";
    ventana.classList.remove("hiddenHelp");
    ventana.classList.add("shownHelp");
}

// Función para ocultar las ventanas de ayuda de los botones

function hideHelp() {
    var ventana = document.getElementById("dialogHelp");
    ventana.classList.remove("shownHelp");
    ventana.classList.add("hiddenHelp");
    setTimeout(function(){
        ventana.style.display = "none";
    }, 1200);
}

// Función para la creación y gestión de la botonera inferior, tambien permite su traducción
// instantanea sin necesidad de recargar el documento y asigna los manejadores de evento de
// los botones y botones de ayuda.

function btnDisplayer() {
    if (document.body.lastChild.getAttribute("id") != "lienzo1" || !document.body.lastChild.getAttribute("id")) {
        var cuerpo = document.body;
        var hijos = cuerpo.childNodes;
        var cuantos = cuerpo.childElementCount;
        cuerpo.removeChild(cuerpo.childNodes[cuantos - 1]);
    }
    var botonera = document.createElement('div');
    botonera.innerHTML = '<section id="botonera"><button type="button" id="blasts">' + idioma.blastText + '<span class="info">?</span></button><button type="button" id="viewpoint">' + idioma.topView + '<span class="info">?</span></button><button type="button" id="filtro">' + idioma.fltBttnText + '<span class="info">?</span></button><button type="button" id="background">' + idioma.bgBttnText + '<span class="info">?</span></button><button type="button" id="clear">' + idioma.clrBttnText + '<span class="info">?</span></button><button type="button" id="save">' + idioma.saveBttnText + '<span class="info">?</span></button><img id="spFlag" class="lngIcon" src="imagenes/iconos/spain_flag-min.png"><img id="ukFlag" class="lngIcon" src="imagenes/iconos/uk_flag-min.png"></section><aside class="dialog" id="dialogOptions"></aside><aside class="dialog" id="dialogConfirm"></aside><aside id="blastChooser" class="blastChooserHidden"></aside><aside class="hiddenHelp" id="dialogHelp"></aside><aside class="hiddenHelp" id="legalWarning"></aside>';
    document.body.appendChild(botonera);
    if (idioma == spnsh) {
        document.getElementById("spFlag").style.outline = "inset 4px rgba(255, 255, 255, 0.8)";
    }
    if (idioma == nglsh) {
        document.getElementById("ukFlag").style.outline = "inset 4px rgba(255, 255, 255, 0.8)";
    }

    // Manejadores de evento de los botones

    document.getElementById("clear").addEventListener("click", function(){canvasReset();});
    document.getElementById("save").addEventListener("click", function(){saveCanvas();});
    document.getElementById("background").addEventListener("click", function(){backgroundSelector();});
    document.getElementById("filtro").addEventListener("click", function(){filterChoose();});
    document.getElementById("viewpoint").addEventListener("click", function(){viewSelect();});
    document.getElementById("blasts").addEventListener("click", function(){blastSetter();});
    document.getElementById("spFlag").addEventListener("click", function(){langSetter(this);});
    document.getElementById("ukFlag").addEventListener("click", function(){langSetter(this);});

    // Manejadores de evento para los botones de ayuda en Chrome

    if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Trident") != -1) {
        firefoxButtons();
    }
    else {
        var helpButtons = document.getElementsByClassName("info");
        for (i = 0; i < helpButtons.length; i++) {
            helpButtons[i].addEventListener("click", function(e) {
                e.stopPropagation();
                displayHelp(this);});
            helpButtons[i].addEventListener("mouseout", function() {hideHelp();});
        }
    }


    // Evitamos que se abra el menu contextual para obligar la descarga mediante el boton de función al efecto.

    document.body.oncontextmenu = function() {return false;};
}

// Función para la selección de idiomas

function langSetter(boton) {
    var btnId = boton.getAttribute("id");
    if (btnId == "spFlag") {
        idioma = spnsh;
        btnDisplayer();
        return;
    }
    if (btnId == "ukFlag") {
        idioma = nglsh;
        btnDisplayer();
        return;
    }
}

// Función para la obtención del consentimiento del usuario para acceder a su contenido

function legalConsent() {

    // El aviso se elimina en IE ya que no permite subir imágenes a Firebase Storage

    if (navigator.userAgent.indexOf("Trident") == -1) {
        if (config.legalconsent == "") {
            var repeticion = setTimeout(function() {
                legalConsent();
            }, 180000);
        }
        var displayLegal = document.getElementById("legalWarning");
        var mainWindCont = '<h1>' + idioma.legalWarnTitle + '</h1><h3>' + idioma.legalWarn + '</h3><br><button type="button" id="confirmLegal">' + idioma.yesText + '</button><button type="button" id="denyLegal">' + idioma.noText + '</button>';
        displayLegal.innerHTML = mainWindCont;
        displayLegal.style.display = "block";
        displayLegal.classList.remove("hiddenHelp");
        displayLegal.classList.add("shownHelp");
        document.getElementById("confirmLegal").addEventListener("click", function() {
            config.legalconsent = "true";
            displayLegal.classList.remove("showHelp");
            displayLegal.classList.add("hiddenHelp");
            clearTimeout(repeticion);
            displayLegal.style.display = "none";
        });
        document.getElementById("denyLegal").addEventListener("click", function() {
            config.legalconsent = "false";
            displayLegal.classList.remove("showHelp");
            displayLegal.classList.add("hiddenHelp");
            clearTimeout(repeticion);
            displayLegal.style.display = "none";
        });
        setTimeout(function() {
            displayLegal.classList.remove("showHelp");
            displayLegal.classList.add("hiddenHelp");
            setTimeout(function() {
                displayLegal.style.display = "none";
            }, 1200);
        }, 30000);
    }
}

// Función generadora de contenidos.
// Genera dinámicamente el canvas y sus medidas; tras comprobar que el viewport cumple
// los requerimientos realiza la carga del canvas y le asigna medidas relativas al viewport.
// También le asigna su estado de inicio (color y fondo).

function contentSetter() {
    if (!!window.WebGLRenderingContext) {
        if (window.innerWidth < window.innerHeight) {
            var displayAlarm = '<aside id="displayAlarm"><h2>' + idioma.contWarn1 + '</h2><button type="button" id="resetter">' + idioma.confirmText + '</button></aside>';
            document.body.innerHTML = displayAlarm;
            document.getElementById("resetter").addEventListener("click", function() {
                window.history.back();
            });
        }
        else {
            if (window.innerWidth < 800) {
                var displayAlarm = '<aside id="displayAlarm"><h2>' + idioma.contWarn2 + '</h2><button type="button" id="resetter">' + idioma.confirmText + '</button></aside>';
                document.body.innerHTML = displayAlarm;
                document.getElementById("resetter").addEventListener("click", function() {
                window.history.back();
                });
            }
            else {
                document.body.innerHTML = '<canvas id="lienzo1" width="' + window.innerWidth * .9375 + '" height="' + window.innerHeight * .94 + '" onclick="blastRenderer(event)"></canvas>';
                btnDisplayer();
                backgrColSetter();
                backgrImgSetter();
                legalConsent();
            }
        }
    }
    else {
        var displayAlarm = '<aside id="displayAlarm"><h2>' + idioma.noCanvas + '</h2><button type="button" id="resetter">' + idioma.confirmText + '</button></aside>';
        document.body.innerHTML = displayAlarm;
        document.getElementById("resetter").addEventListener("click", function() {
            window.history.back();
        });
    }
}