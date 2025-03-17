/*
IMPORTANT!
avoid setting states directly as array:
	export let usersState = $state([]) ☠️
*/
export let usersState = $state({
	users: [],
})