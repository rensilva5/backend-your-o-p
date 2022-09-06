import dbConnect from "./dbConnect.js";

export async function getCountries(req, res) {
    const db = dbConnect();
    const collection = await db
      .collection("countries")
      .get()
      .catch((err) => res.stutus(500).send(err));
    const countries = collection.docs.map((doc) => {
      let country = doc.data();
      country.id = doc.id;
      return country;
    });
    res.send(countries);
  }