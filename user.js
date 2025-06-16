const fs = require('fs');
const {promisify} = require('util');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question = promisify(rl.question).bind(rl);
const {
    insercat,
    updatecat,
    deletecat,
    listallcats
} = require('./index');

async function asksql() {
    try{
        const choice = await question(
            'Choose the changes you wanna commit:\n' +
            '[1] List all the cats\n' +
            '[2] Add a cat\n' +
            '[3] Update a cat\n' +
            '[4] Delete a cat\n' +
            '[5] Exit\n' +
            'Enter your choice: '
            );
        switch(choice){
            case '1':
                listallcats();
                break;
            case '2':{
                const catName = await question('Enter the cat name: ');
                await insercat(catName);
                break;
            }
            case '3':{
                const catName = await question('Enter the new cat name: ');
                const id = await question('Enter the ID of the cat: ');
                await updateCat(catName, parseInt(id));
                break;
            }
            case '4': {
                const id = await question('Enter the ID of the cat to delete: ');
                await deleteCat(parseInt(id));
                break;
            }
            case '5':
                console.log('goodbye user');
                rl.close();
                break;
            default:
                console.log('make sure to neter a valid change');
                break;
        }
        rl.close;
        asksql();
    }catch(err){
        console.log('Error: ', err);
        throw err;
    }
}
asksql();