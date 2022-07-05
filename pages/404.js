import React from 'react'
import Link from 'next/link'

const Custom404 = () => {
    return (
		<div className="error-area">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="error-content">
							<div className="notfound-404">
								<h1>Oops!</h1>
							</div>
							<h3>404 Page non trouvée</h3>
							<p>La page que vous recherchez a peut-être été supprimée, son nom a changé ou est temporairement indisponible.</p>

							<Link href="/">
								<a className="btn btn-primary">Aller à la page d'accueil</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Custom404