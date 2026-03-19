class StorageService {
    // Manage Users
    static addUser(user) {
        const users = this.getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    static getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }

    static getUser(id) {
        const users = this.getUsers();
        return users.find(user => user.id === id);
    }

    // Manage Transactions
    static addTransaction(transaction) {
        const transactions = this.getTransactions();
        transactions.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    static getTransactions() {
        return JSON.parse(localStorage.getItem('transactions')) || [];
    }

    static getTransaction(id) {
        const transactions = this.getTransactions();
        return transactions.find(transaction => transaction.id === id);
    }

    // Authentication
    static authenticate(username, password) {
        const users = this.getUsers();
        return users.some(user => user.username === username && user.password === password);
    }
}

export default StorageService;