// PRIMERO, UN POCO DE DEFINICIÓN DE LOS OBJETOS QUE USAREMOS EN LA APP

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
    set: fwSets[3]
};

var filter = {
    color: "",
    effect: ""
};

// COMENZAMOS CON LAS FUNCIONES QUE DEFINIRAN EL COMPORTAMIENTO DE LA APP (BOTONES DE OPCIONES)
//______________________________________________________________________________________________

// Funciones para definir y usar un cohete de ascenso radial (desde el centro del lienzo)

// Función que define y dibuja la estela

function estelaCentr(evento) {
    var lienzo = document.getElementById("lienzo1");
    var contexto = lienzo.getContext("2d");
    var radio1 = Math.sqrt(Math.pow(Math.abs((evento.clientX  -  lienzo.offsetLeft) - (lienzo.width / 2)), 2) + Math.pow(Math.abs((evento.clientY - lienzo.offsetTop) - (lienzo.height / 2)), 2));
    var degradado1 = contexto.createRadialGradient((lienzo.width / 2), (lienzo.height / 2), 0, evento.clientX - lienzo.offsetLeft, evento.clientY - lienzo.offsetTop, radio1 * 0.1);
    contexto.beginPath();
    contexto.moveTo((lienzo.width / 2), (lienzo.height / 2));
    contexto.lineTo(evento.clientX - lienzo.offsetLeft, evento.clientY - lienzo.offsetTop);
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
    var hptns = Math.sqrt(Math.pow(Math.abs((evento.clientX  -  lienzo.offsetLeft) - (lienzo.width / 2)), 2) + Math.pow(Math.abs((evento.clientY - lienzo.offsetTop) - (lienzo.height / 2)), 2));
    var seno = Math.abs((evento.clientX  -  lienzo.offsetLeft) - (lienzo.width / 2)) / hptns;
    var coseno = Math.abs((evento.clientY - lienzo.offsetTop) - (lienzo.height / 2)) / hptns;
    if (evento.clientX - lienzo.offsetLeft > lienzo.width / 2 && evento.clientY - lienzo.offsetTop < lienzo.height / 2) {
        var angulo = Math.asin(seno);
    }
    if (evento.clientX - lienzo.offsetLeft > lienzo.width / 2 && evento.clientY - lienzo.offsetTop > lienzo.height / 2) {
        var angulo = -1 * ((Math.asin(seno) * 180 / Math.PI) + 180) * Math.PI / 180;
    }
    if (evento.clientX - lienzo.offsetLeft < lienzo.width / 2 && evento.clientY - lienzo.offsetTop > lienzo.height / 2) {
        var angulo = ((Math.asin(seno) * 180 / Math.PI) + 180) * Math.PI / 180;
    }
    if (evento.clientX - lienzo.offsetLeft < lienzo.width / 2 && evento.clientY - lienzo.offsetTop < lienzo.height / 2) {
        var angulo = -1 * Math.asin(seno);
    }
    imagen.src = config.set.blast;
    imagen.onload = function() {
        var anchoEscala = imagen.width * (Math.abs(hptns) / (lienzo.width / 2));
        var altoEscala = imagen.height * (Math.abs(hptns) / (lienzo.width / 2));
        contexto.save();
        contexto.translate((evento.clientX - lienzo.offsetLeft), (evento.clientY - lienzo.offsetTop));
        contexto.rotate(angulo);
        contexto.drawImage(imagen, 0 - anchoEscala / 2, 0 - altoEscala / 2, anchoEscala, altoEscala);
        contexto.restore();
    }
}

// Funciónes para definir y usar un cohete de ascenso vertical (desde el suelo)

// Función que define y dibuja la estela

