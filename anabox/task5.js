db.txs.aggregate([
{$count: 'all_transactions'}
])