import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import { useMiProvider } from './context/contexto'

const login = () => {
    const router = useRouter()
    const [cuenta, setCuenta] = useMiProvider()

    const [cuentas, setCuentas] = useState([]);
    async function leer() {
        const opciones = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        };
        const request = await fetch("/api/cuentas/leer", opciones);
        const data = await request.json();
        console.log(data);
        setCuentas(data);
    }
    useEffect(() => {
        leer();
    }, []);
    

    return(
    <>
        <Head>
            <title>Login</title>
        </Head>
        <div id="cuerpo_login">
            <div id="titulo_login1">
                <div id="titulo_login">
                    <p><b>Sistema de reserva de libros</b></p>
                </div>
            </div>

            <form action="" onSubmit={(e)=>e.preventDefault()} method='get'>
            <div id="text_field_usuario">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content">
                            <div id="text_usuario">
                                <p>Usuario o Correo</p>
                            </div>
                            <div id="input_text_usuario">
                                <input type='text' placeholder='Ingrese usuario o correo' id="inputUsu"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>
            <div id="text_field_password">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content">
                            <div id="text_contraseña">
                                <p>Contraseña</p>
                            </div>
                            <div id="input_text_contraseña">
                                <input type='password' placeholder='Ingrese contraseña' id="inputContr"/>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>

            <div id="contenedorContra">
                <div id="OlvideContra">
                    <p class="olvC">Olvidé mi contraseña</p>
                </div>
            </div>


            <div id="alinearBotones">
            
            
            <div id="buttonRegis">
                <div id="slayer-regis">
                    <Link href="/registroUsuario" class="regis">Registro usuario</Link>
                </div>
            </div>
            <button id="bIngre" onClick={
                ()=>{
                    let res = Object.entries(cuentas).filter(
                        (item) => {
                            console.log(item[1])
                            return item[1].correo == document.getElementById("inputUsu").value && 
                            item[1].contrasenha == document.getElementById("inputContr").value}
                    )
                    if (res.length == 0) {
                        alert("Datos incorrectos")
                        return
                    }
                    
                    // Eatablece el estado segun la cuenta ingresada 
                    let cuenta = res[0][1]
                    if(cuenta.tipo == "admin"){
                        console.log("administrador")
                        setCuenta(cuenta)
                        document.querySelector(':root').style.setProperty('--color-primario', cuenta.color)
                        document.querySelector(':root').style.setProperty('--color-secundario', newShade(cuenta.color, 100))
                        router.push('/')
                    }
                    else if(cuenta.tipo == "user"){
                        console.log("usuario")
                        setCuenta(cuenta)
                        router.push('/')
                    }
                }
            }>Ingresar</button>
            </div>
            </form>
            

        </div>
    </>
)}


export default login

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',.15)';
    }
    throw new Error('Bad Hex');
}

const newShade = (hexColor, magnitude) => {
    hexColor = hexColor.replace(`#`, ``);
    if (hexColor.length === 6) {
        const decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        let g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
        return hexColor;
    }
};