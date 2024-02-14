db.txs.aggregate([
    {$group: {_id: null,
            count: {$count: {}}}},

])