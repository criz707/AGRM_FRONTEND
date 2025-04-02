/*Importaciones Boostrap */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Asegura funcionalidad de dropdowns y navbar toggler

/*Importaciones del router */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//General
import { Inicio } from "./sites/Inicio"
import { Inicio_sesion } from "./sites/Inicio_sesion"
import { Registro } from "./sites/Registro"
import { Recuperar_c } from "./sites/Recuperar_c"
import { Recuperar_e } from "./sites/Recuperar_e"



//ADMIN

import { Inicio_a } from "./sites/Admin/Inicio_a";

//--CRUDS DEL ADMIN

//--CRUD de los mismos Administradores


import { Crud } from "./sites/Admin/Crud"
import { Admin_menu_a } from "./sites/Admin/admin/Admin_menu_a";
import { Actualizado_a } from "./sites/Admin/admin/Actualizado_a";
import { Credenciales_a } from "./sites/Admin/admin/Credenciales_a";
import { Eliminado_a } from "./sites/Admin/admin/Eliminado_a";
import { Editar_a } from "./sites/Admin/admin/Editar_a";
import { Perfil_a } from "./sites/Admin/admin/Perfil_a";



//--CRUD Mesas
import { Actualizado_m } from "./sites/Admin/mesa/Actualizado_m";
import { Admin_menu_m } from "./sites/Admin/mesa/Admin_menu_m";
import { Editar_m } from "./sites/Admin/mesa/Editar_m";
import { Eliminado_m } from "./sites/Admin/mesa/Eliminado_m";
import { Perfil_m } from "./sites/Admin/mesa/Perfil_m";
//--CRUD usuarios
import { Admin_menu_u } from "./sites/Admin/usuario/Admin_menu_u";
import { Perfil_u } from "./sites/Admin/usuario/Perfil_u";
import { Editar_u } from "./sites/Admin/usuario/Editar_u";
import { Actualizado_u } from "./sites/Admin/usuario/Actualizado_u";
import { Credenciales_u } from "./sites/Admin/usuario/Credenciales_u";
import { Eliminado_u } from "./sites/Admin/usuario/Eliminado_u";

//--CRUD Recepcionista
import { Admin_menu_r } from "./sites/Admin/recepcionsta/Admin_menu_r";
import { Perfil_r } from "./sites/Admin/recepcionsta/Perfil_r";
import { Editar_r } from "./sites/Admin/recepcionsta/Editar_r";
import { Actualizado_r } from "./sites/Admin/recepcionsta/Actualizado_r";
import { Credenciales_r } from "./sites/Admin/recepcionsta/Credenciales_r";
import { Eliminado_r } from "./sites/Admin/recepcionsta/Eliminado_r";

//--CRUD Gerente
import { Admin_menu_g } from "./sites/Admin/gerente/Admin_menu_g";
import { Perfil_g } from "./sites/Admin/gerente/Perfil_g";
import { Editar_g } from "./sites/Admin/gerente/Editar_g";
import { Actualizado_g } from "./sites/Admin/gerente/Actualizado_g";
import { Credenciales_g } from "./sites/Admin/gerente/Credenciales_g";
import { Eliminado_g } from "./sites/Admin/gerente/Eliminado_g";
import { Editar_perfil } from "./sites/Admin/Editar_perfil";
import { Editar_datos_perfil } from "./sites/Admin/Editar_datos_perfil";
import { Alerta_exito } from "./sites/Admin/Alerta_exito";




//USUARIOS

//Usuario Navigate
import { Notificaciones_u } from "./sites/Usuario/Notificaciones_u";
//Reservas
import { Home_u } from "./sites/Usuario/Home_u";
import { Mesas_reserva } from "./sites/Usuario/Mesas_reserva";
import { Reserva_u } from "./sites/Usuario/Reserva_u";
import { Cambio_reserva } from "./sites/Usuario/Cambio_reserva";
import { Error_reserva } from "./sites/Usuario/Error_reserva";
import { Reserva_cancelada } from "./sites/Usuario/Reserva_cancelada";
import { Mesas_dispoibles } from "./sites/Usuario/Mesas_dispoibles";
import { Ajustes_u } from "./sites/Usuario/Ajustes_u";
import { Cuenta_u } from "./sites/Usuario/Cuenta_u";
import { Ajustes_exito } from "./sites/Usuario/Ajustes_exito";
import { Reserva_exitosa } from "./sites/Usuario/Reserva_exitosa";
import { Penalizacion } from "./sites/Usuario/Penalizacion";
import { No_disponibles } from "./sites/Usuario/No_disponibles";




