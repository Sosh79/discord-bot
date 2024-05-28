const GamesWords = require('../schemas/GamesCollection') //GamesWords Collection.
const User = require('../schemas/UserCollection') //Users Collection.

// --------------------------------- Insert All Data --------------------------------------------
//---------- USERS INSERT --------------

const insertDocUser = async (message, wordsToAudit) => {
    try {

        const existingUser = await User.findOne({ discordId: message.author.id });

        if (existingUser) {
            console.log('User already exists in the database');
            return;
        }
        const newUser = new User({
            username: message.author.username,
            discordId: message.author.id,
            avatar: message.author.avatarURL(),
            games: []
        });
        console.log('User saved successfully');
        await newUser.save();
    } catch (err) {
        console.error('Error saving user:', err);
    }
};


// ---------------- GamesName INSERT ----------------
const insertDocWord = async (GameName) => {
    try {
        const name = GameName;
        let word = await GamesWords.findOne({ name: name });
        if (!word) {
            word = new GamesWords({
                name: GameName,
                count: " ",
                Positive: " ",
                Negative: " ",
            });
        }
        await word.save();
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    insertDocUser: insertDocUser,
    insertDocWord: insertDocWord

}