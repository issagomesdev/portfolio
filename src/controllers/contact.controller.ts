import { sendContact } from "../services/contact.service"

export const receiveData = async (data: any) => {
    try {
        const response = await sendContact(data);
        return response;
    } catch (error) {
        throw error; 
    }
}
