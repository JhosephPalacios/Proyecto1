import Image from 'next/image'

const Ejemplo = () => {
    return (
        <>
            <h1>Ejemplo de imagen</h1>
            <Image src="/logo_texto.png" height={400} width={600} alt="Logo" ></Image>
        </>

    )
}

export default Ejemplo