function estelaVert(evento) {
    var lienzo = document.getElementById("lienzo1");
    var contexto = lienzo.getContext("2d");
    var altura = evento.clientY - lienzo.offsetTop;
    var degradado1 = contexto.createLinearGradient(evento.clientX, lienzo.height, evento.clientX, evento.clientY);
    contexto.beginPath();
    contexto.moveTo(evento.clientX - lienzo.offsetLeft, lienzo.height);
    contexto.lineTo(evento.clientX - lienzo.offsetLeft, evento.clientY - lienzo.offsetTop);
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
        contexto.drawImage(imagen, ((evento.clientX - lienzo.offsetLeft) - (anchoEscala / 2)), ((evento.clientY - lienzo.offsetTop) - (altoEscala / 2)), anchoEscala, altoEscala);
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
// y añade una marca de agua a la imagen.

function saveCanvas() {
    var lienzo = document.getElementById("lienzo1");
    var contexto = lienzo.getContext("2d");
    var lienzoFoto = document.createElement("canvas");
    var contextoFoto = lienzoFoto.getContext("2d");
    var ventana = document.getElementById("dialogOptions");
    var mainWindCont = '<label for="nombreArchivo">Nombre del archivo: </label><input type="text" id="nombreArchivo" placeholder="firework"><br><br><label for="dimensiones">Tamaño de la imagen: </label><select id="dimensiones"><option class="tamanos" value="1">' + parseInt(lienzo.width) + " X " + parseInt(lienzo.height) + '</option><option class="tamanos" value="2" selected>' + parseInt(lienzo.width / 2) + " X " + parseInt(lienzo.height / 2) + '</option><option class="tamanos" value="3">' + parseInt(lienzo.width / 3) + " X " + parseInt(lienzo.height / 3) + '</option><option class="tamanos" value="4">' + parseInt(lienzo.width / 4) + " X " + parseInt(lienzo.height / 4) + '</option></select><br><br><button type="button" id="saveOk">Ok</button><img src="imagenes/iconos/white_closer-min.png" id="closeSaver">';
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
        contextoFoto.fillText("Creado con Fireworks-Generator © 2016 Pedro Pablo Gonzalo", lienzoFoto.width - ((lienzo.width / 4) * centrado), lienzoFoto.height - (16 - (saveSize * 2)));
        contextoFoto.globalCompositeOperation = "source-over";
        var imgToSave = new Image();
        imgToSave.src = lienzoFoto.toDataURL("image/jpeg");
        var descarga = document.createElement("a");
        descarga.href = imgToSave.src;
        descarga.type = "image/png";
        descarga.download = fileName || "Fireworks-Generator © 2016 Pedro Pablo Gonzalo";
        descarga.target = "_blank";
        descarga.click();
        ventana.style.display = "none";
    });
}

// Función para la selección de fondo, permite tanto elegir imágenes del equipo usuario
// como colores personalizados mediante el selector del navegador cliente.
// También genera ventanas de selección y confirmación de datos.

