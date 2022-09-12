import { response } from "express";
import dbConnect from "./dbConnect.js";

export function getDestinationById(req, res) {
  const { destinationId } = req.params
  if (!destinationId) {
  res.status(400).send("Invalid request")
  return
  }
const db = dbConnect()
db.collection("destinations")
  .doc(destinationId)
  .get()
  .then(doc => {
    let destination = doc.data()
    destination.Id = doc.id
    res.send(destination)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

export async function getDestinations(req, res) {
  const db = dbConnect();
  const collection = await db
    .collection("destinations")
    .get()
    .catch((err) => res.stutus(500).send(err));
  const destinations = collection.docs.map((doc) => {
    let destination = doc.data();
    destination.id = doc.id;
    return destination;
  });
  res.send(destinations);
}

export async function createDestination(req, res) {
  const newDestination = req.body;
  if (!newDestination) {
    res
      .status(400)
      .send({ success: false, message: "This is an invalid request" });
    return;
  }
  const db = dbConnect();
  await db
    .collection("destinations")
    .add(newDestination)
    .catch((err) => res.status(500).send(err));
  res.status(201);
  getDestinations(req, res);  // It gives the collection updated back after we create a new destination
}

export async function updateDestination(req, res) {
  if (!req.params || !req.params.destinationId || !req.body) {
    res.status(404).send({ success: false, message: "This is an invalid request" });
    return
  }
  const newReview = req.body;
  const { destinationId } = req.params
  console.log(destinationId)
  const db = dbConnect()
  await db
  .collection("destinations")
  .doc(destinationId).update({reviews: newReview})
  .then(() => {
    res.send("destination updated")
  })
  .catch((err) => res.status(500).send(err));
  // res.status(202).send("Destination updated");
}

export function deleteDestination(req, res) {
  const { destinationId } = req.params;
  res.status(203).send("Destination Deleted");
}