/* RECEPCIONISTA */
//Navegacion recepcionista
import { Inicio_rc } from "./sites/Recepcionista/inicio_rc";
import { Ajustes_r } from "./sites/Recepcionista/Ajustes_r";


import { Mesas } from "./sites/Recepcionista/Mesas"
//import { Ultima_hora } from "./sites/Recepcionista/Ultima_hora"
import { Notificaciones_r } from "./sites/Recepcionista/Notificaciones_r";
import { Reserva } from "./sites/Recepcionista/Reserva"
import { Reserva_confirmada } from "./sites/Recepcionista/Reserva_confirmada";
import { Ultima_hora } from "./sites/Recepcionista/Ultima_hora";
import { Reserva_ultima } from "./sites/Recepcionista/Reserva_ultima";
import { Cuenta_r } from "./sites/Recepcionista/Cuenta_r";
import { Ajustes_exito_r } from "./sites/Recepcionista/Ajustes_exito_r";





/* GERENTE */
import { Inicio_g } from "./sites/Gerente/Inicio_g";
import { Notificaciones_g } from "./sites/Gerente/Notificaciones_g";
import { Configuraciones_g } from "./sites/Gerente/Configuraciones_g";
import { Cuenta_g } from "./sites/Gerente/Cuenta_g";
import { Ajustes_exito_g } from "./sites/Gerente/Ajustes_exito_g";
import { Pago_almacenamiento } from "./sites/Gerente/Pago_almacenamiento";
import { Menu_reportes } from "./sites/Gerente/Menu_reportes";

/*Reporte de mesas */
import { Reportes_m } from "./sites/Gerente/Reportes_m";
import { Reporte_enviado } from "./sites/Gerente/Reporte_enviado";



/* Cosas nav */




