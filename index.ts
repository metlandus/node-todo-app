import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

const rl = readline.createInterface({ input, output });

type Actions = "add" | "delete" | "update" | "list" | "close";

let todoList: String[] = [];

async function main() {
	console.log("Welcome to the to-do list.");
	while (true) {
		const action = (
			await rl.question(
				"What would you like to do? (Hint: add/delete/update/list/close) "
			)
		)
			.toLowerCase()
			.trim();

		if (action === "close") {
			console.log("Closing to-do list...");
			rl.close();
			break;
		} else if (action === "add") {
			const item = await rl.question(
				"What would you like to add to your to-do list? "
			);
			if (item === "cancel") {
				console.log("Operation is cancelled");
				rl.pause();
			} else {
				addItem(item);
			}
		} else if (action === "delete") {
			const item = await rl.question(
				"What would you like to delete from your to-do list? "
			);
			if (item === "cancel") {
				console.log("Operation is cancelled");
				rl.pause();
			} else {
				deleteItem(item);
			}
		} else if (action === "list") {
			list();
		} else if (action === "update") {
			const item = await rl.question(
				"Which item would you like to update? "
			);
			if (item === "cancel") {
				console.log("Operation is cancelled");
				rl.pause();
			} else {
				await updateItem(item);
			}
		}
	}
}

function addItem(item: String): void {
	todoList.push(item);
	console.log(item, "added to your to-do list");
}

function deleteItem(item: String): void {
	const itemNo = todoList.indexOf(item);
	if (itemNo !== -1) {
		todoList.splice(itemNo, 1);
		console.log(item, "deleted from your to-do list");
	} else {
		console.log(item, "not found in your to-do list");
	}
}

function list(): void {
	if (todoList.length === 0) {
		console.log("Looks like your to-do list is empty.");
	} else {
		console.log("Your to-do list:");
		todoList.forEach((item, index) => {
			console.log(`${index + 1}. ${item}`);
		});
	}
}

async function updateItem(item: String): Promise<void> {
	if (todoList.includes(item)) {
		const newItem = await rl.question(
			`What do you want to update ${item} to? `
		);
		const itemNo = todoList.indexOf(item);
		todoList.splice(itemNo, 1, newItem);
		console.log(`${item} is updated as ${newItem}`);
		return;
	} else {
		console.log(`${item} is not in your to-do list`);
	}
}

function cancelOperation() {
	console.log("Operation Cancelled.");
}

main();
