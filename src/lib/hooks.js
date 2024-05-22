import { connectToDB } from '$lib/db';

// @ts-ignore
export async function handle({ event, resolve }) {
	const dbConn = await connectToDB();
	event.locals.dbConn = dbConn;
	const response = await resolve(event);
	dbConn.release();
	return response;
}