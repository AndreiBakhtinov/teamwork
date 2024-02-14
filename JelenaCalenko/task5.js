db.txs.aggregate([
    {
        $group: {
            _id: null,
            totalCount: { $sum: 1 }
        }
    }
])