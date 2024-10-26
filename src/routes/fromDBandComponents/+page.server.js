import sql from '$lib/server/database';

export async function load() {
    const rows = await sql`
    SELECT
        containerNumber,
        nameOfShip,
        containerSize,
        datecontainerShipped
    FROM
        containers`;

    console.log('Fetched rows:', rows);

    return { containers: rows };
}

