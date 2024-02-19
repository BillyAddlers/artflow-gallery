import express, { Request, Response, NextFunction } from 'express';
import { Router } from 'express';
import { Model } from "./model";

const router: Router = express.Router();
const database = new Model("artlist.db")

/* GET quotes listing. */
router.get('/users/:userid', function(req: Request, res: Response, next: NextFunction) {
    try {
        let userId = req.params.userid
        let data = database.getDataFromID(userId)
        res.json(data);
    } catch(err) {
        // @ts-ignore
        console.error(`Error`, err.message);
        next(err);
    }
});

export default router;