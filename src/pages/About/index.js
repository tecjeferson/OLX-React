import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div>
            <h1>About</h1>
            <p>
                Home Page Atualizando a Pagina <a href="/">About</a>
            </p>
            <p>
                Home Page sem Atualizar a Pagina <Link to="/">About</Link>
            </p>
        </div>
    )
}

export default Page;