import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/Config"

const ItemDetailContainer = () => {
	const [item, setItem] = useState(null)
	const id = useParams().id

	useEffect(() => {
		const docRef = doc(db, "items", id)
		getDoc(docRef).then((resp) => {
			setItem({ ...resp.data(), id: resp.id })
		})
	}, [id])

	return <>{item && <ItemDetail item={item} />}</>
}

export default ItemDetailContainer