import React from 'react';
import '../hojas-de-estilo/boton.css'

function Boton({texto, esBotonclic, manejarClic}) {
	return(
		<button
			className={ esBotonclic ? 'boton-clic' : 'boton-reiniciar' }
			onClick={manejarClic}>
			{texto}
		</button>
	)
}

export default Boton;