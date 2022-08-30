import { initializeApp, cert, getApps } from "firebase-admin/app"
import { getFirestore } from 'firebase-admin/firestore'
import { credential } from '../credentials.js'

export default function dbConnect() {

    if (!getApps().length) {
        initializeApp({
            credential: cert(credentials)
        })
    }
    return getFirestore
}

