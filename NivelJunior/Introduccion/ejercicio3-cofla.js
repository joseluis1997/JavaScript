//problema 2->cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir.      al otro dia comienza las clases del ciclo basico de la universidad(porque cofla quiere ser programador y se inscribio en la facultad de ingenieria para estudiar desarrollo de software).                   En su curso en total son 19 alumnos, pero surgio un problema que complico un poco a la facultad:     se rompio el sistema de registro de asistencia y durante los proximos 30 dias no se podra hacer registros de asistencia y durante los proximos 30 dias no se podran hacer registros de datos de ningun tipo, por ende las clases no podran comenzar hasta que esto este solucionado.

	//->Crear mini-sistema que nos permita registrar los alumnos que estan presentes(p) y ausentes (A) en clase.
	//->Pasados los 30 dias mostrar la situacion  final de todos los alumnos(Nro total de presentes y ausentes).
	//->Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que esta reprobado.

let cantidad = prompt("Cuantos alumnos son?");
let totalAlumnos = [];

for(let i=0; i<cantidad; i++){
	totalAlumnos[i] = [prompt(`Escriba el nombre del alumno ${i+1}`),0];
}
const tomarAsistencia = (nombre,p)=>{
	let asistencia = prompt(nombre);
	if(asistencia == "p" || asistencia == "P"){
		totalAlumnos[p][1]++;
	}
}
for(let i=0; i<30; i++){
	for (alumno in totalAlumnos){
		tomarAsistencia(totalAlumnos[alumno][0], alumno);
	}
}
for(alumno in totalAlumnos){
	let resultado = `${totalAlumnos[alumno][0]}:<br>
	-------Presentes: ${totalAlumnos[alumno][1]}:<br>
	-------Faltas:${30-totalAlumnos[alumno][1]}:<br>`;
	if(30 - totalAlumnos[alumno][1] > 18){
		resultado += "Reprobado por Faltas";
	}else{
		resultado +="<br><br>";
	}
	document.write(resultado);
}
