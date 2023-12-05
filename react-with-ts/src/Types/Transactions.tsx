import transactions from './transactionList.json'

const aTransaction = transactions.transactionList.map(item=>{
    console.log(item.accountCombinedKey)
})

export default function Transaction(){
    // return {aTransaction}
}