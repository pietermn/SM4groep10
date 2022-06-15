import "./UserScreen.scss";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import UserPageHeader from "../../components/UserPageHeader/UserPageHeader";
import { useFetchUser } from "../../api/useQueryHooks/useUserHooks";
import CalendarCard from "../../components/CalendarCard/CalendarCard";
import { useFetchCars } from "../../api/useQueryHooks/carHooks";
import { Reservation, User } from "../../globaltypes";
import { auth, db, provider } from "../../firebase/firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, QueryDocumentSnapshot, updateDoc, where } from "firebase/firestore";
import { Button } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


// const createUser = () => {
//     createUserWithEmailAndPassword(auth, "karavanoranje@gmail.com", "123456")
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       });
// }
// const signinUser = () => {
//     signInWithEmailAndPassword(auth, "karavanoranje@gmail.com", "123456")
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//         console.log(user)
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });
// }
const redirectGoogle = () => {
    signInWithRedirect(auth, provider)
}
const redirectResults = () => {
    getRedirectResult(auth)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result!);
        const token = credential!.accessToken;
        
        // The signed-in user info.
        const user = result!.user;
        console.log(user)
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email; ///////////////commented error
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}
const signOutFunction = () => {
    signOut(auth).then(() =>{
      // Sign-out successful.
      console.log("logout succesfull")
    }).catch((error) => {
        // An error happened.
    })
}

// const addFire = async () => {
//     try {
//         const docRef = await addDoc(collection(db, "users"), {
//           id: 2,
//           name: "Bob van Test",
//           colour: "Grey",
//           firebaseId: 2
//         });
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
// }

// const updateFire = async () => {
//     try {
//         const updateDocRef = doc(db, "users", "N5DfOsjcHpLMrGJyZVUz");
//         const docRef = await updateDoc(updateDocRef, {
//           colour: "Black"
//         });
//         console.log("Update called: ");
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
// }

const getDataFromLoggedInUser = async (): Promise<User> => {
    var user: User = {id:"",name:"",colour:"",firebaseId:""}
    try{
        const q = query(collection(db, "users"), where("id", "==", auth.currentUser!.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            user = {
                id: doc.data().id,
                name: doc.data().name,
                colour: doc.data().colour,
                firebaseId: doc.id
            }
        });
        console.log(user)
    } catch(e){
        console.error("Error getting document: ", e)
    }
    return user
}




const UserScreen = () => {
    // const { data: user, isLoading } = useFetchUser();
    const[user, setUser] = useState<User>()
    const { data: cars } = useFetchCars();
    var reservations: Reservation[];

    function getReservationsFromUser(user: User): Reservation[]{
        cars?.forEach(car => {
            var addreservations = car.reservations.filter(x => x.user.id == user.id)
            reservations.concat(addreservations)
        });
        console.log(reservations);
        return reservations
    }
    
    async function getUser(){
        auth.currentUser ? setUser(await getDataFromLoggedInUser()) : console.log("Not logged in")
    }

    useEffect(() => {
        redirectResults()
        console.log("Logged in user:")
        console.log(auth.currentUser)
        if(!user){
            getUser()
        }
    }, [user]);//user keeps looping

    return (
        <div className="main-container">
            <div className="user-containers">
                {user ? (
                    <>
                   
                        <UserPageHeader name={user.name} colour={user.colour} />
                        <UserStatsCard driven={100} paid={210} />
                        {/* <CalendarCard reservations={getReservationsFromUser(user)}/> */}
                    </>
                ) : (
                    <>
                        <UserPageHeader name="-" colour="white" />
                        <UserStatsCard driven={0} paid={0} />
                    </>
                )}
                {/* <CarPageHeader name={"COOPER SE"} type={CarTypeEnum.minicooperside} colour={"Orange"} tripStatus={false}></CarPageHeader> */}
                {/* <CarStatsCard range={car.maxRange} volume={car.tank} odometer={car.odometer} consumption={"1 L:" + Math.round((car.maxRange/car.tank)).toString() + " km"}></CarStatsCard>
                <AverageUseStatsCard car={car}></AverageUseStatsCard> */}
                {/* <OdometerOverlay car={car} /> */}

                {/* <Button onClick={() => addFire()}>Add</Button>
                <Button onClick={() => updateFire()}>Update</Button> */}
                {/* <Button onClick={() => createUser()}>Create User</Button>
                <Button onClick={() => signinUser()}>Sign in User</Button> */}
                <Button onClick={() => redirectGoogle()}>Google redirect</Button>
                <Button onClick={() => signOutFunction()}>Sign out</Button>
            </div>
        </div>
    );
};

export default UserScreen;
