$(document).ready(function(){function A(){$.getJSON("https://alertagt-api.onrender.com/cp?dep=test&are=test",function(){})}function N(){$("#e_no_dat").hasClass("is-hidden")&&$("#e_no_dat").removeClass("is-hidden")}var S={"ALTA VERAPAZ":["COBAN","SANTA CRUZ VERAPAZ","CRISTOBAL VERAPAZ SAN","TACTIC","TAMAHU","TUCURU","PANZOS","SENAHU","PEDRO CARCHA SAN","JUAN CHAMENCO SAN","LANQUIN","CAHABON","CHISEC","CHAHAL","FRAY BARTOLOME DE LAS CASAS","LA TINTA (PANZOS)","TELAMAN (PANZOS)","PANCAJEHE (TUCURU)","SEBOL (FRAY BARTOLOME)","BOLONCO (FRAY BARTOLOME)","CAMPUR (SAN PEDRO CARCHA)","LAS CASAS","SALACUIN","EL ROSARIO","LAS CONCHAS","RAXRUHA (CHISEC)"],"BAJA VERAPAZ":["SALAMA","SAN MIGUEL CHICAJ","RABINAL","CUBULCO","GRANADOS","EL CHOL","SAN JERONIMO","PURULHA","LOS AMATES (EL CHOL)","LA CANOA (SALAMA)","SALTIN (GRANADOS)","SAN GABRIEL PANTZUY (S MIGUEL CHIHAJ)"],CHIMALTENANGO:["CHIMALTENANGO","SAN JOSE POAQUIL","SAN MARTIN JILOTEPEQUE","COMALAPA","SANTA APOLONIA","TECPAN GUATEMALA","PATZUN","POCHUTA","PATZICIA","SANTA CRUZ BALANYA","ACATENANGO","YEPOCAPA","SAN ANDRES ITZAPA","PARRAMOS","ZARAGOZA","EL TEJAR"],CHIQUIMULA:["CHIQUIMULA","SAN JOSE LA ARADA","SAN JUAN ERMITA","JOCOTAN","CAMOTAN","OLOPA","ESQUIPULAS","CONCEPCION LAS MINAS","QUEZALTEPEQUE","SAN JACINTO","IPALA","ANGUIATU (CONCEPCION LAS MINAS)","EL AMARILLO (JOCOTAN)","EL FLORIDO (CAMOTAN)","SANTA ELENA (CHIQUIMULA)","VADO HONDO (CHIQUIMULA)","SAN ESTEBAN (CHIQUIMULA)","TIERRA COLORADA (SAN JOSE LA ARADA)","AGUA CALIENTE ( ESQUIPULAS)","NUEVA ANGUIATU (CONCEPCION LAS MINAS)"],"EL PROGRESO":["GUASTATOYA","MORAZAN","SAN AGUSTIN ACASAGUASTLAN","SAN CRISTOBAL ACASAGUASTLAN","EL JICARO","SANSARE","SANARATE","SAN ANTONIO LA PAZ","TULUMAJILLO (SAN AGUSTIN ACASAGUASTLAN)","ESTACION JALAPA (SANSARE)","TULUMAJE (SAN AGUSTIN ACASAGUASTLAN)","ESTANCIA DE LA VIRGEN (SAN CRISTOBAL ACASAGUASTLAN)","PASO DE LOS JALAPA (EL JICARO)","SANTA RITA (GUASTATOYA)","EL RANCHO (SAN AGUSTIN ACASAGUASTLAN)"],ESCUINTLA:["ESCUINTLA","SANTA LUCIA COTZUMALGUAPA","LA DEMOCRACIA","SIQUINALA","MASAGUA","TIQUISATE","LA GOMERA","SAN JOSE","IZTAPA","PALIN","SAN VICENTE PACAYA","NUEVA CONCEPCION","OBERO (MASAGUA)","BRITO (GUANAGAZAPA)","SANTA ANA MIXTAN (NUEVA CONCEPCION)","EL NARANJO (MASAGUA)","SAN ANDRES OSUNA (ESCUINTLA)","CUYUTA (MASAGUA)","EL PORVENIR (TIQUISATE)","SIPACATE (LA GOMERA)"],GUATEMALA:["ZONA 1","ZONA 2","ZONA 3","ZONA 4","ZONA 5","ZONA 6","ZONA 7","ZONA 8","ZONA 9","ZONA 10","ZONA 11","ZONA 12","ZONA 13","ZONA 14","ZONA 15","ZONA 16","ZONA 17","ZONA 18","ZONA 19","ZONA 21","GUATEMALA","SANTA CATARINA PINULA","SAN JOSE PINULA","SAN JOSE DEL GOLFO","PALENCIA","CHINAUTLA","SAN PEDRO AYAMPUC","MIXCO","SAN PEDRO SACATEPEQUEZ","SAN JUAN SACATEPEQUEZ","SAN RAYMUNDO","CHUARRANCHO","FRAIJANES","AMATITLAN","VILLA NUEVA","VILLA CANALES","SAN MIGUEL PETAPA","CANALITOS (ZONA 24)","EL FISCAL (PALENCIA)","BOCA DEL MONTE (VILLA CANALES)","VUELTA GRANDE (SAN RAYMUNDO)","TRAPICHE GRANDE (CHUARRANCHO)","SANTA ELENA BARILLAS (VILLA CANALES)","PUERTA PARADA (SANTA CATARINA PINULA)"],HUEHUETENANGO:["HUEHUETENANGO","CHIANTLA","MALACATANCITO","CUILCO","NENTON","SAN PEDRO NECTA","JACALTENANGO","SOLOMA","IXTAHUACAN","SANTA BARBARA","LA LIBERTAD","LA DEMOCRACIA","SAN MIGUEL ACATAN","SAN RAFAEL LA INDEPENDENCIA","TODOS SANTOS CUCHUMATAN","SAN JUAN ATITLAN","SANTA EULALIA","SAN MATEO IXTATAN","COLOTENANGO","SAN SEBASTIAN HUEHUETENANGO","TECTITAN","CONCEPCION","SAN JUAN IXCOY","SAN ANTONIO HUISTA","SAN SEBASTIAN COATAN","BARILLAS","AGUACATAN","SAN RAFAEL PETZAL","SAN GASPAR IXCHIL","SANTIAGO CHIMALTENANGO","SANTA ANA HUISTA","GRACIAS A DIOS (NENTON)","SAN LORENZO (HUEHUETENANGO)","SAN MARTIN CUCHUMATAN (T LOS SANTOS CUCHUMATAN)","SAN MARCOS HUISTA (JACALTENANGO)","PETATAN (CONCEPCION)","PAQUIX (CHIANTLA)","MICHICOY (SAN PEDRO NECTA)","SAN ANDRES HUISTA (JACALTENANGO)","CHALUM (LA LIBERTAD)","LA MESILLA"],IZABAL:["PUERTO BARRIOS","LIVINGSTON","EL ESTOR","MORALES","LOS AMATES","PLAYITAS (MORALES","EL RICO (LOS AMANTES)","CAYUGA (MORALES)","QUIRIGUA (LOS AMATES)","EL CINCHAO (PUERTO BARRIOS)","LAS QUEBRADAS (MORALES)","ENTRE RIOS (PUERTO BARRIOS)","SANTO TOMAS DE CASTILLA (PUERTO BARRIOS)","EL MITCHAL (MORALES)","LAS VI\xd1AS (MORALES)","EL REFUGIO ( LOS AMATES)","SANTA INES ( LOS AMATES)","TENEDORES (MORALES)","SAN FELIPE ( LIVINGSTON)","BANANERA (LOS MORALES)","FRONTERAS (LIVINGSTON)","MARISCOS (LOS AMANTES)","BUENOS AIRES (MORALES)"],JALAPA:["JALAPA","SAN PEDRO PINULA","SAN LUIS JILOTEPEQUE","SAN MANUEL CHAPARRON","SAN CARLOS ALZATATE","MONJAS","MATAQUESCUINTLA","LLANO GRANDE"],JUTIAPA:["JUTIAPA","EL PROGRESO","SANTA CATARINA MITA","AGUA BLANCA","ASUNCION MITA","YUPILTEPEQUE","ATESCATEMPA","JERES","EL ADELANTO","ZAPOTITLAN","COMAPA","JALPATAGUA","CONGUANCO","MOYUTA","PASACO","SAN JOSE ACATEMPA","QUESADA","CIUDAD PEDRO DE ALVARADO (MOYUTA)","SAN CRISTOBAL FRONTERA (ATESCATEMPA)","VALLE NUEVO JALPATAGUA","RIO DE PAZ","HORCONES (STA CATARINA MITA)","EL OVEJERO ( EL PROGRESO)","CONTEPEQUE ( ATESCATEMPA)","LA ESMERALDA JEREZ","HORCONES (ATESCATEMPA)","TIUCAL (ASUNCION MITA)"],PETEN:["FLORES","SAN JOSE","SAN BENITO","SAN ANDRES","LA LIBERTAD","SAN FRANCISCO","SANTA ANA","DOLORES","SAN LUIS","SAYAXCHE","MELCHOR DE MENCOS","POPTUN","TIKAL (FLORES)","DOS LAGUNAS ( FLORES)","SANTO TORIBIO (DOLORES)","PASO CABALLOS (SAN ANDRES)","UAXACTUN (FLORES)","CARMELITA (SAN ANDRES)","MACHAQUILA (DOLORES)","EL CHAL (DOLORES)","MACANCHE (DOLORES)","EL REMATE (FLORES)","LA FELICIDAD ( SAYAXCHE)","EL NARANJO (LA LIBERTAD)","SACPUY (SAN ANDRES)","PAXCAMAN (FLORES)","LAS CRUCES (LA LIBERTAD)","SABANETA (DOLORES)","SANTA ELENA"],QUETZALTENANGO:["QUETZALTENANGO","SALCAJA","OLINTEPEQUE","SAN CARLOS SIJA","SIBILIA","CABRICAN","CAJOLA","SAN MIGUEL SIGUILA","OSTUNCALCO","SAN MATEO","CONCEPCION CHIQUIRICHAPA","SAN MARTIN SACATEPEQUEZ","ALMOLONGA","CANTEL","HUITLA","ZUNIL","COLOMBA","SAN FRANCISCO LA UNION","EL PALMAR","COATEPEQUE","GENOVA","FLORES COSTA CUCA","LA ESPERANZA","PALESTINA DE LOS ALTOS","SANTA MARIA DE JESUS ( ZUNIL)","CHIQUIBAL (SAN CARLOS SIJA)","LAS PALMAS COATEPEQUE","CUICALBA(SIBILIA)","SAN JOSE CHIQUILAJA(QUETZALTENANGO)","EL EDEN (PALESTINA DE LOS ALTOS)","CHUATUJ (SAN CARLOS SIJA)","EL TAMBOR (EL PALMAR)","LAS MERCEDES (COLOMBA)","PALMIRA (COLOMBA)"],QUICHE:["SANTA CRUZ DEL QUICHE","QUICHE","CHINIQUE","ZACUALPA","CHAJUL","CHICHICASTENANGO","PATZITE","SAN ANTONIO LLOTENANGO","SAN PEDRO JOCOPILAS","CUNEN","SAN JUAN COTZAL","JOYABAJ","NEBAJ","SAN ANDRES SAJCABAJA","USPANTAN","SACAPULAS","SAN BARTOLOME JOCOTENANGO","CANILLA","PLAYA GRANDE (IXCAN)","CHICAMAN","SANTA ROSA CHUJUYUB (SANTA CRUZ DELQUICHE)","PACHALUM","CANTABAL","SAN JOSE LA 20 (USPANTAN)","XACBAL"],RETALHULEU:["RETALHULEU","SAN SABASTIAN","SANTA CRUZ MULUA","SAN MARTIN ZAPOTITLAN","SAN FELIPE","SAN ANDRES VILLA SECA","CHAMPERICO","NUEVO SAN CARLOS","EL ASINTAL","CABALLO BLANCO ( RETALHULEU)","CANDELARIA XOLHUITZ (NUEVO SAN CARLOS)","SINABA (EL ASINTAL)","EL XAB (EL ASINTAL)","LA MAQUINA (SAN ANDRES VILLA SECA)"],SACATEPEQUEZ:["ANTIGUA GUATEMALA","JOCOTENANGO","PASTORES","SUMPANGO","SANTO DOMINGO XENACOJ","SANTIAGO SACATEPEQUEZ","SAN BARTOLOME MILPAS ALTAS","SAN LUCAS SACATEPEQUEZ","SANTA LUCIA MILPAS ALTAS","MAGDALENA MILPAS ALTAS","SANTA MARIA DE JESUS","CIUDAD VIEJA","SAN MIGUEL DUE\xd1AS","ALOTENANGO","SAN ANTONIO AGUAS CALIENTES","SANTA CATARINA BARAHONA","SANTA MARIA CAUQUE ( SANTIAGO SACATEPEQUEZ)"],"SAN MARCOS":["SAN MARCOS","SAN PEDRO SACATEPEQUEZ","SAN ANTONIO SACATEPEQUEZ","COMITANCILLO","SAN MIGUEL IXTAGUACAN","CONCEPCION TUTUAPA","TANACA","SIBINAL","TAJUMULCO","TEJUTLA","SAN RAFAEL PIE DE LA CUESTA","NUEVO PROGRESO","EL TUMBADOR","EL RODEO","MALACATAN","CATARINA","TOCUN UMAN","OCOS","SAN PABLO","EL QUETZAL","LA REFORMA","PAJAPITA","IXCHIGUAN","SAN JOSE OJOTEPAN","SAN CRITOBAL CUCHO","SIPACANA","ESQUIPULAS PALO GORDO","RIO BLANCO","SAN LORENZO","EL CARMEN (MALACATAN)","ZANJON SAN LORENZO (TECUN UMAN)","SAN JERONIMO ( EL TUMBEDOR)","SRCHIL ( SAN MARCOS)","LA DEMOCRACIA ( EL TUMBADOR)","SAN FRANCISCO (EL RODEO)","EL AMPARO ( EL TUMBADOR)","SAN SEBASTIAN ( SAN MARCOS)","LOS LIMINES (OCOS)","LA BLANCA ( OCOS)","EL CICLO ( EL TUMBADOR)","SAN JOSE IXTAL (NUEVO PROGRESO)","PLATANARES( OCOS)","LAS DELICIAS ( EL TUMBADOR)","CALAPTE (IXCHIGUAN)","TOCAHE ( SAN PABLO)","LA CONQUISTA ( NUEVO PROGRESO)","CHAMPOLLAP (SAN PEDRO SAC)","PIEDRA GRANDE (SAN PEDRO GRANDE)","SANTA LUICIA IXTACAMAL (SAN MARCOS)","EL SITIO (CATARINA)"],"SANTA ROSA":["CUILAPA","BARBERENA","SANTA ROSA DE LIMA","CASILLAS","SAN RAFAEL LAS FLORES","ORATORIO","SAN JUAN TECUACO","CHIQUIMULILLA","TAXISCO","SANTA MARIA IXHUATAN","GUAZACAPAN","SANTA CRUZ NARANJO","PUEBLO NUEVO VI\xd1AS","NUEVA SANTA ROSA","EL AHUMADO (CHIQUIMULILLA)","LOS CERRITOS (CHIQUIMULILLA)","CASAS VIEJAS (CHIQUIMULILLA)","AYARZA(CASILLAS)","EL MOLINO (CUILAPA)","NANCINTA (CHIQUIMULILLA)","SAN MIGUEL AROCHE (CHUIQUIMULILLA)","LOS ESCLAVOS (CUILAPA)","EL SERINAL (BARBERENA)","MONTERICO (TAXISCO)","SAN JUAN DE ARANA (CUILAPA)","EL RINCONCITO (SANTA ROSA DE LIMA)","CERRO GORDO (SANTA ROSA DE LIMA)"],SOLOLA:["SOLOLA","SAN JOSE CHACAYA","SANTA MARIA VISITACION","SANTA LUCIA UTATLAN","NAHUALA","SANTA CATARINA IXTAHUACAN","SANTA CLARA LA LAGUNA","CONCEPCION","SAN ANDRES SEMETABAJ","PANAJACHEL","SANTA CATARINA PALOPO","SAN ANTONIO PALOPO","SAN LUCAS TOLIMAN","SANTA CRUZ LA LAGUNA","SAN PABLO LA LAGUNA","SAN MARCOS LA LAGUNA","SAN JUAN LA LAGUNA","SAN PEDRO LA LAGUNA","SANTIAGO ATITLAN","LOS ENCUENTROS SOLOLA","GODINEZ ( SAN ANDRES SEMETABAJ)","AGUA ESCONDIDA ( SAN ANTONIO PALOPO)","ARGUETA (SOLOLA)","PIXABAJ (SOLOLA)"],SUCHITEPEQUEZ:["MAZATENANGO","CUYOTENANGO","SAN FRANCISCO ZAPOTITLAN","SAN BERNARDINO","SAN JOSE EL IDOLO","SANTO DOMINGO SUCHITEPEQUEZ","SAN LORENZO","SAMAYAC","SAN PABLO JOCOPILAS","SAN ANTONIO SUCHITEPEQUEZ","SAN MIGUEL PANAN","SAN GABRIEL","CHICACAO","PATULUL","SANTA BARBARA","SAN JUAN BAUTISTA","SANTO TOMAS LA UNION","ZUNULITO","PUEBLO NUEVO","RIO BRAVO","COCALES ( PATUTUL)","CHOCOLA( SAN PABLO JOCOPILAS)","TAHUEXCO ( MAZATENANGO)","GUATALON (RIO BRAVO)","PALO GORDO (SAN ANTONIO SUCHI)","SAN RAFAEL PANAN (SANTA BARBARA)","BRACITOS (MAZATENANGO)","BOLIVIA (SANTO DOMINGO SUCHI)","MONTERREY (SANTO DOMINGO SUCHI)","LA MAQUINA ( CUYOTENANGO)"],TOTONICAPAN:["TOTONICAPAN","SAN CRISTOBAL TOTONICAPAN","SAN FRANCISCO EL ALTO","SAN ANDRES XECUL","MOMOSTENANGO","SANTA MARIA CHIQUIMULA","SANTA LUCIA LA REFORMA","SAN BARTOLO"],ZACAPA:["ZACAPA","ESTANZUELA","RIO HONDO","GUALAN","TECULUTAN","USUMATLAN","CABA\xd1AS","SAN DIEGO","LA UNION","HUITE","LA REFORMA ( HUITE)","SAN JOSE (TECULUTAN)","SAN JORGE (ZACAPA)","SANTA ROSALIA (ZACAPA)","SANTA LUCIA (ZACAPA)","LA FRAGUA","SAN PABLO (ZACAPA)","SAN VICENTE (CABA\xd1AS)"]};A(),$("#b_e_no_dat").click(function(A){A.preventDefault(),$("#e_no_dat").hasClass("is-hidden")||$("#e_no_dat").addClass("is-hidden")});var O=$("#area");$("#departamento").change(function(){var A=$(this).val(),N=S[A]||[],E=$.map(N,function(A){return'<option value="'+A+'">'+A+"</option>"}).join("");O.html(E)}),$("#ccodigo").click(function(){$.getJSON("https://alertagt-api.onrender.com/cp?dep="+$("#departamento").val().replace(" ","%20")+"&are="+$("#area").val().replace(" ","%20"),function(A){A.hasOwnProperty("mensaje")?N():($("#cdep").val(A.codigo_dep),$("#carea").val(A.codigo_area))}).fail(function(){N()})}),new ClipboardJS(".copy-t").on("success",function(A){var N=A.trigger.dataset.clipboardTarget;"#cdep"==N&&(typeof $("#bdep").attr("data-tooltip")==typeof undefined&&($("#bdep").attr("data-tooltip","Copiado"),$("#bdep").addClass("has-tooltip-active"),setTimeout(function(){$("#bdep").removeAttr("data-tooltip"),$("#bdep").removeClass("has-tooltip-active")},1500)));"#carea"==N&&(typeof $("#bare").attr("data-tooltip")==typeof undefined&&($("#bare").attr("data-tooltip","Copiado"),$("#bare").addClass("has-tooltip-active"),setTimeout(function(){$("#bare").removeAttr("data-tooltip"),$("#bare").removeClass("has-tooltip-active")},1500)))})});
