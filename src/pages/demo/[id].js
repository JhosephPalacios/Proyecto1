import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()

    return (
        <>
            <h1>pagina Demo</h1>
            <p>ID: {router.query.id}</p>
        </>
    )


}