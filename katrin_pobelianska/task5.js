db.txs.aggregate([
    {
        $group: {
            _id: null,
            total_txs: { $sum: 1 }
        }
    }
])