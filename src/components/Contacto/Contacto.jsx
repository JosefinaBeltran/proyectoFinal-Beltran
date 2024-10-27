import { useForm } from "react-hook-form"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { useState } from "react"; // Importa useState
import "./Contacto.css"

const Contacto = () => {
	const { register, handleSubmit, reset } = useForm()
	const [mensajeExito, setMensajeExito] = useState(""); // Estado para el mensaje de éxito

	const enviar = (data) => {
		console.log(data)
		reset(); // Resetea los campos del formulario
		setMensajeExito("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto."); // Establece el mensaje de éxito
	}

	return (
		<Container className="contenedorFormulario text-center">
			<Row>
				<h1 className="tituloFormulario">Contactanos</h1>
			</Row>
			<Row>
				<Form onSubmit={handleSubmit(enviar)}>
					<Form.Group className="mb-3" controlId="formBasicName">
						<Form.Label>Nombre Completo</Form.Label>
						<Form.Control
							type="name"
							placeholder="Ingrese su nombre completo"
							{...register("nombre")}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Ingrese su email"
							{...register("email")}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPhone">
						<Form.Label>Número</Form.Label>
						<Form.Control
							type="phone"
							placeholder="Ingrese su número"
							{...register("phone")}
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Enviar
					</Button>
				</Form>
			</Row>
			{/* Muestra el mensaje de éxito si está disponible */}
			{mensajeExito && <p className="mensajeExito">{mensajeExito}</p>}
		</Container>
	)
}

export default Contacto
