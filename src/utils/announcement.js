import message from "../utils/generateMessage"

function validateAnnouncement({ announcer, content, date, courseName }){
    if (!announcer || !content || !date || !courseName) {
        return message.generatMessage(400, "Invalid announcement data")
    }
}
export default validateAnnouncement;