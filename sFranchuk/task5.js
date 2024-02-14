db.txs.aggregate([
    {$count: 'total_count'}
])