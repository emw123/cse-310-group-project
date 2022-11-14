import db from "./firebase"

// declare an empty array
let firebaseData = [];
// if array.length === 0 -> we get the data
if (firebaseData.length === 0 ){
    firebaseData = db.collection("country").onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        })))
// get firebase data and populate array
}
)
}
// 

export default firebaseData;