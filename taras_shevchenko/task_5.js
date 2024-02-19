//Используя метод aggregate(), вывести общее ко-во транзакций
db.txs.aggregate([
    {$group: {_id: null, total_txs: {$sum: 1}}},
    {$project:{_id:0}}
])