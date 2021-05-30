import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  if(req.method === 'POST'){
    const name = req.query.name;
    const email = req.query.email;
    const age = req.query.age;
    const info = req.query.info;

    if(name && email && info){
      await db.collection("komjaunatne").insertOne({
        name: name,
        email: email,
        age: age,
        info: info
      });
      res.status(200);
    }


  } else 
  if (req.method === "GET"){
    const kom = await db
    .collection("komjaunatne")
    .find({})
    .limit(3)
    .toArray();

  res.json(kom);
  }
};