function App() {
  return (
    <Router>
      <Routes>
        {/* General */}
        <Route path="/" element={<Inicio />} />

        <Route path="/inicio_sesion" element={<Inicio_sesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperar_c" element={<Recuperar_c />} />
        <Route path="/recuperar_c/recuperar_e" element={<Recuperar_e />} />

        {/* ADMIN - pefil principal y menu*/}

        <Route path="/admin/inicio_a" element={<Inicio_a/>} />
        <Route path="/admin/editar_perfil" element={<Editar_perfil/>} />
        <Route path="/admin/editar_datos_perfil" element={<Editar_datos_perfil/>} />
        <Route path="/admin/editar_datos_perfil/alerta_exito" element={<Alerta_exito/>} />

        {/* Opciones de edicion del admin */}

        <Route path="/admin/curd" element={<Crud/>} />

        {/* Crud clientes */}
        <Route path="/admin/usuarios/admin_menu_u" element={<Admin_menu_u/>}/>
        <Route path="/admin/usuarios/perfil_u" element={<Perfil_u/>}/>
        <Route path="/admin/usuarios/editar_u" element={<Editar_u/>}/>
        <Route path="/admin/usuarios/actualizado_u" element={<Actualizado_u/>}/>
        <Route path="/admin/usuarios/credenciales_u" element={<Credenciales_u/>}/>
        <Route path="/admin/usuarios/eliminado_u" element={<Eliminado_u/>}/>


        {/* Crud admins */ }

        <Route path="/admin/admins/actualizado_a" element={<Actualizado_a/>}/>
        <Route path="/admin/admins/admin_menu_a" element={<Admin_menu_a/>}/>
        <Route path="/admin/admins/credenciales_a" element={<Credenciales_a/>}/>
        <Route path="/admin/admins/eliminado_a" element={<Eliminado_a/>}/>
        <Route path="/admin/admins/editar_a" element={<Editar_a/>}/>
        <Route path="/admin/admins/perfil_a" element={<Perfil_a/>}/>


        {/* Crud de mesas */}
        <Route path="/admin/mesas/actualizado_m" element={<Actualizado_m/>}/>
        <Route path="/admin/mesas/admin_menu_m" element={<Admin_menu_m/>}/>
        <Route path="/admin/mesas/editar_m" element={<Editar_m/>}/>
        <Route path="/admin/mesas/eliminado_m" element={<Eliminado_m/>}/>
        <Route path="/admin/mesas/perfil_m" element={<Perfil_m/>}/>



        {/* Crud Recepcionista */}

        <Route path="/admin/usuarios/admin_menu_r" element={<Admin_menu_r/>}/>
        <Route path="/admin/usuarios/perfil_r" element={<Perfil_r/>}/>
        <Route path="/admin/usuarios/editar_r" element={<Editar_r/>}/>
        <Route path="/admin/usuarios/actualizado_r" element={<Actualizado_r/>}/>
        <Route path="/admin/usuarios/credenciales_r" element={<Credenciales_r/>}/>
        <Route path="/admin/usuarios/eliminado_r" element={<Eliminado_r/>}/>

        {/* Crud Gerentess */}
        <Route path="/admin/gerente/admin_menu_g" element={<Admin_menu_g/>}/>
        <Route path="/admin/gerente/perfil_g" element={<Perfil_g/>}/>
        <Route path="/admin/gerente/editar_g" element={<Editar_g/>}/>
        <Route path="/admin/gerente/actualizado_g" element={<Actualizado_g/>}/>
        <Route path="/admin/gerente/credenciales_g" element={<Credenciales_g/>}/>
        <Route path="/admin/gerente/eliminado_g" element={<Eliminado_g/>}/>





        {/* Usuarios Paths */}

        {/*--- Nav Usuario */}
        <Route path="/usuario/home_u" element={<Home_u/>}/>

        <Route path="/usuario/notificaciones_u" element={<Notificaciones_u/>}/>

        <Route path="/usuario/ajustes_u" element={<Ajustes_u/>}/>


        {/*--- Reservas usuario */}
        <Route path="/usuario/mesas_reserva" element={<Mesas_reserva/>}/>
        <Route path="/usuario/mesas_dispoibles" element={<Mesas_dispoibles/>}/>
        <Route path="/usuario/reserva_u" element={<Reserva_u/>}/>
        <Route path="/usuario/cambio_reserva" element={<Cambio_reserva/>}/>
        <Route path="/usuario/no_disponibles" element={<No_disponibles/>}/>
        <Route path="/usuario/cambio_reserva/reserva_exitosa" element={<Reserva_exitosa/>}/>

        <Route path="/usuario/error_reserva" element={<Error_reserva/>}/>
        <Route path="/usuario/reserva_cancelada" element={<Reserva_cancelada/>}/>
        <Route path="/usuario/penalizacion" element={<Penalizacion/>}/>

        {/*--- Ajustes de perfil de usuario */}
        <Route path="/usuario/ajustes_u" element={<Ajustes_u/>}/>
        <Route path="/usuario/ajustes_u/cuenta_u" element={<Cuenta_u/>}/>
        <Route path="/usuario/ajustes_u/cuenta_u/ajustes_exito" element={<Ajustes_exito/>}/>












        {/* Recepcionista paths */}
        {/* Navegacion reepcionista */}
        <Route path="/recepcionista/inicio_rc" element={<Inicio_rc/>}/>
        <Route path="/recepcionista/ajustes_r" element={<Ajustes_r/>}/>
        <Route path="/recepcionista/notificaciones_r" element={<Notificaciones_r/>}/>

        {/* Centa recepcionista */}
        <Route path="/recepcionista/ajustes_r/cuenta_r" element={<Cuenta_r/>}/>
        <Route path="/recepcionista/ajustes_r/cuenta_r/ajustes_exito_r" element={<Ajustes_exito_r/>}/>

        {/* Reservas Recepcionista */}
        <Route path="/recepcionista/mesas" element={<Mesas/>}/>
        <Route path="/recepcionista/mesas/reserva" element={<Reserva/>}/>
        <Route path="/recepcionista/mesas/reserva_confirmada" element={<Reserva_confirmada/>}/>

        <Route path="/recepcionista/mesas/ultima_hora" element={<Ultima_hora/>}/>
        <Route path="/recepcionista/mesas/ultima_hora/reserva_ultima" element={<Reserva_ultima/>}/>










        {/* GERENTE paths */}
        <Route path="/gerente/inicio_g" element={<Inicio_g/>}/> 
        <Route path="/gerente/configuraciones_g" element={<Configuraciones_g/>}/>
        <Route path="/gerente/notificaciones_g" element={<Notificaciones_g/>}/>

        {/* GERENTE - Configuarcion perfil */}

        <Route path="/gerente/configuraciones_g/cuenta_g" element={<Cuenta_g/>}/>
        <Route path="/gerente/configuraciones_g/cuenta_g/ajustes_exito_g" element={<Ajustes_exito_g/>}/>
        <Route path="/gerente/configuraciones_g/pago_almacenamiento" element={<Pago_almacenamiento/>}/>
        <Route path="/gerente/inicio_g/menu_reportes" element={<Menu_reportes/>}/>
        <Route path="/gerente/inicio_g/menu_reportes/reporte_m" element={<Reportes_m/>}/>
        <Route path="/gerente/inicio_g/menu_reportes/reporte_m/reporte_enviado" element={<Reporte_enviado/>}/>

        {/* Gerente- Pantallas navegacion */}


      </Routes>
    </Router>
  );
}

export default App