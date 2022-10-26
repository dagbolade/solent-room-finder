import {NextApiResponse} from "next";
import dbConnect from "../../../../lib/dbConnect";
import Room from "../../../../models/Room";
import {lotsOfRooms} from "../../../mocks/data";

// setiing up an api call
export default async function handler(_, res: NextApiResponse) {
  // check if there are existing rooms
  try {
    await dbConnect();
    const rooms = await Room.find({}).count();

    if (rooms) {
      await Room.deleteMany({});
    }

    const results = await Room.insertMany(lotsOfRooms);
    res.status(201).json({success: true, result: results});
  } catch (e) {
    res.status(400).json({success: false, error: e});
  }
}
