import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Context } from "./context/context";
import { Navbar } from "./components/navbar/navbar";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";
const App = () => {
	return (
		<BrowserRouter>
			<Context>
				<Route exact path={"/"} component={Navbar} />
				<Route path={"/home"} component={Navbar} />
				<Route path={"/shop"} component={Navbar} />
				<Route path={"/about"} component={Navbar} />
				<Route path={"/students"} component={Navbar} />
				<Switch>
					<Route exact path={"/"}>
						<Redirect to={"/home"}></Redirect>
					</Route>
					<Route path={"/home"} component={Home} />

					<Route path={"/shop"}>
						<Shop></Shop>
					</Route>
					<Route path={"/about"}>
						<h1>About Page</h1>
					</Route>
					<Route path={"/students"}></Route>
					<Route path={"*"}>
						<h1>Not Found</h1>
					</Route>
				</Switch>
			</Context>
		</BrowserRouter>
	);
};

export default App;
