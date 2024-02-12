// task one
db.txs.aggregate([
    { $sort: { amount: -1 } }
])