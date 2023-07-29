    import { NextApiRequest, NextApiResponse } from "next";
    import Database from "../../../database/db.js";
    const allAvos = async (req = NextApiRequest, res = NextApiResponse) =>{
        const db = new Database();

        const id = req.query.id; 

        const entry = await db.getById(id);
        
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json")    
        res.end(JSON.stringify({data: entry}));

        
    } 

    export default allAvos;