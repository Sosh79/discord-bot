import { Admin, Games, User, Words, Server } from "./models";
import { dbConnect } from "./dbConnect";

export const fetchAdmins = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
    try {
        await dbConnect()
        const count = await Admin.find({ username: { $regex: regex } }).count();
        const admins = await Admin.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { admins, count };
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch admin");
    }
}
export const fetchGames = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
    try {
        await dbConnect()
        const count = await Games.find({ name: { $regex: regex } }).count();
        const games = await Games.find({ name: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { games, count }
    } catch (error) {
        console.log(error);
    } throw new Error("Failed to fetch Game")
}
export const fetchGamesRate = async (nr) => {
    try {
        await dbConnect()
        let rate = await Games.find().sort({ count: -1 });
        const rateGames = [];
        rateGames.push(rate[nr.nr - 1]);
        return rateGames
    } catch (error) {
        console.log(error);
    } throw new Error("Failed to fetch rateGames")
}
export const fetchUser = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
    try {
        await dbConnect()
        const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { users, count }
    } catch (error) {
        console.log(error);
    } throw new Error("Failed to fetch User")
}

export const fetchWord = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
    try {
        await dbConnect()
        const count = await Words.find({ name: { $regex: regex } }).count();
        const words = await Words.find({ name: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { words, count };
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Word");
    }
}
export const fetchServer = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
    try {
        await dbConnect()
        const count = await Server.find({ name: { $regex: regex } }).count();
        const servers = await Server.find({ name: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { servers, count };
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Server");
    }
}
