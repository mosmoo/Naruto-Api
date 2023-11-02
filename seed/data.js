const insertData = async ()=> {
    
    //reset database
    await db.dropDatabase()

    //Insert Data
    await Character.create(characters)

    console.log(chalk.magenta('New Akatsuki member added!'))

    //Close DB Connection
    await db.close();
}
insertData()