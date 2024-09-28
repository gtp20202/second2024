import axios from "axios"
import CryptoJS from 'crypto-js';

export const getDataApi = (data) => {
    axios.post( `${process.env.REACT_APP_API_LINK}/api/resgister`, data)
    .then((res) => {
        return res.status;
    })
    .catch((err) => {
        return err;
    })
}

export const saveSection = (data, nameSection) => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), 'aBdGrf1524').toString();
    localStorage.setItem(nameSection, encryptedData);
};

export const getSections = (nameSection) => {
    const encryptedData = localStorage.getItem(nameSection);

    try {

      const bytes = CryptoJS.AES.decrypt(encryptedData, 'aBdGrf1524');
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;

    } catch (error) {

      console.error("Failed to decrypt sections", error);
      return [];

    }
};

export const removeSection = (nameSection) => {
    localStorage.removeItem(nameSection)
};
