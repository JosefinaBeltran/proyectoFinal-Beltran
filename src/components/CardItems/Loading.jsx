import Spinner from "react-bootstrap/Spinner";

function Loading() {
	return (
		<Spinner animation="border" variant="primary">
			<span className="visually-hidden">Cargando...</span>
		</Spinner>
	);
}

export default Loading;