import * as enmap from "enmap"
import { Model } from "../src/model";

const data = new Model("foobar.db")
console.log(data.generateUID())

