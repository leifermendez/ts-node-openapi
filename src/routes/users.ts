import express, { Request, Response } from "express";
import { UserType } from "../types/user.type";

const router = express.Router();


router.get("/users", (req: Request, res: Response) => {
  const data: UserType[] = [
    {
      name: "Leifer",
      avatar: "http://",
    },
    {
      name: "Leifer",
      avatar: "http://",
    },
  ];

  res.send({ data });
});

/**
 * Post track
 * @openapi
 * /users:
 *    post:
 *      tags:
 *        - users
 *      summary: "Listar usuario"
 *      description: Este endpoint es para listar los usuario totales 
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/user"
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *       - ffofofof: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});
export default router;
