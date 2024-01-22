import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`
const Imagen = styled.img `
    width: 120px;

`

export default function Resultado({ resultado }) {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='Logo criptomoneda' />
            <div>
                <Precio>EL precio es de: <span>{PRICE}</span></Precio>
                <Texto>EL precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>EL precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Variación ultimas 24hrs: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}