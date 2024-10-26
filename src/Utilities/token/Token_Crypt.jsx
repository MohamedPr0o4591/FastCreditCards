import CryptoJS from "crypto-js";

export function encryptToken(token) {
  return CryptoJS.AES.encrypt(
    token,
    import.meta.env.VITE_APP_SECRET_KEY
  ).toString();
}

export function decryptToken(encryptedToken) {
  const bytes = CryptoJS.AES.decrypt(
    encryptedToken,
    import.meta.env.VITE_APP_SECRET_KEY
  );

  return bytes.toString(CryptoJS.enc.Utf8);
}
