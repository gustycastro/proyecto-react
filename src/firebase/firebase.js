
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: " ",
    authDomain: "proyecto-react-coderhous-e4c15.firebaseapp.com",
    projectId: "proyecto-react-coderhous-e4c15",
    storageBucket: "proyecto-react-coderhous-e4c15.appspot.com",
    messagingSenderId: "875813772840",
    appId: "1:875813772840:web:1805412991c09be90b1f1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Consultar a base de datos
const bdd = getFirestore()

export const createProducts = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            idCategoria: prod.idCategoria, 
            nombre: prod.nombre,
            modelo: prod.modelo,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    })
}

export const getProducts = async () => {
    const prods = await getDocs(collection(bdd, "productos"))
    const items = prods.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProduct = async (id) => {
    const prod = await getDoc(doc(bdd, "productos", id))
    const item = { ...prod.data(), id: prod.id }
    return item
}

//Update y delete del producto

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

//Orden de compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}

