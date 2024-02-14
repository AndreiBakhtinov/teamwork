// old school
db.txs.aggregate([
    {
        $group: {
            _id: null,
            total_txs: { $sum: 1 }
        }
    }
])

// the shortest code
db.txs.aggregate([
    { $count: 'total_txs' }
])

// modern decision
db.txs.aggregate([
    {
        $group: {
            _id: null,
            'total_txs': { $count: {} }
        }
    }
])