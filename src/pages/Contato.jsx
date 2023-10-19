export default function Contato(){

    const token = localStorage.getItem("Token");

    return(
        <>
            <h1>{token}</h1>
        </>
    )
}