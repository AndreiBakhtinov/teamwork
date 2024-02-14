db.txs.aggregate([
    {
        $group: {
            _id: null,
            totalTransactions: { $sum: 1 }
        }
    }
])