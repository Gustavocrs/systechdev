import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {appdb} from "./firebaseConfig"; // Importando a instância inicializada

const db = getFirestore(appdb);

export const readData = async (tabela, id) => {
  if (!tabela) {
    throw new Error("O parâmetro 'tabela' não pode estar vazio.");
  }

  if (id) {
    // Buscar por ID específica
    const docRef = doc(db, tabela, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Documento encontrado:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("Nenhum documento encontrado com esse ID.");
      return null;
    }
  } else {
    // Buscar todos os documentos
    const connect = collection(db, tabela);
    const data = await getDocs(connect);
    const dataList = data.docs.map((doc) => doc.data());
    console.log("data", dataList);
    return dataList;
  }
};

export const addData = async (tabela, data) => {
  if (!tabela) {
    throw new Error("O parâmetro 'tabela' não pode estar vazio.");
  }
  if (!data) {
    throw new Error("O parâmetro 'data' não pode estar vazio.");
  }
  const connect = collection(db, tabela);
  const docRef = await addDoc(connect, data);
  console.log("Documento adicionado com ID: ", docRef.id);
  return docRef.id;
};

export const updateData = async (tabela, id, newData) => {
  if (!tabela) {
    throw new Error("O parâmetro 'tabela' não pode estar vazio.");
  }
  if (!id) {
    throw new Error("O parâmetro 'id' não pode estar vazio.");
  }
  if (!newData) {
    throw new Error("O parâmetro 'newData' não pode estar vazio.");
  }
  const docRef = doc(db, tabela, id);
  await updateDoc(docRef, newData);
  console.log("Documento atualizado com ID: ", id);
};

export const deleteData = async (tabela, id) => {
  if (!tabela) {
    throw new Error("O parâmetro 'tabela' não pode estar vazio.");
  }
  if (!id) {
    throw new Error("O parâmetro 'id' não pode estar vazio.");
  }
  const docRef = doc(db, tabela, id);
  await deleteDoc(docRef);
  console.log("Documento deletado com ID: ", id);
};
