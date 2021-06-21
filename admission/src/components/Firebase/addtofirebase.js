import firebase from "../Firebase/firebase";
import database from "firebase/database";
export function adduserdata(object){
    var reference = firebase.database().ref('/department/Computer/students').update(object);
    return reference;
}
