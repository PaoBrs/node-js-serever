# node-js-server
![logotype-07](/assets/express.png)

# Iniciar la aplicación
npm install
npm run dev

# Guía telefónica
Se utilizó Express para crear una guía telefófina que pudiera der editada a través de los metodos Get, Post y Delete.
Esta guía telefónica permite:
<ul>
  <li> Ver la fecha y hora en la que seraliza la consulta.</li>
  <li> Encontar la información de un registro específico y de no existir regresa un mensaje de error.</li> 
  <li> Visualizar el total de registros existentes.</li>
<li>Agregar nuevas registros pero no admite información repetida y debe utilizarse información válida. </li>
  <li> Eliminar registros existentes, de no ser encontrados muestra un mensaje de error.</li>
  <li> Middleware Morgan que muestra información de consulta de metodos Post.</li>
</ul>

# Recursos
<ul>
  <li> Express.</li>
  <li> Nodemon.</li>
   <li>Morgan.</li>
