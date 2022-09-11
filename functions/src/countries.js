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

  export async function createCountries(req, res) {
    const newCountry = req.body;
    if (!newCountry) {
      res
        .status(400)
        .send({ success: false, message: "This is an invalid request" });
      return;
    }
    const db = dbConnect();
    await db
      .collection("countries")
      .add(newCountry)
      .catch((err) => res.status(500).send(err));
    res.status(201);
    getCountries(req, res);
  }