//Используя метод aggregate(), вывести все транзакции по убыванию размера
db.txs.aggregate([
    {$sort: {balance:-1}
    }
])