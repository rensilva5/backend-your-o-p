import dbConnect from "./dbConnect.js";

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
  if (!newDestination || !newDestination.Destination) {
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
  getDestinations(req, res);
}

export function updateDestination(req, res) {
  const DestinationUpdate = req.body;
  const { DestinationId } = req.params;
  res.status(202).send("Destination updated");
}

export function deleteDestination(req, res) {
  const { DestinationId } = req.params;
  res.status(203).send("Destination Deleted");
}
