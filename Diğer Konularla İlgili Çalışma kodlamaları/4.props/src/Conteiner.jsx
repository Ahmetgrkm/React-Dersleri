import React from 'react'

function Conteiner({ children }) {

    return (
        <div>
            <div>Conteiner componenti çalıştı</div>
            {children}
        </div>

    )
}

export default Conteiner