// import type { RequestHandler } from './$types';
import { invalid, redirect, json } from '@sveltejs/kit';
import type { Actions } from './$types';
import { goto } from '$app/navigation';

interface postInterface {
	request: Request;
	locals: any;
}

export const actions: Actions = {
	default: async (event) => {
		const { request, locals }: any = event;
		console.log('EVENT', event);
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		try {
			const { token, user } = await locals.pocketbase.users.authViaEmail(email, password);
			console.log('TOKEN', token);
			console.log('USER', user);
			const body = {
				token,
				user
			};

			// return new Response(JSON.stringify(body), {
			//   headers: { 'Content-Type': 'application/json' }
			// })
		} catch (error: any) {
			if (error.status === 400) {
				return invalid(400, { email, incorrect: true });
			}
			console.log('ERROR', error);

			return new Response('Unknown error');
		}

		throw redirect(302, '/');
		//console.log('response to login request', response)
	}
};

export const load = ({ locals }: any) => {
	if (locals.user) {
		return {
			user: locals.user
		};
	}

	return {
		user: undefined
	};
};

// export const POST: RequestHandler = async ({ request, locals }: postInterface) => {
//   const { email, password } = await request.json();

//   try {
//     const { token, user } =  await locals.pocketbase.users.authViaEmail(email, password)
//     const body = {
//       token,
//       user
//     }
//     return new Response(JSON.stringify(body), {
//       headers: { 'Content-Type': 'application/json' }
//     })
//   } catch (error: any) {
//     if (error.status === 400) {
//       return new Response("invalid credentials")
//     }
//     console.log("ERROR", error)
//     console.log(error.type)
//     return new Response("Unknown error")
//   }

//   //console.log('response to login request', response)

// }