function backgroundSelector() {
    var ventana = document.getElementById("dialogOptions");
    var confirmacion = document.getElementById("dialogConfirm");
    var mainWindCont = '<label for="colorin">Color de fondo: </label><input id="colorin" name="colorin" type="color"><br><br><label for="fotico">Imagen de fondo: </label><input id="fotico" name="fotico" type="file" accept="image/*"><img src="imagenes/iconos/white_closer-min.png" id="closeIcon">';
    ventana.innerHTML = mainWindCont;
    ventana.style.display = "block";
    document.getElementById("closeIcon").addEventListener("click", function() {
        ventana.style.display = "none";
    });
    document.getElementById("fotico").addEventListener("change", function() {
        var mainWindCont = '<h3>Advertencia:</h3><p>Esta operación reiniciará por completo el dibujo realizado.</p><h3>¿Desea continuar?</h3><br><section id="snBtns"><button type="button" id="confirm" class="choiceBtn">Si</button><button type="button" id="deny" class="choiceBtn">No</button></section>';
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
        var mainWindCont = '<h4>¿Está satisfecho con el resultado y desea mantener los cambios efectuados por el filtro?</h4><p>(Los cambios no podrán ser revertidos más adelante)</p><br><button type="button" id="confirm" class="choiceBtn">Si</button><button type="button" id="deny" class="choiceBtn">No</button>';
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
    var mainWindCont = '<h3>Filtros disponibles</h3><section id="listaFiltros"><input type="radio" name="filtro" id="negativo" value="negativo"><label for="negativo"> Invertir colores</label><hr><input type="radio" name="filtro" id="b&w" value="b&w"><label for="b&w"> Blanco y negro</label><hr><input type="radio" name="filtro" id="taint" value="taint"><label for="taint"> Teñido</label><span><label for="taintCol">Color: </label><input type="color" id="taintCol"></span><hr><input type="radio" name="filtro" id="mart" value="mart"><label for="mart"> Marciano</label><span><label for="martCol">Color: </label><input type="color" id="martCol"></span><hr><input type="radio" name="filtro" id="nighty" value="nighty"><label for="nighty"> Nocturno</label><hr><input type="radio" name="filtro" id="dayly" value="dayly"><label for="dayly"> Diurno</label><span><label for="dayCol">Color: </label><input type="color" id="dayCol"></span></section><br><button type="button" id="filtroOk">Ok</button><img src="imagenes/iconos/white_closer-min.png" id="closingIcon">';
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
    var botonText = document.getElementById("viewpoint");
    if (config.vista == "lateral" && botonText.innerHTML == "Vista: cenital") {
        config.vista = "cenital";
        botonText.innerHTML = "Vista: lateral";
        return;
    }
    if (config.vista == "cenital" && botonText.innerHTML == "Vista: lateral") {
        config.vista = "lateral";
        botonText.innerHTML = "Vista: cenital";
        return;
    }
}

// Función para la selección del tipo de cohete; genera una ventana lateral con efecto "Slide-in-out"
// (definido mediante clases CSS + transitions), para seleccionar el tipo de cohete o un aleatorizador
// del tipo en cada pulsación y modifica el objeto Json pertinente.

function blastSetter() {
    var lienzo = document.getElementById("lienzo1");
    var ventana = document.getElementById("blastChooser");
    var mainWindCont = '<h3>Palmeras:</h3>';
    for (i = 0; i < fwSets.length; i++) {
        mainWindCont += '<img src="' + fwSets[i].blast + '" class="thumbs" id="imgLink' + i + '" width="' + lienzo.width * .045 + '" height="' + lienzo.width * .045 + '" onclick="config.set=fwSets[' + i + ']"><br>';
    };
    mainWindCont += '<br><button type="button" id="randomize">Aleatorio</button>'
    ventana.innerHTML = mainWindCont;
    ventana.classList.remove("blastChooserHidden");
    ventana.classList.add("blastChooserShown");
    for (i = 0; i < fwSets.length; i++) {
        document.getElementById("imgLink" + i).addEventListener("click", function() {
            config.blaster = "manual";
            ventana.classList.remove("blastChooserShown");
            ventana.classList.add("blastChooserHidden");
            setTimeOut(function() {
                ventana.style.display = "none";
            }, 2000);
        });
        document.getElementById("randomize").addEventListener("click", function() {
            config.blaster = "random";
            ventana.classList.remove("blastChooserShown");
            ventana.classList.add("blastChooserHidden");
            setTimeOut(function() {
                ventana.style.display = "none";
            }, 2000);
        });
    };
}

// FUNCIONES PARA EL PROPIO FUNCIONAMIENTO DE LA APP
//___________________________________________________

// Función para la ejecución del proposito principal (disparar los fuegos correctamente)
// Realiza comprobaciones del objeto Json de configuración y realiza llamadas a distintas
// funciones según dichos parámetros, también incluye el aleatorizador de cohetes (linea 515)

function blastRenderer(evento) {
    if (config.blaster == "random") {
        var indice = Math.round(Math.ceil(Math.random() * (fwSets.length - 1)));
        config.set = fwSets[indice];
    }
    if (config.vista == "lateral") {
        estelaVert(evento);
        boomVert(evento);
        return;
    }
    if (config.vista == "cenital") {
        estelaCentr(evento);
        boomCentr(evento);
        return;
    }
}

// Función generadora de contenidos. Genera dinámicamente todo el contenido del documento tras
// la carga del body; canvas, botones y ventanas auxiliares. También reinicia el canvas a su
// estado de inicio (color y fondo) y añade los manejadores de evento necesarios.

function contentSetter() {
    document.body.innerHTML = '<canvas id="lienzo1" width="' + window.innerWidth * .9375 + '" height="' + window.innerHeight * .94 + '" onclick="blastRenderer(event)"></canvas><section id="botonera"><button type="button" id="blasts">Palmeras</button><button type="button" id="viewpoint">Vista: cenital</button><button type="button" id="filtro">Aplicar filtro</button><button type="button" id="background">Fondo</button><button type="button" id="clear">Limpiar lienzo</button><button type="button" id="save">Descargar imagen</button></section><aside class="dialog" id="dialogOptions"></aside><aside class="dialog" id="dialogConfirm"></aside><aside id="blastChooser" class="blastChooserHidden"></aside>'
    backgrColSetter();
    backgrImgSetter();

// Manejadores de evento de los botones

    document.getElementById("clear").addEventListener("click", function(){canvasReset();});
    document.getElementById("save").addEventListener("click", function(){saveCanvas();});
    document.getElementById("background").addEventListener("click", function(){backgroundSelector();});
    document.getElementById("filtro").addEventListener("click", function(){filterChoose();});
    document.getElementById("viewpoint").addEventListener("click", function() {viewSelect();});
    document.getElementById("blasts").addEventListener("click", function(){blastSetter();});
}