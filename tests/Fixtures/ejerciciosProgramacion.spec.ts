
import { test, expect } from '@playwright/test';


test ('Name' , async ({page})=>
{
   let repetidos: number = 0;
   const ContarString : string[] = [ "Nombre","Apellido", "edad","Apellido","Sexo","Nombre"];
   const vistos = new Set<string>();

  ContarString.forEach((elemento: string, index: number )  => {
  
 
    console.log ( index +1, elemento);
    
   // Si el Set ya contiene el elemento, significa que está repetido
  if (vistos.has(elemento)) {
    repetidos ++; // Incrementamos el contador correctamente
  } else {
    // Si es la primera vez que lo vemos, lo guardamos en el Set
    vistos.add(elemento);
  }
    
  });

console.log ("Repetidos: ", repetidos );

   
    
 });
 
test ('Ejercicio Frutas' , async ({page})=>
{
 const frutasVendidas: string[] = [
  "Manzana",
  "Pera",
  "Manzana",
  "Naranja",
  "Manzana",
  "Pera",
  "Uva"
];
let contador : number =0;

frutasVendidas.forEach((fruta: string ) => {

    if (fruta==="Manzana")
    {
        contador++;
       
    }
     
  });

console.log('Manzanas vendidas', contador)
 
  });

test ('Desafío 2: Descuento en Carrito de Compras' , async ({page})=>
{

const preciosProductos: number[] = [15, 80, 45, 120, 30, 200, 50]; 
let contador : number =0;
let sumatotal : number =0;

preciosProductos.forEach((mas50) => {
    
    if(mas50 > 50)
    {
        contador++;
        sumatotal = sumatotal + mas50;
    }
  
});

console.log( 'Productos con Envio gratis', contador, 'Total de Producos', sumatotal );
  });

  test ('Filtrar y Calcular en un Carrito de Compras' , async ({page})=>
{
interface Producto {
  nombre: string;
  precio: number;
  categoria: string;
}
const carrito: Producto[] = [
  { nombre: "Teclado", precio: 40, categoria: "Electronica" },
  { nombre: "Mouse", precio: 20, categoria: "Electronica" },
  { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
  { nombre: "Monitor", precio: 150, categoria: "Electronica" },
  { nombre: "Pantalón", precio: 35, categoria: "Ropa" }
];

let contadorelectronica :number =0;
let totalproductos : number=0;

carrito.forEach((element) => {
    
    if (element.categoria === "Electronica")
    {
        contadorelectronica++;
        totalproductos += element.precio;
    }

});

console.log ('Productos de Electronica:',contadorelectronica, '| Total:', totalproductos);

console.log ('SOLCUION 2: \n')
const electronicos = carrito.filter(p => p.categoria === "Electronica");
const total = electronicos.reduce((suma, p) => suma + p.precio, 0);

console.log('Cantidad:', electronicos.length, '| Total:', total);


  });

  test ('Desafío: Reporte de Estudiantes Aprobados' , async ({page})=>
{

    interface Estudiante {
  nombre: string;
  nota: number;
  asistencia: number; // Porcentaje de 0 a 100
}

const estudiantes: Estudiante[] = [
  { nombre: "Ana", nota: 85, asistencia: 90 },
  { nombre: "Carlos", nota: 45, asistencia: 80 },
  { nombre: "Elena", nota: 92, asistencia: 95 },
  { nombre: "David", nota: 70, asistencia: 60 },
  { nombre: "Sofia", nota: 60, asistencia: 85 }
];

const aprobados = estudiantes.filter(e => e.nota >=60 && e.asistencia >=80);
const aprobadosfinal = estudiantes.reduce((suma , e)=> suma + e.nota  , 0);

console.log('Estudiantes aprobados: ', aprobados.length)
const promedio = aprobadosfinal / aprobados.length ;
console.log(' Promedio de los estudiantes ', promedio)

 
  });
  
  test ('Desafío de Entrevista: Generador de Correos Corporativos' , async ({page})=>
{
interface Empleado {
  nombre: string;
  apellido: string;
  departamento: string;
  activo: boolean;
}

const empleados: Empleado[] = [
  { nombre: "Carlos", apellido: "Gomez", departamento: "QA", activo: true },
  { nombre: "Laura", apellido: "Torres", departamento: "Dev", activo: false },
  { nombre: "Ana", apellido: "Perez", departamento: "QA", activo: true },
  { nombre: "Miguel", apellido: "Rios", departamento: "Dev", activo: true }
];

const emp = empleados.filter((e => e.departamento ==="QA" && e.activo === true));
const email = emp.map((empleado : Empleado) => {
const correoBase = `${empleado.nombre}.${empleado.apellido}@empresa.com`;
return correoBase.toLowerCase();  
});
console.log(email);

const titulos: string[] = [
  "  Aprende TypeScript Desde Cero!  ",
  "   ",
  "Manual de Playwright y QA Automation 2026",
  "JavaScript Avanzado para Entrevistas "
];

const urlamigables = titulos
.map( titulo => titulo.trim())
.filter( titulo => titulo !== "")
.map(titulo => titulo.toLowerCase().replaceAll(" ","-"))

console.log(urlamigables)

});

test (' Encontrar correos duplicados', async ({page})=>
{

  const usuariosRegistrados: string[] = [
  "ANA@EMPRESA.COM",
  "carlos@empresa.com",
  "ana@empresa.com",
  "pedro@empresa.com",
  "CARLOS@empresa.com",
  "maria@empresa.com"
];


const usuariosreg = usuariosRegistrados
.map( usuarios => usuarios.toLowerCase())
 const dupli = new Set<string>()
 const dupliss = new Set<string>()

 usuariosreg.forEach(element => {

  if (dupli.has(element))
  {
dupliss.add(element);
  }
  else
  {
    dupli.add(element);
  }
  
  
 });

Array.from(dupliss)

  console.log(dupliss);
});