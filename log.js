// send to server
export const log = (s, o) => {
	fetch("./?log=" + s + (o ? "_" + o : "") + "_" + Math.random()); // JSON.stringify(o).replace(/ /g, ""));
};
