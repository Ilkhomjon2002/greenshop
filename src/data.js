import img1 from "./assets/image 1.png";
import img2 from "./assets/image 2.png";
import img4 from "./assets/image 7.png";
import img5 from "./assets/image 8.png";
import img6 from "./assets/image 9.png";
import img7 from "./assets/image 10.png";
export const data = [
	{
		id: 1,
		name: "Barberton Daisy",
		price: 119,
		src: img1,
		sale: 0,
		new: false,
		type: "House Plants",
	},
	{
		id: 2,
		name: "Angel Wing",
		price: 169,
		src: img2,
		sale: 10,
		new: false,
		type: "House Plants",
	},
	{
		id: 3,
		name: "African Violet",
		price: 199,
		src: img7,
		sale: 13,
		new: true,
		type: "House Plants",
	},
	{
		id: 4,
		name: "PotterViolet",
		price: 230,
		src: img4,
		sale: 10,
		new: true,
		type: "Potter Plants",
	},
	{
		id: 5,
		name: "African Violet",
		price: 199,
		src: img5,
		sale: 13,
		new: true,
		type: "House Plants",
	},
	{
		id: 6,
		name: "Blushing Bromeliad",
		price: 139,
		src: img5,
		sale: 0,
		new: true,
		type: "House Plants",
	},
	{
		id: 7,
		name: "Aluminium Plant",
		price: 179,
		src: img6,
		sale: 0,
		new: false,
		type: "House Plants",
	},
];

export const content = [
	{
		name: "House Plants",
		quantity: data.filter((val) => val.type === "House Plants").length,
	},
	{
		name: "Potter Plants",
		quantity: data.filter((val) => val.type === "Potter Plants").length,
	},
	{
		name: "Seeds",
		quantity: data.filter((val) => val.type === "Seeds").length,
	},
	{
		name: "Big Plants",
		quantity: data.filter((val) => val.type === "Big Plants").length,
	},
	{
		name: "Small Plants",
		quantity: data.filter((val) => val.type === "Small Plants").length,
	},
	{
		name: "Gardening",
		quantity: data.filter((val) => val.type === "Gardening").length,
	},
];
