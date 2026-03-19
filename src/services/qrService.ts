import QRCode from 'qrcode';

class QRService {
    static async generateQR(text) {
        try {
            const qrCode = await QRCode.toDataURL(text);
            return qrCode;
        } catch (err) {
            throw new Error('Failed to generate QR code: ' + err.message);
        }
    }

    static async parseQR(qrCodeDataUrl) {
        try {
            // Assume the qrCodeDataUrl is a base64 encoded image string
            const response = await QRCode.fromDataURL(qrCodeDataUrl);
            return response; // This will depend on the parsing library utilized
        } catch (err) {
            throw new Error('Failed to parse QR code: ' + err.message);
        }
    }
}

export default QRService;