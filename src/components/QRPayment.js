import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useQRCode } from 'react-qrcode-hook';

const QRPayment = () => {
    const [paymentData, setPaymentData] = useState('');
    const [scannedData, setScannedData] = useState('');
    const { generateQRCode } = useQRCode();

    const handleGenerateQRCode = () => {
        if (paymentData) {
            generateQRCode(paymentData);
        }
    };

    const handleScanQRCode = (data) => {
        setScannedData(data);
    };

    return (
        <div>
            <h2>QR Payment</h2>
            <input
                type="text"
                value={paymentData}
                onChange={(e) => setPaymentData(e.target.value)}
                placeholder="Enter Payment Data"
            />
            <button onClick={handleGenerateQRCode}>Generate QR Code</button>
            {paymentData && <QRCode value={paymentData} />}
            <h3>Scanned Data: {scannedData}</h3>
            {/* Add scanning functionality here later */}
        </div>
    );
};

export default QRPayment;