const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    await saveOrphanage(db, {
        lat: "-22.5916361",
        lng: "-47.5018483",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "1199990000",
        images: [
            "https://images.unsplash.com/photo-1599988288485-534984f5cd21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1591593443255-db4646e739b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas",
        opening_on_weekends: "1"
    })
        
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

   // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})