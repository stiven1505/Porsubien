// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dbConnect } from "../../utils/mongoose";
import Ejemplo from "../../models/Ejemplo";
dbConnect();


export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const ejemplos = await Ejemplo.find({});
        return res.status(200).json(ejemplos);
      } catch (error) {
        //Colocar condicionales if para saber de donde viene el error.
        res.status(500).json({ error: error.message });
      }

    case "POST":
      try {
        const newEjemplo = new Ejemplo(body);
        const savedEjemplo = await newEjemplo.save();
        return res.status(201).json(savedEjemplo);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    default:
      return res.status(405).json({ msg: "Method not allowed" });
  }
}
