// TypeScript types for the Yape clone application

export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Transaction {
    id: string;
    userId: string;
    amount: number;
    timestamp: Date;
    status: 'completed' | 'pending' | 'failed';
}

export interface QRPayment {
    id: string;
    transactionId: string;
    qrCode: string;
    createdAt: Date;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}
