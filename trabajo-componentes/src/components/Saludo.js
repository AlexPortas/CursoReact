import PropTypes from "prop-types"

function Saludo(props){
    return <h1> Hola {props.usuario.nombre} {props.usuario.apellido}!!</h1>
}
Saludo.propTypes={
    usuario:PropTypes.shape(
        {
            nombre:PropTypes.string.isRequired
        }
    )
}
export default Saludo;